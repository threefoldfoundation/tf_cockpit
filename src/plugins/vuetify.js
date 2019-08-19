import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/styles/main.sass'
import '@fortawesome/fontawesome-pro/css/all.css'
Vue.use(Vuetify)

export default new Vuetify({
  iconfont: 'fa',
  theme: {
    themes: {
      light: {
        primary: '#2469F2',
        primaryDark: '#1247B3',
        primaryDarker: '#0C2E73',
        secondary: '#16A085'
      }
    }
  }
})
