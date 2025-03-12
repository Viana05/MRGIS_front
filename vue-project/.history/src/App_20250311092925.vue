<script>
// 写数据
export default {
  data() {
    return {
      msg: "上海",
    };
  },
};
</script>

<template>
  <!-- html -->
  <!-- <h1>beijing</h1> -->
  <h1>{{msg}}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
