const { notEmpty } = require('../utils.js')

module.exports = {
  description: '添加一个分包的完整结构以及引用',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '分包的name',
      validate: notEmpty('name')
    },
    {
      type: 'confirm',
      name: 'isNeedCom',
      message: '是否需要添加组件?',
      default: true
    },
    {
      type: 'confirm',
      name: 'isNeedService',
      message: '是否需要添加接口请求的统一格式?',
      default: true
    }
  ],
  actions: (data) => {
    const name = '{{ snakeCase name }}'
    const { isNeedCom, isNeedService } = data
    const actions = [
      {
        type: 'add',
        path: `src/subpackage/${name}/pages/index.mpx`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name,
          isNeedService
        }
      },
      {
        type: 'add',
        path: `src/subpackage/${name}/app.mpx`,
        templateFile: 'plop-templates/view/app.hbs',
        data: {
          name
        }
      },
      {
        type: 'append',
        path: 'src/app.mpx',
        pattern: /(\/\/ plop auto add subpackage import)/,
        template: `      "./subpackage/{{ snakeCase name }}/app.mpx?root={{ snakeCase name }}",`
      }
    ]
    if (isNeedCom) {
      actions.push({
        type: 'add',
        path: `src/subpackage/${name}/components/test-com.mpx`,
        templateFile: 'plop-templates/view/com.hbs'
      })
    }
    if (isNeedService) {
      actions.push({
        type: 'add',
        path: `src/services/${name}.js`,
        templateFile: 'plop-templates/view/service.hbs',
        data: {
          name
        }
      })
      actions.push({
        type: 'append',
        path: 'src/services/index.js',
        pattern: /(\/\/ plop auto add api import)/,
        template: `export * from './{{ snakeCase name }}'`
      })
    }

    return actions
  }
}
