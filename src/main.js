
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue'

Vue.use(VueRouter);

const routes=[
  {path: '/', component:Home},
  {path: '/about', component:About}
]

const router= new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
