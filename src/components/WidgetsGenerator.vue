<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col
        class="col"
        v-for="item in widgets"
        :key="item.order"
        :cols="12"
        :lg="item.position"
        :xs="item.position"
        :order="item.order"
      >
        <v-card height="fit-content" class="card">
          <Widget
            class="widget"
            :item="item"
            :increasePriorityIndex="increasePriorityIndex"
            :priorityIndex="priorityIndex"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Widget from "@/components/Widget.vue";

export default {
  name: "WidgetsGenerator",
  components: {
    Widget
  },
  methods: {
    increasePriorityIndex: function() {
      this.priorityIndex++;
    }
  },
  data: () => ({
    priorityIndex: 0
  }),
  computed: {
    widgets() {
      return this.$store.state.widgets.widgets;
    }
  },
  mounted() {
    this.$store.dispatch("getWidgets");
    setTimeout(() => {
      this.increasePriorityIndex();
    }, 500);
  },
  updated() {}
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.widget {
  text-align: center;
}
.col {
  justify-content: center;
}
.card {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
