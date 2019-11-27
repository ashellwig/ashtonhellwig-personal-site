<template>
  <v-container>
    <div class="home">
      <v-layout text-center wrap>
        <v-flex xs12>
          <site-logo></site-logo>
        </v-flex>

        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Ashton Hellwig
          </h1>
          <h2>Under contruction, returning soon...</h2>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SiteLogo from '@/components/SiteLogo.vue'

export default {
  name: 'home',
  components: {
    SiteLogo
  }
}
</script>
