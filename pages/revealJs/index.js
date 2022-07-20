import Vue from 'vue';
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Highlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import { getSlides} from "../../firebase/firebase";

export default {
  name: "Diaporama",
  data() {
    return {
      debug: false,
      slides:[],
      items: [],
      dataEditor: '',
      id: this.$route.params.id,
    }
  },
  mounted: async function() {
    await this.getDoc();
    Reveal.initialize({
      plugins: [Markdown, Highlight],
      markdown: {
        breaks: true,
        gfm: true,
      },
    });
  },
  methods: {
    async getDoc(){
      await getSlides((slides) => {
        this.slides = [...slides];
      }, this.id);
      for(var i = 0; i < this.slides.length; i++){
        var content = this.slides[i].value.data;
        content = "<section>" + content + "</section>";
        this.items.push(content);
      }
      console.log(this.items);
    },
    async returnData(value){
      this.dataEditor = value;
    }
  },
};