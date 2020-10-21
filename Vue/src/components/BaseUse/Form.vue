<template>
  <div>
    <p>输入框: {{ name }}</p>
    <input type="text" v-model.trim="name">
    <input type="text" v-model.lazy='name'>
    <input type="text" v-model.number="age">

    <p>多行文本：{{ desc }}</p>
    <textarea v-model="desc"></textarea>

    <p>复选框</p>
    <input type="checkbox" v-model="checked">

    <p>多个复选框 {{checkedNames}}</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <p>单选 {{gender}}</p>
    <input type="radio" name="sex" id="male" value="male" v-model="gender">
    <label for="malCC">男</label>
    <input type="radio" name="sex" id="female" value="female" v-model="gender">
    <label for="female">女</label>

    <p>下拉列表选择（多选）{{selectedList}}</p>
    <select v-model="selectedList" multiple>
      <option disabled value="">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="c">C</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '创越',
      age: 10,
      desc: '自我介绍',
      checked: true,
      checkedNames: [],
      gender: 'male',
      selected: '',
      selectedList: []
    }
  }
}
</script>

<style>

</style>
