<template>
  <div>
    <CartItem
      v-for="item in list"
      :key="item.id"
      :item="item"/>
    <p>总价 {{totalPrice}}</p>
  </div>
</template>

<script>
import CartItem from './CartItem'
export default {
  components: {
    CartItem
  },
  props: {
    productionList: {
      type: Array,
      default () {
        return []
      }
    },
    cartList: {
      default () {
        return []
      }
    }
  },
  computed: {
    list () {
      return this.cartList.map(cartListItem => {
        const productionItem = this.productionList.find(prdItem => prdItem.id === cartListItem.id)
        return {
          ...productionItem,
          quantity: cartListItem.quantity
        }
      })
    },
    totalPrice () {
      return this.list.reduce((total, curItem) => {
        return total + (curItem.quantity * curItem.price)
      }, 0)
    }
  }
}
</script>

<style>

</style>
