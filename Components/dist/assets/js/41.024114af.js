(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{472:function(t,e,n){},688:function(t,e,n){"use strict";n(472)},800:function(t,e,n){"use strict";n.r(e);var a={name:"demo",data:()=>({name:"translate4",time:"0.5",into:"1",once:!1,toggle:!0}),watch:{once(){this.toggle=!1,setTimeout(()=>{this.toggle=!0})}},methods:{blur(t){this.name=t.target.value},animate(t){t.style.transform="rotate(360deg) scale(5)"}}},i=(n(688),n(20)),o=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"demo"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入动画库里的动画名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"text",placeholder:"请输入动画时长"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.into,expression:"into"}],attrs:{type:"text",placeholder:"滚动到几倍自身大小显示"},domProps:{value:t.into},on:{input:function(e){e.target.composing||(t.into=e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn",on:{click:function(e){t.once=!t.once}}},[t._v("\n    点击切换为"+t._s(t.once?"重复播放":"播放一次")+"\n  ")]),t._v(" "),t.toggle?e("Dynamic-ScrollInto-index",{staticClass:"LibScrollInto",attrs:{animate:{name:t.name,into:t.into,time:t.time},once:t.once}},[e("div",{staticClass:"fill"}),t._v(" "),e("h1",[t._v("由父组件决定"),e("br"),t._v("(左上角输入框)")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",[e("div",{staticClass:"box a"})]),t._v(" "),e("h1",[t._v("从小到大")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",{attrs:{animate:{name:"scale1",time:.5,into:.25}}},[e("div",{staticClass:"box b"})]),t._v(" "),e("h1",[t._v("从大到小")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",{attrs:{animate:{name:"scale2",time:.5,into:.5}}},[e("div",{staticClass:"box c"})]),t._v(" "),e("h1",[t._v("从左到右顺时针")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",{attrs:{animate:{name:"mixedTR5",time:.5,into:.75}}},[e("div",{staticClass:"box d"})]),t._v(" "),e("h1",[t._v("从右到左逆时针")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",{attrs:{animate:{name:"mixedTR6",time:.5,into:1}}},[e("div",{staticClass:"box e"})]),t._v(" "),e("h1",[t._v("自定义动画")]),t._v(" "),e("Dynamic-ScrollInto-IntoBox-index",{attrs:{animate:{name:t.animate,time:3,into:2}}},[e("div",{staticClass:"box f"})]),t._v(" "),e("div",{staticClass:"fill"})],1):t._e()],1)}),[],!1,null,"2662cfce",null);e.default=o.exports}}]);