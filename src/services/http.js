import mpx from '@mpxjs/core'

// NOTE: 设置拦截，如果有需要(比如说根据配置添加toast或者loading等)可以设置
mpx.xfetch.interceptors.request.use(function (config) {
  // 也可以返回promise
  return config
})
mpx.xfetch.interceptors.response.use(function (res) {
  // 也可以返回promise
  return res
})

class Http {
  commonRequest ({
    method,
    url,
    data = {},
    header = {}
  }) {
    return new Promise((resolve, reject) => {
      mpx.xfetch.fetch({
        method,
        url,
        data: { ...data },
        header: {
          'content-type': 'application/json',
          ...header
        }
      }).then(res => {
        // NOTE: 这个地方需要根据也业务自行做统一判断
        if (res?.code === 0 && res?.data) {
          resolve(res.data)
          return
        }
        reject(res)
      }).catch(err => reject(err))
    })
  }
  get ({ url, data, header }) {
    return this.commonRequest({ method: 'GET', url, data, header })
  }
  post ({ url, data, header }) {
    return this.commonRequest({ method: 'POST', url, data, header })
  }
}

export default new Http()
