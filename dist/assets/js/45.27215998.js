(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{435:function(e,t,n){},584:function(e,t,n){"use strict";n(435)},813:function(e,t,n){"use strict";n.r(t);var i={directives:{typewriterMultiple:{inserted(e){let t=e.innerHTML;e.innerHTML="",setTimeout(()=>{let n,i=0,s="";!function r(){n=setInterval(()=>{s+=t[i],e.innerHTML=s,"，、。？！".includes(t[i])&&(clearInterval(n),setTimeout(()=>{r()},"，"===t[i]?750:"、"===t[i]?250:"。"===t[i]?1500:"？！".includes(t[i])?1e3:750)),i++,i==t.length&&clearInterval(n)},100)}()},750)}}}},s=(n(584),n(20)),r=Object(s.a)(i,(function(){return(0,this._self._c)("div",{directives:[{name:"typewriterMultiple",rawName:"v-typewriterMultiple"}],staticClass:"TypewriterMultiple"},[this._v("\n  这里是冷弋白，当前打字机支持换行，而CSS打字机通过设置step步长，只能单行显示。当前打字机原理即利用setInterval，将字符一个个追加进字符串，遇到，、。？！则会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？是不是很智能？更多符号可自行修改源码。\n")])}),[],!1,null,"2efed31c",null);t.default=r.exports}}]);