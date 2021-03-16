import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
  configure
} from 'vee-validate'
import {
  TW,
  messages
} from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('zh_TW', TW)
