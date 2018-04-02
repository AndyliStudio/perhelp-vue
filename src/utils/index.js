/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find (list, f) {
  const { length } = list
  let index = 0
  let value
  while (++index < length) {
    value = list[index]
    if (f(value, index, list)) {
      return value
    }
  }
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */
export function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise (val) {
  return val && typeof val.then === 'function'
}

export function assert (condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

// state logs
function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

export function createLogger ({
  collapsed = true,
  filter = (mutation, stateBefore, stateAfter) => true,
  transformer = state => state,
  mutationTransformer = mut => mut,
  logger = console
} = {}) {
  return store => {
    let prevState = deepCopy(store.state)

    store.subscribe((mutation, state) => {
      if (typeof logger === 'undefined') {
        return
      }
      const nextState = deepCopy(state)

      if (filter(mutation, prevState, nextState)) {
        const time = new Date()
        const formattedTime = ` @ ${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}`
        const formattedMutation = mutationTransformer(mutation)
        const message = `mutation ${mutation.type}${formattedTime}`
        const startMessage = collapsed
          ? logger.groupCollapsed
          : logger.group

        // render
        try {
          startMessage.call(logger, message)
        } catch (e) {
          console.log(message)
        }

        logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState))
        logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation)
        logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState))

        try {
          logger.groupEnd()
        } catch (e) {
          logger.log('—— log end ——')
        }
      }

      prevState = nextState
    })
  }
}

/**
 * cookie操作类之设置cookie
 * @param name cookie name
 * @param value cookie value
 * @param expires cookie Storage time, one day
 * @param path cookie path
 * @param domain cookie domain
 * @param secure cookie secure
 */
export function setCookie (name, value, expires, path, domain, secure) {
  let newdate = null
  if (expires) {
    let date = new Date()
    newdate = new Date(date.getTime() + 1000 * 24 * 60 * 60 * expires)
  }
  let curCookie = name + '=' + escape(value) +
    ((expires) ? '; expires=' + newdate.toGMTString() : '') +
    ((path) ? '; path=' + path : '') +
    ((domain) ? '; domain=' + domain : '') +
    ((secure) ? '; secure' : '')
  document.cookie = curCookie
}

/**
 * cookie操作类之获取cookie
 * @param name cookie名字
 */
export function getCookie (name) {
  let prefix = name + '='
  let cookieStartIndex = document.cookie.indexOf(prefix)
  if (cookieStartIndex === -1) {
    return null
  }
  let cookieEndIndex = document.cookie.indexOf(';', cookieStartIndex + prefix.length)
  if (cookieEndIndex === -1) {
    cookieEndIndex = document.cookie.length
  }
  return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}

/**
 * cookie操作类之获取cookie
 * @param name cookie名字
 * @param path cookie路径
 * @param domain cookie域名
 */
export function deleteCookie (name, path, domain) {
  if (this.getCookie(name)) {
    document.cookie = name + '=' +
      ((path) ? '; path=' + path : '') +
      ((domain) ? '; domain=' + domain : '') +
      '; expires=Thu, 01-Jan-70 00:00:01 GMT'
  }
}
