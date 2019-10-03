import axios from 'axios'
import config from '../../public/config'
export default ({
  registered3bots () {
    return axios.post(`${config.tfApiUrl}nodes/list`)
  }
})
