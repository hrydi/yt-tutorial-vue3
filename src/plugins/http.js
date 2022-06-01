export default {
  install: (app, options = {}) => {
    const http  = async (url, key = {}) => {
      try {
        const fetchOptions = Object.assign(options, key)
        const res = await fetch(`${url}`, fetchOptions)
        const isJSON = res.headers.get('content-type').indexOf('application/json') > -1
        if(!isJSON) throw new Error(`Invalid response type`)
        const json = await res.json()
        if(!res.ok) throw new Error(`${(json?.message ?? 'Request failed')}`)

        return Promise.resolve(json)
      } catch (e) {
        return Promise.reject(e)
      }
    }

    app.config.globalProperties.$http = http
    app.provide('http', http)
  }
}