<script setup>
import TheWelcome from "../components/home/TheWelcome.vue";
import { ref, reactive, toRaw, computed, onMounted, onActivated } from "vue";
import options from "./common/echartConfig/index.js";

const { config } = window;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
let data = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
]);

let loading = ref(false);

// 计算属性 (ref)
const basePieOption = computed(() => {
  return options.pieOption3;
});

onMounted(() => {
  // console.log("basePieOption=========", basePieOption.value);
});

onActivated(() => {});

function onStart() {
  loading.value = true;
  // data = [];
}
function onEnd() {
  loading.value = false;
  console.log("process_env.NODE_ENV======", process.env.NODE_ENV);
  console.log("import_meta_env======", import.meta.env);
  console.log("config======", config.aa.bb);
}
</script>

<template>
  <div class="user">
    <div>
      <a-button @click="onStart" style="margin-right: 15px">start</a-button>
      <a-button @click="onEnd">end *{{ config.app.name }}</a-button>
    </div>
    <a-table :loading="loading" :columns="columns" :data="data" />
  </div>
</template>
<style scoped lang="scss">
.user {
  background: $font-color-active;
}
</style>
