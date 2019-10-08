import tfService from '../services/tfService'

export default ({
  state: {
    registered3bots: 0,
    onlinenodes: 0,
    registeredFarms: 0,
    farmsList: [],
    nodesList: [],
    originalNodesList: [],
    countries: 0,
    cores: 0
  },
  actions: {
    getRegistered3Bots (context) {
      tfService.registered3bots().then(response => {
        console.log('nodes', response.data)
        context.commit('setRegistered3Bots', response.data.nodes.length)
        context.commit('setNodesList', response.data.nodes)
        context.commit('setOriginalNodesList', response.data.nodes)
        context.commit('setCountriesFromNodes', response.data.nodes)
        context.commit('setCoresFromNodes', response.data.nodes)
        context.commit('setNodesOnline', response.data.nodes)
      })
    },
    getRegisteredFarms (context) {
      tfService.registeredfarms().then(response => {
        console.log('farms', response.data)
        context.commit('setRegisteredFarms', response.data.farms.length)
        context.commit('setFarmsList', response.data.farms)
      })
    }
  },
  mutations: {
    setRegistered3Bots (state, value) {
      state.registered3bots = value
    },
    setRegisteredFarms (state, value) {
      state.registeredFarms = value
    },
    setFarmsList (state, value) {
      state.farmsList = value.map(f => {
        return {
          value: f,
          text: f.name
        }
      })
    },
    setNodesList (state, value) {
      state.nodesList = value
    },
    setOriginalNodesList (state, value) {
      state.originalNodesList = value
    },
    setCountriesFromNodes (state, value) {
      var temp = {}
      for (var i in value) {
        temp[value[i]['location']['country']] = 1
      }

      state.countries = Object.keys(temp).length
    },
    setCoresFromNodes (state, value) {
      state.cores = 0

      for (var i in value) {
        state.cores += value[i]['total_resources']['cru']
      }
    },
    setNodesOnline (state, value) {
      state.onlinenodes = value.length
    }
  },
  getters: {
    registered3bots: (state) => state.registered3bots,
    registeredfarms: (state) => state.registeredFarms,
    farmslist: (state) => state.farmsList,
    nodeslist: (state) => state.nodesList,
    originalNodesList: (state) => state.originalNodesList,
    cores: (state) => state.cores,
    countries: (state) => state.countries,
    onlinenodes: (state) => state.onlinenodes
  }
})
