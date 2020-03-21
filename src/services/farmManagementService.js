import Axios from 'axios'
import config from '../../public/config'

export default ({
  getFarms() {
    return Axios.get(`${config.tfApiUrl}farms`)
  },
  registerFarm(farm) {
    return Axios.post(`${config.tfApiUrl}farms`, {
      args: {
        farm
      }
    })
  },
  updateFarm(farm_id, farm) {
    return Axios.post(`${config.tfApiUrl}farms`, {
      args: {
        farm_id,
        farm
      }
    })
  }
})
