import tfService from '../services/tfService'

export default ({
  state: {
    registered3bots: 0,
    onlinenodes: 0,
    registeredFarms: 0,
    farmsList: [],
    nodesList: [],
    countries: 0,
    cores: 0
  },
  actions: {
    getRegistered3Bots (context) {
      tfService.registered3bots().then(response => {
        console.log('nodes', response.data)
        context.commit('setRegistered3Bots', response.data.nodes.length)
        context.commit('setNodesList', response.data.nodes)
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
      state.farmsList = []
      for (var i in value) {
        state.farmsList.push(value[i]['name'])
      }
    },
    setNodesList (state, value) {
      state.nodesList = []
      for (var i in value) {
        state.nodesList.push({
          'name': 'Node ' + i,
          'uptime': value[i]['uptime'],
          'version': value[i]['os_version'].substr(0, 8) + '...',
          'id': value[i]['node_id'].substr(0, 8) + '...',
          'farmer': value[i]['farm_id'].substr(0, 8) + '...',
          'status': 'Active'
        })
      }
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
    cores: (state) => state.cores,
    countries: (state) => state.countries,
    onlinenodes: (state) => state.onlinenodes
  }
})
