<template>
  <v-app
    style="
    background: #D1DAE2;"
  >
    <Header />
    <v-main>
      <WidgetsGenerator />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import WidgetsGenerator from "./components/WidgetsGenerator";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    WidgetsGenerator,
    Footer,
    Header
  },

  data: () => ({
    //
  })
};
</script>
