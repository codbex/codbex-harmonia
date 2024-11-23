import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js'

import { options, prefix } from '../common/Common.js'

export const RadioButton = Vue.defineAsyncComponent(() => loadModule(prefix + 'radio/RadioButton.vue', options));