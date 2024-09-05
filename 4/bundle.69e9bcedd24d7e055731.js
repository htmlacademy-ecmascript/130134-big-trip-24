(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",d="quarter",u="year",c="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:o,d:a,D:c,h:r,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=h;var g=function(t){return t instanceof S},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},D=_;D.l=b,D.i=g,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function h(t){this.$L=b(t.locale,null,!0),this.parse(t)}var m=h.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,d=!!D.u(e)||e,p=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?i:i.endOf(a)},v=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return d?f(1,0):f(31,11);case l:return d?f(1,m):f(0,m+1);case o:var $=this.$locale().weekStart||0,g=(h<$?h+7:h)-$;return f(d?_-g:_+(6-g),m);case a:case c:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var o,d=D.p(t),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[c]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[d],v=d===a?this.$D+(e-this.$W):e;if(d===l||d===u){var h=this.clone().set(c,1);h.$d[f](v),h.init(),this.$d=h.set(c,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[D.p(t)]()},m.add=function(n,d){var c,p=this;n=Number(n);var f=D.p(d),v=function(t){var e=M(p);return D.w(e.date(e.date()+Math.round(t*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(c={},c[s]=t,c[r]=e,c[i]=1e3,c)[f]||1,m=this.$d.getTime()+n*h;return D.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,d=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},c=function(t){return D.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:u(n.monthsShort,o,d,3),MMMM:u(d,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:c(1),hh:c(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||h[t]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,c,p){var f,v=D.p(c),h=M(n),m=(h.utcOffset()-this.utcOffset())*t,_=this-h,y=D.m(this,h);return y=(f={},f[u]=y/12,f[l]=y,f[d]=y/3,f[o]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/e,f[s]=_/t,f[i]=_/1e3,f)[v]||_,p?y:D.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),w=S.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,S,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function e(t,e,n="beforeend"){e.insertAdjacentElement(n,t.getElement())}class i{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=n(484),a=n.n(r);function o(t=0,e=500){const n=Math.ceil(t),i=Math.floor(e);return Math.floor(Math.random()*(i-n)+n)}function l(t){return t[o(0,t.length)]}function d(t){return t?t[0].toUpperCase()+t.slice(1):""}function u(t,e){return t?a()(t).format(e):""}class c{constructor({point:t,offers:e}){this.point=t,this.offers=e}getTemplate(){return function(t,e){const n=d(t.type),i=u(t.dateStart,"YYYY-MM-DD"),s=u(t.dateStart,"MMM D"),r=u(t.dateStart,"YYYY-MM-DDTHH:MM"),o=u(t.dateStart,"HH:MM"),l=u(t.dateEnd,"YYYY-MM-DDTHH:MM"),c=u(t.dateEnd,"HH:MM"),p=(v=a()(l).diff(r,"m"),h=a()(l).diff(r,"d"),m=a()(l).diff(r,"h")%24,_=a()(l).diff(r,"m")%60,v<60?`${_.toString().padStart(2,"0")}M`:v<1440?`${m.toString().padStart(2,"0")}H ${_.toString().padStart(2,"0")}M`:`${h.toString().padStart(2,"0")}D ${m.toString().padStart(2,"0")}H ${_.toString().padStart(2,"0")}M`),f=function(){const n=e.find((e=>e.type===t.type)).offers.filter((e=>t.offers.includes(e.id)));return n.length?n.reduce(((t,e)=>t+`<li class="event__offer">\n                <span class="event__offer-title">${e.title}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${e.price}</span>\n              </li>`),""):""}();var v,h,m,_;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${i}">${s}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.type}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${n} ${t.destination}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${r}">${o}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${l}">${c}</time>\n          </p>\n          <p class="event__duration">${p}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${t.price}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${f}\n        </ul>\n        <button class="event__favorite-btn ${t.isFavorite?"event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.point,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const p=["taxi","bus","train","ship","drive","flight","checkIn","sightseeing","restaurant"],f=["Amsterdam","Geneva","Chamonix","Moscow","Tula","Krasnodar","Vladivostok","Samara"],v="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.".split(". "),h={id:1,type:"flight",destination:null,dateStart:new Date,dateEnd:new Date,price:"",isEdit:!1,isFavorite:!1,offers:[1]};class m{constructor({point:t=h,offers:e,destinations:n}){this.point=t,this.offers=e,this.destinations=n}getTemplate(){return function(t,e,n){const i=(s=t.type,p.reduce(((t,e)=>t+`<div class="event__type-item">\n        <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${e===s?"checked":""}>\n        <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${d(e)}</label>\n      </div>`),""));var s;const r=d(t.type),a=d(t.destination),o=function(t){return t.reduce(((t,e)=>t+`<option value="${d(e.destination)}"></option>`),"")}(n),l=u(t.dateStart,"DD/MM/YY HH:MM"),c=u(t.dateEnd,"DD/MM/YY HH:MM"),f=t.isEdit?'<button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>':'<button class="event__reset-btn" type="reset">Cancel</button>',v=function(t,e){const n=t.find((t=>t.type===e.type));return n.offers.length?`<section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              ${function(t,e){return t.reduce(((t,n)=>t+`<div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n.name}-1" type="checkbox" name="event-offer-${n.name}" ${e.includes(n.id)?"checked":""}>\n              <label class="event__offer-label" for="event-offer-${n.name}-1">\n                <span class="event__offer-title">${n.title}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${n.price}</span>\n              </label>\n            </div>`),"")}(n.offers,e.offers)}\n            </div>\n          </section>`:""}(e,t),h=function(t,e){const n=t.find((t=>t.destination===e));return n?`<section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${n.description}</p>\n              ${i=n.fotos,i.length?`<div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${i.reduce(((t,e)=>t+`<img class="event__photo" src="${e}" alt="Event photo">`),"")}\n        </div>\n      </div>`:""}\n            </section>`:"";var i}(n,t.destination);return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${i}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${r}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${o}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${l}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${c}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${t.price}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          ${f}\n        </header>\n        <section class="event__details">\n          ${v}\n\n          ${h}\n        </section>\n      </form>\n    </li>`}(this.point,this.offers,this.destinations)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}function _(){return l(v)}function y(t){return Array.from({length:o(1,t.length)},_).join(". ")}const $=[{destination:l(f),description:y(v),fotos:[]},{destination:l(f),description:y(v),fotos:[`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`]},{destination:l(f),description:y(v),fotos:[`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`]},{destination:l(f),description:y(v),fotos:[`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`,`https://loremflickr.com/248/152?random=${o()}`]}];function g(){return $}const b=g(),M=[{type:"taxi",offers:[{id:1,name:"comfort",title:"Switch to comfort class",price:5}]},{type:"bus",offers:[{id:1,name:"seats",title:"Choose seats",price:3}]},{type:"train",offers:[{id:1,name:"luggage",title:"Add luggage",price:30},{id:2,name:"meal",title:"Add meal",price:10}]},{type:"ship",offers:[{id:1,name:"seats",title:"Choose seats",price:3}]},{type:"drive",offers:[{id:1,name:"comfort",title:"Switch to comfort class",price:5}]},{type:"flight",offers:[{id:1,name:"luggage",title:"Add luggage",price:30},{id:2,name:"meal",title:"Add meal",price:10},{id:3,name:"seats",title:"Choose seats",price:3}]},{type:"checkIn",offers:[{id:1,name:"breakfast",title:"Add breakfast",price:7},{id:2,name:"time",title:"Choose time",price:5}]},{type:"sightseeing",offers:[{id:1,name:"guide",title:"Take guide",price:15}]},{type:"restaurant",offers:[{id:1,name:"table",title:"Choose table",price:5}]}],D=g(),S=[{id:1,type:l(p),destination:l(D).destination,dateStart:new Date("2024-12-10 12:00"),dateEnd:new Date("2024-12-11 13:11"),price:o(),isEdit:!1,isFavorite:!1,offers:[1]},{id:2,type:"flight",destination:l(D).destination,dateStart:new Date("2024-11-25 15:00"),dateEnd:new Date("2024-12-1 10:10"),price:o(),isEdit:!1,isFavorite:!1,offers:[1,2]},{id:3,type:l(p),destination:l(D).destination,dateStart:new Date("2024-11-10 15:30"),dateEnd:new Date("2024-11-11 13:00"),price:o(),isEdit:!0,isFavorite:!0,offers:[1]},{id:4,type:l(p),destination:l(D).destination,dateStart:new Date("2024-12-10 12:00"),dateEnd:new Date("2024-12-12 21:35"),price:o(),isEdit:!1,isFavorite:!1,offers:[1]},{id:5,type:l(p),destination:l(D).destination,dateStart:new Date("2024-10-30 08:20"),dateEnd:new Date("2024-11-01 23:05"),price:o(),isEdit:!1,isFavorite:!0,offers:[1]}];function w(){return l(S)}const E=document.querySelector(".trip-controls__filters"),O=document.querySelector(".trip-events"),k=new class{points=function(){return Array.from({length:5},w)}();getPoints(){return this.points}},C=new class{pointsListComponent=new s;mainContainer=null;pointsModel=null;constructor({boardContainer:t,pointsModel:e}){this.mainContainer=t,this.pointsModel=e}init(){this.points=[...this.pointsModel.getPoints()],e(new i,this.mainContainer),e(this.pointsListComponent,this.mainContainer),e(new m({point:this.points[40],offers:M,destinations:b}),this.pointsListComponent.getElement()),this.points.forEach((t=>{e(new c({point:t,offers:M}),this.pointsListComponent.getElement())}))}}({boardContainer:O,pointsModel:k});e(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},E),C.init()})()})();
//# sourceMappingURL=bundle.69e9bcedd24d7e055731.js.map