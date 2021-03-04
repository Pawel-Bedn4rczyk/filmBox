import {
  createModule,
  mutation,
  extractVuexModule,
} from 'vuex-class-component'
import { Snackbar } from '@/interfaces/commons.ts'
import { SnackbarTypes } from '@/enums/enums.ts'
import { TranslateResult, LocaleMessage } from "vue-i18n";

export class SnackbarStore extends createModule ({
  namespaced: 'snackbar',
  target: 'nuxt',
}){
  private _snackbar:Snackbar = { type: SnackbarTypes.SUCCESS, text: ''}
  public $watch: (arg: string, func: () => void) => void = () => {}

  get text():TranslateResult | LocaleMessage {
    return this._snackbar.text
  }

  get type():SnackbarTypes {
    return this._snackbar.type
  }

  @mutation
  setSnack(snackbar:Snackbar):void {
    this._snackbar = snackbar
  }
}
const extractedVuexModule = extractVuexModule(SnackbarStore)
export default extractedVuexModule.snackbar
