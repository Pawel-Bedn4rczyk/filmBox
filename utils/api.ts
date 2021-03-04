import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Store } from 'vuex'
import VueI18n, { IVueI18n }  from 'vue-i18n'
import { createProxy } from 'vuex-class-component'
import { DashboardStore } from '@/store/dashboard'
import { SnackbarStore } from '@/store/snackbar'

interface RootStore {
  snackbar: SnackbarStore
  dashboard: DashboardStore
}

let $axios: NuxtAxiosInstance
let $i18n: VueI18n & IVueI18n
let $vxm: RootStore

export function axiosInit(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}
export function storeInit(store: Store<RootStore>) {
  $i18n = store.$i18n
  $vxm = {
    snackbar: createProxy(store, SnackbarStore),
    dashboard: createProxy(store, DashboardStore),
  }
}
export { $axios, $i18n, $vxm }
