(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{449:function(t,i,e){},639:function(t,i,e){"use strict";e(449)},776:function(t,i,e){"use strict";e.r(i);var l={name:"LibFullScroll",props:{value:{type:Number,default:0},duration:{type:Number,default:750},direction:{type:String,default:"y"}},data:()=>({i:0}),watch:{value:{handler(t){this.change(t-1)},immediate:!0}},mounted(){const t=this.$refs.LibFullScroll;let i="y"===this.direction,e=!0;const l=t.querySelectorAll(".scroll-item").length,s=this.debounce(function(s){this.$emit("start",this.i+1),t.style.transition=`all ${this.duration}ms`,e&&(e=!1,s.wheelDelta<0&&this.i<l-1?this.i++:s.wheelDelta>0&&this.i>0&&this.i--,t.style[i?"top":"left"]=-this.i*(i?t.offsetHeight:t.offsetWidth)+"px",setTimeout(()=>{e=!0,this.$emit("end",this.i+1),this.$emit("input",this.i+1)},this.duration))}.bind(this),10);t.addEventListener("mousewheel",s),window.addEventListener("resize",()=>{t.style.transition="all 0s",this.change(this.value)})},methods:{debounce(t,i,e=!1){if(e){let e;return function(){let l=this,s=arguments;e&&clearTimeout(e);let n=!e;e=setTimeout(()=>{e=null},i),n&&t.apply(l,s)}}return function(e){let l=this,s=e;clearTimeout(t.id),t.id=setTimeout((function(){t.call(l,s)}),i)}},change(t){-1===t&&(t=0),this.$nextTick(()=>{const i=this.$refs.LibFullScroll;this.i=t;let e="y"===this.direction;try{i.style[e?"top":"left"]=-t*(e?i.offsetHeight:i.offsetWidth)+"px"}catch(t){}})}}},s=(e(639),e(20)),n=Object(s.a)(l,(function(){return(0,this._self._c)("div",{ref:"LibFullScroll",staticClass:"LibFullScroll",style:{display:"x"===this.direction?"flex":"block",transition:`all ${this.duration}ms`}},[this._t("default")],2)}),[],!1,null,"025508ed",null);i.default=n.exports}}]);