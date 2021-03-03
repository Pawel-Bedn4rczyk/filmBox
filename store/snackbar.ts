import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
})
export default class SnackbarStore extends VuexModule {
  content = ''
  color = ''

  @Mutation
  showMessage(payload: any) {
    this.content = payload.content
    this.color = payload.color
  }
}
