<template>
  <div id="app">
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Dashboard,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh; /* Use full height to make sidebar full height */
  width: 100vw; /* Use full height to make sidebar full height */
}
body {
  margin: 0;
  padding: 0;
}
/* If you prefer the entire app to be centered or aligned differently,
you can adjust the CSS here accordingly. */
</style>
