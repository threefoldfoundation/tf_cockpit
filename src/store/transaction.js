import tfService from '../services/tfService'

export default({
  state: {
    registerd3bots: null
  },
  actions: {
    getRegistered3Bots (context) {
      tfService.registered3bots().then(response => {
        console.log(response.data);
        context.commit('setRegistered3Bots', response.data.nodes.length)
      })
    }
  },
  mutations: {
    setRegistered3Bots (state, value) {
      state.registerd3bots = value
    }
  },
  getters: {
    registerd3bots: (state) => state.registerd3bots
  }
})
