<template>
  <div>
    <button @click="event1">event1</button>
    <br>
    <br>
    <button @click="event2">event2</button>
  </div>
</template>

<script>

export default {
  emits: {
    event1: null,
    event2 ({ emit, val }) {
      console.log(emit, val)
      return emit
    }
  },
  setup (_, ctx) {
    const event1 = () => {
      ctx.emit('event1')
    }
    const event2 = () => {
      const val = Math.random()
      ctx.emit('event2', { emit: val - 0.5 > 0, val })
    }
    return {
      event1,
      event2,
      list: [
        { msg: '' }
      ]
    }
  }
}
</script>
