(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return c})),s.d(e,"a",(function(){return u}));var i=s(109),r=s(33),n=s(79),h=s(343),o=(s(199),s(6),s(353),s(17),s(18),s(110),s(111),s(34),s(344),s(186),s(347),s(114),s(345),s(112),["#","s","t","k","p","w","h","r","a","o","*","-","e","u","F","R","P","B","L","G","T","S","D","Z"]),a=function(t){return Object(h.a)(Object(h.a)(Object(h.a)({"#":t?{x:0,y:0,w:10,h:t,rounded:!1}:null,s:{x:0,y:t,w:1,h:2,rounded:!0},"*":{x:4,y:t,w:1,h:2,rounded:!0}},function(t){return["t","p","h","","F","P","L","T","D"].reduce((function(e,s,i){return s&&(e[s]={x:i+1,y:t,w:1,h:1,rounded:!1}),e}),{})}(t)),function(t){return["k","w","r","","R","B","G","S","Z"].reduce((function(e,s,i){return s&&(e[s]={x:i+1,y:1+t,w:1,h:1,rounded:!0}),e}),{})}(t)),function(t){return["a","o","e","u"].reduce((function(e,s,i){return s&&(e[s]={x:i+2.25+(i>=2?.5:0),y:2+t,w:1,h:1,rounded:!0}),e}),{})}(t))},c=a(.55),u=a(0),l=new Map([["1","s"],["2","t"],["3","p"],["4","h"],["5","a"],["0","o"],["6","f"],["7","p"],["8","l"],["9","t"]]),p=new Map([["nt","spw"],["ch","kh"],["j","skwr"],["v","sr"],["z","stkpw"],["g","tkpw"],["d","tk"],["n","tph"],["f","tp"],["x","kp"],["c","kr"],["y","kwr"],["q","kw"],["b","pw"],["m","ph"],["l","hr"]]),f=new Map([["oo","ao"],["ii","aoeu"],["uu","aou"],["aa","aeu"],["ee","aoe"],["i","eu"]]),d=new Map([["ch","fp"],["shn","gs"],["sh","rb"],["j","pblg"],["n","pb"],["x","bgs"],["k","bg"],["m","pl"],["v","*f"]]),y=/\d|#/,k=/(#?j?v?(?:nt)?s?z?g?f?t?x?c?k?d?n?m?b?p?y?q?w?h?r?l?)((?:a?o?e?u?i?\*?-?)+)((?:sh)?(?:ch)?v?f?r?n?m?j?p?k?x?b?l?g?t?s?d?z?)/,v=function(){function t(e){var s=this;Object(r.a)(this,t),this.isValid=!1,e=e.toLowerCase(),o.reduce((function(t,e){return t[e]=!1,t}),this);var i=t.normalizeStroke(e);i&&(i.left.split("").forEach((function(t){t=t.toLowerCase(),-1!==o.indexOf(t)&&(s[t]=!0,s.isValid=!0)})),i.mid.split("").forEach((function(t){t=t.toLowerCase(),-1!==o.indexOf(t)&&(s[t]=!0,s.isValid=!0)})),i.right.split("").forEach((function(t){t=t.toUpperCase(),-1!==o.indexOf(t)&&(s[t]=!0,s.isValid=!0)})),["a","o","e","u","*"].every((function(t){return!s[t]}))&&(this["-"]=!0))}return Object(n.a)(t,[{key:"toString",value:function(){var t=this;return o.reduce((function(e,s){return t[s]?e+s.toUpperCase():e}),"")}},{key:"fingerPositions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.55,e=function(t,e){return t===e?1:t?.5:1.48},s=function(t,e){return t===e?1:t?.5:1.5};return[{x:.5,y:t+1,pressed:this.s,yCrack:!0},{x:1.5,y:t+e(this.t,this.k),pressed:this.t||this.k,yCrack:this.t===this.k},{x:2.5,y:t+e(this.p,this.w),pressed:this.p||this.w,yCrack:this.p===this.w},{x:3.5,y:t+e(this.h,this.r),pressed:this.h||this.r,yCrack:this.h===this.r},{x:2.25+s(this.a,this.o),y:t+2.47,pressed:this.a||this.o,xCrack:this.a===this.o},{x:4.75+s(this.e,this.u),y:t+2.47,pressed:this.e||this.u,xCrack:this.e===this.u},{x:this["*"]?4+s(this["*"],this.F||this.R):5.5,y:t+e(this.F,this.R),pressed:this.F||this.R||this["*"],xCrack:(this.F||this.R)&&this["*"],yCrack:this.F===this.R},{x:6.5,y:t+e(this.P,this.B),pressed:this.P||this.B,yCrack:this.P===this.B},{x:7.5,y:t+e(this.L,this.G),pressed:this.L||this.G,yCrack:this.L===this.G},{x:this.D||this.Z?8+s(this.T||this.S,this.D||this.Z):8.5,y:t+e(this.T||this.D,this.S||this.Z),pressed:this.T||this.S||this.D||this.Z,yCrack:this.T===this.S||this.D===this.Z,xCrack:this.T&&this.D||this.S&&this.Z}]}}],[{key:"replaceShortcuts",value:function(t,e){return t.forEach((function(t,s){e=e.replace(s,t)})),e}},{key:"normalizeStroke",value:function(e){if(!(e=e?e.trim():null))return null;var s=y.test(e);s&&(e=t.replaceShortcuts(l,e));var r=e.split(k);if(5!==r.length)return!1;var n=Object(i.a)(r,4),h=n[1],o=n[2],a=n[3];return h=t.replaceShortcuts(p,h),o=t.replaceShortcuts(f,o),a=t.replaceShortcuts(d,a),{left:(s?"#":"")+h.toUpperCase().replace("#",""),mid:o.toUpperCase(),right:a.toUpperCase()}}}]),t}();e.d=v},379:function(t,e,s){},419:function(t,e,s){"use strict";s(379)},434:function(t,e,s){"use strict";s.r(e);s(82),s(55),s(6),s(349),s(186);var i=s(352),r=s(418),n=s.n(r),h={props:{labels:{type:i.d,required:!0},stroke:{type:i.d,required:!0},compact:{type:Boolean,default:!1},fingers:{type:Boolean,default:!1}},data:function(){return{unit:50,aspectRatio:1.2}},computed:{svgInfo:function(){return this.compact?this.getSvgInfo(i.a):this.getSvgInfo(i.c)}},methods:{getSvgInfo:function(t){var e=this.$data.unit,s=this.$data.aspectRatio,r=e/2,h=this.compact?e/10:e/25,o=this.compact?e/20:e/10,a=t.a.y+1,c=Math.ceil(t.a.y),u=t.D.x+1,l=Math.ceil(t.D.x),p=a*e*s+(c+2)*o,f=u*e+(l+2)*o,d={stroke:"currentColor",strokeWidth:"".concat(h,"px"),fillOpacity:0,height:"auto"},y={strokeWidth:0,fill:"currentColor",fillOpacity:1,fontSize:"25px"},k=this.$props.stroke.fingerPositions(this.compact?0:void 0).map((function(t,i){var r=t.x,n=t.y,h=t.pressed,a=t.xCrack,c=t.yCrack,u=4===i?r+.75:5===i?r-.75:r;return{x:r*e+o*Math.ceil(u)+(a?o/2:0),y:n*e*s+o*Math.ceil(n)+(c?o/2:0),pressed:h}}));return{strokeWidth:h,svgWidth:f,svgHeight:p,svgStyle:d,svgKeys:i.b.map((function(i){var h=t[i];if(!h)return null;var a=h.w>1?parseInt(h.w-1)*o:0,c=-1!==["e","u"].indexOf(i)?1:0,u=h.x*e+o*(Math.ceil(h.x+1)-c),l=h.y*e*s+o*Math.ceil(h.y+1),p=n()().to(u,l).rel().hline(h.w*e+a),f=h.h>1?parseInt(h.h-1)*o:0;return{key:i,keyPath:h.rounded?p.vline(h.h*e*s-r+f).arc(r*h.w,r,0,0,1,-h.w*e,0).close().str():p.vline(h.h*e*s+f).hline(-h.w*e-a).close().str(),letterStyle:y,x:u+h.w*e/2,y:l+h.h*e*s/2-(h.rounded&&1===h.h?r/7:0)}})).filter((function(t){return t})),svgFingers:k,letterStyle:y}}}},o=(s(419),s(54)),a=Object(o.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{stenoLayout:!0,compact:t.compact}},[s("svg",{style:t.svgInfo.svgStyle,attrs:{viewBox:"0 0 "+t.svgInfo.svgWidth+" "+t.svgInfo.svgHeight,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t._l(t.svgInfo.svgKeys,(function(e){return s("g",{key:e.key},[s("path",{staticClass:"steno-key",class:{pressed:!!t.stroke[e.key]},attrs:{fill:"currentColor",d:e.keyPath}})])})),t._v(" "),t.fingers?t._l(t.svgInfo.svgFingers,(function(t,e){return s("circle",{key:e,class:{pressed:t.pressed},attrs:{r:"20",cx:t.x,cy:t.y}})})):t._e(),t._v(" "),t._l(t.svgInfo.svgKeys,(function(e){return s("g",{key:"text-"+e.key},[t.labels[e.key]?s("text",{style:t.svgInfo.letterStyle,attrs:{"text-anchor":"middle","dominant-baseline":"central",x:e.x,y:e.y}},[t._v("\n        "+t._s(e.key.toUpperCase())+"\n      ")]):t._e()])}))],2)])}),[],!1,null,"740d7010",null);e.default=a.exports}}]);