<template>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
  <br>
  <VModelChild v-model="childVal" />
  <input v-model="inputVal" type="text">
  <h4>{{ inputVal }}</h4>
</template>

<script>
import { ref } from 'vue'
import VModelChild from '@/components/VModelChild'
export default {
  components: { VModelChild },
  setup () {
    const inputVal = ref('')
    const childVal = ref('')
    return {
      inputVal,
      childVal,
      list: [
        { msg: 'vue3.x v-model 指令增加了 :modelValue 用于指定子组件内部接受 props 的名字' },
        { msg: 'modelValue 只能用于自定义组将，不能用于原生表达组件' },
        { msg: '使用 modelValue 的自定义组件使用 props 接受父组件传值，使用 emit("update:modelValue", $event.target.value)' },
        { msg: 'vue3.x 支持多个 v-model 绑定，传值和更新和单个 v-model 一致' },
        { msg: 'vue3.x 新增了 v-model 修饰符，可以通过 v-model.xxx 的方式向子组件内部传值，子组件接受到的是 this.$props.modelModifiers 为 { xxx: true }' },
        { msg: '默认 v-model 修饰符在子组件内部接受的参数是 this.$props.modelModifiers' },
        { msg: '带有 modelValue 的 v-model 修饰符在子组件内部接受的参数是 this.$props["modelValue" + "Modifiers"]' }
      ]
    }
  }
}
</script>
