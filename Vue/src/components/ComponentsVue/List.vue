<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete', id)
    },
    addTitle (title) {
      console.log('evnet on>>>>>>>>>', title)
    }
  },
  created () {
    console.log('list created')
  },
  mounted () {
    console.log('list mounted')
    // 通过自定义通讯
    this.$bus.$on('addSome', this.addTitle)
  },
  beforeUpdate () {
    console.log('list before update')
  },
  updated () {
    console.log('list updated')
  },
  beforeDestroy () {
    console.log('list before destroy')
  },
  destroyed () {
    console.log('list destroyed')
    // 自己定的事件自己销毁
    this.$bus.$off('addSome', this.addTitle)
  }
}
</script>

<style>

</style>
