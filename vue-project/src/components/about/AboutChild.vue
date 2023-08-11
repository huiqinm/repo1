<script setup>
import {
  ref,
  toRaw,
  onMounted,
  reactive,
  computed,
  watch,
  onUpdated,
} from "vue";
import { inject } from "vue";

const props = defineProps({
  title: String,
  modelValue: String,
});
const emits = defineEmits(["enlarge-text", "update:modelValue"]);

// 注入
const message = inject("message");
const appprovide = inject("appprovide");
const { location, updateLocation } = inject("location");

const state = reactive({ count: 5 });
const greetingMessage = ref("hello");

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

onMounted(() => {});
onUpdated(() => {});

function onclick() {
  updateLocation("okk");
  // emits("enlarge-text", -0.2);
}
</script>

<template>
  <div class="blog-post" style="background-color: pink">
    <h4>{{ props.title }}* {{ message }}**{{ appprovide }}</h4>
    <button @click="$emit('enlarge-text', 0.5)">Enlarge text</button>
    <button @click="onclick">{{ location }}</button>
    <input v-model="value" />
    <div>
      <slot name="s2" :text="greetingMessage" :count="'slot2'" />
      <slot name="s1">slot1</slot>
    </div>
  </div>
</template>
