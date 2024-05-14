<template>
  <div class="document-section">
    <div class="document-title">
      <div>Document</div>
      <div>Weekly</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>File</th>
          <th>Category</th>
          <th>Author</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doc, index) in documents" :key="index">
          <td>{{ doc.name }}</td>
          <td>{{ doc.file }}</td>
          <td>{{ doc.category }}</td>
          <td>{{ doc.author }}</td>
          <td>{{ doc.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { documentsData } from '@/utils/db';

export default {
  name: "DocumentTable",
  data() {
    return documentsData;
  }
};
</script>

<style scoped>
.document-section {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out;
}
.document-section:hover {
  transform: translateY(-5px);
}
.document-title {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: 800;
}
table {
  width: 100%;
}
th, td {
  padding: 8px;
  text-align: left;
  font-weight: 800;
}
td {
  font-weight: 600;
  font-size: 14px;
}
</style>
