import Hat from './wx'

// tags: string | Array<string>
export function getRefByTags (node, tags) {
  let refs = {}
  node.$children.forEach(child => {
    let tag = child.$options._componentTag

    if (tags !== tag || (tags && !tags.includes(tag))) return

    if (refs[tag]) {
      if (Array.isArray(refs[tag])) {
        refs[tag].push(child)
      } else {
        refs[tag] = [refs[tag], child]
      }
    } else {
      refs[tag] = child
    }
  })

  return refs
}

export function createStyle (style) {
  return style ? Object.keys(style).map(key => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${style[key]};`).join('') : ''
}

let SystemInfo = null
Hat.getSystemInfo().then(data => {
  console.log(data)
  SystemInfo = data
})

export function getSystemInfo (keys) {
  if (Array.isArray(keys)) {
    let info = {}
    Object.keys(keys).forEach(k => {
      info[k] = SystemInfo[k]
    })

    return info
  } else if (typeof keys === 'string') {
    return SystemInfo[keys]
  } else {
    return SystemInfo
  }
}
