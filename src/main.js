import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/index.vue'
import Org from './components/org/org.vue'
import orgdashboard from './components/org/orgdashboard'
import createorg from './components/org/createorg'
import orglist from './components/org/orglist'
import auth from './components/auth/login'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(VueResource)

Vue.http.options.root= '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

var router = new VueRouter();

router.map(
  {

    '/index':{
      component: Index
    },
    '/auth':{
      component:auth
    },
    '/org': {
      component:Org,
      subRoutes: {
        '/dashboard': {
          component: orgdashboard
        },
        '/createorg': {
          component: createorg
        },
        '/orglist':{
          component: orglist
        }
      }
    }
  }
)



router.start(App,'#app');

