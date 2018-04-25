import Promise from 'jjj-promise'

const API = [
  'getSystemInfo',
  'navigateTo',
  'chooseImage',
  'request'
]

const hat = {}

API.forEach(api => {
  hat[api] = (data) => {
    return new Promise((resolve, reject) => {
      wx[api]({
        ...data,
        success: resolve,
        fail: reject
      })
    })
  }
})

export default hat
