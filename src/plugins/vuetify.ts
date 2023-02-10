// Styles
import 'vuetify/styles'

// Vuetify
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import type {ThemeDefinition} from "vuetify/vuetify";

/*
farbcodes:
grey 1: #f0f0f0
grey 2: #dcdcdc
grey 3: #bebebe
grey 4: #828282

black: #000000
yellow: #ffd700
*/

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000',
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    surface: '#FFF'
  },

}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      darkTheme
    }
  }
}
)
