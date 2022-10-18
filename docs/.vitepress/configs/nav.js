const { getPath } = require('./utils')

module.exports = [
  { text: '文档', link: '/guide/' },
  { text: '组件', link: '/components/status', activeMatch: getPath('^/components/') },
  // { text: 'API 参考', link: '/api/' },
]
