<template>
  <h2 v-bind="$attrs">Fragment 子组件</h2>
  <h2 v-bind="$attrs">Fragment 子组件</h2>
</template>

<script>
export default {
  props: ['test', 'testData'],
  setup (...args) {
    console.log('FragmentChild props:', ...args)
    return {}
  },
  created () {
    console.log('FragmentChild $attrs:', this.$attrs)
    console.log('FragmentChild $props:', this.$props)
  }
}
</script>
