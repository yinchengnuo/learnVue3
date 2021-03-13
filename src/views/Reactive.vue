<template>
  <h2>{{ useReactive }}</h2>
  <!-- <h2>{{ useReactiveBase }}</h2> -->
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script>
import { reactive, toRef } from 'vue'

export default {
  setup () {
    const useReactive = reactive({ a: 1, b: 2 })
    // let useReactiveBase = reactive(0)
    console.log(useReactive, 'useReactive')
    // console.log(useReactiveBase, 'useReactiveBase')

    const unRefB = toRef(useReactive, 'b')
    const unRefC = toRef(useReactive, 'c')
    setInterval(() => {
      Object.keys(useReactive).forEach(key => {
        // useReactive[key] = Math.floor(Math.random() * 10)
        unRefB.value = Math.floor(Math.random() * 10)
        unRefC.value = Math.floor(Math.random() * 10)
      })
    //   useReactiveBase = Math.floor(Math.random() * 10)
    }, 333)
    return {
      useReactive,
      //  useReactiveBase,
      list: [
        { msg: 'ref 函数返回的是一个包装过的响应式对象, 操作只能通过其 value 属性来实现' },
        { msg: '想要不通过 value 的方式操作对象类型的响应式数据可以通过 reactive 来实现' },
        { msg: 'reactive 接受对象类型的数据，返回一个响应式对象' },
        { msg: '当 reactive 参数为原始类型时，其返回值为参数，且 vue 会抛出一个 warn' },
        { msg: 'reactive 包装对象后通过 setup retuen 出去即可在组件及模板中使用' },
        { msg: 'ref 和 reactive 一个针对原始数据类型，而另一个用于对象，这两个 API 都是为了给普通的数据赋予响应式特性' },
        { msg: '还有部分区别在于每个人代码风格不同，有人喜欢用原始数据类型，把变量单独拎出来写。而有人喜欢用对象，把变量当作对象里的属性，都写在一个对象里头' },
        { msg: '更多 reactive 相关详见文档：<a href="https://v3.cn.vuejs.org/api/basic-reactivity.html" target="_blank">https://v3.cn.vuejs.org/api/basic-reactivity.html</a>' }
      ]
    }
  }
}
</script>
