<template>
  <div class="big-header">
    <div class="logo">
      <div class="logo-header">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <transition name="fade" appear>
      <div class="title-header">
        <h1>GOSPEL<br>SPIRIT</h1>
        <br />
        <router-link class="button-header" to="/page">Découvrir</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import TweenMax from "gsap"
export default {
  data() {
    return {
      
    };
  },

  

};
</script>
