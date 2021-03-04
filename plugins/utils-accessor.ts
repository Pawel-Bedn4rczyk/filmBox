import { Plugin } from '@nuxt/types'
import { axiosInit, storeInit } from '@/utils/api'

const accessor: Plugin = ({ $axios, store }) => {
  axiosInit($axios)
  storeInit(store)
}

export default accessor
