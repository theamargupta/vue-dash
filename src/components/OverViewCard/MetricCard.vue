<template>
  <div class="metric-card">
    <div class="metric-info">
      <div class="metric-title">{{ title }}</div>
      <div class="metric-value">{{ value }}</div>
      <div class="metric-subtitle">17% Since Last Week</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricCard",
  props: {
    title: String,
    value: String,
  },
};
</script>

<style scoped>
.metric-card {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  /* margin: 0 10px; */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
.metric-card:hover {
  transform: translateY(-5px);
}
.metric-icon {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.metric-icon img {
  width: 100%;
  height: auto;
}
.metric-info {
  flex-grow: 1;
}
.metric-title {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 25px;
}
.metric-value {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}
.metric-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: #736c6c;
  margin-bottom: 15px;
}
</style>
