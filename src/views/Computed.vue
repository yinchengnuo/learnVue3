<template>
  <h2>{{ useComputed }}</h2>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const useRef = ref(0)

    setInterval(() => {
      useRef.value++
      // const str = '不过有轮子，为什么不用呢？ fuse.js，可以轻松实现前端模糊查询。'
    }, 333)

    const useComputed = computed(() => `当前 ref 为 ${useRef.value}`)
    return {
      useComputed,
      list: [
        { msg: 'vue3.x 废除了过滤器 fliter。这意味着你只能使用计算属性来完成数据处理' }
      ]
    }
  }
}
</script>
