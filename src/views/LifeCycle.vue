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
        { msg: 'vue3.x 提供了可以在 setup 中通过在生命周期钩子前面加上 on 来访问组件的生命周期钩子' },
        { msg: '因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。' },
        { msg: 'vue3.x 废除了 2.x options API 生命周期中的 beforeDestroy destroyed 使用 unmounted 替代' }
      ]
    }
  },
  mounted () {

  }
}
</script>
