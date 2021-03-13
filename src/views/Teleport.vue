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
        { msg: 'vue3.x 提供了 teleport 来将组件的一部分渲染到组件以外的地方' },
        { msg: 'teleport 以为传送门，功能上和 React 中的 portal 相似' },
        { msg: '使用时将要渲染的组件用 teleport 包裹，teleport 的 to 属性接受一个 css 选择器，表示被包裹的这部分组件要渲染到的父组件' },
        { msg: '无论嵌套关系如何，teleport 中嵌套子组件或则 子组件中嵌套 teleport。props 的传递仍然与组件嵌套关系相关，与 teleport to 指向无关' },
        { msg: '多个 teleport 可以挂载到同一个父元素，按照组件 create 顺序，稍后挂载的被追加在较早挂载的之后' },
        { msg: '详细请看文档：<a href="https://v3.cn.vuejs.org/guide/teleport.html" target="_blank">https://v3.cn.vuejs.org/guide/teleport.html</a>' }
      ]
    }
  }
}
</script>
