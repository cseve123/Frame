/**
 * 
 * @param {明确要通信的组件} componentName 
 * @param {组件上的事件名称} eventName 
 * @param {组件上的参数} params 
 */
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      // 不是遍历的组件在递归查找,直到找到走if
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  });
}

function dispatch (componentName, eventName, params) {
  let parent = this.$parent || this.$root
  let name = parent.$options.name
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
  }
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    broadcast () {
      broadcast.call(this, componentName, eventName, params)
    }
  }  
}
