<template>
  <div id="app">
    <transition name="router-transition">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Orbitron";
  src: local("Orbitron"), url(./fonts/Orbitron.ttf) format("truetype");
}

@font-face {
  font-family: "Orbitron-ExtraBold";
  src: local("Orbitron-ExtraBold"),
    url(./fonts/Orbitron-ExtraBold.ttf) format("truetype");
}

@font-face {
  font-family: "Orbitron-Bold";
  src: local("Orbitron-Bold"), url(./fonts/Orbitron-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "ShoppingScript";
  src: local("ShoppingScript"),
    url(./fonts/ShoppingScript.ttf) format("truetype");
}

@font-face {
  font-family: "Jura-Medium";
  src: local("Jura-Medium"), url(./fonts/Jura-Medium.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Orbitron";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.page {
  position: fixed;
  width: inherit;
  overflow: auto;
}

.router-transition-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-transition-leave-active {
  animation: going 1s;
}

@keyframes going {
  to {
    opacity: 0;
  }
}

@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes grow1 {
  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes grow2 {

  50% {
    transform: scale(1.01);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes glitch-1 {
  0% {
    clip: rect(132px, auto, 101px, 30px);
    opacity: 1;
  }
  5% {
    clip: rect(17px, auto, 94px, 30px);
  }
  10% {
    clip: rect(40px, auto, 66px, 30px);
  }
  15% {
    clip: rect(87px, auto, 82px, 30px);
  }
  20% {
    clip: rect(137px, auto, 61px, 30px);
  }
  25% {
    clip: rect(34px, auto, 14px, 30px);
  }
  30% {
    clip: rect(133px, auto, 74px, 30px);
  }
  35% {
    clip: rect(76px, auto, 107px, 30px);
  }
  40% {
    clip: rect(59px, auto, 130px, 30px);
  }
  45% {
    clip: rect(29px, auto, 84px, 30px);
  }
  50% {
    clip: rect(22px, auto, 67px, 30px);
  }
  55% {
    clip: rect(67px, auto, 62px, 30px);
  }
  60% {
    clip: rect(10px, auto, 105px, 30px);
  }
  65% {
    clip: rect(78px, auto, 115px, 30px);
  }
  70% {
    clip: rect(105px, auto, 13px, 30px);
  }
  75% {
    clip: rect(15px, auto, 75px, 30px);
  }
  80% {
    clip: rect(66px, auto, 39px, 30px);
  }
  85% {
    clip: rect(133px, auto, 73px, 30px);
  }
  90% {
    clip: rect(36px, auto, 128px, 30px);
  }
  95% {
    clip: rect(68px, auto, 103px, 30px);
  }
  100% {
    clip: rect(14px, auto, 100px, 30px);
  }
}

@keyframes glitch-2 {
  0% {
    clip: rect(129px, auto, 36px, 30px);
    opacity: 1;
  }
  5% {
    clip: rect(36px, auto, 4px, 30px);
  }
  10% {
    clip: rect(85px, auto, 66px, 30px);
  }
  15% {
    clip: rect(91px, auto, 91px, 30px);
  }
  20% {
    clip: rect(148px, auto, 138px, 30px);
  }
  25% {
    clip: rect(38px, auto, 122px, 30px);
  }
  30% {
    clip: rect(69px, auto, 54px, 30px);
  }
  35% {
    clip: rect(98px, auto, 71px, 30px);
  }
  40% {
    clip: rect(146px, auto, 34px, 30px);
  }
  45% {
    clip: rect(134px, auto, 43px, 30px);
  }
  50% {
    clip: rect(102px, auto, 80px, 30px);
  }
  55% {
    clip: rect(119px, auto, 44px, 30px);
  }
  60% {
    clip: rect(106px, auto, 99px, 30px);
  }
  65% {
    clip: rect(141px, auto, 74px, 30px);
  }
  70% {
    clip: rect(20px, auto, 78px, 30px);
  }
  75% {
    clip: rect(133px, auto, 79px, 30px);
  }
  80% {
    clip: rect(78px, auto, 52px, 30px);
  }
  85% {
    clip: rect(35px, auto, 39px, 30px);
  }
  90% {
    clip: rect(67px, auto, 70px, 30px);
  }
  95% {
    clip: rect(71px, auto, 103px, 30px);
  }
  100% {
    clip: rect(83px, auto, 40px, 30px);
  }
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

img {
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
}

.carousel {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 10, 10);
  display: table;
  transition: all 0.5s ease;  

  img {
    width: 90%;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.next,
.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  transition: 0.5s ease;
}

.next {
  right: 30px;
}

.next:hover {
  transform: translateY(-50%) translateX(2px);
}

.prev:hover {
  transform: translateY(-50%) translateX(-2px);
}

.prev {
  left: 30px;
}

.close {
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  right: 30px;
  top: 30px;
  transition: 0.5s ease;
}

.close:hover {
  transform: scale(1.12)
}

.carousel-enter {
  opacity: 0;
}
.carousel-leave-active {
  opacity: 0;
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}
.carousel-enter-active {
  animation: bounce-in 1s;
}
.carousel-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>
