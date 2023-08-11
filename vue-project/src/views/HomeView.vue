<script setup>
import TheWelcome from "../components/home/TheWelcome.vue";
import { ref, toRaw, onMounted, onActivated, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/stores";
// import {debounce} from "@/utils/tool-utils";
import DiffMatchPatch from "diff-match-patch";

const userInfoStore = useUserInfoStore();
let { userInfo } = storeToRefs(userInfoStore);

let search = ref("mmm");

onMounted(() => {
  toMatch(list);
  getInitial("你好澳门");
});

onActivated(() => {});

function onClick() {
  let obj = userInfo.value;
  obj.name = "大华";
  obj.age += 1;
  userInfoStore.setUserInfo(obj);
  search.value += "k";
}

function onSearchChange() {
  console.log("search.value==========", search.value);
  getInitial(search.value);
}
function onInput() {
  debounce(onSearchChange);
}
//防抖
let timer = null;
function debounce(fn) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    fn();
  }, 500);
}

const list = reactive([
  {
    originalAddress:
      "广东省佛山市顺德区乐从镇兴乐社区建设路A89号荣生大厦一楼185号铺之二（住所申报）",
    matchAddress:
      "广东省佛山市顺德区乐从镇兴乐社区建设路A89号荣生大厦一楼185号铺之二",
    MatchRatio: "",
  },
  {
    originalAddress:
      "广东省佛山市顺德区乐从镇水藤新旧路口三区1号B座三楼（住所申报）",
    matchAddress: "广东省佛山市顺德区乐从镇水藤新旧路口三区1号欧德利商场前七仓",
    MatchRatio: "",
  },
  {
    originalAddress: "广东省佛山市顺德区乐从镇跃进路新苑商场12号（住所申报）",
    matchAddress: "广东省佛山市顺德区乐从镇乐从社区跃进路12号新世纪商铺",
    MatchRatio: "",
  },
  {
    originalAddress:
      "广东省佛山市顺德区乐从镇乐从居委会跃进路7号宏基楼首层夹层之2号（住所申报）",
    matchAddress:
      "广东省佛山市顺德区乐从镇乐从居委会跃进路7号宏基楼首层夹层之2号",
    MatchRatio: "",
  },
  {
    originalAddress:
      "广东省佛山市顺德区乐从镇平步工业区北五路四号之6（住所申报）",
    matchAddress: "广东省佛山市顺德区乐从镇平步社区工业区北五路4号",
    MatchRatio: "",
  },
  {
    originalAddress: "广东省佛山市顺德区乐从镇良教南便街五巷13号（住所申报）",
    matchAddress: "广东省佛山市顺德区乐从镇良教村南便街五巷13号",
    MatchRatio: "",
  },
]);

function toMatch(dataArr) {
  dataArr.forEach((item) => {
    let { originalAddress, matchAddress } = item;
    const dmp = new DiffMatchPatch();
    const diff = dmp.diff_main(originalAddress, matchAddress);
    // console.log("diff=======", diff);
    let originalStr = "";
    let matchStr = "";

    diff.forEach((item) => {
      // -1：原始地址
      if (item[0] === -1) {
        originalStr += `<span style = 'background:#f6c5c5'>${item[1]}</span>`;
      }

      // 1：匹配地址
      else if (item[0] === 1) {
        matchStr += `<span style = 'background:#b5ecb5'>${item[1]}</span>`;
      } else {
        //1：共有
        originalStr += `<span>${item[1]}</span>`;
        matchStr += `<span>${item[1]}</span>`;
      }
    });
    item.originalAddress = originalStr;
    item.matchAddress = matchStr;
  });
}

import { pinyin } from "pinyin-pro";
function getInitial(str) {
  let initialStr = "";
  let initialArr = pinyin(str, {
    pattern: "first",
    toneType: "none",
    type: "array",
  });
  initialArr.forEach((item) => {
    initialStr += item.toUpperCase();
  });
  console.log("首字母大写字符串============", initialStr);
}
</script>

<template>
  <div>
    <div class="match">
      <table border="1" style="width: 60%; font-size: 16px">
        <tr>
          <th style="width: 45%">原始地址</th>
          <th style="width: 45%">匹配地址</th>
          <th>匹配率</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td v-html="item.originalAddress"></td>
          <td v-html="item.matchAddress"></td>
          <td>x</td>
        </tr>
      </table>
    </div>
    <div>
      {{ userInfo }}
      <a-button @click="onClick">click</a-button>
      <a-input v-model="search" @input="onInput"></a-input>
    </div>
    <TheWelcome />
  </div>
</template>
