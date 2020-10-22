<template>
  <div>
    <ul ref="ul">
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
    <button @click="addItem">添加项目</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'a',
        'b',
        'c'
      ]
    }
  },
  methods: {
    addItem () {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      // 因为vue是异步渲染，为了节省性能会data修改进行合并,进行一次渲染
      // $nextTick会再DOM更新后，才执行回调
      this.$nextTick(() => {
        console.log(this.$refs.ul.childNodes.length)
      })
    }
  }
}
</script>

<style>

</style>
