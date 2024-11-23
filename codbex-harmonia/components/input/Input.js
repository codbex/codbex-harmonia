import { loadModule } from 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.9.5/dist/vue3-sfc-loader.esm.js'

import { options, prefix } from '../common/Common.js'

export const Input = Vue.defineAsyncComponent(() => loadModule(prefix + 'input/Input.vue', options));