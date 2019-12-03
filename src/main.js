import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBlDIulrJ_QxpnDt7QiaT9dK0zcJ2Qz_N0",
  authDomain: "vue-calendar-a0209.firebaseapp.com",
  databaseURL: "https://vue-calendar-a0209.firebaseio.com",
  projectId: "vue-calendar-a0209",
  storageBucket: "vue-calendar-a0209.appspot.com",
  messagingSenderId: "1020109723597",
  appId: "1:1020109723597:web:bb1295af27814f77559684"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
