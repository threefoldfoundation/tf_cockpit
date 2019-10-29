import Vue from 'vue'
import Vuex from 'vuex'
import transactionStore from './transaction'
import farmManagementStore from './farmManagementStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transactionStore,
    farmManagementStore
  }
})
