import DhCard from '../components/DhCard/index.vue'
const components = [DhCard]
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}
