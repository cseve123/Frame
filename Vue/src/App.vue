<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- <Base /> -->
    <!-- <Components /> -->
    <!-- <Advanced /> -->
    <Car />
  </div>
</template>

<script>
// import Base from './components/BaseUse/Base'
// import Components from './components/ComponentsVue/Components'
// import Advanced from './components/AdvancedUse/index'
import Car from './components/Cart/index'
export default {
  components: {
    // Base
    // Components,
    // Advanced,
    Car
  },
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      userInfo: null
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.userInfo = {
        name: '德玛西亚'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
