import Vue from "vue";
import Router from "vue-router";

import Landingpage from "../components/landingpage/landingpage.vue";
import Zelda from "../components/zelda/zelda.vue";
import Amiibo from "../components/amiibo/amiibo.vue";
import About from "../components/about/about.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {path: "/", component: Landingpage, name: "Home"},
    {path: "/zelda", component: Zelda, name: "Zelda"},
    {path: "/amiibo", component: Amiibo, name: "Amiibo"},
    {path: "/about", component: About, name: "About"}
  ]
});
