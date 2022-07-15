import { getSlides, writeSlide, removeSlide, writeData } from "../../firebase/firebase";
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

export default ({
  layout: 'nav',
  name: "Document",

  data() {
    return {
      slides:[],
      id: this.$route.params.id,
      dataEditor: '',
      keySlide: ''
    }
  },

  watch: {
    slides(value) {
      this.keySlide = value[0].key;
    },

    async dataEditor(value) {
      await writeData(this.id, this.keySlide, value);
    }
  },

  mounted: async function() {
    const docs = await this.getDoc();
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
    },

    async returnData(value){
      this.dataEditor = value;
    }
  }
})
