<template>
<div class="main">
    <a href="/">
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
    <div class="back-Black">
      <!-- Text -->
      <h2 class="text-singerr">CLIQUEZ SUR LES BULLES</h2>
      <!-- BALL -->
      <div id="singer-one">
      <div id="singer-ball" @click="show = !show">
        <transition name="bounce">
          <div class="desc" v-if="show" >
            <div class="singer-img">
              <img src="/assets/src/cross.svg" alt="cross" class="cross"/>
            </div>
            <p>turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus est in tuto locata praefecti. deinde cibo abunde perlato castra die praedicto sunt mota.turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus</p>
          </div>
        </transition>
      </div>
    </div>
    <div id="singer-ball-2">
      <div id="singer" @click="seen = !seen">
        <transition name="bounce">
          <div class="text" v-if="seen">
            <div class="singer-img-2">
              <img src="/assets/src/cross.svg" alt="cross" class="cross"/>
            </div>
            <p>turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus est in tuto locata praefecti. deinde cibo abunde perlato castra die praedicto sunt mota.turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus</p>
          </div>
        </transition>
      </div>
    </div>

    
    <!-- BALL -->
      <div class="nav-button">
          <div class="nav__button">
          <div class="bar__button"></div>
            <a href="/info">Info</a>
          </div>
        <div class="nav__button2">
            <router-link to="/concert">Concert</router-link>
            <div class="bar__button"></div>
        </div>
      </div>
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

    
    
</template>

<style lang="scss">
  #singer{
    width: 100px;
    height: 100px;
    border-radius: 64px;
    background-color: red;
    position: absolute;
    top: 40%;
    left: 30%;
  }
  .singer-img-2{
    width: 100%;
    height: 150px;
    background-color: red;
  }
  #singer-one{
    position: absolute;
    top: 20%;
    left: 50%;
  }
  #singer-ball{
    width: 100px;
    height: 100px;
    border-radius: 64px;
    background-color: #E828A6;
  }
  .text{
    width: 301px;
    height: 362px;
    background-color: white;
  }
  .desc{
    width: 301px;
    height: 362px;
    background-color: white;
  }

  .singer-img{
    width: 100%;
    height: 150px;
    background-color: #E828A6;

  }
  .cross{
      width: 20px;
      height: 20px;
      margin-right: 10px;
      margin-top: 10px;
      float: right;
    }
  .desc p {
    margin-top: 20px;
    margin-left: 6px;
  }
  @media (max-width:500px){
    #singer-one{
      width: 50%;
      height: 100vh;
    }
    #singer-ball{
      width: 60px;
      height: 60px;
    }
    #singer{
      width: 60px;
      height: 60px;
    }
    .text{
      width: 100VW;
      height: 100vh;
      position: absolute;
      top: 105%;
      left: 126%;
      z-index: 100;
      transform: translate(-50%, -50%);
      .singer-img-2{
        height: 250px;
      }
    }
    .desc{
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 30%;
      left: 0%;
      z-index: 100;
      transform: translate(-50%, -50%);
      .singer-img{
        height: 250px;
      }
    }
  }
</style>


<script>
export default {
  name: 'singer-ball, singer',
  data (){
    return {
      show: false,
      seen: false
    }
  }
};
</script>