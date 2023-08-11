<script setup>
import { IconApps, IconList } from "@arco-design/web-vue/es/icon";
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import menuList from "./data.js";

let $router = reactive(useRouter());

function onMenuItemClick(val) {
  val = val === "index" ? "/" : val;
  $router.push(val);
}
</script>

<template>
  <div class="sider-content">
    <div class="menu-wrap">
      <a-menu
        :selected-keys="[$router.currentRoute.name]"
        @menu-item-click="onMenuItemClick"
      >
        <template v-for="(item, index) in menuList" :key="index">
          <template v-if="item.children && item.children.length > 0">
            <a-sub-menu :key="item.key">
              <template #icon>
                <component :is="item.icon || IconApps" />
              </template>
              <template #title>{{ item.name }}</template>
              <a-menu-item v-for="(child, i) in item.children" :key="child.key">
                <template #icon>
                  <component :is="item.icon || IconList"
                /></template>
                {{ child.name }}</a-menu-item
              >
            </a-sub-menu></template
          >
          <template v-else>
            <a-menu-item :key="item.key">
              <template #icon>
                <component :is="item.icon || IconList" />
              </template>
              {{ item.name }}
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>
  </div>
</template>
<style scoped lang="scss">
.sider-content {
  .menu-wrap {
    :deep(.arco-menu) {
      font-size: 0.47rem;

      .arco-menu-inner {
        padding: 0.1rem 0.25rem;
        overflow: hidden;
        .arco-menu-item {
          font-size: 0.47rem;
          line-height: 2.86;
        }
        .arco-menu-icon {
          margin-right: 0.3rem;
        }
        .arco-menu-inline-header {
          line-height: 2.86;
        }
      }
    }
  }
}
</style>
