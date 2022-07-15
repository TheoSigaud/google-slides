import { getSlides, writeSlide, removeSlide } from "../../firebase/firebase";
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

export default ({
  layout: 'nav',
  name: "Document",

  data() {
    return {
      slides:[],
      id: this.$route.params.id
    }
  },

  mounted: async function() {
    await this.getDoc();
  },

  methods: {
    async addSlide(){
      await writeSlide(this.id)
    },

    async deleteSlide(key){
      await removeSlide(this.id, key);
      await this.getDoc();
    },

    async getDoc(){
      await getSlides((slides) => {
        this.slides = [...slides];
      }, this.id);
    }
  }
})
