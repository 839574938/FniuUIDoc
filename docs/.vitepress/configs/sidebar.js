const { getPath } = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar()
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'C-Status 状态',
          link: '/components/status'
        },
        {
          text: 'C-Operate 操作',
          link: '/components/operate'
        },
        {
          text: 'C-Table 表格',
          link: '/components/table'
        },
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: '使用方式',
          link: '/guide/index'
        },
      ]
    }
  ]
}

