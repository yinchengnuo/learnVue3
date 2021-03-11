<template>
  <h2 v-bind="$attrs">Fragment 子组件</h2>
  <h2 v-bind="$attrs">Fragment 子组件</h2>
  <FragmentChildChild v-bind="$attrs" />
</template>

<script>
import FragmentChildChild from '@/components/FragmentChildChild'
export default {
  components: { FragmentChildChild },
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
