<template>
  <div class="main">
    <a href="/home">
      <div class="logo">
        <div class="logo-header">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </a>
    <div class="slider"></div>
    <div class="back-Black">
      <!-- NAV -->
      <div class="nav-button">
        <div class="nav__button">
          <div class="bar__button"></div>
          <a href="/singer">Chanteurs</a>
        </div>
        <div class="nav__button2">
          <router-link to="/info">Info</router-link>
          <div class="bar__button"></div>
        </div>
      </div>
        <!-- LINE MUSIC -->
        <div class="line-music">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none"  fill="none" stroke="blue">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="wavies">
            <use xlink:href="#gentle-wave" x="50" y="0" fill="#none" stroke="purple"/>
            <use xlink:href="#gentle-wave" x="50" y="3" fill="#none" stroke="1F2DA8"/> 
            </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>


