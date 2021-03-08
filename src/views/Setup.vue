<template>
  <div class="setup">
    <button @click="changeReadonly">useReactiveReadonly: {{ useReactiveReadonly }}</button>
    <HelloWorld msg="setup 基本使用" :useRef="useRef" @event="console.log">
      <div>solt</div>
    </HelloWorld>
    <ol>
      <li v-for="item in list" :key="item.msg">
        <h3>{{ item.msg }}</h3>
      </li>
    </ol>
  </div>
</template>

<script>
import { ref, reactive, onMounted, readonly } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
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

    const useReactiveWillReadonly = reactive({ a: 1 })
    const useReactiveReadonly = readonly(useReactiveWillReadonly)
    const changeReadonly = () => {
      useReactiveReadonly.a = 123
    }
    return {
      useRef,
      useReactive,
      changeReadonly,
      useReactiveReadonly,
      list: [
        { msg: 'setup 执行在 beforeCreate 和 created 之前' },
        { msg: 'setup 中 this 为 undefined' },
        { msg: 'setup 接受 props（响应对象） 和 context（普通对象） 作为参数。' },
        { msg: '获取响应对象（props）的值使用解构赋值时应使用 toRefs API' },
        { msg: 'context 中的 attrs 和 solt 对象保存了父组件状态' },
        { msg: 'setup 返回的对象的属性可以用于组件的其他部分用 this 获取或用于模板渲染' },
        { msg: 'setup 也可以直接返回一个 render 函数（return (props, slots, attrs, vnode) => ( ... )）' },
        { msg: 'setup 不可以是一个 async 函数，除非 setup 返回一个会被 resolve 的 promise 对象，用于 异步组件' }
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
