<template>
  <div class="line-chart">
    <Line :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { lineData } from "@/utils/db";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "LineChart",
  components: {
    Line,
  },
  data() {
    return lineData;
  },
};
</script>

<style scoped>
.line-chart:hover {
  transform: translateY(-5px);
}
.line-chart {
  background: #fff;
  height: 250px;
  width: 40%;
  padding: 20px;
  padding-left: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
</style>
