<template>
  <div class="overview-cards">
    <MetricCard
      v-for="(data, index) in cardData"
      :key="index"
      :title="data.title"
      :value="data.value"
    />
  </div>
</template>

<script>
import { cardData } from "@/utils/db";
import MetricCard from "./MetricCard.vue";

export default {
  name: "OverViewCard",
  components: {
    MetricCard,
  },
  data() {
    return { cardData };
  },
};
</script>

<style scoped>
.overview-cards {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  gap: 20px;
}
</style>
