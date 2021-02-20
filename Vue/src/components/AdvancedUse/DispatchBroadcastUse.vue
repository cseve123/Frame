<template>
  <button @click="handleClick">触发事件</button>
</template>

<script>
import MixinEmitter from './MixinEmitter'
export default {
  name: 'componentA',
  mixins: [ MixinEmitter ],
  methods: {
    handleClick () {
      this.broadcast('componentB', 'on-message', 'hello')
    }
  }
}
</script>

<style>

</style>