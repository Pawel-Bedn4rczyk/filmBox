import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown
  }
}
