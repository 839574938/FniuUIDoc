import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import './styles/index.css'
import ElementPlus from 'element-plus'
import FniuUI from 'fniu-ui'
import 'fniu-ui/lib/style.css'
import 'element-plus/dist/index.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ElementPlus)
    app.use(FniuUI)
    registerComponents(app)
  }
}
