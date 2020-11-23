<template>
  <div>
    <span>{{item.title}}</span>
    &nbsp;
    <span>(数量 {{item.quantity}})</span>
    &nbsp;
    <a href="#" @click="addClickHandler($event)">增加</a>
    &nbsp;
    <a href="#" @click="delClickHandler($event)">减少</a>
  </div>
</template>

<script>
import event from '../event'
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    addClickHandler (e) {
      e.preventDefault()
      event.$emit('addToCart', this.item.id)
    },
    delClickHandler (e) {
      e.preventDefault()
      event.$emit('delFromCart', this.item.id)
    }
  }
}
</script>

<style>

</style>
