webpackJsonp([1],{"+djL":function(t,e){},"1L+j":function(t,e){},"2OcB":function(t,e){},"7DLk":function(t,e){},"8npY":function(t,e){},"8rGO":function(t,e){},"9n10":function(t,e){},GhXl:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("u7zW")},null,null).exports,r=i("/ocq"),l=i("mtWM"),o=i.n(l),c={name:"HomeHeader",computed:{btnText:function(){return this.$store.state.logStatus?"退出":"登录"},logStatus:function(){return this.$store.state.logStatus}},methods:{handleLogClick:function(){this.$router.push("/login")},handleLogoutClick:function(){o.a.post("public/index.php/users/logout").then(this.logOutSucc).catch(function(t){console.log(t),alert("退出失败")})},logOutSucc:function(t){console.log(t),200===t.status&&(this.$store.commit("changeLogStatus",!1),this.$store.commit("changeFavor",""))}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"weather"},[t._m(1),t._v(" "),i("div",{staticClass:"temp"},[t._v("晴 18°C~25°C")]),t._v(" "),i("div",{staticClass:"log-status",on:{click:function(e){t.logStatus?t.handleLogoutClick():t.handleLogClick()}}},[t._v(t._s(this.btnText))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"studio"},[e("img",{attrs:{src:"static/imgs/StarStudio.png"}}),this._v(" "),e("div",[e("div",{staticClass:"studio-label"},[this._v("成电导航 UESTC-StarStudio")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"static/imgs/晴.png",alt:"qing"}})])}]};var d=i("VU/8")(c,u,!1,function(t){i("8rGO")},"data-v-a9ba3810",null).exports,v={name:"HomeNavbar",props:{navList:Array},methods:{handleAnchorClick:function(){var t=event.target.innerHTML;this.$store.commit("changeScrollTitle",t)},handleScroll:function(){var t=document.documentElement.scrollTop;this.$refs.home_navbar&&(this.$refs.home_navbar.style.top=t>1300?"3rem":"5rem")}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"home_navbar",staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"nav-body"},[i("ul",{staticClass:"out-list"},t._l(t.navList,function(e){return i("li",{key:e.title},[i("div",{staticClass:"anchor",on:{click:t.handleAnchorClick}},[t._v(t._s(e.title))]),t._v(" "),t._l(e.list,function(e,s){return i("ul",{key:s,staticClass:"inner-list"},[i("li",[t._v(t._s(e))])])})],2)}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:"static/imgs/导航图标.png"}}),this._v(" "),e("div",{staticClass:"guide-title"},[this._v("成电导航")])])}]};var p=i("VU/8")(v,h,!1,function(t){i("j2cP")},"data-v-7e4840a2",null).exports,m={name:"MainSearch",data:function(){return{inputText:"",activeOne:"百度",placeholder:"百度一下",enginList:[{name:"百度",placeholder:"百度一下"},{name:"Google",placeholder:"Google搜索"},{name:"Bing",placeholder:"必应搜索"},{name:"知乎",placeholder:"在知乎搜索"},{name:"微信",placeholder:"在微信搜索"},{name:"Bilibili",placeholder:"在Bilibili搜索"}]}},methods:{hanleEnginClick:function(){var t=event.target.innerHTML,e=this.$refs[t][0].dataset.placeholder;this.activeOne=t,this.placeholder=e},handleSearchClick:function(){}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-container"},[i("ul",{staticClass:"engin-list"},t._l(t.enginList,function(e){return i("li",{key:e.name,ref:e.name,refInFor:!0,staticClass:"engin-item",class:{activeStyle:e.name===t.activeOne},attrs:{"data-placeholder":e.placeholder},on:{click:t.hanleEnginClick}},[t._v(t._s(e.name))])}),0),t._v(" "),i("div",{staticClass:"search-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t._v(" "),i("img",{attrs:{src:"static/imgs/搜索.png"}})])])},staticRenderFns:[]};var g=i("VU/8")(m,f,!1,function(t){i("dO99")},"data-v-6e8dcccd",null).exports,_={name:"Gallary",props:{list:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",autoplay:3e3,onlyExternal:!0,loop:!0}}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallary"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.list,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t,alt:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"bullet"},slot:"bullet"})],2)],1)},staticRenderFns:[]};var y={name:"MainGallary",data:function(){return{list:["static/imgs/01.png","static/imgs/02.png","static/imgs/03.png","static/imgs/04.png","static/imgs/05.png"]}},components:{Gallary:i("VU/8")(_,C,!1,function(t){i("8npY")},"data-v-69e851c0",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallary-container"},[e("gallary",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var k=i("VU/8")(y,w,!1,function(t){i("+djL")},"data-v-59293d8a",null).exports,x=i("BO1k"),S=i.n(x),b=i("lHA8"),$=i.n(b),L={name:"AddLinkPanel",data:function(){return{siteName:"",siteUrl:"",linkList:[{title:"UESTC官网",url:"https://www.uestc.edu.cn/"},{title:"信息门户",url:"http://portal.uestc.edu.cn/"},{title:"一卡通",url:"http://ecard.uestc.edu.cn/"},{title:"教务系统",url:"http://eams.uestc.edu.cn/eams/home!submenus.action?menu.id="},{title:"学生邮件系统",url:"http://mail.std.uestc.edu.cn/"},{title:"图书馆",url:"http://www.lib.uestc.edu.cn/"},{title:"中国大学MOOC",url:"https://www.icourse163.org/"},{title:"中国知网",url:"https://www.cnki.net/"},{title:"CSDN",url:"https://edu.csdn.net/"},{title:"清水河畔",url:"http://bbs.uestc.edu.cn/"}]}},methods:{checkURLByReg:function(t){return(t=t.match(/((http|https):\/\/([\w\\-]+\.)+[\w\\-]+(\/[\w\u4e00-\u9fa5\-\\.\\/?\\@\\%\\!\\&=\\+\\~\\:\\#\\;\\,]*)?)/gi))?t[0]:null},clickAddBtn:function(){this.siteName&&this.siteUrl?(this.siteUrl=this.checkURLByReg(this.siteUrl),this.siteUrl?this.$emit("submit",this.siteName,this.siteUrl):alert("请检查网址格式！")):(alert("请完善数据！"),this.$emit("closePanel"))},handleClickAddLink:function(){event.stopPropagation();var t=event.target.innerHTML,e="link-"+t,i=this.$refs[e][0].dataset.url;this.$emit("submit",t,i)}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-link-panel",on:{click:function(t){t.stopPropagation()}}},[i("form",{staticClass:"add-link-form"},[i("div",{staticClass:"fill-to-add"},[i("div",{staticClass:"fill-link-box"},[i("div",[t._v("名称")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.siteName,expression:"siteName"}],staticClass:"link-input",attrs:{type:"text",placeholder:""},domProps:{value:t.siteName},on:{input:function(e){e.target.composing||(t.siteName=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"fill-link-box"},[i("div",[t._v("网址")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.siteUrl,expression:"siteUrl"}],staticClass:"link-input",attrs:{type:"text",placeholder:""},domProps:{value:t.siteUrl},on:{input:function(e){e.target.composing||(t.siteUrl=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"add-link-btn",on:{click:t.clickAddBtn}},[t._v("添 加")])]),t._v(" "),i("div",{staticClass:"click-to-add"},[i("div",{staticClass:"usual-link-title"},[t._v("常用网址")]),t._v(" "),i("ul",t._l(t.linkList,function(e){return i("li",{key:e.title,ref:"link-"+e.title,refInFor:!0,attrs:{"data-url":e.url},on:{click:t.handleClickAddLink}},[t._v(t._s(e.title))])}),0)])])])},staticRenderFns:[]};var D={name:"MainMine",data:function(){return{panelStyle:{top:"",left:""}}},computed:{siteNameList:function(){var t=new $.a,e=!0,i=!1,s=void 0;try{for(var n,a=S()(this.myLinks);!(e=(n=a.next()).done);e=!0){var r=n.value;t.add(r.linkTitle)}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return t},siteUrlList:function(){var t=new $.a,e=!0,i=!1,s=void 0;try{for(var n,a=S()(this.myLinks);!(e=(n=a.next()).done);e=!0){var r=n.value;t.add(r.url)}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return t},logStatus:function(){return this.$store.state.logStatus},showPanel:function(){return this.$store.state.showPanel},myLinks:function(){var t=this.$store.state.favor,e=[];if(t)for(var i=t.split(","),s=i.length/2,n=1;n<=s;n++)e.push({linkTitle:i[2*n-2],url:i[2*n-1]});return e}},components:{AddLinkPanel:i("VU/8")(L,P,!1,function(t){i("ixUn")},"data-v-c40f8508",null).exports},methods:{handleAddClick:function(){event.stopPropagation(),this.panelStyle.top=event.pageY+35+"px",this.panelStyle.left=event.pageX-25+"px",this.$store.commit("changeShowPanel",!0)},handlePanelSubmit:function(t,e){if(this.siteNameList.has(t))return alert("名称已存在！"),void this.$store.commit("changeShowPanel",!1);if(this.siteUrlList.has(e))return this.$store.commit("changeShowPanel",!1),void alert("网址已存在！");var i=this.$store.state.favor+","+t+","+e;o.a.post("public/index.php/users/postRecord",{data:{name:"add",favor:i}}).then(this.submitSucc),this.$store.commit("changeShowPanel",!1)},submitSucc:function(t){if(console.log(t),200===t.status){var e=t.data.newdata.favor||"";this.$store.commit("changeFavor",e)}},handleDelClick:function(t){var e=this,i=this.$store.state.favor,s=[];if(i){for(var n=i.split(","),a=n.length/2,r=1;r<=a;r++)s.push({linkTitle:n[2*r-2],url:n[2*r-1]});s.splice(t,1)}var l="",c=!0,u=!1,d=void 0;try{for(var v,h=S()(s);!(c=(v=h.next()).done);c=!0){var p=v.value;l+=p.linkTitle+","+p.url+","}}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}l=l.slice(0,-1),console.log(l),o.a.post("public/index.php/users/postRecord",{data:{name:"delete",favor:l}}).then(function(t){console.log(t),200===t.status&&e.$store.commit("changeFavor",l)})},showDelIcon:function(t){this.$refs["del"+t][0].style.display="inline-block"},hideDelIcon:function(t){this.$refs["del"+t][0].style.display="none"}},mounted:function(){}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"main-mine-container"},[i("img",{staticClass:"mine-title-img",attrs:{src:"static/imgs/我的世界.png"}}),t._v(" "),i("ul",{staticClass:"my-list"},[t._l(t.myLinks,function(e,s){return i("li",{key:s,staticClass:"my-link",on:{mouseover:function(e){return t.showDelIcon(s)},mouseout:function(e){return t.hideDelIcon(s)}}},[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.linkTitle))]),t._v(" "),i("img",{ref:"del"+s,refInFor:!0,staticClass:"delete-icon",attrs:{src:"/static/imgs/关闭.png"},on:{click:function(e){return t.handleDelClick(s)}}})])}),t._v(" "),i("li",{ref:"my_link",staticClass:"my-link",on:{click:t.handleAddClick}},[i("img",{staticClass:"add-icon",attrs:{src:"static/imgs/添加.png"}})])],2)]),t._v(" "),t.showPanel?i("add-link-panel",{style:t.panelStyle,on:{submit:t.handlePanelSubmit}}):t._e()],1)},staticRenderFns:[]};var T=i("VU/8")(D,U,!1,function(t){i("QyvD")},"data-v-51ec8c59",null).exports,E={name:"MainUnits",props:{units:Array},data:function(){return{refList:["成电印记","校园助手","学习平台","成电社交"]}},computed:{scrollTitle:function(){return this.$store.state.scrollTitle}},watch:{scrollTitle:function(){var t=this.scrollTitle;document.getElementById(t).scrollIntoView(!0)}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper"},[i("div",t._l(t.units,function(e,s){return i("div",{key:s,staticClass:"main-units-container"},[i("a",{staticClass:"a-anchor",attrs:{id:t.refList[s]}}),t._v(" "),i("img",{staticClass:"unit-title-img",attrs:{src:e.unitTitleImg}}),t._v(" "),t._l(e.classList,function(e){return i("ul",{key:e.classTitle,staticClass:"class-list"},[i("li",{staticClass:"class-item"},[i("div",{staticClass:"class-title"},[t._v(t._s(e.classTitle))]),t._v(" "),i("ul",{staticClass:"link-list"},t._l(e.linkList,function(e,s){return i("li",{key:s,staticClass:"link-item"},[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.linkTitle))])])}),0)])])})],2)}),0)])},staticRenderFns:[]};var R=i("VU/8")(E,I,!1,function(t){i("7DLk")},"data-v-b21d6e34",null).exports,N={name:"HomeMain",props:{units:Array},components:{MainSearch:g,MainGallary:k,MainMine:T,MainUnits:R},computed:{logStatus:function(){return this.$store.state.logStatus}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("main-search"),this._v(" "),e("main-gallary"),this._v(" "),this.logStatus?e("main-mine"):this._e(),this._v(" "),e("main-units",{attrs:{units:this.units}})],1)},staticRenderFns:[]};var M={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"home-footer"},[this._v("技术支持：星辰工作室")])},staticRenderFns:[]};var W={name:"Home",components:{HomeHeader:d,HomeNavbar:p,HomeMain:i("VU/8")(N,F,!1,function(t){i("Yxo3")},"data-v-0ceb68a8",null).exports,HomeFooter:i("VU/8")({name:"HomeFooter"},M,!1,function(t){i("XXS1")},"data-v-57d7c7fa",null).exports},data:function(){return{navList:[],units:[]}},computed:{logStatus:function(){return this.$store.state.logStatus},showPanel:function(){return this.$store.state.showPanel}},methods:{getStaticInfo:function(){o.a.get("/static/basicData/data.json?").then(this.getStaticDataSucc)},getStaticDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.navList=e.navList,this.units=e.units}},getLogStatus:function(){o.a.get("public/index.php/users/status").then(this.getStatusSucc).catch(function(t){console.log(t)})},getStatusSucc:function(t){console.log(t),console.log(t.data),0===(t=t.data.status)?this.changeLogStatus(!1):1===t?this.changeLogStatus(!0):(this.changeLogStatus(!1),console.log(t),alert("登录状态异常"))},changeLogStatus:function(t){this.$store.commit("changeLogStatus",t)},hidePanel:function(){this.$store.commit("changeShowPanel",!1)}},mounted:function(){this.getStaticInfo(),this.getLogStatus()}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-container",on:{click:this.hidePanel}},[e("home-header"),this._v(" "),e("home-navbar",{ref:"home_navbar",attrs:{navList:this.navList}}),this._v(" "),e("home-main",{attrs:{units:this.units}}),this._v(" "),e("home-footer",{ref:"home_footer"})],1)},staticRenderFns:[]};var H=i("VU/8")(W,V,!1,function(t){i("a7+B")},"data-v-e017a2c6",null).exports,O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"weather"},[t._m(1),t._v(" "),i("div",{staticClass:"temp"},[t._v("晴 18°C~25°C")]),t._v(" "),i("div",{staticClass:"back-to-home",on:{click:t.handleBackClick}},[t._v("返回首页")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"studio"},[e("img",{attrs:{src:"static/imgs/StarStudio.png"}}),this._v(" "),e("div",[e("div",{staticClass:"studio-label"},[this._v("成电导航 UESTC-StarStudio")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"static/imgs/晴.png",alt:"qing"}})])}]};var A={name:"LoginMain",data:function(){return{userID:"",userPWD:"",verifyCode:"",verifyImgUrl:"public/index.php/users/verify"}},methods:{handleLogClick:function(){this.userID&&this.userPWD?o()({method:"post",url:"public/index.php/users/login",data:{data:{admin_username:this.userID,admin_password:this.userPWD,verify_code:this.verifyCode}}}).then(this.logSucc).catch(function(t){console.log(t),alert("登陆失败")}):alert("请输入完整信息")},logSucc:function(t){if(console.log(t),200===t.status){this.$store.commit("changeLogStatus",!0);var e=t.data.favor||"";this.$store.commit("changeFavor",e),this.$router.push("/")}else console.log("登陆失败")},refreshVerify:function(){var t=this;this.verifyImgUrl="static/imgs/加载.png",setTimeout(function(){t.verifyImgUrl="public/index.php/users/verify"},250)}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-main-container"},[i("img",{staticClass:"bg-img",attrs:{src:"static/imgs/背景.png"}}),t._v(" "),i("form",{staticClass:"login-form"},[i("div",{staticClass:"form-title"},[t._v("登 录")]),t._v(" "),i("div",{staticClass:"fill-box"},[i("div",{staticClass:"id-box"},[i("div",[t._v("用户名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userID,expression:"userID"}],staticClass:"id-input",attrs:{type:"text",placeholder:"学号"},domProps:{value:t.userID},on:{input:function(e){e.target.composing||(t.userID=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"pwd-box"},[i("div",[t._v("密码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userPWD,expression:"userPWD"}],staticClass:"pwd-input",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.userPWD},on:{input:function(e){e.target.composing||(t.userPWD=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-box"},[i("div",{staticClass:"title"},[t._v("验证码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyCode,expression:"verifyCode"}],staticClass:"verify-input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.verifyCode},on:{input:function(e){e.target.composing||(t.verifyCode=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-img-box"},[i("img",{staticStyle:{height:"22px",margin:"2px 5px"},attrs:{src:t.verifyImgUrl,alt:"验证码",id:"verify-img",title:"点击刷新"},on:{click:function(e){return e.stopPropagation(),t.refreshVerify(e)}}})])]),t._v(" "),i("div",{staticClass:"btn-box"},[i("div",{staticClass:"log-btn",on:{click:t.handleLogClick}},[t._v("登 录")]),t._v(" "),i("router-link",{staticClass:"regist-btn",attrs:{to:"/register"}},[t._v("立即注册")])],1)])])},staticRenderFns:[]};var j={name:"Login",components:{LoginHeader:i("VU/8")({name:"HomeHeader",methods:{handleBackClick:function(){this.$router.push("/")}}},O,!1,function(t){i("oNZA")},"data-v-71e6ed78",null).exports,LoginMain:i("VU/8")(A,B,!1,function(t){i("YINe")},"data-v-fcf92f4c",null).exports}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-container"},[e("login-header"),this._v(" "),e("login-main")],1)},staticRenderFns:[]};var Y=i("VU/8")(j,G,!1,function(t){i("jKeD")},"data-v-3d2c6fec",null).exports,X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"weather"},[t._m(1),t._v(" "),i("div",{staticClass:"temp"},[t._v("晴 18°C~25°C")]),t._v(" "),i("div",{staticClass:"back-to-home",on:{click:t.handleBackClick}},[t._v("返回首页")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"studio"},[e("img",{attrs:{src:"static/imgs/StarStudio.png"}}),this._v(" "),e("div",[e("div",{staticClass:"studio-label"},[this._v("成电导航 UESTC-StarStudio")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"static/imgs/晴.png",alt:"qing"}})])}]};var q={name:"RegisterMain",data:function(){return{userID:"",userPWD:"",rePWD:"",verifyCode:"",verifyImgUrl:"public/index.php/users/verify",regRes:!1}},methods:{handleRegisterClick:function(){this.userID?this.userPWD?this.rePWD?this.verifyCode?this.userPWD===this.rePWD?o.a.post("public/index.php/users/regist",{data:{name:this.userID,password:this.userPWD,verify_code:this.verifyCode}}).then(this.regSucc):alert("两次密码不一致"):alert("请输入验证码"):alert("请填写确认密码"):alert("请填写密码"):alert("请填写用户名")},refreshVerify:function(){var t=this;this.verifyImgUrl="static/imgs/加载.png",setTimeout(function(){t.verifyImgUrl="public/index.php/users/verify"},250)},regSucc:function(t){console.log(t),this.regRes=!0}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"register-main-container"},[i("img",{staticClass:"bg-img",attrs:{src:"static/imgs/背景.png"}}),t._v(" "),i("form",{staticClass:"register-form"},[i("div",{staticClass:"form-title"},[t._v("注 册")]),t._v(" "),i("div",{staticClass:"fill-box"},[i("div",{staticClass:"id-box"},[i("div",[t._v("用户名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userID,expression:"userID"}],staticClass:"id-input",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userID},on:{input:function(e){e.target.composing||(t.userID=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"pwd-box"},[i("div",[t._v("密码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.userPWD,expression:"userPWD"}],staticClass:"pwd-input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userPWD},on:{input:function(e){e.target.composing||(t.userPWD=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"re-pwd-box"},[i("div",[t._v("确认密码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rePWD,expression:"rePWD"}],staticClass:"repwd-input",attrs:{type:"password",placeholder:"请确认密码"},domProps:{value:t.rePWD},on:{input:function(e){e.target.composing||(t.rePWD=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-box"},[i("div",{staticClass:"title"},[t._v("验证码")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyCode,expression:"verifyCode"}],staticClass:"verify-input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.verifyCode},on:{input:function(e){e.target.composing||(t.verifyCode=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-img-box"},[i("img",{staticStyle:{height:"22px",margin:"2px 5px"},attrs:{src:t.verifyImgUrl,alt:"验证码",id:"verify-img",title:"点击刷新"},on:{click:function(e){return e.stopPropagation(),t.refreshVerify(e)}}})])]),t._v(" "),i("div",{staticClass:"btn-box"},[i("div",{staticClass:"register-btn",on:{click:t.handleRegisterClick}},[t._v("立 即 注 册")]),t._v(" "),i("router-link",{attrs:{to:"/login"}},[t.regRes?i("span",[t._v("已注册成功，")]):i("span",[t._v("已有帐号，")]),t._v("去登录\n      ")])],1)])])},staticRenderFns:[]};var K={name:"Register",components:{RegisterHeader:i("VU/8")({name:"HomeHeader",methods:{handleBackClick:function(){this.$router.push("/")}}},X,!1,function(t){i("2OcB")},"data-v-7ec00b04",null).exports,RegisterMain:i("VU/8")(q,z,!1,function(t){i("1L+j")},"data-v-15ee23ea",null).exports}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"register-container"},[e("register-header"),this._v(" "),e("register-main")],1)},staticRenderFns:[]};var Z=i("VU/8")(K,Q,!1,function(t){i("GhXl")},"data-v-1a67f47a",null).exports;s.a.use(r.a);var J=new r.a({routes:[{path:"/",name:"Home",component:H},{path:"/login",name:"Login",component:Y},{path:"/register",name:"Register",component:Z}]}),tt=i("NYxO");s.a.use(tt.a);var et=new tt.a.Store({state:{logStatus:!1,showPanel:!1,scrollTitle:"成电印记",favor:"成电官网,helloworld,成电官网,helloworld,成电官网,helloworld,成电官网,helloworld"},mutations:{changeLogStatus:function(t,e){t.logStatus=e},changeShowPanel:function(t,e){t.showPanel=e},changeScrollTitle:function(t,e){t.scrollTitle=e},changeFavor:function(t,e){t.favor=e}}}),it=i("F3EI"),st=i.n(it);i("9n10"),i("M6Sr");i("v2ns"),s.a.config.productionTip=!1,s.a.use(st.a),new s.a({el:"#app",router:J,store:et,components:{App:a},template:"<App/>"})},QyvD:function(t,e){},XXS1:function(t,e){},YINe:function(t,e){},Yxo3:function(t,e){},"a7+B":function(t,e){},dO99:function(t,e){},ixUn:function(t,e){},j2cP:function(t,e){},jKeD:function(t,e){},oNZA:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},u7zW:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2ca29074a64c23fcc8e2.js.map