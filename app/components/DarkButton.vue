<script setup lang="ts">
import { ref } from "vue";
import { Sunny, Moon } from '@element-plus/icons-vue'

const color = useColorMode();
const isSunny = ref(true);

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleColor() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
<!--  <el-switch @change="toggleColor">-->
  <el-switch
      v-model="isSunny"
      :active-action-icon="Sunny"
      :inactive-action-icon="Moon"
      @change="toggleColor"
  >
  </el-switch>
</template>

<style scoped>

</style>