<template>
  <div>
    <ProductionList :list="productionList" />
    <hr />
  </div>
</template>

<script>
import event from './event'
import ProductionList from './ProductionList/index'
export default {
  components: {
    ProductionList
  },
  data () {
    return {
      productionList: [
        {
          id: 1,
          title: '商品A',
          price: 10
        },
        {
          id: 2,
          title: '商品B',
          price: 15
        },
        {
          id: 3,
          title: '商品AC',
          price: 20
        }
      ]
    }
  },
  methods: {
    addToCart (id) {
      console.log(id)
    }
  },
  mounted () {
    event.$on('addToCart', this.addToCart)
  }
}
</script>

<style>

</style>
