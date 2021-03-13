<template>
  <h3>SuspenseChild</h3>
</template>

<script>

export default {
  // async setup () {
  //   await new Promise(resolve => setTimeout(resolve, 3000))
  //   return {}
  // }
  setup () {
    return new Promise(resolve => setTimeout(resolve, 3000))
  }
}
</script>
