<template>
  <div>
    <p>文本插值 {{ message }}</p>
    <p>JS 表达式 {{ flag ? 'yes' : 'no' }} (只能是表达式，不能是js语句)</p>
    <p :id="dynamicId">动态属性 id</p>
    <hr/>
    <!-- 相当于inner HTML -->
    <p v-html="rawHtml">
      <span>有 xss 风险</span>
      <span>【注意】使用v-html之后，将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello vue',
      flag: true,
      rawHtml: '指令 - 原始 <b>加粗</b> <i>斜体</i>',
      dynamicId: `id-${Date.now()}`
    }
  }
}
</script>

<style>

</style>
