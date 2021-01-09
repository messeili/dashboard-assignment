<template>
  <div class="container">
    <h1>{{ item.type }} - {{ lazyLoadedIndex }}</h1>
    <apexchart
      v-if="chartOptions && !isLoading && lazyLoadedIndex >= item.priority"
      width="100%"
      :type="item.type"
      :options="chartOptions"
      :series="series"
      class="chart"
    >
    </apexchart>
    <div v-if="isLoading">
      loading...
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return { chartOptions: null, isLoading: false, series: [] };
  },
  // chartOptions: null,
  name: "ChartLoader",
  props: ["item", "increaseLazy", "shouldLoad", "lazyLoadedIndex"],
  computed: {
    posts() {
      let y = this.$store.state.posts;
      return y.charts;
    }
  },
  mounted() {
    if (this.item.type === "pie") {
      this.chartOptions = {
        labels: this.item.data.labels
      };
      this.series = this.item.data.series;
    } else {
      this.chartOptions = {
        title: {
          text: "Chart",
          align: "center",
          style: {
            fontSize: "30px"
          }
        },
        colors: ["#2E93fA"],

        xaxis: {
          categories: this.item.data.labels
        }
      };
      this.series = [{ data: this.item.data.series }];
    }
  }
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  align-content: center;
  width: 80%;
}
</style>
;
