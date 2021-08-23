import VueLuxon from 'vue-luxon'

export default ({ app }, inject) => {
  inject('luxon', (() => VueLuxon.vueluxon())())
}
