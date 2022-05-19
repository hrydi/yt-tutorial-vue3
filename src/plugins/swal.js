import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export default {
  install: (app, options) => {
    const swal  = key => {
      const mixin = Swal.mixin(options)
      return new mixin(key)
    }
    app.config.globalProperties.$swal = swal
    app.provide('swal', swal)
  }
}