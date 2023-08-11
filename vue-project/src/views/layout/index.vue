<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  computed,
  onUnmounted,
  nextTick,
} from "vue";
import Header from "./header/index.vue";
import Footer from "./footer/index.vue";
import Sider from "./sider/index.vue";
import Cart from "@/components/common/Cart.vue";
import { IconLeft, IconRight } from "@arco-design/web-vue/es/icon";
import { useRouter } from "vue-router";
import vTags from "./tags/index.vue";

let $router = reactive(useRouter());

// sider面板展开与收起
const siderCollapse = ref(false);
const siderWidth = ref(9);
function toggleCollapse() {
  siderCollapse.value = !siderCollapse.value;
  siderWidth.value = siderCollapse.value ? 0.5 : 9;
}

// 顶部tags
const hideTags = computed(() => {
  return ["/test"].indexOf($router.currentRoute.name) > -1;
});

// 底部购物车
// const position =
//   $router.currentRoute.name === "index" ? ref("absolute") : ref("fixed");

// function isElVisible() {
//   const elOffsetTop = document.getElementById("footer-box").offsetTop; //元素距离顶部高度(固定值)
//   const elWindowHeight =
//     window.innerHeight -
//     document.getElementById("main").getBoundingClientRect().top;
//   var docScrollTop = document.querySelector(".main-wrap").scrollTop; //dom滚动高度
//   /* 元素在可视化区域内：元素距离顶部高度(elOffsetTop) >= dom滚动高度(docScrollTop)
//     并且元素距离顶部高度(elOffsetTop) < (dom滚动高度 + 视窗高度)*/
//   return (
//     elOffsetTop >= docScrollTop && elOffsetTop < docScrollTop + elWindowHeight
//   );
// }
// async function onScroll() {
//   if (isElVisible()) {
//     position.value = "absolute";
//   } else {
//     position.value = "fixed";
//   }
// }

// 可以直接侦听一个 ref
watch(
  () => $router.currentRoute.name,
  async (newValue, oldValue) => {
    //滚动条复位
    document.querySelector(".main-wrap").scrollTop = 0;
    //购物车
    // if (newValue === "index") {
    //   position.value = "absolute";
    // }
  }
);

onMounted(() => {
  // nextTick(() => {
  //   //购物车
  //   const selectWrap = document.querySelector(".main-wrap");
  //   if (selectWrap) {
  //     selectWrap.addEventListener("scroll", onScroll);
  //   }
  // });
});

onUnmounted(() => {
  // window.removeEventListener("scroll", onScroll, false); //购物车
});
</script>

<template>
  <a-layout class="page-wrap">
    <a-layout-header><Header /></a-layout-header>
    <a-layout class="container-wrap">
      <a-layout-sider :style="{ width: `${siderWidth}rem` }">
        <div class="sider-wrap">
          <Sider />
        </div>
        <a-button class="collapse-btn" shape="circle" @click="toggleCollapse">
          <icon-right v-if="siderCollapse" />
          <icon-left v-else />
        </a-button>
      </a-layout-sider>
      <a-layout>
        <div v-show="!hideTags" class="tags-wrap">
          <v-tags />
        </div>
        <a-layout-content class="main-wrap" id="main">
          <div class="component-wrap">
            <router-view v-slot="{ Component }">
              <Transition name="fade-transform" mode="out-in">
                <keep-alive :exclude="['about1']">
                  <component :is="Component" />
                </keep-alive>
              </Transition>
            </router-view>
          </div>

          <a-layout-footer id="footer-box">
            <Footer />
            <!--  购物车 -->
            <!-- <div
              :class="[
                position === 'fixed' ? 'fixStyle' : 'absStyle',
                'cart-box',
              ]"
            >
              <Cart />
            </div> -->
          </a-layout-footer>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.page-wrap {
  height: 100vh;
  overflow: hidden;
  .arco-layout-header {
    border-bottom: 0.01rem solid var(--color-border);
  }

  .container-wrap {
    overflow: auto;

    :deep(.arco-layout-sider) {
      border-right: 0.01rem solid var(--color-border);
      transition: all 0.5s;
      .arco-layout-sider-children {
        overflow: visible;

        .sider-wrap {
          height: 100%;
          overflow: hidden;
          &:hover {
            overflow: auto;
          }
        }
      }
    }

    .collapse-btn {
      font-size: 0.47rem;
      width: 1.1rem;
      height: 1.1rem;
      position: absolute;
      right: -0.55rem;
      top: 30%;
      z-index: 2;
    }
    .main-wrap {
      overflow: auto;
      display: flex;
      flex-direction: column;

      .component-wrap {
        padding: 1rem;
        flex: 1;
      }
    }
    :deep(.arco-layout-footer) {
      // 购物车
      // .cart-box {
      //   width: 10.6rem;
      //   height: 3.47rem;
      //   background: #fff;
      //   border-radius: 0.53rem;
      //   overflow: hidden;
      //   z-index: 2;

      //   &.fixStyle {
      //     position: fixed;
      //     right: 1.27rem;
      //     bottom: 1rem;
      //   }
      //   &.absStyle {
      //     position: absolute;
      //     top: -4.47rem;
      //     right: 1rem;
      //   }
      // }
    }
  }
}
</style>
