!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([function(t,n){},function(t,n,e){"use strict";function o(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var r=this,i=arguments,c=function(){n=null,o||t.apply(r,i)},u=o&&!n;clearTimeout(n),n=setTimeout(c,e),u&&t.apply(r,i)}}function r(){i.forEach(function(t){var n=window.scrollY+window.innerHeight-t.height/2,e=t.offsetTop+t.height,o=n>t.offsetTop,r=window.scrollY<e;o&&r?t.classList.add("active"):t.classList.remove("active")})}e(0);var i=document.querySelectorAll(".slide-in");window.addEventListener("scroll",o(r))}]);