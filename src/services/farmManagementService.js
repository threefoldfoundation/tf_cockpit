import Axios from 'axios'
import config from '../../public/config'

export default ({
  getFarms () {
    return Axios.post(`${config.jsApiUrl}farms/list`)
  },
  registerFarm (farm) {
    return Axios.post(`${config.jsApiUrl}farms/register`, {
      args: {
        farm
      }
    })
  },
  updateFarm (farm_id, farm) {
    return Axios.post(`${config.jsApiUrl}farms/update`, {
      args: {
        farm_id,
        farm
      }
    })
  }
})
