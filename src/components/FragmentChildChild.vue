<template>
  <h2>Fragment 子组件的子组件</h2>
</template>

<script>

export default {
  setup (...args) {
    console.log('FragmentChildCgild props:', ...args)
    return {}
  }
}
</script>
