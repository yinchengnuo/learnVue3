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
        { msg: 'vue3.x 提供了组合式的 provide/inject，两者都只能在当前活动实例的 setup 期间调用' },
        { msg: '通过 provide 注入到应用中的值可以在应用中任何地方被 inject 到' },
        { msg: '可以在 provide 值时使用 ref/reactive 来增加 provide 值和 inject 值之间的响应性' },
        { msg: '修改 provide 和 inject 之间的响应值尽量在 provide 所在的 组件中操作，或者将操作 provide 的方法 provide 出去供其他组件 inject' },
        { msg: '可以 provide 一个 reactive 的 reactive 值来防止 provide 值被更改' },
        { msg: 'https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html' }
      ]
    }
  }
}
</script>
