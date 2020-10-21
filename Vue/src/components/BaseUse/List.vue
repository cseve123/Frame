<template>
  <div>
    <p>遍历数组</p>
    <ul>
      <li v-for="(item, index) in listArr" :key="index">
        {{index}} - {{item.id}} - {{item.title}}
      </li>
    </ul>
    <p>遍历对象</p>
    <ul>
      <!-- v-if不和v-for一起用影响性能 -->
      <li v-for="(val, key, index) in listObj" :key="key">
        {{index}} - {{key}} -  {{val.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false,
      listArr: [
        { id: 'a', title: '标题1' },
        { id: 'a', title: '标题1' },
        { id: 'a', title: '标题1' }
      ],
      listObj: {
        a: { title: '标题1' },
        b: { title: '标题2' },
        c: { title: '标题3' }
      }
    }
  }
}
</script>

<style>

</style>
