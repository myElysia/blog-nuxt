<template>
  <div>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer>
        <AppFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>