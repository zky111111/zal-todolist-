<template>
  <div class="center-container">
    <el-button type="primary" @click="handleClick">
      <img src="F:/vue-project-zal/下载.png" alt="logo" class="button-icon" />
      Click Me
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello, Element Plus!')


const handleClick = () => {
  alert(message.value)
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.center-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
}

el-button {
  display: flex;
  align-items: center; 
}

.button-icon {
  width: 20px;  
  height: 20px;
  margin-right: 8px;
}
</style>
