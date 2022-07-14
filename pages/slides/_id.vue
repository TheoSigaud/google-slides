<template>
  <div>
    <div class="px-5 pt-5">
      <b-row>
        <b-col col sm="2">
          <b-nav vertical>
            <div v-for="slide in slides" :key="slide.key">
              <b-card>
                <b-card-text>
                  Slide
                </b-card-text>
              </b-card>
            </div>
          </b-nav>
        </b-col>

        <b-col col sm="10">
          <div class="">
            <CkEditor/>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script src="./editor.js"></script>
