import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  push,
  serverTimestamp,
  onValue,
  onChildAdded,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";

import firebaseConfig from "./firebase.json";

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);

export function getUser() {
  return auth.currentUser;
}

export function getAuthState(cb = () => {}) {
  onAuthStateChanged(auth, (user) => {
    if (user) return cb(user);
    cb(false);
  });
}

export function registerUser(email, password) {
  return setPersistence(auth, browserLocalPersistence).then(() => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => user
    );
  });
}



export async function getDocuments() {
  const documents = [];
  onChildAdded(ref(database, "/documents"), (snapshot) => {
    documents.push({ value : snapshot.val(), key: snapshot.key });

    console.log(documents);
  });

  return documents
}
export function loginUser(email, password) {
  return setPersistence(auth, browserLocalPersistence).then(() => {
    return signInWithEmailAndPassword(auth, email, password).then((user) => user)
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password'){
          return false;
        }
      });
  });
}
