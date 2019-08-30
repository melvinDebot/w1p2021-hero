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
<div class="back-Black">
    <!-- CONTAINT -->
    <div class="section-info">
        <h2>Ne ratez pas le prochain événement</h2>
        <div class="formulaire-info">
            <div class="info-1">
                <p>Nom</p>
                <input >
                <p>Prénom</p>
                <input>
            </div>
            <p class="top">Téléphone</p>
            <input  type="tel">
            <p class="top">Mail</p>
            <input  type="email">
            <p class="top"> Ville</p>
            <input>
            <a href="/">
                <button type="submit" class="submit">ENVOYEZ</button>
            </a>
        </div>
    </div>
    <!-- CONTAINT -->
    <div class="nav-button">
        <div class="nav__button">
        <div class="bar__button"></div>
        <a href="/singer">Chanteurs</a>
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
    .section-info{
        width: 100%;
        height: 100vh;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2{
            color: white;
            font-size: 36px;
            font-weight: bold;
        }
        .formulaire-info{
            margin-top: 40px;
            color: white;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 344px;
            padding-right: 10px;
            padding-left: 10px;
            .top{
                margin-top: 15px;
                margin-bottom: 10px;
            }
            .info-1{
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size: 17px;
                    line-height: 28px;
                }
            }
            input{
                border-radius: 3px;
                height: 28px;
                border: none;
            }
            p{
                font-size: 17px;
            }
            .submit{
                margin-top: 25px;
                text-align: center;
                width: 86px;
                height: 29px;
                border-radius: 3px;
                border: none;
            }
        }
    }
@media (max-width: 450px){
    .section-info{


        .formulaire-info{
            width: 100vw;
            padding: 0;
            height: 344px;
        }
    }
    p{
        font-size: 10px;
    }
}
</style>

