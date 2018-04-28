const album = {
  state: {
    pics: [],
    voices: [],
    bgMusic: '',
    interval: 2,
    intro: '',
    recorderManager: null,
    texts: []
  },
  mutations: {
    mutationIntro (state, intro) {
      state.intro = intro
    },
    mutationInterval (state, interval) {
      state.interval = isNaN(interval) ? 2 : +interval
    },
    mutationPics (state, pics) {
      state.pics = state.pics.concat(pics)
    },
    mutationVices (state, vices) {
      state.vices = state.vices.concat(vices)
    },
    mutationBgMusic (state, bgMusic) {
      state.bgMusic = bgMusic
    },
    mutationDelPic (state, i) {
      state.pics.splice(i, 1)
    },
    mutationRecorder (state, manager) {
      state.recorderManager = manager
    },
    mutationText (state, { i, text }) {
      state.texts[i] = text
    }
  }
}

export default album
