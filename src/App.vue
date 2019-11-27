<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <site-logo></site-logo>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SiteLogo from '@/components/SiteLogo'

export default {
  name: 'App',

  components: {
    SiteLogo
  },

  data: () => ({
    //
  })
}
</script>
