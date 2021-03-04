<template>
  <div>
    <input v-model="search" type="text">
  </div>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <h3 v-html="getHTML(item.content)" />
    </li>
  </ul>
</template>

<script>
import Fuse from 'fuse.js'
import { computed, reactive, ref } from 'vue'
export default {
  setup () {
    const search = ref('')
    const data = reactive([
      { content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年？' },
      { content: '君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。' },
      { content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。' },
      { content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。' },
      { content: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！' }
    ])

    const list = computed(() => {
      if (search.value.trim()) {
        return (new Fuse(data, { findAllMatches: true, keys: ['content'] })).search(search.value.trim().replace(/\s*/g, '')).map(e => e.item)
      } else {
        return data
      }
    })

    const getHTML = computed(() => {
      return text => {
        if (search.value.trim()) {
          const words = text.split('')
          const keys = search.value.trim().replace(/\s*/g, '').split('')
          keys.forEach(key => {
            for (let i = 0; i < words.length; i++) {
              if (words[i] === key) {
                words[i] = `<span style="color: red; font-weight: bolder;">${key}</span>`
              }
            }
            text = words.join('')
          })
        }
        return text
      }
    })
    return { search, list, getHTML }
  }
}
</script>
