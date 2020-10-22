<template>
  <div>
    <button @click="loadComponent = !loadComponent">异步加载组件</button>
    <Custom-model v-if="loadComponent" />
  </div>
</template>

<script>
export default {
  components: {
    CustomModel: () => import('./CustomModel')
  },
  data () {
    return {
      loadComponent: false
    }
  }
}
</script>

<style>

</style>
