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
      type: 'input',
      name: 'isNeedCom',
      message: '此分页是否需要添加组件',
      default: true
    }
  ],
  actions: (data) => {
    const name = '{{ snakeCase name }}'
    const { isNeedCom } = data
    const actions = [
      {
        type: 'add',
        path: `src/subpackage/${name}/pages/index.mpx`,
        templateFile: 'plop-templates/view/index.hbs',
        data: {
          name: name
        }
      },
      {
        type: 'add',
        path: `src/subpackage/${name}/app.mpx`,
        templateFile: 'plop-templates/view/app.hbs',
        data: {
          name: name
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

    return actions
  }
}
