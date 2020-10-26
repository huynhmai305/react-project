import firebase from "firebase";
import { CATEGORY_COLLECTION_KEY } from "./key";
import { isEmpty } from "lodash";

export const getCategories = async () => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const docs: any = await db.collection(CATEGORY_COLLECTION_KEY).get();
  const result = [];
  if (!docs && isEmpty(docs.docs)) return [];
  for (const doc of docs.docs) {
    result.push(doc.data());
  }
  return result;
};

export const addCategory = async (category) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const lastId: any = await getCategories();
  const id = `cate_${lastId.length++}`;
  return await db
    .collection(CATEGORY_COLLECTION_KEY)
    .doc(id)
    .set({
      ...category,
      id: id,
      createdAt: new Date(),
      updateAt: new Date(),
    });
};

export const updateCategory = async (category) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  return await db
    .collection(CATEGORY_COLLECTION_KEY)
    .doc(category.id)
    .set({
      ...category,
      updateAt: new Date(),
    });
};

export const deletedCategory = async (categoryId) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  return await db.collection(CATEGORY_COLLECTION_KEY).doc(categoryId).delete();
};