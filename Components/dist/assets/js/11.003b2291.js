(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{448:function(e,i,s){},624:function(e,i,s){e.exports=s.p+"assets/img/finish.6c41608b.svg"},625:function(e,i,s){e.exports=s.p+"assets/img/fail.f456c521.svg"},626:function(e,i,s){e.exports=s.p+"assets/img/del.86d5ae17.svg"},627:function(e,i,s){e.exports=s.p+"assets/img/show.f01588e1.svg"},628:function(e,i,s){e.exports=s.p+"assets/img/compress.239d4693.svg"},629:function(e,i,s){e.exports=s.p+"assets/img/excel.48921563.svg"},630:function(e,i,s){e.exports=s.p+"assets/img/music.0005d978.svg"},631:function(e,i,s){e.exports=s.p+"assets/img/pdf.247be43c.svg"},632:function(e,i,s){e.exports=s.p+"assets/img/ppt.c19a05ed.svg"},633:function(e,i,s){e.exports=s.p+"assets/img/software.594f866b.svg"},634:function(e,i,s){e.exports=s.p+"assets/img/txt.13abdaaa.svg"},635:function(e,i,s){e.exports=s.p+"assets/img/unknown.36c96413.svg"},636:function(e,i,s){e.exports=s.p+"assets/img/video.2d79e859.svg"},637:function(e,i,s){e.exports=s.p+"assets/img/word.f6b2d3dc.svg"},638:function(e,i,s){"use strict";s(448)},760:function(e,i,s){"use strict";s.r(i);var t=s(397),l=s.n(t);function a(e){if(0==e)return[0,"B","0 B"];let i=1024,s=0,t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(i));return s=(e/i**l).toFixed(2)?(e/i**l).toFixed(2):0,[parseFloat(s),t[l],`${s} ${t[l]}`]}function n(e,i){const s={image:["jpeg","jpg","png","webp","bmp","gif","svg"],video:["avi","mov","rmvb","rm","flv","mp4","3gp"]};return i instanceof Array?i.includes(e.replace(/.+\./,"").toLowerCase()):s[i].includes(e.replace(/.+\./,"").toLowerCase())}var r={name:"LibUploadFile",props:{files:{type:Array,default:()=>[]},id:{type:String,default:"select"},url:{type:String,default:""},headers:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!0},size:{type:Number,default:0},suffix:{default:()=>!1},readOnly:{type:Boolean,default:!1}},data:()=>({preview_img:"",fileList:[],virtual_files:[],currrentIndex:null,select_show:!0,is_show_big_img:!1,LibIcon:null,drag_active:!1}),computed:{fileIcon:()=>function(e){return"jpg,jpeg,png,gif,svg".includes(e)?"img":"zip,7z".includes(e)?"compress":"xls,xlsx".includes(e)?"excel":"mp3,ogg".includes(e)?"music":"pdf".includes(e)?"pdf":"ppt,pptx".includes(e)?"ppt":"exe,apk".includes(e)?"software":"txt".includes(e)?"txt":"mp4".includes(e)?"video":"doc,docx".includes(e)?"word":"unknown"},existFinish(){return this.fileList.some(e=>e.isFinish)}},created(){this.virtual_files=this.files,this.files.forEach(e=>{this.fileList.push({id:this.fileList.length+(new Date).getTime(),fileName:e.fileName,size:"云端",src:e.src,time:(new Date).getTime(),pre:"100%",isUpload:1,isUploading:!1,isFinish:!0,isFail:!1,cancel:null,file:e})}),this.select_show=0===this.files.length},mounted(){Promise.all([s.e(0),s.e(6)]).then(s.bind(null,840)).then(e=>{this.LibIcon=e.default})},methods:{dragover(e){this.drag_active=!0,e.preventDefault()},drop(e){this.drag_active=!1,e.preventDefault();let i=[...e.dataTransfer.items].map(e=>{if("file"===e.kind)return e.getAsFile()});i.length>1?this.multiple?this.filePreview(i):alert("只能选择一个文件"):this.filePreview(i)},dragleave(){this.drag_active=!1},show(e){this.currrentIndex=e},preview(e){this.preview_img=this.fileList[e].src,this.is_show_big_img=!0},delImg(e=this.fileList.length-1){confirm("确认删除？")&&(this.select_show=!0,this.fileList[e].cancel&&this.fileList[e].cancel(),this.currrentIndex=null,this.fileList[e].isFinish?(this.fileList.splice(e,1),this.virtual_files.splice(e,1),this.$emit("update:files",this.virtual_files),this.$emit("del",e)):this.fileList.splice(e,1))},filePreview(e=!1){const i=e||this.$refs.file.files;let t=[],l=[],r=[],o=[];[...i].forEach(e=>{this.suffix?n(e.name,this.suffix)?r.push(e):t.push(e.name):r.push(e)}),t.length&&(alert(`只能上传${this.suffix.join("、")}类型的文件，以下文件上传失败：\n${t.join("\n")}`),t=[]),[...r].forEach(e=>{e.size>1024*this.size*1024&&0!==this.size?l.push(e.name):o.push(e)}),l.length&&(alert(`只能上传小于等于${this.size}MB的文件，以下文件上传失败：\n${l.join("\n")}`),l=[],r=[]);let c={compress:s(628),excel:s(629),music:s(630),pdf:s(631),ppt:s(632),software:s(633),txt:s(634),unknown:s(635),video:s(636),word:s(637)};[...i].forEach(e=>{if(e.size>1024*this.size*1024&&0!==this.size||this.suffix&&!n(e.name,this.suffix))return;this.select_show=!1;let i=this.fileIcon(e.name.replace(/.+\./,"").toLowerCase());this.fileList.push({id:this.fileList.length+(new Date).getTime(),fileName:e.name,size:a(e.size),src:"img"==i?window.URL.createObjectURL(e):c[i],time:(new Date).getTime(),pre:0,isUpload:!1,isUploading:!1,isFinish:!1,isFail:!1,cancel:null,file:e})}),this.fileList.some(e=>e.isUploading)||(this.uploadClick(),this.$refs.file.value="")},async uploadClick(){for(this.fileList.forEach(e=>{!1===e.isUpload&&(e.isUpload=!0)});this.fileList.some(e=>1!==e.isUpload);){let e=this.fileList.find(e=>1!==e.isUpload);await this.uploadFile(e)}},uploadFile(e){const i=this;return new Promise(s=>{e.isUploading=!0;const t=new FormData;t.append("file",e.file),l.a.post(this.url,t,{headers:this.headers,onUploadProgress(s){let t=Math.round(s.loaded/s.total*100);e.pre=t+"%",i.$emit("progress",t)},cancelToken:new l.a.CancelToken(i=>{e.cancel=i})}).then(i=>{this.virtual_files.push({fileName:e.fileName,src:"来这里改成后端文件链接地址字段，如res.data.data.src"}),this.$emit("update:files",this.virtual_files),this.$emit("success",i),s(i),e.cancel=null,e.isFinish=!0,e.isUpload=1,e.isUploading=!1}).catch(i=>{s("canceled"===i.message?"取消上传":"上传失败"),"canceled"===i.message?this.$emit("cancel"):this.$emit("fail"),e.cancel=null,e.isFail=!0,e.isUpload=1,e.isUploading=!1,e.pre=0})})},clear(){this.fileList.forEach(e=>{e.cancel&&e.cancel()}),this.fileList=[],this.select_show=!0,this.virtual_files=[],this.$emit("update:files",[])}}},o=(s(638),s(20)),c=Object(o.a)(r,(function(){var e=this,i=e._self._c;return i("div",{staticClass:"lyb-upload-multiple"},[i("transition-group",{staticClass:"index",attrs:{name:"del"}},[e._l(e.fileList,(function(t,l){return i("div",{key:t.id,staticClass:"imgBox",on:{mouseenter:function(i){return e.show(l)},mouseleave:function(i){e.currrentIndex=null},touchstart:function(i){return e.show(l)},touchend:function(i){e.currrentIndex=null}}},[e.readOnly?e._e():i("div",{staticClass:"mask",style:{height:0==t.pre?"100%":t.pre}},[t.isFinish?e._e():i("span",[e._v("\n          "+e._s(0===t.pre?!0===t.isUpload?"排队中":t.isFail?"上传失败":"待上传":"100%"==t.pre?"等待响应":t.pre)+"\n        ")]),e._v(" "),t.isUploading||e.readOnly?e._e():i("marquee",[e._v(e._s(t.fileName))]),e._v(" "),t.isUploading?e._e():i("span",[e._v(e._s("string"==typeof t.size?t.size:t.size[2]))])],1),e._v(" "),e.readOnly?e._e():i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFinish||t.isFail,expression:"item.isFinish || item.isFail"}],staticClass:"finish",class:{failBgc:!t.isFinish}},[i(e.LibIcon,{tag:"component",staticStyle:{transform:"rotate(-45deg)"},attrs:{imgUrl:t.isFinish?s(624):s(625),size:"12px",bottom:"3px"}})],1),e._v(" "),i("img",{attrs:{src:t.src}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.currrentIndex===l,expression:"currrentIndex === index"}],staticClass:"operation"},[e.readOnly?e._e():i("img",{attrs:{src:s(626),alt:"删除"},on:{click:function(i){return e.delImg(l)}}}),e._v(" "),i("img",{attrs:{src:s(627),alt:"查看"},on:{click:function(i){return e.preview(l)}}})])])})),e._v(" "),i("div",{key:"a",staticClass:"box1"},[e.readOnly?e._e():i("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:e.id,multiple:e.multiple,accep:"image"},domProps:{value:[]},on:{change:function(i){return e.filePreview()}}}),e._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:e.select_show||e.multiple,expression:"select_show || multiple"}],attrs:{for:e.id}},[e.readOnly?e._e():i("div",{staticClass:"select",class:{disabled:e.readOnly,dragActive:e.drag_active},on:{dragover:e.dragover,drop:e.drop,dragleave:e.dragleave}})])])],2),e._v(" "),i("transition",{attrs:{name:"show"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.is_show_big_img,expression:"is_show_big_img"}],staticClass:"maskImg",style:{backgroundImage:"url("+e.preview_img+")"},on:{click:function(i){e.is_show_big_img=!1}}})])],1)}),[],!1,null,"1f13c1a4",null);i.default=c.exports}}]);