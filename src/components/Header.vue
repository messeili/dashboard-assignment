<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <h2>Dashboard</h2>
    </div>

    <v-spacer></v-spacer>
    <h4 class="mr-2">more</h4>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>
