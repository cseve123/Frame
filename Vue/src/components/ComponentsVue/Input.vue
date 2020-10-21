<template>
  <div>
    <input type="text" v-model="title">
    <button @click="addTitle">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addTitle () {
      // 调用父组件的事件
      this.$emit('add', this.title)
      this.title = ''
    }
  },
  created () {
    console.log('input created')
  },
  mounted () {
    console.log('input mounted')
  },
  beforeUpdate () {
    console.log('input before update')
  },
  updated () {
    console.log('input updated')
  },
  beforeDestroy () {
    console.log('input before destroy')
  },
  destroyed () {
    console.log('input destroyed')
  }
}
</script>

<style>

</style>
