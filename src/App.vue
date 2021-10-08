<template>
  <el-menu
    :router="false"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    
    <el-menu-item index="/" route=""> Home </el-menu-item>
    <el-menu-item index="/travel" route="Travel"> Travel </el-menu-item>
    <el-menu-item index="/about" route="About"> About </el-menu-item>
  </el-menu>
  <router-view/>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from "vue-router";
import { computed } from '@vue/runtime-core';
export default {
  setup() {

    const route = useRoute();
    const router = useRouter();
    
    var activeIndex = "/";

    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
      activeIndex = key;
      router.push(key)
    }
    console.log(activeIndex) 
    return {activeIndex, handleSelect}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
