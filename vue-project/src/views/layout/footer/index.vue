<script setup>
import { IconPlus, IconDelete } from "@arco-design/web-vue/es/icon";
</script>

<template>
  <div class="footer-content">
    <div class="content">footer</div>
  </div>
</template>
<style scoped lang="scss">
.footer-content {
  background: var(--vt-c-divider-light-1);
  display: flex;
  align-items: center;
  // height: 5rem;
  .content {
    font-weight: bold;
  }
}
</style>
