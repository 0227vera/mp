import http from './http'
import env from './env'

const urls = {
  getListData: `${env.api}/geturl`,
  postFormData: `${env.api}/posturl`
}

export const getListData = () => http.get({ url: urls.getListData })

export const postFormData = data => http.post({ url: urls.postFormData, data })
