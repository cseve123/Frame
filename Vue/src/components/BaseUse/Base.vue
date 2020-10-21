<template>
  <div>
    <Tpl />
    <hr>
    <Computed />
    <hr>
    <Watch />
    <hr>
    <Class-style />
    <hr>
    <Show-if />
    <hr>
    <List />
    <hr>
    <Event />
    <hr>
    <Form />
    <hr>
    <Todo />
  </div>
</template>

<script>
import Tpl from './Tpl'
import Computed from './Computed'
import Watch from './Watch'
import ClassStyle from './ClassStyle'
import ShowIf from './ShowIf'
import List from './List'
import Event from './Event'
import Form from './Form'
import Todo from './Todo'
export default {
  components: {
    Tpl,
    Computed,
    Watch,
    ClassStyle,
    ShowIf,
    List,
    Event,
    Form,
    Todo
  }
}
</script>

<style>

</style>
