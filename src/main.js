import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery';
import vuescroll from 'vuescroll';

Vue.config.productionTip = false;
Vue.component('vue-scroll', vuescroll);

new Vue({
  render: h => h(App),
}).$mount('#app')

if ($(document).length) {
  $(".nav-brand a, nav a").on("click", e => {

    e.preventDefault();

    let target = $(e.currentTarget.attributes.href.nodeValue);
    const scrollTop = $(".__panel").scrollTop();
    let targetOffset = target.offset().top + scrollTop - 50;
    $(".__panel").animate({
      scrollTop: targetOffset
    }, 700);
  });

  $("html, body").on("scroll", () => {
    let element = $(".go-up");
    if (document.body.scrollTop > 100) {
      element.css("display", "flex");
    } else {
      element.hide();
    }
  })
}
