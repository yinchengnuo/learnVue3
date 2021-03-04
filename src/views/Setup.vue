<template>
  <div class="setup">
    <HelloWorld msg="setup 基本使用" :useRef="useRef" @event="console.log">
      <div>solt</div>
    </HelloWorld>
    <ol>
      <li v-for="item in list" :key="item.id">
        <h3>{{ item.msg }}</h3>
      </li>
    </ol>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: { HelloWorld },
  setup () {
    console.log(this, 'this')
    console.log('setup')
    const useRef = ref(0)
    const useReactive = reactive({
      a: 1,
      b: 2
    })
    console.log(useRef, 'useRef')
    console.log(useRef.value, 'useRef.value') // 只有 ref 有 value 属性
    console.log(useReactive, 'useReactive')
    console.log(useReactive.value, 'useReactive.value')
    onMounted(function () {
      console.log(this)
    })
    return {
      useRef,
      useReactive,
      list: [
        { id: 0, msg: 'setup 执行在 beforeCreate 和 created 之前' },
        { id: 1, msg: 'setup 中 this 为 undefined' },
        { id: 2, msg: 'setup 接受 props（响应对象） 和 context（普通对象） 作为参数。' },
        { id: 3, msg: '获取响应对象（props）的值使用解构赋值时应使用 toRefs API' },
        { id: 4, msg: 'context 中的 attrs 和 solt 对象保存了父组件状态' },
        { id: 5, msg: 'setup 返回的对象的属性可以用于组件的其他部分用 this 获取或用于模板渲染' }
      ]
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
    this.timer = setInterval(() => {
      this.useRef++
    }, 1000)
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>
