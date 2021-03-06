<template>
  <h3>type：{{ type }}</h3>
  <h3>count：{{ count }}</h3>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'

export default {
  setup () {
    const type = ref(0)
    const count = ref(0)

    const getData = time => new Promise(resolve => {
      return setTimeout(() => {
        resolve(time)
      }, time)
    }) // 模拟数据请求

    watchEffect(async onInvalidate => {
      console.log('type.value', type.value)
      onInvalidate(async () => { // onInvalidate 应先于 watchEffect 逻辑执行
        console.log('onInvalidate 先于响应数据变动执行', type.value)
        count.value = await getData(1000)
      })
      // console.log(type.value, 'watch changed type')
      // console.log(count.value, 'watch changed count')
      // console.log(type.value, 'watch changed type')
      // console.log(count.value, 'count.value')
      count.value = await getData(3000) // 初始化是获取数据，预计 3s 后获取到数据
      count.value = await getData(6000) // 初始化是获取数据，预计 6s 后获取到数据
    })

    setTimeout(() => { // 1s 后切换
      type.value = 1
      console.log('1s后数据变动')
    }, 1000)

    // setTimeout(() => {
    //   type.value = 123
    //   console.log('changed type')
    // }, 3000)

    // setTimeout(() => {
    //   count.value = 3000
    //   console.log('changed count')
    // }, 6000)

    // setInterval(() => {
    //   count.value++
    // }, 2333)

    watch(count, (n, o, onInvalidate) => {
      onInvalidate(() => {
        console.log('watch 函数监听到 count 的 onInvalidate')
      })
      console.log(n, o, 'watch 函数监听到 count')
    })

    watch([type, count], ([typeN, typeO], [countN, countO], onInvalidate) => {
      console.log(typeN, typeO, 'watch 函数监听到 type (多个同时监听)')
      console.log(countN, countO, 'watch 函数监听到 count (多个同时监听)')
      onInvalidate(() => {
        console.log('watch 函数监听到 onInvalidate (多个同时监听)')
      })
    })

    return {
      type,
      count,
      list: [
        { msg: 'vue3.x 引入了 watchEffect 用于在 setup 中响应式数据发生变动时运行 watchEffect回调，并在更改依赖项时重新运行它，watchEffect 的第一个参数就是 watchEffect回调' },
        { msg: '和 beforeUpdate/updated 在 vue2.x 的表现不同，watchEffect 可以在 setup 内任意响应式数据发生变动时执行回调，并且在 setup 初始化时就会执行一次' },
        { msg: 'watchEffect 只能检测到 watchEffect回调 函数体内（不含 onInvalidate）中依赖的响应式数据变动' },
        { msg: '和 vue2.x 的 $watch 方法类似，执行 watchEffect 返回的方法可以取消 watchEffect 效果' },
        { msg: 'watchEffect 在组件取消挂载的时候会自动取消' },
        { msg: 'watchEffect 提供了 onInvalidate 作为 watchEffect回调 的参数，onInvalidate 默认会在 watchEffect回调 第二次执行前执行' },
        { msg: 'watchEffect 第二个参数作为配置项用于配置 watchEffect 行为或钩子' },
        { msg: 'watchEffect 配置型中的 flush 参数用户设置 onInvalidate 的执行时机' },
        { msg: 'watchEffect 配置型中的 onTrack 和 onTrigger 钩子，仅在开发时生效，仅用于调试' },
        { msg: 'vue3.x 中的 watch 函数与 vue2.x 使用类似，vue3.x 的 watch 函数可以实现对一次 watch 多个响应式数据（具体使用见文档）' },
        { msg: 'watch 函数的 onInvalidate 位于 watch 回调的最后一个参数，特征和使用类似 watchEffect' }
      ]
    }
  },
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  mounted () {
    setTimeout(() => {
      this.a = 666
      this.b = 123
    }, 1234)
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  }
}
</script>
