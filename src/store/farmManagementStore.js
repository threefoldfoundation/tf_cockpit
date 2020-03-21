import farmManagementService from '../services/farmManagementService'
export default ({
  state: {
    farms: []
  },
  actions: {
    getFarms: (context) => {
      farmManagementService.getFarms().then(response => {
        context.commit('setFarms', response.data)
      })
    },
    registerFarm: (context, farm) => {
      farmManagementService.registerFarm(farm).then(response => {
        context.commit('addFarm', response.data)
      })
    },
    updateFarm: (context, farm) => {
      farmManagementService.updateFarm(farm.id, farm).then(response => {
        context.dispatch('getFarms')
      })
    }
  },
  mutations: {
    setFarms: (state, farms) => { state.farms = farms },
    addFarm: (state, farm) => { state.farms.push(farm) }
  },
  getters: {
    farms: (state) => state.farms
  }
})
