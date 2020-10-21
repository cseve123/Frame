<template>
  <div>
    <p @click="changeName">{{name}}</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
      <button @click="addItem">添加一项</button>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'vue',
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    changeName () {
      this.name = '上次'
    },
    addItem () {
      this.list.push(`${Date.now()}`)
    }
  }
}
</script>

<style>

</style>
