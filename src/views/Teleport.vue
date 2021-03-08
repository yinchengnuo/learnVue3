<template>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
</template>

<script>

export default {
  setup () {
    return {
      list: [
        { msg: 'https://v3.cn.vuejs.org/guide/teleport.html' }
      ]
    }
  },
  mounted () {

  }
}
</script>
