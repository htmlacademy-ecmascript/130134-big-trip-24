(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",g={};g[_]=v;var $=function(t){return t instanceof w},b=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},M=y;M.l=b,M.i=$,M.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return C(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<C(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,c=!!M.u(e)||e,p=M.p(t),f=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},h=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case a:var g=this.$locale().weekStart||0,$=(v<g?v+7:v)-g;return f(c?y-$:y+(6-$),m);case o:case d:return h(_+"Hours",0);case r:return h(_+"Minutes",1);case s:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,c=M.p(t),p="set"+(this.$u?"UTC":""),f=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[u]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],h=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(n,c){var d,p=this;n=Number(n);var f=M.p(c),h=function(t){var e=C(p);return M.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===o)return h(1);if(f===a)return h(7);var v=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(t,e){return e||v[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,h=M.p(d),v=C(n),m=(v.utcOffset()-this.utcOffset())*t,y=this-v,_=M.m(this,v);return _=(f={},f[u]=_/12,f[l]=_,f[c]=_/3,f[a]=(y-m)/6048e5,f[o]=(y-m)/864e5,f[r]=y/e,f[s]=y/t,f[i]=y/1e3,f)[h]||y,p?_:M.a(_)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=w.prototype;return C.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,w,C),t.$i=!0),C},C.locale=b,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=g[_],C.Ls=g,C.p={},C}()},607:function(t){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isBetween=function(t,e,i,s){var r=n(t),o=n(e),a="("===(s=s||"()")[0],l=")"===s[1];return(a?this.isAfter(r,i):!this.isBefore(r,i))&&(l?this.isBefore(o,i):!this.isAfter(o,i))||(a?this.isBefore(r,i):!this.isAfter(r,i))&&(l?this.isAfter(o,i):!this.isBefore(o,i))}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=s(f,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),p=n.n(d),f=n(10),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v="shake";class m{#t=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),t?.()}),600)}}function y(t,e,n="beforeend"){if(!(t instanceof m))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function _(t,e){if(!(t instanceof m&&e instanceof m))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function g(t){if(null!==t){if(!(t instanceof m))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var $=n(484),b=n.n($);function C(t=0,e=500){const n=Math.ceil(t),i=Math.floor(e);return Math.floor(Math.random()*(i-n)+n)}function M(t){return t[C(0,t.length)]}function w(t){return t?t[0].toUpperCase()+t.slice(1):""}function S(t,e){return t?b()(t).format(e):""}function D(t,e){return t.map((t=>t.id===e.id?e:t))}class E extends m{#e=[];constructor(){super()}get template(){return this.#e,'<p class="trip-events__msg">Click New Event to create your first point</p>'}}const A=["taxi","bus","train","ship","drive","flight","checkIn","sightseeing","restaurant"],k=["Amsterdam","Geneva","Chamonix","Moscow","Tula","Krasnodar","Vladivostok","Samara"],T="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.".split(". "),P="everything",x="future",F="present",H="past",L={DEFAULT:{name:"day",isEnabled:!0},EVENT:{name:"event",isEnabled:!1},TIME:{name:"time",isEnabled:!0},PRICE:{name:"price",isEnabled:!0},OFFER:{name:"offer",isEnabled:!1}};class O extends m{#n=null;#i=null;constructor({currentSort:t,onSortTypeChange:e}){super(),this.#n=e,this.#i=t,this.element.addEventListener("change",this.#s)}get template(){return t=this.#i,`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${function(t,e){return Object.values(t).reduce(((t,n)=>t+`<div class="trip-sort__item  trip-sort__item--${n.name}">\n        <input id="sort-${n.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${n.name}" ${n.isEnabled?"":"disabled"}  ${n.name===e?"checked":""}>\n        <label class="trip-sort__btn" for="sort-${n.name}">${"offer"===n.name?`${w(n.name)}s`:w(n.name)}</label>\n      </div>`),"")}(L,t)}\n\n    </form>`;var t}#s=t=>{const e=t.target.value.slice(5);this.#n(e)}}class Y extends m{get template(){return'<ul class="trip-events__list"></ul>'}}class B extends m{#r=[];#o=[];#a=[];#l=null;#c=null;constructor({point:t,offers:e,destinations:n,onEditClick:i,onFavoriteClick:s}){super(),this.#r=t,this.#o=e,this.#a=n,this.#l=i,this.#c=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#u),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#d)}get template(){return function(t,e,n){const i=function(t,e){return w(t.find((t=>t.id===e)).name)}(n,t.destination),s=S(t.dateFrom,"YYYY-MM-DD"),r=S(t.dateFrom,"MMM D"),o=S(t.dateFrom,"YYYY-MM-DDTHH:MM"),a=S(t.dateFrom,"HH:MM"),l=S(t.dateTo,"YYYY-MM-DDTHH:MM"),c=S(t.dateTo,"HH:MM"),u=function(t,e){const n=b()(e).diff(t,"m"),i=b()(e).diff(t,"d"),s=b()(e).diff(t,"h")%24,r=b()(e).diff(t,"m")%60;return n<60?`${r.toString().padStart(2,"0")}M`:n<1440?`${s.toString().padStart(2,"0")}H ${r.toString().padStart(2,"0")}M`:`${i.toString().padStart(2,"0")}D ${s.toString().padStart(2,"0")}H ${r.toString().padStart(2,"0")}M`}(o,l),d=function(t,e){const n=t.find((t=>t.type===e.type)).offers.filter((t=>e.offers.includes(t.id)));return n.length>0?n.reduce(((t,e)=>t+`<li class="event__offer">\n              <span class="event__offer-title">${e.title}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${e.price}</span>\n            </li>`),""):""}(e,t);return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${s}">${r}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${w(t.type)} ${i}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${o}">${a}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${l}">${c}</time>\n          </p>\n          <p class="event__duration">${u}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t.basePrice}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${d}\n        </ul>\n        <button class="event__favorite-btn ${t.isFavorite?"event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.#r,this.#o,this.#a)}#u=t=>{t.preventDefault(),this.#l()};#d=t=>{t.preventDefault(),this.#c()}}const I={id:null,dateFrom:new Date,dateTo:new Date,basePrice:"",destination:null,isFavorite:!1,offers:[1],type:"flight"};class N extends m{#r=[];#o=[];#a=[];#p=null;#f=null;constructor({point:t=I,offers:e,destinations:n,onFormSubmit:i,onCloseClick:s}){super(),this.#r=t,this.#o=e,this.#a=n,this.#p=i,this.#f=s,this.element.querySelector(".event--edit").addEventListener("submit",this.#h),null!==this.#r.id&&this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#v)}get template(){return function(t,e,n){const i=function(t,e){const n=t.find((t=>t.id===e));return void 0!==n?w(n.name):""}(n,t.destination),s=function(t,e){return e.reduce(((e,n)=>e+`<div class="event__type-item">\n        <input id="event-type-${n.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n.type}" ${n.type===t?"checked":""}>\n        <label class="event__type-label  event__type-label--${n.type}" for="event-type-${n.type}-1">${w(n.type)}</label>\n      </div>`),"")}(t.type,e),r=function(t){return t.reduce(((t,e)=>t+`<option value="${w(e.name)}"></option>`),"")}(n),o=null!==t.id?'<button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>':'<button class="event__reset-btn" type="reset">Cancel</button>',a=function(t,e){const n=t.find((t=>t.type===e.type));return 0===n.offers.length?"":`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${function(t,e){return t.reduce(((t,n)=>t+`<div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n.id}-1" type="checkbox" name="event-offer-${n.id}" ${e.includes(n.id)?"checked":""}>\n              <label class="event__offer-label" for="event-offer-${n.id}-1">\n                <span class="event__offer-title">${n.title}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${n.price}</span>\n              </label>\n            </div>`),"")}(n.offers,e.offers)}\n            </div>\n          </section>`}(e,t),l=function(t,e){const n=t.find((t=>t.id===e));return"undefined"!==!!n?`<section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${n.description}</p>\n              ${i=n.pictures,0===i.length?"":`<div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${i.reduce(((t,e)=>t+`<img class="event__photo" src="${e.src}" alt="Event photo">`),"")}\n      </div>\n    </div>`}\n            </section>`:"";var i}(n,t.destination),c=S(t.dateFrom,"DD/MM/YY HH:MM"),u=S(t.dateTo,"DD/MM/YY HH:MM");return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${s}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${w(t.type)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${i}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${r}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${c}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${u}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${t.basePrice}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          ${o}\n        </header>\n        <section class="event__details">\n          ${a}\n\n          ${l}\n        </section>\n      </form>\n    </li>`}(this.#r,this.#o,this.#a)}#h=t=>{t.preventDefault(),this.#p(this.#r)};#v=t=>{t.preventDefault(),this.#f()}}const q="DEFAULT",j="EDITING";class U{#m=null;#y=null;#_=null;#g=null;#r=null;#$=null;#b=q;constructor({pointsListContainer:t,onDataChange:e,onModeChange:n}){this.#_=t,this.#g=e,this.#$=n}init(t,e,n){this.#r=t;const i=this.#m,s=this.#y;this.#m=new B({point:this.#r,offers:e,destinations:n,onEditClick:this.#l,onFavoriteClick:this.#c}),this.#y=new N({point:this.#r,offers:e,destinations:n,onFormSubmit:this.#p,onCloseClick:this.#f}),null!==i&&null!==s?(this.#b===q&&_(this.#m,i),this.#b===j&&_(this.#y,s),g(i),g(s)):y(this.#m,this.#_)}destroy(){g(this.#m),g(this.#y)}resetView(){this.#b!==q&&this.#C()}#M(){_(this.#y,this.#m),this.#$(),this.#b=j,document.addEventListener("keydown",this.#w)}#C(){_(this.#m,this.#y),this.#b=q,document.removeEventListener("keydown",this.#w)}#p=t=>{this.#g(t),this.#C()};#l=()=>{this.#M()};#w=t=>{"Escape"===t.key&&(t.preventDefault(),this.#C())};#f=()=>{this.#C()};#c=()=>{this.#g({...this.#r,isFavorite:!this.#r.isFavorite})}}function W(t,e){const n=b()(t.dateTo).diff(b()(t.dateFrom));return b()(e.dateTo).diff(b()(e.dateFrom))-n}function R(t,e){return e.basePrice-t.basePrice}let V=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[t]];return e};const Z=[{basePrice:C(),dateFrom:new Date("2024-12-10 12:00"),dateTo:new Date("2024-12-11 13:11"),destination:1,isFavorite:!1,offers:["2a","1a","4a"],type:M(A)},{basePrice:C(),dateFrom:new Date("2024-9-25 12:10"),dateTo:new Date("2024-12-1 10:10"),destination:2,isFavorite:!1,offers:["2a","1a","3a"],type:"flight"},{basePrice:C(),dateFrom:new Date("2024-08-10 15:30"),dateTo:new Date("2024-09-11 13:00"),destination:3,isFavorite:!0,offers:["2a","5a","8a"],type:M(A)},{basePrice:C(),dateFrom:new Date("2024-12-10 12:00"),dateTo:new Date("2024-12-12 21:35"),destination:4,isFavorite:!1,offers:["2a","1a","3a","6a","7a"],type:M(A)},{basePrice:C(),dateFrom:new Date("2024-10-30 08:20"),dateTo:new Date("2024-11-01 23:05"),destination:5,isFavorite:!0,offers:["2a","1a"],type:M(A)}];function z(){return{id:V(),...M(Z)}}const J=[{type:"taxi",offers:[{id:"1a",title:"Switch to comfort class",price:5}]},{type:"bus",offers:[{id:"2a",title:"Choose seats",price:3}]},{type:"train",offers:[{id:"3a",title:"Add luggage",price:30},{id:"4a",title:"Add meal",price:10}]},{type:"ship",offers:[]},{type:"drive",offers:[{id:"1a",title:"Switch to comfort class",price:5}]},{type:"flight",offers:[{id:"3a",title:"Add luggage",price:30},{id:"4a",title:"Add meal",price:10},{id:"2a",title:"Choose seats",price:3}]},{type:"checkIn",offers:[{id:"5a",title:"Add breakfast",price:7},{id:"6a",title:"Choose time",price:5}]},{type:"sightseeing",offers:[{id:"7a",title:"Take guide",price:15}]},{type:"restaurant",offers:[{id:"8a",title:"Choose table",price:120}]}];function X(){return M(T)}function K(){return{src:`https://loremflickr.com/248/152?random=${C()}`,description:"parliament building"}}var G=n(607),Q=n.n(G);b().extend(Q());const tt={[P]:t=>t,[x]:t=>t.filter((t=>function(t){return t&&b()().isBefore(t.date_from,"D")}(t))),[F]:t=>t.filter((t=>function(t){return t&&b()().isBetween(t.date_from,t.date_to,"D","[]")}(t))),[H]:t=>t.filter((t=>function(t){return t&&b()().isAfter(t.date_to,"D")}(t)))},et=document.querySelector(".trip-controls__filters"),nt=document.querySelector(".trip-events"),it=new class{#S=function(){return Array.from({length:5},z)}();#o=function(){return J}();#a=function(){return k.map(((t,e)=>function(t,e){return{id:e+1,description:(n=T,Array.from({length:C(1,n.length)},X).join(". ")),name:t,pictures:Array.from({length:C(0,5)},K)};var n}(t,e)))}();get points(){return this.#S}get offers(){return this.#o}get destinations(){return this.#a}},st=new class{#D=new Y;#E=new E;#A=null;#k=null;#T=null;#P=new Map;#x=L.DEFAULT.name;#F=[];#S=[];#o=[];#a=[];constructor({boardContainer:t,pointsModel:e}){this.#k=t,this.#T=e}init(){this.#F=[...this.#T.points],this.#S=[...this.#T.points],this.#o=[...this.#T.offers],this.#a=[...this.#T.destinations],this.#H()}#$=()=>{this.#P.forEach((t=>t.resetView()))};#L=t=>{this.#S=D(this.#S,t),this.#F=D(this.#F,t),this.#P.get(t.id).init(t,this.#o,this.#a)};#H(){0!==this.#S.length?(this.#O(),this.#Y()):this.#B()}#I(t){const e=new U({pointsListContainer:this.#D.element,onDataChange:this.#L,onModeChange:this.#$});e.init(t,this.#o,this.#a),this.#P.set(t.id,e)}#B(){y(this.#E,this.#k)}#N(t){switch(t){case L.TIME.name:this.#S.sort(W);break;case L.PRICE.name:this.#S.sort(R);break;default:this.#S=[...this.#F]}this.#x=t}#n=t=>{this.#x!==t&&(this.#N(t),g(this.#A),this.#O(),this.#q(),this.#Y())};#O(){this.#A=new O({currentSort:this.#x,onSortTypeChange:this.#n}),y(this.#A,this.#k)}#Y(){y(this.#D,this.#k),this.#S.forEach((t=>{this.#I(t)}))}#q(){this.#P.forEach((t=>t.destroy())),this.#P.clear()}}({boardContainer:nt,pointsModel:it}),rt=(ot=it.points,Object.entries(tt).map((([t,e],n)=>({id:n+1,type:t,count:e(ot).length}))));var ot;y(new class extends m{#e=[];constructor({filters:t}){super(),this.#e=t}get template(){return function(t){return`<form class="trip-filters" action="#" method="get">\n      ${e=t,e.reduce(((t,e,n)=>t+`<div class="trip-filters__filter">\n        <input id="filter-${e.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e.type}" ${0===n?"checked":""} ${0===e.count?"disabled":""}>\n        <label class="trip-filters__filter-label" for="filter-${e.type}">${w(e.type)}</label>\n      </div>`),"")}\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`;var e}(this.#e)}}({filters:rt}),et),st.init()})()})();
//# sourceMappingURL=bundle.cdb72ed415b5307ddc58.js.map