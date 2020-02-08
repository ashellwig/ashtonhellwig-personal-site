<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in"></v-slide-y-transition>
    <v-layout column align-center>
      <v-card>
        <img v-if="experienceDetails.companyLogo"
          style="justify-content: center;"
          :src="experienceDetails.companyLogo"
        >
        <v-card-title primary-title>
          <div class="headline">
            {{ experienceDetails.company }}
          </div>
        </v-card-title>
        <v-card-text>
          <div class="text-xs-center">
            {{ experienceDetails.summary }}
          </div>
        </v-card-text>
      </v-card>
      <div class="text-xs-center">
        <h2>{{ experienceDetails.jobTitle }}</h2>
        <h2>
          {{ experienceDetails.dateStart }}&nbsp;&mdash;&nbsp;
          {{ experienceDetails.dateEnd }}
        </h2>
        <h3>Description</h3>
          <p>
            {{ experienceDetails.longDescription }}
          </p>
      </div>
      <br>
      <div class="text-xs-center" style="justify-content: center;">
        <v-btn color="primary" to="/" icon="fas fa-backward"></v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    experienceDetails: Object
  }
}
</script>
