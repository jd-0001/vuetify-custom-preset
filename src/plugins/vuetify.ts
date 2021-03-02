import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import preset from '@/@core/custom-preset/preset'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'md',
  },
})
