import farmManagementService from '../services/farmManagementService'
export default ({
  state: {
    farms: [],
    nodes: []
  },
  actions: {
    getFarms: (context) => {
      farmManagementService.getFarms().then(response => {
        context.commit('setFarms', response.data.farms)
      })
    },
    registerFarm: (context, farm) => {
      farmManagementService.registerFarm(farm).then(response => {
        context.commit('addFarm', response.data.farm)
      })
    },
    updateFarm: (context, farm) => {
      farmManagementService.updateFarm(farm.id, farm).then(response => {
        context.dispatch('getFarms')
      })
    },
    getNodes: (context, farm_id) => {
      console.log(farm_id)
      farmManagementService.getNodes().then(response => {
        context.commit('setNodes', response.data.nodes)
      })
    }
  },
  mutations: {
    setFarms: (state, farms) => { state.farms = farms },
    addFarm: (state, farm) => { state.farms.push(farm) }
  },
  getters: {
    farms: (state) => state.farms,
    nodes: (state) => state.nodes
  }
})
