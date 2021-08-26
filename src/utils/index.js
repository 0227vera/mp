import mpx from '@mpxjs/core'
import apiProxy from '@mpxjs/api-proxy'
import mpxFetch from '@mpxjs/fetch'

export const globalSet = () => {
  mpx.use(mpxFetch)
  mpx.use(apiProxy, { usePromise: true })
}
