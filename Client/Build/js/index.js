// Get vue
import Vue from 'vue';
// Get vue router
import router from './router';
// Get the main template
import App from './App.vue';
// Get the default layout template
import Default from './layouts/Default.vue';
// Import the vuex store
import store from './store';
// default layout template
Vue.component('default-layout', Default);

// Init the vue instance
new Vue({
    // Add the routes to the instance
    router,
    // Add the vuex store to the instance
    store,
    // Load the vue instance into the element with the id app
    el: '#app',
    render: h => h(App)
  });