import { initializeApp } from "firebase/app";
import {
  getDatabase,
  set,
  ref,
  push,
  update,
  serverTimestamp,
  onValue,
  onChildAdded,
  onChildRemoved,
} from "firebase/database";
import {
  getAuth,
  signOut,
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

export function logout(){
    signOut(auth);
}


export function registerUser(email, password) {
  return setPersistence(auth, browserLocalPersistence).then(() => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => user
    ).catch(error => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/weak-password':
          return 'auth/weak-password';
        case 'auth/email-already-in-use':
          return 'auth/email-already-in-use';
      }
    })
  });
}

export async function getDocuments(cb = () => {}) {
  onAuthStateChanged(auth, (user) => {
    const documents = [];
    onChildAdded(ref(database, "users/" + user.uid + '/documents'), (snapshot) => {
      documents.push({ value : snapshot.val(), key: snapshot.key });
      cb(documents);
    });

  });
}

export async function getSlides(cb = () => {}, id) {
  onAuthStateChanged(auth, (user) => {
    const slides = [];
    onChildAdded(ref(database, "users/" + user.uid + '/documents/' + id + '/slides'), (snapshot) => {
      slides.push({ value : snapshot.val(), key: snapshot.key });
      cb(slides);
    });

  });
}

export async function writeDocuments({name}){
  const id = push(ref(database, 'users/' + getUser().uid + '/documents'), {
    name
  });
  console.log(id.key);
  push(ref(database, 'users/' + getUser().uid + '/documents/' + id.key + '/slides'), {
    data : ''
  });

}

export async function removeDocument({uid}){
  const updates = {};
  updates['users/' + getUser().uid + '/documents/' + uid] = null;
  return update(ref(database), updates);
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
