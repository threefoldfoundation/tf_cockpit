import tfService from '../services/tfService'
import { uniqBy, sumBy } from 'lodash'

export default ({
  state: {
    registered3bots: 0,
    onlinenodes: 0,
    registeredFarms: 0,
    farmsList: [],
    nodesList: [],
    originalNodesList: [],
    countries: 0,
    cru: 0,
    mru: 0,
    sru: 0,
    hru: 0
  },
  actions: {
    getRegistered3Bots(context) {
      tfService.registered3bots().then(response => {
        console.log('nodes', response.data)
        context.commit('setRegistered3Bots', response.data.length)
        context.commit('setNodesList', response.data)
        context.commit('setOriginalNodesList', response.data)
        context.commit('setCountriesFromNodes', response.data)
        context.commit('setRUfromNodes', response.data)
        context.commit('setNodesOnline', response.data)
      })
    },
    getRegisteredFarms(context) {
      tfService.registeredfarms().then(response => {
        console.log('farms', response.data)
        context.commit('setRegisteredFarms', response.data.length)
        context.commit('setFarmsList', response.data)
      })
    }
  },
  mutations: {
    setRegistered3Bots(state, value) {
      state.registered3bots = value
    },
    setRegisteredFarms(state, value) {
      state.registeredFarms = value
    },
    setFarmsList(state, value) {
      state.farmsList = value
    },
    setNodesList(state, value) {
      state.nodesList = value
    },
    setOriginalNodesList(state, value) {
      state.originalNodesList = value
    },
    setCountriesFromNodes(state, value) {
      state.countries = uniqBy(value, node => node.location.country).length
    },
    setRUfromNodes(state, value) {
      state.cru = sumBy(value, node => node.total_resources.cru)
      state.mru = sumBy(value, node => node.total_resources.mru)
      state.sru = sumBy(value, node => node.total_resources.sru)
      state.hru = sumBy(value, node => node.total_resources.hru)
    },
    setNodesOnline(state, value) {
      state.onlinenodes = value.length
    }
  },
  getters: {
    registered3bots: (state) => state.registered3bots,
    registeredfarms: (state) => state.registeredFarms,
    farmslist: (state) => state.farmsList,
    nodeslist: (state) => state.nodesList,
    originalNodesList: (state) => state.originalNodesList,
    cru: (state) => state.cru,
    mru: (state) => state.mru,
    sru: (state) => state.sru,
    hru: (state) => state.hru,
    countries: (state) => state.countries,
    onlinenodes: (state) => state.onlinenodes
  }
})
