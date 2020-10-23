// proxy 可以监听数组
// 可以监听新增和删除
// 深度监听，访问到哪层停再哪层
// 缺点 没有polyfill

function reactive (target) {
  // 类型筛选
  if (typeof target !== 'object' || target == null) {
    // 不是对象和数组
    return target
  }

  // 代理配置
  const proxyCOnf = {
    get (target,key) {
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key)  // 监听
      }
      const result = Reflect.get(target, key)
      return reactive(result)
    },
    set (target, key, val) {
      // 重复数据不处理
      if (val === target[key]) {
        return true
      }

      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log('已有的key',key)
      } else {
        console.log('新增的key', key)
      }

      const result = Reflect.set(target, key, val)
      return result
    },
    deleteProperty (target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('deleteProperty', key)
      return result
    }
  }

  // 生成代理对象
  const observed = new Proxy(target, proxyCOnf)
  return observed
}

// 测试数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        city: 'beijing',
        a: {
            b: {
                c: {
                    d: {
                        e: 100
                    }
                }
            }
        }
    }
}

const proxyData = reactive(data);
