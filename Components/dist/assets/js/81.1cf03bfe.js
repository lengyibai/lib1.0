(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{501:function(t,e,n){},717:function(t,e,n){"use strict";n(501)},827:function(t,e,n){"use strict";n.r(e);var s={data:()=>({box:[],boxs:{0:[[1,4,1,1],[1,2,2,1],[3,2,2,1],[1,2,3,1],[3,2,3,1],[1,4,4,1],[1,4,5,1]],500:[[1,1,1,2],[1,2,3,1],[1,3,4,1],[2,2,1,1],[3,1,3,1],[3,1,2,1],[2,1,2,1]],800:[[1,1,1,2],[2,1,1,3],[1,1,3,1],[1,3,4,1],[4,1,2,3],[3,2,1,1],[3,1,2,2]],1200:[[1,2,1,1],[3,1,1,2],[4,1,1,1],[1,1,2,2],[2,1,2,1],[2,3,3,1],[4,1,2,1]]}}),mounted(){this.fn(),window.addEventListener("resize",this.fn)},methods:{fn(){Object.keys(this.boxs).forEach(t=>{document.documentElement.clientWidth>Number(t)&&(this.box=this.boxs[t])})}},beforeDestroy(){window.removeEventListener("resize",this.fn)}},i=(n(717),n(20)),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("transition-group",{staticClass:"grid"},t._l(t.box,(function(n,s){return e("Static-GridNumber-index",{key:s,staticClass:"LibGridNumber",attrs:{x:n[0],countX:n[1],y:n[2],countY:n[3]}},[t._v("\n    "+t._s(s)+"\n  ")])})),1)}),[],!1,null,"4c093eec",null);e.default=o.exports}}]);