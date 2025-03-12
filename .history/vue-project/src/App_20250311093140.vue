<!-- 第一种写法 -->
<!-- <script>
// 写数据
export default {
  data() {
    return {
      msg: "上海",
    };
  },
};
</script> -->
<!-- 第二种写法 -->
<script setup>
  import {ref} from 'vue'
  // 调用ref函数，定义响应式数据
  const msg=ref("西安")
</script>

<template>
  <!-- html -->
  <!-- <h1>beijing</h1> -->
  <h1>{{ msg }}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
