<template>
  <div>
    <!-- 自定义v-model -->
    <!-- <p>{{name}}</p>
    <Custom-model v-model="name" /> -->

    <!-- nextTick -->
    <Next-tick />
  </div>
</template>

<script>
// import CustomModel from './CustomModel'
import NextTick from './NextTick'
export default {
  components: {
    // CustomModel,
    NextTick
  },
  data () {
    return {
      name: '阿发'
    }
  }
}
</script>

<style>

</style>
