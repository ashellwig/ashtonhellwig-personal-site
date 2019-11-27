<template>
  <div class="logo">
    <v-img
      :height="imageSize"
      src="/img/logo/logo-square.svg"
      alt="AHellwig Logo" />
  </div>
</template>

<script>
import computeImageSize from '@/util/compute-image-size'

export default {
  name: 'logo',

  data: () => ({}),

  computed: {
    imageSize () {
      return computeImageSize(this.$vuetify.breakpoint.name)
    }
  }
}
</script>
