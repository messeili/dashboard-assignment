<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        src="https://ssl.gstatic.com/images/branding/product/1x/admin_512dp.png"
        transition="scale-transition"
        width="50"
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
