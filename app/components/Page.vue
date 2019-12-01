<template>
  <div class="main">
    <div class="logo">
      <div class="logo-header">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="main-singer">
      <a href="/singer"><h2>CHANTEURS</h2></a>
    </div>
    <div class="main-concert">
      <a href="/concert"><h2>CONCERT</h2></a>
    </div>
    <div class="main-info">
      <a href="/info"><h2>INFO</h2></a>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'
export default {
    mounted : function () {
    var tl = new TimelineMax({});
    tl.to('.main-singer', 1, {
      y: 0
    }, 'start')
    .fromTo('.main-concert', 1, {
      y: '-100%'
    }, {
      y:0
    }, 'start+=0.1')
    .fromTo('.main-info', 1, {
      y: '-100%'
    }, {
      y:0
    }, 'start+=0.2')
  }
};
</script>