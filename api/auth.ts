import firebase from "firebase";
import { MY_APP_COLLECTION_KEY } from "./key";

export const signInWithGoogle = async () => {
  const auth = firebase.auth();
  await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider).catch(() => {
    return null;
  });
  if (auth.currentUser) return await saveProfileUser();
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
) => {
  const auth = firebase.auth();
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    return { error };
  }
};

export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  const auth = firebase.auth();
  await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return { error };
  }
  if (auth.currentUser) return await saveProfileUser();
};

export const signOut = async () => {
  if (firebase.auth().currentUser) {
    await firebase.auth().signOut();
  }
};

export const saveProfileUser = async () => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const uid = currentUser.uid.toString();
  const profile = {
    id: uid,
    email: currentUser.email,
    name: currentUser.displayName,
    photoURL: currentUser.photoURL,
    createAt: new Date(),
    updateAt: new Date(),
  };
  await db.collection(MY_APP_COLLECTION_KEY).doc(uid).set(profile);
  return profile;
};

export const getProfileUser = async () => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};

  const uid = currentUser.uid.toString();
  const result = await db.collection(MY_APP_COLLECTION_KEY).doc(uid).get();
  if (result && result.data()) return result.data();
};

export const updateProfile = async (user: any) => {
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) return {};
  const uid = currentUser.uid.toString();
  await db.collection(MY_APP_COLLECTION_KEY).doc(uid).update({
    name: user?.name,
    phone: user?.phone,
    tax: user?.tax,
    address: user?.address,
    photoURL: user?.avatar,
    updateAt: new Date(),
  });
};
