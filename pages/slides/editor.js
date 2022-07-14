import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { getSlides } from "../../firebase/firebase"


Vue.use(CKEditor);

export default ({
  layout: 'nav',
  name: "Document",

  data() {
    return {
      slides:[]
    }
  },

  mounted: async function() {
    const id = this.$route.params.id;

    await getSlides((slides) => {
      this.slides = [...slides];
    }, id);
  },

  methods: {}
})
