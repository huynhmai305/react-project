import * as firebase from "firebase";
import {
  CART_LIST_DOC_KEY,
  MY_APP_COLLECTION_KEY,
  SHOPPING_CART_COLLECTION_KEY,
} from "./key";
import { CartList } from "../models/cartModel";

export const setShoppingCart = async (cart: CartList) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const uid = currentUser.uid.toString();
  return db
    .collection(MY_APP_COLLECTION_KEY)
    .doc(uid)
    .collection(SHOPPING_CART_COLLECTION_KEY)
    .doc(CART_LIST_DOC_KEY)
    .set(cart);
};

export const getShoppingCart = async () => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const uid = currentUser.uid.toString();
  const docs: any = await db
    .collection(MY_APP_COLLECTION_KEY)
    .doc(uid)
    .collection(SHOPPING_CART_COLLECTION_KEY)
    .doc(CART_LIST_DOC_KEY)
    .get();
  if (docs.exists) return docs.data();
};
