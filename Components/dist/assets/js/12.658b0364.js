(window.webpackJsonp=window.webpackJsonp||[]).push([[12,30],{390:function(e,t,s){},399:function(e,t,s){e.exports=s.p+"assets/img/icon.cfd08b90.svg"},400:function(e,t,s){"use strict";s(390)},463:function(e,t,s){},531:function(e,t,s){"use strict";s.r(t);var o={name:"LibRange",props:{min:{type:Number,default:0},max:{type:Number,default:1},value:{type:Number,default:0},text:{type:String,default:""},color:{type:String,default:"#3498db"},size:{type:Number,default:20},showDot:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},icon:{type:String,default:s(399)},showNum:{type:Boolean,default:!0},step:{type:Number,default:1}},data:()=>({show_num:!1,rotate:0}),computed:{barWidth(){let e=this.value-this.min,t=this.max-this.min;return`calc(${e/(t/100)}% + ${(this.size-(this.showDot?0:25))*(t/2-e)/t}px)`}},methods:{changeValue(e){this.show_num=!0,this.$emit("input",parseFloat(e)),this.rotate=e/this.max}}},i=(s(400),s(20)),l=Object(i.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"LibRange"},[e.showNum?t("div",{staticClass:"sliderValue"},[t("span",{class:{showNum:e.show_num},style:{left:e.barWidth}},[e._v(e._s(e.text||e.value))])]):e._e(),e._v(" "),t("div",{staticClass:"field"},[t("div",{staticClass:"bar",style:{width:e.barWidth,backgroundColor:e.color}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.showIcon&&e.showDot,expression:"showIcon && showDot"}],style:{width:e.size+"px",height:e.size+"px"},attrs:{src:e.icon}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.showDot&&!e.showIcon,expression:"showDot && !showIcon"}],style:{width:e.size+"px",height:e.size+"px",backgroundColor:e.color}})]),e._v(" "),t("input",{attrs:{type:"range",min:e.min,max:e.max,step:e.step},domProps:{value:e.value},on:{input:function(t){return e.changeValue(t.target.value)},mouseup:function(t){e.show_num=!1}}})])])}),[],!1,null,"07e97c2c",null);t.default=l.exports},665:function(e,t,s){e.exports=s.p+"assets/img/play.bd8ae035.svg"},666:function(e,t,s){e.exports=s.p+"assets/img/pause.1f3b5d50.svg"},667:function(e,t,s){e.exports=s.p+"assets/img/volume_disable.d1ee4983.svg"},668:function(e,t,s){e.exports=s.p+"assets/img/volume.5ce235ff.svg"},669:function(e,t,s){e.exports=s.p+"assets/img/full_screen_exit.3c9e648d.svg"},670:function(e,t,s){e.exports=s.p+"assets/img/full_sreen.8334cbbc.svg"},671:function(e,t,s){"use strict";s(463)},791:function(e,t,s){"use strict";s.r(t);var o=s(531),i={name:"LibVideo",props:{url:{type:String,default:""}},data:()=>({debounce:null,video:null,timer:null,allow_drag:!1,is_fill:!1,is_mute:!0,is_play:!1,is_ready:!1,progress_play:0,progress_volume:1,enter_toolbar:!1,show_toolbar:!1,show_volume:!1}),components:{LibRange:o.default},watch:{progress_play(e){this.allow_drag&&(this.video.currentTime=e*this.video.duration)},progress_volume(e){this.video.volume=e}},created(){this.debounce=this.$debounce(()=>{this.show_toolbar=this.enter_toolbar},500)},mounted(){this.video=this.$refs.video;let e=null;e=setInterval(()=>{this.video.readyState&&(this.is_ready=!0,clearInterval(e))},100)},methods:{$fmtSec(e){let t=Math.floor(e/3600)>=10?Math.floor(e/3600):"0"+Math.floor(e/3600);e-=3600*t;let s=Math.floor(e/60)>=10?Math.floor(e/60):"0"+Math.floor(e/60);e-=60*s;let o=(e=parseInt(e))>=10?e:"0"+e;return[t,s,o,`${t}:${s}:${o}`]},$isFull(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()},$noFull(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},$debounce(e,t,s=!1){if(s){let s;return function(){let o=this,i=arguments;s&&clearTimeout(s);let l=!s;s=setTimeout(()=>{s=null},t),l&&e.apply(o,i)}}return function(s){let o=this,i=s;clearTimeout(e.id),e.id=setTimeout((function(){e.call(o,i)}),t)}},showToolbar(){this.show_toolbar=!0,this.is_fill&&!this.enter_toolbar&&this.debounce()},play(){this.video.play(),this.timer=setInterval(()=>{this.video.ended&&(this.is_play=!1,clearInterval(this.timer)),this.progress_play=parseFloat((this.video.currentTime/this.video.duration).toFixed(4))},100)},pause(){clearInterval(this.timer),this.video.pause()},playPause(e){"VIDEO"!==e.target.tagName&&"play-pause"!==e.target._prevClass||(this.is_play=!this.is_play,this.is_play?this.play():this.pause())},handleLibRange(e){if("down"===e)this.pause(),this.allow_drag=!0;else if("up"===e){if(this.allow_drag=!1,!this.is_play)return;this.play()}},volume(){this.is_mute=!this.is_mute,this.is_mute?this.video.volume=0:this.video.volume=this.progress_volume},volumeEnter(){this.show_volume=!0},volumeLeave(){this.show_volume=!1},getPointVolume(e){const t=this.$refs.barVolume;this.progress_volume=parseFloat((-(e.pageY-t.getBoundingClientRect().bottom)/t.offsetHeight).toFixed(2)),this.video.volume=this.progress_volume},fullScreen(){this.is_fill=!this.is_fill,this.is_fill?this.$isFull():this.$noFull()}}},l=(s(671),s(20)),a=Object(l.a)(i,(function(){var e=this,t=e._self._c;return t("div",{ref:"LibVideo",staticClass:"LibVideo",class:{fullScreen:e.is_fill},on:{mousemove:e.showToolbar,mouseleave:function(t){e.show_toolbar=!1},click:e.playPause}},[t("video",{ref:"video",attrs:{src:e.url},domProps:{muted:e.is_mute}}),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"toolbar",class:{hidden:!e.show_toolbar}},[t("div",{ref:"bar",staticClass:"bar"},[e.video?t("LibRange",{attrs:{text:e.$fmtSec(e.video.currentTime)[3],showDot:e.show_toolbar,step:.001},nativeOn:{mousedown:function(t){return e.handleLibRange("down")},mouseup:function(t){return e.handleLibRange("up")}},model:{value:e.progress_play,callback:function(t){e.progress_play=t},expression:"progress_play"}}):e._e()],1),e._v(" "),t("div",{staticClass:"options",on:{mouseenter:function(t){e.enter_toolbar=!0},mouseleave:function(t){e.enter_toolbar=!1}}},[t("div",{staticClass:"left"},[e.is_ready?t("span",{staticClass:"time"},[e._v("\n            "+e._s(e.$fmtSec(e.video.currentTime)[3])+" /\n            "+e._s(e.$fmtSec(e.video.duration)[3])+"\n          ")]):t("span",{staticClass:"time"},[e._v("00:00:00 / 00:00:00")])]),e._v(" "),t("div",{staticClass:"center"},[t("img",{staticClass:"play-pause",attrs:{src:e.is_play?s(665):s(666)}})]),e._v(" "),t("div",{staticClass:"right"},[t("div",{staticClass:"volume",on:{mouseenter:e.volumeEnter,mouseleave:e.volumeLeave}},[t("img",{attrs:{src:e.is_mute?s(667):s(668),alt:""},on:{click:e.volume}}),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_volume&&!e.is_mute,expression:"show_volume && !is_mute"}],ref:"volumeBox",staticClass:"volume-box"},[t("div",{staticClass:"box"},[t("span",[e._v(e._s((100*e.progress_volume).toFixed(0)))]),e._v(" "),t("LibRange",{staticClass:"LibRange-volume",attrs:{size:15,showNum:!1,step:.01},model:{value:e.progress_volume,callback:function(t){e.progress_volume=t},expression:"progress_volume"}})],1)])])],1),e._v(" "),t("img",{staticClass:"full-screen",attrs:{src:e.is_fill?s(669):s(670)},on:{click:e.fullScreen}})])])])])],1)}),[],!1,null,"3257cceb",null);t.default=a.exports}}]);