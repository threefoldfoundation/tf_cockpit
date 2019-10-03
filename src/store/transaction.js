import tfService from '../services/tfService'

export default ({
  state: {
    registered3bots: null,
    registeredFarms: null
  },
  actions: {
    getRegistered3Bots (context) {
      tfService.registered3bots().then(response => {
        console.log("nodes", response.data)
        context.commit('setRegistered3Bots', response.data.nodes.length)
      })
    },
    getRegisteredFarms (context) {
      tfService.registeredfarms().then(response => {
        console.log("farms", response.data)
        context.commit('setRegisteredFarms', response.data.farms.length)
      })
    }
  },
  mutations: {
    setRegistered3Bots (state, value) {
      state.registered3bots = value
    },
    setRegisteredFarms (state, value) {
      state.registeredFarms = value
    }
  },
  getters: {
    registered3bots: (state) => state.registered3bots,
    registeredfarms: (state) => state.registeredFarms
  }
})
