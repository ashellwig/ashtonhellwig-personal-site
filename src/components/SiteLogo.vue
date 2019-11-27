<template>
  <div>
    <v-img class="image"
      :height="imageSize"
      :width="imageSize"
      src="/img/logo/logo-square.svg"
      alt="AHellwig Logo" />
      <br>
  </div>
</template>

<script>
import { computeImageSize } from '@/util/compute-image-size'

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

<style lang="scss">
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
