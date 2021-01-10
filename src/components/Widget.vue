<template>
  <div class="container">
    <h3 v-if="item.title">{{ item.title }}</h3>
    <apexchart
      v-if="
        chartOptions &&
          priorityIndex >= item.priority &&
          chartTypes.includes(item.type)
      "
      width="100%"
      :type="item.type"
      :options="chartOptions"
      :series="series"
      class="chart"
    >
    </apexchart>
    <v-data-table
      v-if="priorityIndex >= item.priority && item.type === 'table'"
      :headers="item.data.headers"
      :items="item.data.desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-card-title v-if="priorityIndex >= item.priority && item.type === 'card'">
      {{ item.data.name }}: {{ item.data.value }}
    </v-card-title>

    <div v-if="priorityIndex < item.priority">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chartOptions: null,
      series: [],
      chartTypes: ["pie", "bar", "area", "donut"]
    };
  },
  name: "ChartLoader",
  props: ["item", "increasePriorityIndex", "priorityIndex"],
  mounted() {
    if (this.item.type === "pie" || this.item.type === "donut") {
      this.chartOptions = {
        labels: this.item.data.labels
      };
      this.series = this.item.data.series;
    } else {
      this.chartOptions = {
        colors: this.item.colors,

        xaxis: {
          categories: this.item.data.labels
        }
      };
      this.series = [{ data: this.item.data.series }];
    }
  },
  updated() {
    if (this.priorityIndex === this.item.priority) {
      setTimeout(() => {
        this.increasePriorityIndex();
      }, 500);
    }
  }
};
</script>

<style scoped>
/* div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  align-content: center;
  width: 80%;
} */
</style>
;
