<template>
  <div>
    <!-- 自定义v-model -->
    <!-- <p>{{name}}</p>
    <Custom-model v-model="name" /> -->

    <!-- nextTick -->
    <!-- <Next-tick /> -->

    <!-- slot -->
    <!-- <Slot-use :url="website.url">
      <template v-slot:header>
        头部--header
      </template>
      {{website.name}}
      <template v-slot:scope="slotScope">
        {{slotScope.slotData.name}}
      </template>
      <template v-slot:footer>
        底部--footer
      </template>
    </Slot-use> -->

    <!-- 动态组件 -->
    <!-- <ul>
      <li v-for="(val, key, index) in isComponentsObj" :key="index">
        {{key}}
        <component :is="val.name" />
      </li>
    </ul> -->

    <!-- 异步组件 -->
    <!-- <AsyncComponent /> -->

    <!-- 缓存组件---keep-alive -->
    <!-- <Keep-alive /> -->

    <!-- mixin -->
    <Mixin-use />
  </div>
</template>

<script>
// import CustomModel from './CustomModel'
// import NextTick from './NextTick'
// import SlotUse from './SlotUse'
// import AsyncComponent from './AsyncComponent'
// import KeepAlive from './KeeepAlive'
import MixinUse from './MixinUse'
export default {
  components: {
    // CustomModel,
    // NextTick,
    // SlotUse,
    // AsyncComponent,
    // KeepAlive,
    MixinUse
  },
  data () {
    return {
      name: '阿发',
      website: {
        name: 'imm',
        url: 'https://www'
      },
      isComponentsObj: {
        1: {
          name: 'CustomModel'
        },
        2: {
          name: 'NextTick'
        },
        3: {
          name: 'SlotUse'
        }
      }
    }
  }
}
</script>

<style>

</style>
