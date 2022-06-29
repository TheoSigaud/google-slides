import { getUser, getAuthState } from "../firebase/firebase";

export default function ({ store, redirect }) {
  // If the user is not authenticated
  let isUserLogged = getUser();

  getAuthState((user) => {
    isUserLogged = user;

    console.log(isUserLogged)
    if (!isUserLogged) {
      return redirect('/')
    }
  });
}