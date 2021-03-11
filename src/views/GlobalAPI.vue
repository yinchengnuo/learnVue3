<template>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
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
