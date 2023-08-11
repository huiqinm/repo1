<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import BaseHeader from "./components/layouts/BaseHeader.vue";
import BaseSide from "./components/layouts/BaseSide.vue";
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
