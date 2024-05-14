<template>
  <div class="dashboard">
    <div class="header">Overview</div>
    <OverViewCard />
    <div class="charts">
      <LineChart />
      <BarChart />
    </div>
    <DocumentTable />
  </div>
  <ProductChat />
</template>

<script>
import LineChart from "./charts/LineChart.vue";
import BarChart from "./charts/BarChart.vue";
import DocumentTable from "./DocumentTable.vue";
import OverViewCard from "./OverViewCard/OverViewCard.vue";
import ProductChat from "./ProductChat.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    LineChart,
    BarChart,
    OverViewCard,
    DocumentTable,
    ProductChat,
  },
};
</script>

<style scoped>
.dashboard {
  width: 60%;
  padding: 20px;
  overflow-y: auto;
  background: #edecec;
}

.header {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.stat-card {
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.charts {
  display: flex;
  gap: 10px;
  width: 100%;
}
.charts,
.recent-activities {
  margin-bottom: 20px;
}
</style>
./OverViewCard/OverViewCard.vue
