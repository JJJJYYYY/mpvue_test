export function mountRef (node) {
  node.$children.forEach(child => {
    let tag = child.$options._componentTag
    if (node.$refs[tag]) {
      if (Array.isArray(node.$refs[tag])) {
        node.$refs[tag].push(child)
      } else {
        node.$refs[tag] = [].concat(node.$refs[tag], child)
      }
    } else {
      node.$refs[tag] = child
    }
  })
}

export function createStyle (style) {
  return style ? Object.keys(style).map(key => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${style[key]};`).join('') : ''
}
