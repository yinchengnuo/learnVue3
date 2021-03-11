<template>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
  <EmitsChild @event1="event1" @event2="event2" />
</template>

<script>
import EmitsChild from '@/components/EmitsChild'
export default {
  components: { EmitsChild },
  setup () {
    const event1 = () => {
      console.log('父组件： event1')
    }
    const event2 = (...args) => {
      console.log('父组件：event2', ...args)
    }
    return {
      event1,
      event2,
      list: [
        { msg: 'vue3.x 在组件内提供了 emits 选项用来对监听校验自定义事件进行，类似 props' },
        { msg: '和 prop 一样，事件名提供了自动的大小写转换。如果用驼峰命名的子组件中触发一个事件，你将可以在父组件中添加一个短横线分隔命名的监听器' },
        { msg: '当 emits 不存在时，子组件触发父组件的监听事件通过 context.emit' },
        { msg: '当 emits 存在时，context.emit 须触发定义在 emit 中的事件，否则 vue 会抛出一个警告' },
        { msg: 'emits 可以是数组或对象，当为数组时候，emits 内部仅放置事件名。当为对象是，key 为事件名，val 为一个校验函数，return false 时 vue 会抛出一个 warn（？？？）' },
        { msg: 'vue 官方建议：定义所有发出的事件，以便更好地记录组件应该如何工作。但是实际上，并没有发现 emits 有什么使用场景' },
        { msg: 'PS：如果校验函数返回 false 可以阻止 emit 触发到父组件其实还是有点用处的' }
      ]
    }
  }
}
</script>
