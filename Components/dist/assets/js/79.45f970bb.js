(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{503:function(n,t,e){},719:function(n,t,e){"use strict";e(503)},829:function(n,t,e){"use strict";e.r(t);var a={data:()=>({box:"abcdefg",layout:"",layouts:{0:"\n            'a a a a'\n            'b b c c'\n            'd d e e'\n            'f f f f'\n            'g g g g'\n          ",500:"\n            'a d d'\n            'a g f'\n            'b b e'\n            'c c c'\n          ",800:"\n            'a b f f'\n            'a b f f'\n            'c b g e'\n            'd d d e'\n          ",1200:"\n            'a a b c'\n            'd e b g'\n            'd f f f'\n          "}}),mounted(){this.fn(),window.addEventListener("resize",this.fn)},methods:{fn(){Object.keys(this.layouts).forEach(n=>{document.documentElement.clientWidth>Number(n)&&(this.layout=this.layouts[n])})}},beforeDestroy(){window.removeEventListener("resize",this.fn)}},s=(e(719),e(20)),i=Object(s.a)(a,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"grid",style:{gridTemplateAreas:n.layout}},n._l(n.box,(function(e,a){return t("Static-GridLetter-index",{key:a,staticClass:"LibGridLetter",attrs:{area:e}},[n._v("\n    "+n._s(e)+"\n  ")])})),1)}),[],!1,null,"91ac7452",null);t.default=i.exports}}]);