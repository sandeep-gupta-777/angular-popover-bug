(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{FJCi:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e("mrSG"),o=e("fdbx"),c=e("6blF"),a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i=function(){function n(){}return n.prototype.transform=function(n,t){var e;for(var r in"no_channel"===t?e=a({},n.fulfillment_provider_details,n.ccsp_details):"only_channel"===t&&(e=a({},n.channels)),e)try{e[r].enabled||delete e[r]}catch(n){console.log(n)}if(Object.keys(e)&&0!==Object.keys(e).length)return this.app$.map(function(n){try{var t=n.masterIntegrationList;return Object.keys(e).map(function(n){return t.find(function(t){return t.unique_name.toUpperCase()===n.toUpperCase()})})}catch(n){console.log(n)}})},Object(r.b)([Object(o.f)(),Object(r.d)("design:type",c.a)],n.prototype,"app$",void 0),n}()}}]);