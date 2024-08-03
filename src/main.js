import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery';
import vuescroll from 'vuescroll';
import router from "./routes/router.js";

Vue.config.productionTip = false;
Vue.component('vue-scroll', vuescroll);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

if ($(document).length) {
  $("nav a").on("click", e => {

    e.preventDefault();

    let component = $(e.currentTarget.attributes.href.nodeValue);
    const scrollTop = $(".__panel").scrollTop();
    let targetOffset = component.offset().top + scrollTop - 150;
    $(".__panel").animate({
        scrollTop: targetOffset
    }, 700);
  });

  $(".__panel").on("scroll", () => {
    let element = $(".go-up");
    if ($(".__panel").scrollTop() > 100) {
      element.css("display", "flex");
    } else {
      element.hide();
    }
  })
}
