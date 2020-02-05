!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(2)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(a):n.push(r[c]={id:c,parts:[a]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],c=0;if(i){for(i.refs++;c<i.parts.length;c++)i.parts[c](r.parts[c]);for(;c<r.parts.length;c++)i.parts.push(v(r.parts[c],e))}else{for(var a=[];c<r.parts.length;c++)a.push(v(r.parts[c],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=c(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,_=0;function v(t,e){var n,r,o;if(e.singleton){var i=_++;n=m||(m=s(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=a(t,e);return u(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var c=n[i],s=o[c.id];s&&(s.refs--,r.push(s))}t&&u(a(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},function(t,e,n){"use strict";n.r(e);var r=function(){return fetch("../assets/data/data.json").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.log("Error: ",t)}))},o=function(t){var e=document.querySelector(".products__list"),n="";t.forEach((function(t){n+='\n         <li class="products__item">\n            <img class="products__image" src="assets/'.concat(t.img,'" width="240" height="240" alt="product">\n            <div class="products__description">\n               <h3 class="products__title">').concat(t.title,'</h3>\n               <p class="products__price">').concat(t.price,' $</p>\n            </div>\n            <button class="button__btn button__btn--products-buy" data-id=').concat(t.id,">Buy</button>\n         </li>\n         "),e.innerHTML=n}))},i=function(t,e){return t.filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}))},c=function(t,e){return"All"===e?t:t.filter((function(t){return t.company===e}))},a=function(){var t=document.querySelector(".cart__backdrop"),e=document.querySelector(".cart__products-cart");t.classList.add("cart__transparentBackground"),e.classList.add("cart__showCart")},u=function(){var t=document.querySelector(".cart__backdrop"),e=document.querySelector(".cart__products-cart");t.classList.remove("cart__transparentBackground"),e.classList.remove("cart__showCart")},s=function(t){document.querySelector(".cart__products-list").innerHTML+='\n      <li class="cart__item">\n         <img class="cart__image" src="assets/'.concat(t.img,'" width="150" height="150" alt="product">\n         <div class="cart__wrapper">\n            <div class="cart__header">\n               <h3 class="cart__header-title">').concat(t.title,'</h3>\n               <span class="cart__remove-item" data-id=').concat(t.id,'>X</span>\n            </div>\n            <div class="cart__info">\n               <div>\n                  <h2 class="cart__label">Quantity</h2>\n                  <div class="cart__amount">\n                     <p class="cart__item-minus" data-id=').concat(t.id,'>-</p>\n                     <p class="cart__item-amount">').concat(t.amount,'</p>\n                     <p class="cart__item-plus" data-id=').concat(t.id,'>+</p>\n                  </div>\n               </div>\n               <div class="cart__price-info">\n                  <h2 class="cart__label">Price</h2>\n                  <p class="cart__price">').concat(t.price," $</p>\n               </div>\n            </div>\n         </div>\n      </li>\n   ")},l=function(t){var e=document.querySelector(".cart__total"),n=document.querySelector(".cart-button__items"),r=0,o=0;t.map((function(t){r+=t.price*t.amount,o+=t.amount})),e.innerText=r,n.innerText=o};function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(t){var e=document.querySelector(".cart__products-list"),n=d(document.querySelectorAll(".button__btn--products-buy"));for(t.map((function(t){return t.id})).forEach((function(e){t=t.filter((function(t){return t.id!==e})),l(t)}));e.children.length>0;)e.removeChild(e.children[0]);return n.forEach((function(t){t.disabled=!1,t.innerText="Buy"})),t},p=function(t,e,n){e=e.filter((function(e){return e.id!==t})),l(e);var r=n.find((function(e){return e.dataset.id===t}));return r&&(r.disabled=!1,r.innerText="Buy"),e},m=function(t){var e=document.querySelector(".cart__title"),n=document.querySelector(".cart__footer");t.length>0?(e.innerText="My cart",n.style.display=""):(e.innerText="Cart is empty",n.style.display="none")},_=function(){var t=document.querySelector(".products__list"),e=document.querySelector(".products__main-title h1");t.hasChildNodes()?e.innerHTML="Products":e.innerHTML="No results"};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(t){var e=document.querySelector(".search"),n=document.querySelectorAll(".brand-filter__company"),r=document.querySelector(".cart-button"),d=document.querySelectorAll(".cart__close, .cart__backdrop"),y=document.querySelector(".button__btn--clear-cart"),g=document.querySelector(".products__list"),S=document.querySelector(".cart__products-list"),O="",j="All",w=[],E=[],L=function(){var e=h(document.querySelectorAll(".button__btn--products-buy"));E=e,m(w),e.forEach((function(e){var n=e.dataset.id;w.find((function(t){return t.id===n}))&&(e.innerText="In сart",e.disabled=!0),e.addEventListener("click",(function(n){n.target.innerText="In сart",n.target.disabled=!0;var r=e.dataset.id,o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.find((function(t){return t.id===r})),{amount:1});w=[].concat(h(w),[o]),s(o),l(w),m(w)}))}))};e.addEventListener("keyup",(function(e){O=e.target.value.trim();var n=i(c(t,j),O);if(0===n.length)for(;g.firstChild;)g.removeChild(g.firstChild);o(n),_(),L()})),n.forEach((function(e){e.addEventListener("click",(function(){j=e.dataset.company;var n=c(i(t,O),j);o(n),L()}))})),r.addEventListener("click",(function(){return a()})),d.forEach((function(t){t.addEventListener("click",(function(){u()}))})),y.addEventListener("click",(function(){w=f(w,E),m(w)})),S.addEventListener("click",(function(t){if(t.target.classList.contains("cart__remove-item")){var e=t.target,n=e.dataset.id,r=e.closest(".cart__item");S&&S.removeChild(r),w=p(n,w,E),m(w)}else if(t.target.classList.contains("cart__item-plus")){var o=t.target,i=o.dataset.id,c=w.find((function(t){return t.id===i}));c.amount=c.amount+1,l(w),o.previousElementSibling.innerText=c.amount}else if(t.target.classList.contains("cart__item-minus")){var a=t.target,u=a.dataset.id,s=w.find((function(t){return t.id===u}));if(s.amount=s.amount-1,l(w),a.nextElementSibling.innerText=s.amount,s.amount>0)l(w);else{var d=a.closest(".cart__item");S.removeChild(d),w=p(u,w,E),m(w)}}})),L()};document.addEventListener("DOMContentLoaded",(function(){r().then((function(t){o(t),y(t)}))}));n(0)}]);