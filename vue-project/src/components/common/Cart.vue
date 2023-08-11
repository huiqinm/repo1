<template>
  <div class="cart-content">
    <div class="left-modu">
      <div>
        <img :src="iconImg" />
        <span>
          <span class="count">{{ itemCount }}</span>
          项产品
        </span>
        <div class="explain">已添加到购物车</div>
      </div>
    </div>
    <div class="right-modu">
      <div>
        <img :src="btnImg" />
        <div>共享申请</div>
      </div>
    </div>
  </div>
</template>
<script>
import iconImg from "@/assets/images/shopping_cart.png";
import btnImg from "@/assets/images/shopping_cart_checkout.png";
export default {
  data() {
    return {
      iconImg: iconImg,
      btnImg: btnImg,
      itemCount: 3,
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.cart-content {
  height: 100%;
  display: flex;
  color: #8c96af;
  font-size: 16px;
  > div {
    height: 100%;
  }
  .left-modu {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 0.8rem;

    img {
      width: 0.67rem;
      height: 0.67rem;
    }

    .count {
      font-size: 0.8rem;
      color: #2280ff;
      padding: 0 0.1rem 0 0.5rem;
    }

    .explain {
      padding: 0.3rem 0 0 1.3rem;
    }
  }
  .right-modu {
    background: #2280ff;
    color: #fff;
    width: 3.47rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      text-align: center;

      img {
        width: 0.69rem;
        height: 0.67rem;
        margin-bottom: 0.33rem;
      }
    }
  }
}
</style>
