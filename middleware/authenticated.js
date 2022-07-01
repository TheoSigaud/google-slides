import { getUser, getAuthState } from "../firebase/firebase";

export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  let isUserLogged = getUser();

  getAuthState((user) => {
    isUserLogged = user;

    if (route.path !== '/') {
      //we are on a protected route
      if(!isUserLogged) {
        //take them to sign in page
        return redirect('/')
      }
    } else if (route.path === '/') {
      if(!isUserLogged) {
        //leave them on the sign in page
      } else {
        return redirect('/slides')
      }
    }
  });
}
