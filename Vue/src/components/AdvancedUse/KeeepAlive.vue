<template>
  <div>
    <button @click="show = 'A'">A</button>
    <button @click="show = 'B'">B</button>
    <button @click="show = 'C'">C</button>

    <keep-alive>
      <Component-a v-if="show === 'A'" />
      <Component-b v-if="show === 'B'" />
      <Component-c v-if="show === 'C'" />
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './KeeepAliveStateA'
import ComponentB from './KeeepAliveStateB'
import ComponentC from './KeeepAliveStateC'
export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  },
  data () {
    return {
      show: 'A'
    }
  }
}
</script>

<style>

</style>
