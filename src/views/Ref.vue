<template>
  <h2>useRef：{{ useRef }}</h2>
  <h2>useRefArray：{{ useRefArray }}</h2>
  <h2>useRefObject：{{ useRefObject }}</h2>
  <h3>refData：{{ refData }}</h3>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      refData: ref(0)
    }
  },
  setup () {
    const useRef = ref(0)
    const useRefArray = ref([1, 2, 3, 4])
    const useRefObject = ref({ a: 1, b: 2, useRef })
    setInterval(() => {
      useRefArray.value.forEach((val, index) => {
        useRefArray.value[index] = Math.floor(Math.random() * 10)
      })
      Object.keys(useRefObject.value).forEach(key => {
        useRefObject.value[key] = Math.floor(Math.random() * 10)
      })
    }, 333)
    return {
      useRef,
      useRefArray,
      useRefObject,
      list: [
        { msg: 'ref 函数使任何响应式变量（原始值和引用值都可以）在任何地方起作用' },
        { msg: 'ref 返回的是一个包装对象，该对象只有一个属性 value，value 值为 ref 参数' },
        { msg: '在 setup 中操作 ref 返回的响应式变量的值只能通过操作 ref 函数返回的对象的 value 实现' },
        { msg: 'vue 2.x 中所有的响应式变量都是挂在 this 上，vue 对监听 this 即可监听响应式变量变化' },
        { msg: 'vue 3.x 中通过 setup return 出去的响应式变量都是通过变量声明赋值的' },
        { msg: '因此对于原址类型数据，直接通过赋值改变数据值，vue 无法监听其变动，因此使用 ref 包装' },
        { msg: 'vue 通过监听 ref 返回的对象的 value 变动来实现响应式' },
        { msg: '当包装对象被暴露给模版渲染上下文，或是被嵌套在另一个响应式对象中的时候，它会被自动展开 (unwrap) 为内部的值' }
      ]
    }
  },
  mounted () {
    // this.$set(this, 'refCreated', ref('refCreated'))
    // this.refCreated =
    // setInterval(() => {
    //   this.refData = Math.floor(Math.random())
    //   console.log(this.refData)
    // }, 1000)
  }
}
</script>
