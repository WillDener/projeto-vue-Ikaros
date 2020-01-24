import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import store from './store';
import BootstrapVue from '../node_modules/bootstrap-vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use (BootstrapVue);
Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAOiHOZsc6dlMdMyVYPTcf8TOVNYJCEcBw",
  authDomain: "ikaros-4280c.firebaseapp.com",
  databaseURL: "https://ikaros-4280c.firebaseio.com",
  projectId: "ikaros-4280c",
  storageBucket: "ikaros-4280c.appspot.com",
  messagingSenderId: "129480421835",
  appId: "1:129480421835:web:11adf98c6be2d7b874c64e"
};
var con = firebase.initializeApp (config);

export const db = firebase.firestore (con);

let app = '';
firebase.auth ().onAuthStateChanged (() => {
  if (!app) {
    app = new Vue ({
      router,
      store,
      render: h => h (App),
    }).$mount ('#app');
  }
});
