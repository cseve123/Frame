// Proxy学习
const data = ['a', 'b', 'c']
const proxyData = new Proxy(data, {
  get (target, key, receiver) {
    // 只处理本身属性（不包含原型）
    const ownKeys = Reflect.ownKeys(target)
    if (ownKeys.includes(key)) {
      console.log('get', key, receiver)
    }
    const result = Reflect.get(target, key, receiver)
  },
  set (target, key , val) {
    // 重复的数据，不处理
    if (val === target[key]) {
      return false
    }
    const result = Reflect.set(target, key, val)
    console.log('set', key, val)
    return result
  },
  deleteProperty (target, key) {
    const result = Reflect.deleteProperty(target, key)
    console.log('delete property', key)
    return result
  }

})
