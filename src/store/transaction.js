import tfService from '../services/tfService'

export default({
  state: {
    registerd3bots: null
  },
  actions: {
    getRestered3Bots (context) {
      tfService.registerd3bots().then(response => {
        context.commit('setRegitered3Bots', response.data())
      })
    }
  },
  mutations: {
    setRegitered3Bots (state, value) {
      state.registerd3bots = value
    }
  },
  getters: {
    registerd3bots: (state) => state.registerd3bots
  }
})
