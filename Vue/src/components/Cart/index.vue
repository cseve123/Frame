<template>
  <div>
    <ProductionList :list="productionList" />
    <hr />
    <CartList
      :productionList="productionList"
      :cartList="cartList"/>
  </div>
</template>

<script>
import event from './event'
import ProductionList from './ProductionList/index'
import CartList from './CartList/index'
export default {
  components: {
    ProductionList,
    CartList
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
      ],
      cartList: []
    }
  },
  methods: {
    addToCart (id) {
      const prd = this.cartList.find(item => item.id === id)
      if (prd) {
        prd.quantity++
        return
      }
      this.cartList.push({
        id,
        quantity: 1
      })
    },
    delFromCart (id) {
      const prd = this.cartList.find(item => item.id === id)
      if (prd == null) {
        return
      }
      prd.quantity--
      if (prd.quantity <= 0) {
        this.cartList = this.cartList.filter(item => item.id !== id)
      }
    }
  },
  mounted () {
    event.$on('addToCart', this.addToCart)
    event.$on('delFromCart', this.delFromCart)
  }
}
</script>

<style>

</style>
