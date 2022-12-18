import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import VueGoogleCharts from 'vue-google-charts/legacy' // importo VGC

Vue.use(Vuetify)
Vue.use(VueGoogleCharts) // uso VGC

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#DD7225',
        anchor: '#6C311B',
        backLight: '#F1F1F1'
      },
      dark: {}
    }
  }
})
