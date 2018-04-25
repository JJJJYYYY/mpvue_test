import Hat from './wx'

export function getRefByTags (node, tags) {
  let refs = {}
  node.$children.forEach(child => {
    let tag = child.$options._componentTag

    if (tags && !tags.includes(tag)) return

    if (refs[tag]) {
      if (Array.isArray(refs[tag])) {
        refs[tag].push(child)
      }
    } else {
      refs[tag] = [child]
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

export function getPixelRatio () {
  return SystemInfo.pixelRatio || 2
}
