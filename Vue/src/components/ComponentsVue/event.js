import Vue from 'vue'

// 第一种，Vue已经做了$on,$emit
export default new Vue()

// 第二种，自己定义，给到原型
// class Bus {
//   constructor () {
//     this.callback = {}
//   }
//   $on (name, fn) {
//     this.callback[name] = this.callback[name] || [];
//     this.callback[name].push(fn);
//   }
//   $emit (name, args) {
//     if (this.callback[name]) {
//       this.callback[name].forEach(cb => {
//         cb(args)
//       });
//     }
//   }
// }
// Vue.prototype.$Bus = new Bus()
