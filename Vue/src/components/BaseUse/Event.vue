<template>
  <div>
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    // 默认参数
    increment1 (event) {
      // eslint-disable-next-line
      console.log('event', event, event.__proto__.constructor)
      // event是再原生里的 MouseEvent
      console.log(event.target) // 事件被挂载到当前元素
      console.log(event.currentTarget)
      this.num++
    },
    increment2 (val, event) {
      console.log(val)
      this.num = this.num + val
    },
    loadHandler () {
      // do some thing
    }
  },
  mounted () {
    window.addEventListener('load', this.loadHandler, false)
  },
  beforeDestroy () {
    // 【注意】用vue绑定的事件，组件销毁时自动被解绑
    // 自己绑定的事件，需要自己销毁！！！
    window.removeEventListener('load', this.loadHandler)
  }
}
</script>

<style>

</style>
