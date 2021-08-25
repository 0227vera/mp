const { notEmpty } = require('../utils.js')

module.exports = {
  description: '添加一个组件的基本结构',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '全局组件名称',
      validate: notEmpty('name')
    }
  ],
  actions: (data) => {
    const name = '{{snakeCase name}}'
    const actions = [
      {
        type: 'add',
        path: 'src/components/{{snakeCase name}}/index.mpx',
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name
        }
      }
    ]

    return actions
  }
}
