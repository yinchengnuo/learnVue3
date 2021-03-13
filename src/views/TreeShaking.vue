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
        { msg: '<a href="https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html" target="_blank">https://v3.cn.vuejs.org/guide/migration/global-api-treeshaking.html</a>' }
      ]
    }
  }
}
</script>
