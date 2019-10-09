import axios from 'axios'
import config from '../../public/config'
export default ({
  registered3bots () {
    return axios.post(`${config.tfApiUrl}nodes/list`)
  },
  registeredfarms () {
    return axios.post(`${config.tfApiUrl}farms/list`)
  },
  getExplorerConstants () {
    return axios.get(`${config.tfExplorerUrl}`)
  },
  getExplorerBlockByHeight (height) {
    return axios.get(`${config.tfExplorerUrl}/blocks/${height}`)
  }
})
