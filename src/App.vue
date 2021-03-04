<template>
  <div id="nav">
    <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
      <span>{{ route.name }}</span>
      <span v-if="index < routes.length - 1" style="margin: 0 12px">|</span>
    </router-link>
  </div>
  <router-view/>
</template>

<script>
import { routes } from '@/router'
export default {
  setup () {
    return { routes }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ol {
  display: inline-block;
  li {
    text-align: left;
  }
}
</style>
