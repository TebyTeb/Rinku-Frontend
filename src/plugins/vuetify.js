import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#DD7225',
        anchor: '#6C311B'
      },
      dark: {}
    }
  }
})
