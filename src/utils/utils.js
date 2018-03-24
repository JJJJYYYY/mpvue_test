export function mounteRef (node) {
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
