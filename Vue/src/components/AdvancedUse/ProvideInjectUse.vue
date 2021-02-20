<template>
  <div>
    祖先app里的数据---{{app.userInfo}}
    利用provide和inject来通信
    原理是：provide和inject通过组先提供provide,任何子孙后代都可以inject注入这个依赖使用
  </div>
</template>

<script>
export default {
  inject: ['app']
}
</script>

<style>

</style>
