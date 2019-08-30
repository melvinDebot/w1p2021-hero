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
    <!-- CONTAINT -->
    <div id="containt">
        <div id="carrousel">
            <carousel>
                <carousel-slide></carousel-slide>
            </carousel>
        </div>
        <div class="containt-text">
            <h2>Vivre par la photo</h2>
            <p>turbulentos seditionum concitores occultius distributo et tumor <strong>consenuit</strong> et salus est in tuto locata praefecti. <br>deinde cibo abunde perlato die <strong>castra</strong> sunt mota. <br>turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus est in tuto locata praefecti.deinde cibo abunde perlato castra die  concitores occultius distributo et tumor <strong>consenuit</strong> et salus est in tuto locata praefecti. <br><br>deinde cibo abunde perlato diepraedicto concitores occultius distributo et tumor <strong>consenuit</strong> et salus est in tuto locata praefecti. <br>deinde cibo abunde perlato diesunt mota.</p>
            <p>praefecti. deinde cibo abunde perlato castra die praedicto sunt mota.</p>
        </div>
    </div>
<!-- CONTAINT -->
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
#containt{
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 100;
    #carrousel{
    width: 656px;
    height: 382px;
    border: 1px solid orange;
    }
    .containt-text{
        width: 409px;
        height: 408px;
        h2{
            font-size: 38px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        p{
            font-size: 17px;
            margin-bottom: 20px;
            strong{
                color: #2869E8;
            }
        }

    }
}

@media (max-width: 900px){
    #containt{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #carrousel{
            width: 100%;
            height: 240px;
            margin-top: 55px;
        }
        .containt-text{
            width: 100%;
            h2{
                font-size: 30px;
                text-align: center;
                margin-bottom: 15px
            }
            p{
                font-size: 15px;
            }
        }
    }
}
</style>

<script>
export default {
    
}
</script>
