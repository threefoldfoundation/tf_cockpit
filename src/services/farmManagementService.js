import Axios from 'axios'
import config from '../../public/config'

export default ({
  getFarms () {
    return Axios.post(`${config.tfApiUrl}farms/list`)
  },
  registerFarm (farm) {
    return Axios.post(`${config.tfApiUrl}farms/register`, {
      args: {
        farm
      }
    })
  },
  updateFarm (farm_id, farm) {
    return Axios.post(`${config.tfApiUrl}farms/update`, {
      args: {
        farm_id,
        farm
      }
    })
  }
})
