import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: { name: "小明", age: 18 },
    };
  },
  // getters: {},
  actions: {
    setUserInfo(obj) {
      this.userInfo = obj;
    },
  },
});

export const useNavListStore = defineStore("navList", {
  state: () => {
    return {
      navList: [],
    };
  },
  actions: {
    setNavList(obj) {
      this.navList = obj;
    },
  },
});
