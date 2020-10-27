import firebase from "firebase";
import { PRODUCTS_COLLECTION_KEY, PRODUCTS_SHOP_COLLECTION_KEY } from "./key";
import { isEmpty } from "lodash";
import { Product } from "../models/productModel";
import { decreaseTotalProducts, increaseTotalProducts } from "./categories";

export const getListProductsAll = async () => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const docs: any = await db.collection(PRODUCTS_COLLECTION_KEY);
  const result = await docs.get();
  const arr = [];
  if (!result && isEmpty(result.docs)) return [];
  for (const doc of result.docs) {
    const productShop = await getListProductsShop(doc.id);
    arr.push(productShop);
  }
  return arr.flat();
};

export const getListProductsShop = async (shopId: string) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return;

  const docs: any = await db
    .collection(PRODUCTS_COLLECTION_KEY)
    .doc(shopId)
    .collection(PRODUCTS_SHOP_COLLECTION_KEY)
    .get();
  const result = [];
  if (!docs && isEmpty(docs.docs)) return [];
  for (const doc of docs.docs) {
    result.push(doc.data());
  }
  return result;
};

export const addProduct = async (product: Product, shopId: string) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const pId = `p_${new Date().getTime()}`;
  await db
    .collection(PRODUCTS_COLLECTION_KEY)
    .doc(shopId)
    .collection(PRODUCTS_SHOP_COLLECTION_KEY)
    .doc(pId)
    .set({
      ...product,
      id: pId,
      createAt: new Date(),
      updateAt: new Date(),
    });
  if (product.category?.value) {
    await increaseTotalProducts(product.category?.value);
  }
  return pId;
};

export const updateProduct = async (
  product: Product,
  shopId: string,
  productId: string
) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  return await db
    .collection(PRODUCTS_COLLECTION_KEY)
    .doc(shopId)
    .collection(PRODUCTS_SHOP_COLLECTION_KEY)
    .doc(productId)
    .update({
      ...product,
      updateAt: new Date(),
    });
};

export const deletedProduct = async (shopId, productId) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const doc: any = await db
    .collection(PRODUCTS_COLLECTION_KEY)
    .doc(shopId)
    .collection(PRODUCTS_SHOP_COLLECTION_KEY)
    .doc(productId);

  const getProduct = await doc.get();
  const category = getProduct.data().category;
  if (category?.value) {
    await decreaseTotalProducts(category?.value);
  }
  return await doc.delete();
};
