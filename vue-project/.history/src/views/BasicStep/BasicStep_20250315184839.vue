<script setup></script>

<template>
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <p v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</p>
  </el-card>
</template>
