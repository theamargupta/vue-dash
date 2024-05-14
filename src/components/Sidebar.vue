<template>
  <div class="sidebar">
    <div class="logo">CRM.io</div>
    <ul class="menu">
      <li
        v-for="(item, index) in sideBarData"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="setActive(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { sideBarData } from "@/utils/db";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  setup() {
    const activeIndex = ref(0);

    const setActive = (index) => {
      activeIndex.value = index;
    };

    return {
      sideBarData,
      activeIndex,
      setActive,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 20%;
  background-color: #041837;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f87979;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu li {
  color: #3963ad;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  margin: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.menu li:hover {
  transform: translateY(-5px);
}
.menu .active {
  color: white;
  background: #3963ad;
}

.menu li:hover {
  background-color: #34495e;
}
</style>
