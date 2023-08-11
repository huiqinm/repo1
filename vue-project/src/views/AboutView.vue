<script setup>
import {
  ref,
  toRaw,
  onMounted,
  onActivated,
  reactive,
  computed,
  watch,
  onUpdated,
  readonly,
} from "vue";
import { $ref } from "vue/macros";
import AboutChild from "../components/about/AboutChild.vue";
import { provide } from "vue";
import { test1 } from "@/api/https-api";

import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/stores";

const userInfoStore = useUserInfoStore();
let { userInfo } = storeToRefs(userInfoStore);

watch(userInfoStore, (newQuestion, oldQuestion) => {
  let { userInfo } = newQuestion;
  console.log("userInfoNew======", userInfo);
});

defineOptions({
  name: "about",
});

// 依赖
provide(/* 注入名 */ "message", /* 值 */ "hello!");
const location = ref("North Pole");
function updateLocation(val) {
  location.value = location.value += val;
}
provide("location", {
  location,
  updateLocation,
});

const state = reactive({ count: 5 });
const num = ref(0);
let num2 = $ref(0);
const object = { foo: ref(1) };
const book = ref("Vue 3 Guide");
const books = reactive([ref("Vue 3 Guide"), "mm"]);
const isActive = $ref(true);

const myObject = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});

const map = reactive(
  new Map([
    ["count", ref(0)],
    ["mm", "mhq"],
  ])
);

const obj = {
  foo: ref(1),
  bar: ref(2),
};

function onClick() {
  location.value = "parentvalue";
  // updateLocation(1);
  // state.count++;
  // let { count } = state;
  // count++;
  // num.value++;
  // num2++;
}

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length;
});

const name = ref("Vue.js");
const mmm = ref("about-child");

const message = $ref("");

function greet(event) {
  question = {};
  searchText.value += "*";
}

let question = reactive({ aa: 1, bb: 2, cc: reactive({ mm: 1 }) });
const answer = ref("Questions usually contain a question mark. ;-)");

const searchText = ref("mmm");

watch(
  () => question.cc,
  (newQuestion, oldQuestion) => {
    // 仅当 state.someObject 被替换时触发
    console.log("question22======", newQuestion);
  }
);

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  console.log("question======", question);
  console.log("newQuestion======", newQuestion);
});
const myinput = ref(null);
const postFontSize = ref(1);

function onEnlargeText(val) {
  console.log("onEnlargeText======", val);
  postFontSize.value += val;
}

onMounted(() => {
  // myinput.value.focus();
  // map.set("age", 20);
});
onActivated(() => {
  // console.log('about222')
  funTest();
});
onUpdated(() => {});
function funTest() {
  test1()
    .then((res) => {})
    .catch((err) => {
      console.warn(`test1:${err}`);
    });
}
</script>

<template>
  <div class="about">
    <div>
      <div>{{ userInfo }}</div>
      <h1 :class="{ active: 'isActive' }">This is an about page</h1>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <about-child
          v-model="searchText"
          title="我是标题"
          @enlarge-text="onEnlargeText"
        >
          <template #s1><div class="slot1">slot1</div></template>
          <template #s2="s2Props">
            <div class="slot2">
              {{ s2Props }}
              <p>slot2slot2slot2slot2</p>
            </div>
          </template>
        </about-child>
      </div>
      <a>{{ searchText }}</a>
      <div :class="['aa', 'bb']">
        <div>state.count:{{ state.count }}</div>
        <div>num:{{ num + 10 }}</div>
        <div>num2:{{ num2 }}</div>
        <div>obj.foo:{{ obj.foo }}</div>
        <div>object.foo:{{ object.foo.value + 100 }}</div>
        <div>
          <button @click="onClick()">click me</button>
        </div>
        <div>
          <p>Has published books:{{ publishedBooksMessage }}</p>
        </div>
        <ul>
          <li v-for="(value, key) in myObject" :key="value">
            {{ key }}: {{ value }}
          </li>
        </ul>
        <!-- `greet` 是上面定义过的方法名 -->
        <button @click="greet">Greet</button>
        <p>Message is: {{ message }}</p>
        <input ref="myinput1" v-model="message" placeholder="edit me" />
        <div>
          <p>
            Ask a yes/no question:
            <input ref="myinput" v-model="question.aa" />
          </p>
          <p>{{ answer }}</p>
          <p>question:{{ question.aa }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
  }
}
</style>
