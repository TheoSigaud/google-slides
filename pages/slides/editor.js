import { getSlides, writeSlide, removeSlide, writeData } from "../../firebase/firebase";
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

export default ({
  layout: 'nav',
  name: "Document",

  data() {
    return {
      debug: false,
      slides:[],
      id: this.$route.params.id,
      dataEditor: '',
      keySlide: '',
      oldData: '',
      indexSlide : 0
    }
  },

  watch: {
    slides(value) {
      if(value[this.indexSlide]){
        this.keySlide = value[this.indexSlide].key;
        this.oldData = value[this.indexSlide].value.data;
      }
    },

    async dataEditor(value) {
      await writeData(this.id, this.keySlide, value);
    }
  },

  mounted: async function() {
    await this.getDoc();
  },

  methods: {
    async addSlide(){
      await writeSlide(this.id)
    },

    async changeSlide(i){
      if (this.debug) console.log("changement de slide " + i)
      this.indexSlide = i;
      await this.getDoc();
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
