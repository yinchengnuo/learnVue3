<template>
  <h2>useComputed1：{{ useComputed1 }}</h2>
  <h2>useComputed2：{{ useComputed2 }}</h2>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const useRef1 = ref(0)
    const useRef2 = ref(0)

    const useComputed1 = computed(() => `当前 ref 为 ${useRef1.value}`)
    console.log(useComputed1)
    const useComputed2 = computed({
      get: () => `当前 ref 为 ${useRef2.value}`,
      set: value => {
        useRef2.value = value
      }
    })

    setInterval(() => {
      useRef1.value++
      useComputed2.value = Math.floor(Math.random() * 10)
    }, 333)

    return {
      useComputed1,
      useComputed2,
      list: [
        { msg: 'vue3.x 废除了过滤器 fliter。这意味着你只能使用计算属性来完成数据处理' },
        { msg: 'vue3.0 使用 computed 声明一个计算属性，返回值类似 ref，也是只能操作返回值的 value 属性' },
        { msg: 'computed 接受一个参数，当参数为函数时候，函数的返回值即为该计算属性 value 的值' },
        { msg: 'computed 也可以接受一个对象，用法参考 vue3.x' },
        { msg: 'computed 对象的 value 默认情况下为 readonly，只有在 computed 参数为对象且 set 属性存在时 computed 的 value 属性才可以赋值' }
      ]
    }
  }
}
</script>
