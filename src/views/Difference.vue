<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script>

export default {
  setup () {
    return {
      list: [
        { msg: '<a href="https://v3.cn.vuejs.org/guide/migration/introduction.html#%E9%9D%9E%E5%85%BC%E5%AE%B9%E7%9A%84%E5%8F%98%E6%9B%B4" target="_blank">https://v3.cn.vuejs.org/guide/migration/introduction.html#非兼容的变更</a>' }
      ]
    }
  }
}
</script>
