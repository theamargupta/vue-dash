<template>
  <div class="product-chat">
    <div class="header">Administrator</div>
    <div class="product-wrap">
      <div class="product-wrap-inner">
        <div class="bold">Popular Product</div>
        <div class="flex" v-for="product in products" :key="product">
          <div class="image" />
          <div class="text">{{ product }}</div>
        </div>
      </div>
      <div class="product-wrap-inner">
        <div class="bold">Chat</div>
        <div class="flex" v-for="person in chatPeople" :key="person">
          <div class="image" />
          <div class="text">{{ person }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productData } from "@/utils/db";
export default {
  name: "ProductChat",
  data() {
    return productData;
  },
};
</script>

<style scoped>
.product-chat {
  width: 20%;
  padding: 20px;
  background: #edecec;
}
.product-wrap {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}
.product-wrap:hover {
  transform: translateY(-5px);
}
.product-wrap-inner {
  padding: 20px;
}
.bold {
  font-weight: bold;
  margin-bottom: 10px;
}
.flex {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.text {
  font-size: 14px;
  font-weight: bold;
}
.header {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}
.image {
  width: 30px;
  height: 30px;
  background: black;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
