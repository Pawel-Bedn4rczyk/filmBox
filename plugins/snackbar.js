export default ({ store }, inject) => {
  inject('snackbar', {
    showMessage({ content = '', color = '' }) {
      store.commit('snackbar/showMessage', { content, color })
    },
  })
}
