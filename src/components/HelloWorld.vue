<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h3>{{ useRef }}</h3>
    <h4>{{ propsRef }}</h4>
  </div>
</template>

<script>
import { toRef, toRefs } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    useRef: Number,
    noAttr: () => true
  },
  setup (props, context) {
    console.log(props, 'props')
    console.log(context, 'context')
    const { useRef: propsRef, noAttr: propsNoAttrToRefs } = toRefs(props) // toRefs 将 props 传值的 prop 结构为 ref，没有传值就会被解构为 undefined
    console.log(propsNoAttrToRefs, 'propsNoAttrToRefs')
    // console.log(propsNoAttrToRefs.value, 'propsNoAttrToRefs.value')
    const propsNoAttr = toRef(props, 'noAttr') // 将 prop 里面可能没有传值的属性转变为一个 ref
    console.log(propsNoAttr, 'propsNoAttr')
    console.log(propsNoAttr.value, 'propsNoAttr.value')
    return {
      propsRef
    }
  }
}
</script>

<style scoped lang="scss"></style>
