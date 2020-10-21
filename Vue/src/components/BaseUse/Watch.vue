<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="info.city">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '爽约',
      info: {
        city: '北京'
      }
    }
  },
  watch: {
    name (oldVal, val) {
      // 值类型，可正常拿到oldVal 和 val
      console.log('watch name', oldVal, val)
    },
    info: {
      handler (oldVal, val) {
        // 引用类型，拿不到oldVal,因为指针相同，此时已经指向了新的val
        console.log('watch info', oldVal, val)
      },
      // 深度监听
      deep: true
    }
  }
}
</script>

<style>

</style>
