import axios from 'axios'
import config from '../../public/config'
export default ({
  getRegisterd3Bots () {
    return axios.get(`${config.tfApiUrl}v1/dddd`)
  }
})
