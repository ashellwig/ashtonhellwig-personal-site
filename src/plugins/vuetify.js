import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const darkTheme = {
  primary: '#1B7872',
  accent: '#F48FB1',
  secondary: '#1B5678',
  success: '#66BB6A',
  info: '#2196F3',
  warning: '#FB8C00',
  error: '#C62828'
}

const lightTheme = {
  primary: '#1976D2',
  accent: '#e91e63',
  secondary: '#30b1dc',
  success: '#4CAF50',
  info: '#2196F3',
  warning: '#FB8C00',
  error: '#FF5252'
}

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: darkTheme,
      light: lightTheme
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'fa'
  }
})
