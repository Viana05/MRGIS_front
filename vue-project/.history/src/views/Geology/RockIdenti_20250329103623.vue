<script setup></script>

<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>三大岩经典图集</span>
        </span>
      </template>
      <p>testtest</p>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="地理位置" name="1">
            
          </el-collapse-item>
          <el-collapse-item title="地质地貌" name="2">
            
          </el-collapse-item>
          <el-collapse-item title="水系" name="3">
            
          </el-collapse-item>
          <el-collapse-item title="气象气候" name="4">
            
          </el-collapse-item>
          <el-collapse-item title="人文地理" name="5">
            
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>三大岩识别</span>
        </span>
      </template>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames2" accordion>
          <el-collapse-item title="地理位置" name="6">
            
          </el-collapse-item>
          <el-collapse-item title="地质地貌" name="7">
            
          </el-collapse-item>
          <el-collapse-item title="水系" name="8">
            
          </el-collapse-item>
          <el-collapse-item title="气象气候" name="9">
            
          </el-collapse-item>
          <el-collapse-item title="人文概况" name="10">
            
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
