import cascadePicker from './src/index.vue'

cascadePicker.install = function (Vue) {
  Vue.component(cascadePicker.name, cascadePicker)
}

export default cascadePicker 