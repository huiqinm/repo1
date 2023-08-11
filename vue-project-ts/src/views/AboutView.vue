<script setup lang="ts">
// 类"实现"接口

interface PersonInterface {
  name: string;
  say(): void;
}
// 只要实现的某一个接口, 那么就必须实现接口中所有的属性和方法
class Person implements PersonInterface {
  name: string = "lnj";
  say(): void {
    console.log(`我的名字叫:${this.name}`);
  }
}
let p = new Person();
p.say();
//////////////////
function onClick(val: any = "mmm") {
  alert(val);
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="onClick('abc')">click me</el-button>
  </div>
</template>

<style scoped lang="scss">
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;

  h1 {
    color: pink;
  }
}
</style>
