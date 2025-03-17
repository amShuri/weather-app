(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rajdhani&family=Quicksand);"]),i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(\n    180deg,\n    rgb(132, 187, 221) 0%,\n    rgba(173, 216, 230, 1) 50%,\n    rgb(226, 247, 255) 100%\n  );\n  font-family: 'Quicksand', sans-serif;\n\n  margin: 0 auto;\n  min-height: 100vh;\n  max-width: 1200px;\n  padding: 0 1.5rem;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2,\nnav,\ninput,\nbutton {\n  font-family: 'Rajdhani', sans-serif;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n[aria-hidden='true'] {\n  display: none;\n}\n\n/* Start Search Input & Button Styles */\ninput,\ninput + button {\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  height: 2.8rem;\n}\n\ninput {\n  background-color: rgba(255, 255, 255, 0.85);\n  border: 2px solid rgba(20, 60, 90, 0.5);\n  color: rgb(0, 58, 93);\n  outline: none;\n  padding: 0 1rem;\n}\n\ninput:focus {\n  background-color: rgba(255, 255, 255, 1);\n  border-color: #003a5d;\n  box-shadow: 0 4px 8px rgba(0, 58, 93, 0.2);\n}\n\ninput + button {\n  background: linear-gradient(180deg, #003a5d, #005580);\n  border: none;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0 1.25rem;\n}\n\ninput + button:hover {\n  background: linear-gradient(180deg, #005580, #0077a8);\n  box-shadow: 0 4px 8px rgba(0, 58, 93, 0.3);\n}\n\ninput + button:active {\n  transform: scale(0.95);\n}\n/* End Search Input & Button Styles*/\n\n/* Start General Styles */\n.main-title,\n.location-name {\n  color: rgb(1, 65, 105);\n}\n\n.location-name {\n  font-size: 1.85rem;\n  margin: 0.75rem 0;\n  font-weight: 400;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 3px;\n}\n/* End General Styles */\n\n/* Start Card Styles */\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n\n.card {\n  background-color: rgba(240, 248, 255, 0.85);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 1rem;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card-title,\n.card-details {\n  text-align: center;\n}\n\n.card-img {\n  width: 150px;\n  height: 150px;\n}\n\n.card-title {\n  background-color: rgba(173, 216, 230, 0.4);\n  text-transform: uppercase;\n  padding: 0.45rem 0;\n  width: 100%;\n  color: #004466;\n  font-weight: bold;\n}\n\n.card-condition {\n  font-size: 0.85rem;\n  margin-bottom: 0.45rem;\n  text-transform: capitalize;\n  color: #004466;\n}\n\n.card-details {\n  color: #003366;\n  padding: 0.45rem 0;\n}\n\n.card-details .temperature {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 0.25rem;\n}\n\n.card-details .date {\n  font-size: 1.15rem;\n}\n/* End Card Styles */\n\n/* Start Utilities */\n.separator {\n  width: 80%;\n  height: 1px;\n  background-color: rgba(173, 200, 230, 0.75);\n}\n\n.italic {\n  font-style: italic;\n}\n\n.underline {\n  text-decoration: underline;\n}\n/* End Utilities */\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),g=t.n(f),m=t(208),h={};function v(n){const e=new Date(n);return{day:e.toLocaleDateString(void 0,{day:"numeric"}),weekday:e.toLocaleDateString(void 0,{weekday:"long"}),month:e.toLocaleDateString(void 0,{month:"long"})}}h.styleTagTransform=g(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),a()(m.A,h),m.A&&m.A.locals&&m.A.locals;const b={"clear-day":t.p+"2909a175d21b0bc0a0c5.svg","clear-night":t.p+"cc5c9e4da17d8f345e59.svg",cloudy:t.p+"73c058e1e92399013d7c.svg",fog:t.p+"45e3ebaab41ea3a91900.svg",hail:t.p+"0f9625b8654f0867a0c7.svg","partly-cloudy-day":t.p+"ea586e392a42a659bbeb.svg","partly-cloudy-night":t.p+"9b2375a9ce70c22ba993.svg","rain-snow-showers-day":t.p+"b7b708c4d31c9ee57958.svg","rain-snow-showers-night":t.p+"234932b8463f83a70a16.svg","rain-snow":t.p+"c87aeec760927f1ee555.svg",rain:t.p+"bb1a2bbd4f9a77310902.svg","showers-day":t.p+"724fdae4c6d8a247aca8.svg","showers-night":t.p+"9db951ccfd3cee584cfc.svg",sleet:t.p+"ccdf57f0dcfbd97aa60a.svg","snow-showers-day":t.p+"0fb3d091ec6a01dbab13.svg","snow-showers-night":t.p+"9fe6a7e3ee777fd5d18e.svg",snow:t.p+"7b5c4da6db9fa38052a6.svg","thunder-rain":t.p+"ed8ba2278ab5ce39ad97.svg","thunder-showers-day":t.p+"cf2f560fa53ddceb4611.svg","thunder-showers-night":t.p+"c70c6b3f72506fdc0d5a.svg",thunder:t.p+"6a24fbf79af9bcc1ac0d.svg",wind:t.p+"9cb5f330e4d8f7ec5630.svg"},y=document.getElementById("location-name"),x=document.getElementById("card-container");document.querySelector("form").addEventListener("submit",(async function(n){n.preventDefault();const e=document.querySelector("form > input");if(e.validity.valueMissing)return e.setCustomValidity("You must enter a location."),void e.reportValidity();const t=await async function(n){const e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=F93ZWDVSZHMGXQAFLLBC3MQ7E&contentType=json`;try{const n=await fetch(e);return function(n){const e=n.days.slice(1,8).map((n=>({temp:n.temp,icon:n.icon,datetime:v(n.datetime)}))),[t,r,a,o,i,c,s]=e;return{address:n.resolvedAddress.split(",")[0],dayOne:t,dayTwo:r,dayThree:a,dayFour:o,dayFive:i,daySix:c,daySeven:s}}(await n.json())}catch(n){console.log(n)}}(e.value);if(!t)return e.setCustomValidity(`'${e.value}' is not a valid location.`),void e.reportValidity();!function(n){y.textContent="Location: "+n.address,x.innerHTML="",Object.entries(n).forEach((([n,e])=>{if("address"===n)return;const t=e.icon,r=e.icon.replaceAll("-"," "),a=e.temp,o=e.datetime.day,i=e.datetime.weekday,c=e.datetime.month;x.insertAdjacentHTML("beforeend",`\n          <div class="card">\n            <h2 class="card-title">${i}</h2>\n\n            <img \n              class="card-img"\n              src="${b[t]}"\n              width="150"\n              height="150"\n            >\n            <p class="card-condition">${r}</p>\n\n\n            <div class="separator"></div>\n\n            <div class="card-details">\n              <p class="temperature">${a}ºC</p>\n              <p class="date">${c} ${o}</p>\n            </div>\n\n          </div>\n        `)}))}(t),e.setCustomValidity(""),e.value="",e.focus()}))})();