# 安装

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install fniu-ui --save

# Yarn
$ yarn add fniu-ui

# pnpm
$ pnpm install fniu-ui
```

```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import FniuUI from 'fniu-ui'
import 'fniu-ui/lib/style.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(FniuUI)
app.mount('#app')

```
