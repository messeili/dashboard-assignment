<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col
        class="col"
        v-for="item in posts"
        :key="item.order"
        :cols="item.position"
        :lg="item.position / 2"
        :order="item.order"
      >
        <h1>ss{{ item.priority }}-{{ lazyLoadedIndex }}</h1>
        <ChartLoader
          class="widget"
          :item="item"
          v-bind:increaseLazy="increaseLazy"
          :lazyLoadedIndex="lazyLoadedIndex"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChartLoader from "@/components/ChartLoader.vue";

export default {
  name: "HelloWorld",
  components: {
    ChartLoader
  },
  methods: {
    increaseLazy: function() {
      this.lazyLoadedIndex++;
    }
  },
  data: () => ({
    lazyLoadedIndex: 1
  }),
  computed: {
    posts() {
      let y = this.$store.state.posts;
      return y.charts;
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
    setInterval(() => {
      this.isLoading = false;
      this.increaseLazy();
    }, 2000);
  }
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.widget {
  background-color: aliceblue;
  text-align: center;
}
.col {
  justify-content: center;
}
</style>
