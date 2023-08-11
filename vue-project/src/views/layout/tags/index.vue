<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ item.title }}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <icon-close />
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <a-dropdown @select="handleSelect" trigger="hover">
        <a-button>标签选项<icon-down /></a-button>
        <template #content>
          <a-doption value="other">关闭其他</a-doption>
          <a-doption value="all">关闭所有</a-doption>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
// import bus from "@/components/bus/eventBus";
import { IconDown, IconClose } from "@arco-design/web-vue/es/icon";
export default {
  data() {
    return {
      tagsList: [],
    };
  },
  components: {
    IconDown,
    IconClose,
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    },
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    },
  },
  created() {
    this.setTags(this.$route);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },

    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some((item) => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name,
        });
      }
      // bus.$emit("setkeepAliveList", this.tagsList); //设置动态缓存路由
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path); //删除路由为当前活跃路由
      } else {
        this.$router.push("/");
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push("/");
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter((item) => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    handleSelect(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    },
  },
};
</script>

<style scoped lang="scss">
.tags-wrap {
  background: yellow;
}
.tags {
  background: #fff;
  box-shadow: 0 0.2rem 0.3rem #ddd;
  display: flex;
  align-items: center;
  ul {
    flex: 1;
    padding-left: 0.3rem;
    display: flex;

    .tags-li {
      margin-left: 0.2rem;
      border-radius: 0.1rem;
      font-size: 0.4rem;
      overflow: hidden;
      cursor: pointer;

      border: 0.03rem solid #e9eaec;
      background: #fff;
      padding: 0.1rem 0.2rem 0.1rem 0.3rem;
      vertical-align: middle;
      color: #666;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;

      .tags-li-title {
        float: left;
        max-width: 2.7rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 0.2rem;
        color: #666;
      }
      &:not(.active):hover {
        background: #f8f8f8;
      }
      &.active {
        color: #fff;
        border: 0.03rem solid #409eff;
        background-color: #409eff;
        .tags-li-title {
          color: #fff;
        }
      }
    }
  }

  .tags-close-box {
    display: inherit;
    padding: 0.15rem 0.3rem;
    :deep(.arco-btn) {
      font-size: 0.47rem;
      height: 1rem;
      padding: 0 0.4rem;
    }
    .a-dropdown {
      display: inherit;
      .a-button {
        padding: 0.1rem 0.2rem;
      }
    }
  }
}
</style>
