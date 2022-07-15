<template>
  <div id="ckeditor-app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'CkEditor',
  props: ['oldData'],

  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        // The configuration of the editor.
      },
      newData: ''
    };
  },

  watch: {
    editorData(value) {
      this.$emit('data', value);
    },

    oldData(value) {
      this.editorData = value;
    }
  }
}
</script>
