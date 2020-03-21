import axios from 'axios'
import config from '../../public/config'
export default ({
  registered3bots() {
    return axios.get(`${config.tfApiUrl}nodes?size=1000`)
  },
  registeredfarms() {
    return axios.get(`${config.tfApiUrl}farms?size=1000`)
  },
  news() {
    return axios.get(`${config.tfApiUrl}news`)
  },
  getExplorerConstants() {
    return axios.get(`${config.tfExplorerUrl}`)
  },
  getExplorerBlockByHeight(height) {
    return axios.get(`${config.tfExplorerUrl}/blocks/${height}`)
  }
})
