<template>
  <h2>{{ useReactive }}</h2>
  <!-- <h2>{{ useReactiveBase }}</h2> -->
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'

export default {
  setup () {
    const useReactive = reactive({ a: 1, b: 2 })
    // let useReactiveBase = reactive(0)
    console.log(useReactive, 'useReactive')
    // console.log(useReactiveBase, 'useReactiveBase')

    const unRefB = toRef(useReactive, 'b')
    const unRefC = toRef(useReactive, 'c')
    console.log(unRefB, 'unRefB')
    console.log(unRefC, 'unRefC')

    const { a, b, d } = toRefs(useReactive)
    console.log(a, 'a')
    console.log(b, 'b')
    console.log(d, 'd')
    setInterval(() => {
      Object.keys(useReactive).forEach(key => {
        a.value = Math.floor(Math.random() * 10)
        b.value = Math.floor(Math.random() * 10)
        // useReactive[key] = Math.floor(Math.random() * 10)
        // unRefB.value = Math.floor(Math.random() * 10)
        unRefC.value = Math.floor(Math.random() * 10)
      })
    //   useReactiveBase = Math.floor(Math.random() * 10)
    }, 333)
    return {
      useReactive,
      //  useReactiveBase,
      list: [
        { msg: '当我们有了一个 reactive 对象（reactive 函数返回的对象、props 等），想要使用此对象里面的某个/些属性作为响应式数据，需要通过 toRef/s 函数' },
        { msg: 'toRef/s 可以用来为源响应式对象上的某个/些属性新创建一个/些 ref。然后这个/些 ref 可以被传递，同时会保持对其源属性的响应式连接' },
        { msg: 'toRef 可以为源响应式对象上某个属性创建一个 ref，即使这个 ref 一开始不存在。ref 创建后，对 ref value 的操作会反作用到原响应式对象上。如果这个属性不存在，vue 会创建它。' },
        { msg: 'roRefs 可以为源响应式对象上某些属性创建与之相对应的 ref，如果某个属性不存在，那么与之对应的 ref 为 undefined。同时操作创建成功的 ref 的 value 也会作用到源响应式对象上' },
        { msg: '更多 ref 相关操作详见文档：https://v3.cn.vuejs.org/api/refs-api.html#ref' }
      ]
    }
  }
}
</script>
