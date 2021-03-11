<template>
  <ol>
    <li v-for="item in list" :key="item.msg">
      <h3>{{ item.msg }}</h3>
    </li>
  </ol>
  <FragmentChild id="FragmentChild" class="ragment-child" test="testValue" :testData="123" @custom="customEvent" />
</template>

<script>
import FragmentChild from '@/components/FragmentChild'
export default {
  components: { FragmentChild },
  setup () {
    return {
      list: [
        { msg: 'vue3.x 现在正式支持了多根节点的组件 fragment' },
        { msg: '但是，这要求开发者显式通过 v-bind="$attrs" 定义 attribute 应该分布在哪里' },
        { msg: '非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 props 或 emits 定义的 attribute。常见的示例包括 class、style 和 id 属性' },
        { msg: '当组件返回单个根节点时，非 prop attribute 将自动添加到根节点的 attribute 中' },
        { msg: '在 vue options 生命周期里，this.$attrs 可以获取所有的 非 prop 的 attribute 和绑定事件' },
        { msg: '如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。常见情况是需要将 attribute 应用于根节点之外的其他元素，通过 v-bind=“$attrs 实现' },
        { msg: '与单个根节点组件不同，具有多个根节点的组件不具有自动 attribute 回退行为。如果未显式绑定 $attrs，将发出运行时警告（？？？）' },
        { msg: 'https://v3.cn.vuejs.org/guide/migration/fragments.html#3.x%20%E8%AF%AD%E6%B3%95' },
        { msg: 'https://v3.cn.vuejs.org/guide/component-attrs.html#%E5%A4%9A%E4%B8%AA%E6%A0%B9%E8%8A%82%E7%82%B9%E4%B8%8A%E7%9A%84%20Attribute%20%E7%BB%A7%E6%89%BF' }
      ],
      customEvent: () => {}
    }
  }
}
</script>
