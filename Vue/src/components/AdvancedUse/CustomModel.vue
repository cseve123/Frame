<template>
  <div>
    <input
      type="text"
      :value="text1"
      @input="emitFn"
    />
  </div>
</template>

<script>
export default {
  // 自定义的需要用到model和props,属性要对应
  model: {
    prop: 'text1',
    event: 'change1'
  },
  props: {
    text1: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    emitFn ($event) {
      this.$emit('change1', $event.target.value)
    }
  }
}
</script>

<style>

</style>
