<template>
  <div>
    <p>{{name}} {{city}}</p>
    <button @click="showName">显示name</button>
  </div>
</template>

<script>
import myMixin from './mixin'
export default {
  mixins: [myMixin],
  data () {
    return {
      name: 'xxxxx',
      city: 'bbb'
    }
  },
  methods: {

  },
  mounted () {
    console.log('mounted', this.name)
  }
}
</script>

<style>

</style>
