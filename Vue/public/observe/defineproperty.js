// 类型判断
// 不能监控新增和删除 -> Vue.set 和 Vue.delete
// 不支持数据
// 深度递归，是一次性递归完，计算量大

// 触发更新视图
function updateView () {
  console.log('视图更新')
}

// 重新定义数组做数组的处理
const NativeArrayProperty = Array.prototype
// 创建新对象，原型指向NativeArrayProperty,再扩展新的方法不会影响原生原型
const arrProto = Object.create(NativeArrayProperty);
// 做新方法中触发
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function () {
    console.log('arr触发', methodName, ...arguments)
    updateView() // 触发视图更新
    NativeArrayProperty[methodName].call(this, ...arguments)
  }
})

// 重新定义属性，但只能用对象不能用数组
function defineReactive(target, key, value) {

  // 一次性递归所有的值
  observer(value)

  // 重新定义属性可以监控
  // 本质就是Object.defineProperty getter setter
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newVal) {
      if (newVal !== value) {
        // 嵌套多层的时候深度监听
        observer(newVal)

        // 设置新值
        // value一直在闭包中，此处设置完之后，get时也会更新
        value = newVal

        // 值变化了触发更新视图
        console.log('set值变了', key, value)
        updateView()
      }
    }
  })
}

// 如可，监听数据对象属性
function observer (target) {
  if (typeof target !== 'object' || typeof target === null) {
    // 不是对象或数组
    return target
  }

  // 数组的原型指向创造的原型
  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }


  // 对象的类型，重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 准备数据
const data = {
  name: 'zhangsna',
  age: 20,
  info: {
    address: '上海' // 需要深度监听
  },
  nums: [10, 20, 30]
}

// 监听数据，入口
observer(data)

// 测试
data.name = '123'
data.x = '100' // 新增的触发不了 Vue.set
delete data.x // 删除也不触发 Vue.delete
data.info.address = 'shanghai'
data.nums.push(40)
