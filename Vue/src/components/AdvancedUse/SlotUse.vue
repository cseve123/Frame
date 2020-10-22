<template>
  <div>
      <header>
        <slot name="header">
          这里是标题
        </slot>
      </header>
      <a :href="url">
        <slot>
          默认内容，如果父组件没有内容时
        </slot>
      </a>
      <main>
        <!-- 作用域插槽就是--将这个组件里的数据暴露出去 -->
        <slot name="scope" :slotData="website">
          moren
        </slot>
      </main>
      <footer>
        <slot name="footer">
          这里是footer
        </slot>
      </footer>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data () {
    return {
      website: {
        url: 'http:sss',
        name: 'slotuseData'
      }
    }
  }
}
</script>

<style>

</style>
