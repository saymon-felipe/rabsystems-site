import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

if ($(document).length) {
  $(".nav-brand a, nav a").on("click", e => {

    e.preventDefault();

    let target = $(e.currentTarget.attributes.href.nodeValue);
    const scrollTop = $("body").scrollTop();
    let targetOffset = target.offset().top + scrollTop - 50;
    $('html, body').animate({scrollTop: targetOffset}, 700);
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
