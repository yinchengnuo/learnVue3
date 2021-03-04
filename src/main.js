import * as vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

console.log(vue) // vue 变成了一个对象

vue.createApp(App).use(store).use(router).use({
  install (app) {
    app.config.globalProperties.console = console
  }
}).mount('#app')
