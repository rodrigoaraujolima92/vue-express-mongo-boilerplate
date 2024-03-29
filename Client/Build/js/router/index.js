import Router from 'vue-router';
import Vue from 'vue';
import Home from '@/views/Home';
import Feeds from '@/views/Feeds';

Vue.use(Router);

const routes = [
  { 
    path: '/',
    redirect: `/dashboard`,
    name: 'Dashboard',
    component: Home,
    children: [ 
      {
        path: '/dashboard',
        name: 'Home'
      }
    ]
  },
  { 
    path: '/feeds',
    name: 'Feeds',
    component: Feeds
  },
  { 
    path: '/sources',
    name: 'Sources',
    component: Home
  }
];
const router = new Router({
  routes
  // mode: 'history'
});

router.beforeEach(function (to,from, next) {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (nearestWithMeta) {
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));
  }
  
  next();
})
export default router;
