<template>
  <div>
    <div class="chart-wrapper">
      <apexchart width="800" type="pie" :options="options3" :series="series2">
      </apexchart>
    </div>
    <div class="chart-wrapper">
      <apexchart width="800" type="bar" :options="options" :series="series">
      </apexchart>
    </div>
    <hr />
    <div class="chart-wrapper">
      <apexchart width="800" type="area" :options="options" :series="series">
      </apexchart>
    </div>
    <hr />
    <div class="chart-wrapper">
      <apexchart width="800" type="bar" :options="options2" :series="series">
      </apexchart>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    options: {
      title: {
        text: "Chart",
        align: "center",
        style: {
          fontSize: "30px"
        }
      },
      chart: {
        id: "vuechart-example"
      },
      colors: ["#2E93fA"],

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    },
    options2: {
      title: {
        text: "Chart",
        align: "center",
        style: {
          fontSize: "30px"
        }
      },
      chart: {
        id: "vuechart-example"
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    },
    options3: {
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
        }
      }
    },
    series: [
      {
        data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
      }
    ],
    series2: [44, 55, 13, 43, 22]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
