<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <img
          alt="AHellwig Logo"
          class="shrink mr-2"
          contain
          src="/img/logo/logo.svg"
          transition="scale-transition"
          :width="imageWidth">
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { computeBannerImageSize } from '@/util/compute-image-size'

export default {
  name: 'App',

  data: () => ({}),

  computed: {
    imageWidth () {
      return computeBannerImageSize(this.$vuetify.breakpoint.name)
    }
  }
}
</script>
