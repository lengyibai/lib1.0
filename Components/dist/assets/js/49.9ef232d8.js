(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{491:function(i,e,t){},707:function(i,e,t){"use strict";t(491)},821:function(i,e,t){"use strict";t.r(e);var l={data:()=>({multiple:{files:[],isShow:!1}}),mounted(){setTimeout(()=>{this.$set(this.multiple,"files",[{fileName:"图片1",src:"http://lengyibai.gitee.io/img-bed/img/lyb.png"},{fileName:"图片2",src:"http://lengyibai.gitee.io/img-bed/img/lyb.png"},{fileName:"图片3",src:"http://lengyibai.gitee.io/img-bed/img/lyb.png"}]),this.multiple.isShow=!0},1e3)},methods:{MultipleFinish(i){console.warn(i)}}},s=(t(707),t(20)),n=Object(s.a)(l,(function(){var i=this,e=i._self._c;return e("div",{staticClass:"demo"},[e("h1"),i._v(" "),e("div",{staticClass:"box flex"},[i.multiple.isShow||i.multiple.files.length?e("Dynamic-UploadFile-index",{attrs:{files:i.multiple.files,id:"a",url:"https://jsonplaceholder.typicode.com/posts/"},on:{finish:i.MultipleFinish}}):e("span",[i._v("暂无图片")]),i._v(" "),i._l(i.multiple.files,(function(t,l){return e("p",{key:l},[i._v("\n      "+i._s(t)+"\n    ")])}))],2)])}),[],!1,null,"3d09682c",null);e.default=n.exports}}]);