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
        <h1>Le son que <br>vous aimez</h1>
        <br />
        <router-link class="button-header" to="/page">Découvrir</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>
