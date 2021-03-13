<template>
  <ol>
    <li v-for="item in list" :key="item.msg" v-html="item.msg" />
  </ol>
</template>

<script>

export default {
  setup () {
    return {
      list: [
        { msg: '' }
      ]
    }
  }
}
</script>
