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
          src="./assets/logo-round.png"
          transition="scale-transition"
          :width="imageWidth"
          >
      </div>
    </v-app-bar>

    <v-content>
      <!-- <v-snackbar
        v-model="snackWithButtons"
        :timeout="timeout"
        bottom
        left
        class="snack"
      >
        {{ snackWithBtnText }}
        <v-spacer />
        <v-btn
          dark
          text
          color="info"
          @click.native="refreshApp"
        >
          {{ snackBtnText }}
        </v-btn>
        <v-btn
          icon
          @click="snackWithButtons = false"
        >
          <v-icon>fa-window-close</v-icon>
        </v-btn>
      </v-snackbar> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { computeBannerImageSize } from '@/util/compute-image-size'

export default {
  name: 'App',

  data () {
    return {
      refreshing: false,
      registration: {},
      snackBtnText: '',
      snackWithBtnText: '',
      snackWithButtons: true,
      timeout: 60
    }
  },

  created () {
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    )

    navigator.serviceWorker.addEventListener(
      'controllerchange', () => {
        if (this.refreshing) return
        this.refreshing = true
        window.location.reload()
      }
    )
  },

  methods: {
    showRefreshUI (e) {
      this.registration = e.detail
      this.snackBtnText = 'Refresh'
      this.snackWithBtnText = 'New version available; please refresh.'
      this.snackWithButtons = true
    },

    refreshApp () {
      this.snackWithButtons = false

      if (!this.registration || !this.registration.waiting) { }

      this.registration.waiting.postMessage('skipWaiting')
    }
  },

  computed: {
    imageWidth () {
      return computeBannerImageSize(this.$vuetify.breakpoint.name)
    }
  }
}
</script>

<style>
.snack >>> .v-snack__content {
  padding-right: 16px;
}
</style>
