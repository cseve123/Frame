<template>
  <div>
    <span>{{item.title}}</span>
    &nbsp;
    <span>{{item.price}}</span>
    &nbsp;
    <a href="#" @click="clickHandler($event)">加入购物车</a>
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
    clickHandler (e) {
      e.preventDefault()
      event.$emit('addToCart', this.item.id)
    }
  }
}
</script>

<style>

</style>
