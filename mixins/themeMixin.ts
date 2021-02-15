import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  get darkThemeIsOn() {
    return this.$vuetify.theme.dark
  }
}
