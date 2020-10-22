// 第一种，Vue已经做了$on,$emit
// export default new Vue()

// 第二种，自己定义，给到原型
// class Bus {
//   constructor () {
//     this.callback = {}
//   }

//   // 这两个事件到底谁先谁后了
//   $on (name, fn) {
//     console.log('event on')
//     this.callback[name] = this.callback[name] || []
//     this.callback[name].push(fn)
//   }

//   $emit (name, args) {
//     console.log('event emit')
//     if (this.callback[name]) {
//       this.callback[name].forEach(cb => {
//         cb(args)
//       })
//     }
//   }
// }
// export default Bus
