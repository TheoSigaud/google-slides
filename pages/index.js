import { registerUser, loginUser } from "../firebase/firebase";

export default {
  name: 'IndexPage',
  //middleware: 'checkLogin',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },

      login: {
        email: '',
        password: '',
      },
      success: false,
      error: false,
      checkLogin: true
    }
  },

  methods: {
    async handleRegister() {
      const user = await registerUser(this.form.email, this.form.password);

      if (user === 'auth/email-already-in-use') {
        this.success = false;
        this.error = 'Email already exist';
      }else if (user === 'auth/weak-password') {
        this.success = false;
        this.error = 'weak password';
      }else {
        this.form.email = '';
        this.form.password = '';
        this.error = false;
        this.success = true;
      }
    },

    async handleLogin() {
      const user = await loginUser(this.login.email, this.login.password);

      this.login.email = '';
      this.login.password = '';

      if (user !== false) {
        this.$router.push('/slides')
      } else {
        this.success = false;
        this.error = 'Incorrect identification';
      }
    }
  }
}
