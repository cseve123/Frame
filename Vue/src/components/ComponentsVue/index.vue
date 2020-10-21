<template>
  <div>
    <button @click="isShow = !isShow">删除组件</button>
    <Input @add="addHandler" v-if="isShow" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'
export default {
  components: {
    Input,
    List
  },
  data () {
    return {
      isShow: true,
      list: [
        {
          id: 'id-1',
          title: '标题1'
        },
        {
          id: 'id-2',
          title: '标题2'
        }
      ]
    }
  },
  methods: {
    addHandler (title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title
      })
    },
    deleteHandler (id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  },
  created () {
    console.log('index created')
  },
  mounted () {
    console.log('index mounted')
  },
  beforeUpdate () {
    console.log('index before update')
  },
  updated () {
    console.log('index updated')
  },
  beforeDestroy () {
    console.log('index before destroy')
  },
  destroyed () {
    console.log('index destroyed')
  }
}
</script>

<style>

</style>
