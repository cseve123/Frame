<template>
  <div>
    <!-- 测试组件的生命周期 父先before 然后再子before ed  父再ed -->
    <button @click="isShow = !isShow">删除大组件</button>
    <index v-if="isShow" />
  </div>
</template>

<script>
import index from './index'
export default {
  components: {
    index
  },
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style>

</style>
