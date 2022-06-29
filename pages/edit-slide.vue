<template>
  <div>
    <CkEditor />
  </div>
</template>

<script>
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );

export default {
  name: "edit-slide"
}
</script>

<style scoped>

</style>
