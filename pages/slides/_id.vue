<template>
  <div>
    <div class="px-5 pt-5">
      <b-row>
        <b-col col sm="2">
          <b-nav vertical>
            <div v-for="(slide, index) in slides" :key="slide.key">
              <b-card class="mb-3">
                <svg v-if="index > 0" @click="deleteSlide(slide.key)" style="position:absolute; width: 30px; right: 0; top: 0" onmouseover="this.style.cursor='pointer'" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                <b-card-text>
                  Slide
                </b-card-text>
              </b-card>
            </div>

            <b-button variant="primary" @click="addSlide()">Ajouter</b-button>
          </b-nav>
        </b-col>

        <b-col col sm="10">
          <CkEditor @data="returnData"/>

        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script src="./editor.js"></script>
