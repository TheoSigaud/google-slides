import { registerUser } from "../firebase/firebase";

export default {
  name: 'IndexPage',

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
    }
  },

  methods: {
    async handleRegister(e) {
      console.log('mmmm');
      e.preventDefault();

      const email = e.target.querySelector('input[type="email"]').value;
      const password = e.target.querySelector('input[type="password"]').value;

      const user = await registerUser(email, password);

      this.$router.push("/")
    }
  }
}
