import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
export default {
  install: (app, options) => {
    const swal = key => {
      const alert = Swal.mixin(options)
      return new alert(key)
    }

    app.config.globalProperties.$swal = swal
    app.provide('swal', swal)
  }
}