<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
  <Suspense>
    <template #default>
      <SuspenseChild />
    </template>
    <template #fallback>
      <div>正在拼了命的加载</div>
    </template>
  </Suspense>
</template>

<script>
import SuspenseChild from '@/components/SuspenseChild'
export default {
  components: { SuspenseChild },
  setup () {
    return {
      list: [
        { msg: 'vue3.x 提供了 suspense 内置组件允许在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验' },
        { msg: 'suspense 组件使用时候不区分大小写，但是这仍是一个实验中 API，使用 suspense vue 会在控制台打印 <Suspense> is an experimental feature and its API will likely change.' },
        { msg: 'suspense 一般用于 在页面加载之前显示加载动画、显示占位符内容、处理延迟加载的图像等，而这些在 vue3.x 中只能通过 v-if/show 完成' },
        { msg: 'suspense 使用插槽的方式控制占位组件和内容组件，分别用 #fallback 和 #default 声明，当使用 template 声明时，template 只能包含一个子组件' },
        { msg: '内容组件 #default 生效的前提是内容组件的 setup 必须 return 一个会被 resolve 的 promise' },
        { msg: '因为决定 suspense 状态的异步操作由内容组件 setup 的返回的 promise，因此对这些异步操作中可能出现的错误可以在父组件中使用 onErrorCaptured 监听' }
      ]
    }
  }
}
</script>
