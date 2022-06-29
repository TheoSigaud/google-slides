import { getUser, getAuthState } from "../firebase/firebase";

export default function ({ store, redirect }) {
  let isUserLogged = getUser();

  getAuthState((user) => {
    isUserLogged = user;

    if (isUserLogged && $nuxt.$route.name === 'index') {
      return redirect('/slides')
    }
  });
}
