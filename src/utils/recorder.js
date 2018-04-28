import Event from './event'

let recorderManager = null

const prefix = '_recorder_'

function Recorder () {
  if (!recorderManager) {
    recorderManager = wx.getRecorderManager()

    recorderManager.onStart((...args) => {
      Event.$emit(`${prefix}start`, ...args)
    })
    recorderManager.onStop((...args) => {
      Event.$emit(`${prefix}stop`, ...args)
    })
    recorderManager.onError((...args) => {
      Event.$emit(`${prefix}error`, ...args)
    })
  }

  return recorderManager
}

Recorder.$on = function $on (event, cb) {
  Event.$on(`${prefix}${event}`, cb)
}

Recorder.$off = function $off (event, cb) {
  Event.$off(`${prefix}${event}`, cb)
}

Recorder.$once = function $once (event, cb) {
  Event.$once(`${prefix}${event}`, cb)
}

Recorder.$emit = function $emit (event, ...args) {
  Event.$emit(`${prefix}${event}`, ...args)
}

export default Recorder
