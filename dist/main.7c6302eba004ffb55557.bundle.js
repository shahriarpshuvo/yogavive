!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);var n,o=r(2),i=r(3),c=document.querySelector("#media-menu__nav-icon"),s=document.querySelector(".media-menu__icon use"),a=document.querySelector(".media-nav__container");c.addEventListener("click",(function(e){n?(s.setAttribute("xlink:href","images/icons/sprite.svg#menu"),n=!1):(s.setAttribute("xlink:href","images/icons/sprite.svg#cross"),n=!0),a.classList.toggle("media-nav__container--isVisible")}));var u=document.querySelector(".homepage"),d=document.querySelector(".header-nav__logo img"),l=document.querySelector(".header");u?(d.setAttribute("src",i),l.classList.add("header--home"),window.addEventListener("scroll",(function(){window.scrollY>400?(l.classList.add("header--scrolled"),l.classList.remove("header--home"),d.setAttribute("src",o)):(l.classList.add("header--home"),l.classList.remove("header--scrolled"),d.setAttribute("src",i))}))):l.classList.add("header--scrolled")},function(e,t,r){},function(e,t,r){e.exports=r.p+"images/logo.61b5eaa1b7082cf3ac955621a164aaeb.png"},function(e,t,r){e.exports=r.p+"images/logo-white.26226db5a4d13fb143494d421035d78d.png"}]);