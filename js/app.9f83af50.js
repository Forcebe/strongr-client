(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{style:{background:e.$vuetify.theme.themes[e.theme].background},attrs:{id:"main"}},[e.isLoggedIn?a("NavbarLoggedIn",{on:{logout:e.handleLogout}}):a("Navbar",{on:{userCreated:e.handleLogin,login:e.handleLogin}}),a("v-main",[a("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[e._v("strongr")])]),a("v-spacer"),a("div",{staticClass:"mx-2"},[a("Login",{on:{login:e.login}})],1),a("div",{staticClass:"mx-2"},[a("Signup",{on:{userCreated:e.userCreated}})],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"success",attrs:{depressed:""}},"v-btn",n,!1),s),[a("span",[e._v("Sign In")]),a("v-icon",{attrs:{right:""}},[e._v("mdi-login")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[e._v("Log In")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Email",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:"",rules:[e.rules.required]},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-spacer"),a("v-btn",{staticClass:"success mx-0 mt-3",attrs:{depressed:""},on:{click:e.submit}},[e._v(" Log In ")])],1)],1)],1)],1)},c=[],u=a("bc3a"),d=a.n(u),m={data:function(){return{email:"",password:"",errors:null,show:!1,emailRules:[function(e){return!!e||"Required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],rules:{required:function(e){return!!e||"Required."},min:function(e){return e&&e.length>=3||"Min 3 characters"}}}},methods:{submit:function(){var e=this;if(this.$refs.form.validate()){var t={email:this.email,password:this.password};d.a.post(this.$apiURL+"login",{user:t},{withCredentials:!0}).then((function(t){t.data.logged_in?(e.$emit("login",t.data),e.$router.push({name:"Routines"})):e.errors=t.data.errors}))}}}},p=m,f=a("2877"),v=a("6544"),h=a.n(v),b=a("8336"),g=a("b0af"),j=a("99d9"),x=a("169a"),w=a("4bd4"),_=a("132d"),C=a("2fa4"),y=a("8654"),k=Object(f["a"])(p,l,c,!1,null,null,null),V=k.exports;h()(k,{VBtn:b["a"],VCard:g["a"],VCardText:j["b"],VCardTitle:j["c"],VDialog:x["a"],VForm:w["a"],VIcon:_["a"],VSpacer:C["a"],VTextField:y["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"primary",attrs:{depressed:""}},"v-btn",n,!1),s),[a("v-icon",{attrs:{left:""}},[e._v("mdi-account-plus")]),a("span",[e._v("Sign up")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[e._v("Sign up")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Username",maxlength:"20",rules:[e.rules.required],required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{label:"Email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:"",rules:[e.rules.required,e.rules.min],hint:"At least 5 characters"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",counter:"",rules:[e.rules.required,e.passwordMatch]},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),a("v-spacer"),a("v-btn",{staticClass:"success mx-0 mt-3",attrs:{depressed:""},on:{click:e.submit}},[e._v(" Sign up ")])],1)],1)],1)],1)},L=[],R={data:function(){return{username:"",email:"",password:"",password_confirmation:"",errors:"",show:!1,show1:!1,emailRules:[function(e){return!!e||"Required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],rules:{required:function(e){return!!e||"Required."},min:function(e){return e&&e.length>=5||"Min 5 characters"}}}},methods:{submit:function(){var e=this;if(this.$refs.form.validate()){var t={username:this.username,email:this.email,password:this.password,password_confirmation:this.password_confirmation};d.a.post(this.$apiURL+"users",{user:t},{withCredentials:!0}).then((function(t){"created"===t.data.status?(e.$emit("userCreated",t.data),e.$router.push({name:"Routines"})):e.errors=t.data.errors}))}}},computed:{passwordMatch:function(){var e=this;return function(){return e.password===e.password_confirmation||"Password must match"}}}},S=R,$=Object(f["a"])(S,q,L,!1,null,null,null),O=$.exports;h()($,{VBtn:b["a"],VCard:g["a"],VCardText:j["b"],VCardTitle:j["c"],VDialog:x["a"],VForm:w["a"],VIcon:_["a"],VSpacer:C["a"],VTextField:y["a"]});var T={components:{Login:V,Signup:O},methods:{login:function(e){this.$emit("login",e)},userCreated:function(e){this.$emit("userCreated",e)}}},E=T,z=a("40dc"),I=a("2a7f"),N=Object(f["a"])(E,r,o,!1,null,null,null),U=N.exports;h()(N,{VAppBar:z["a"],VSpacer:C["a"],VToolbarTitle:I["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[e._v("strongr")])]),a("v-spacer"),a("v-btn",{staticClass:"grey lighten-3 grey--text",attrs:{depressed:""},on:{click:e.logout}},[a("span",[e._v("Sign Out")]),a("v-icon",{attrs:{right:""}},[e._v("mdi-exit-to-app")])],1)],1),a("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("div",{staticClass:"d-flex flex-column align-center mt-5"},[a("h2",{staticClass:"white--text mt-1"},[e._v(e._s(e.user.username))])]),a("div",{staticClass:"d-flex flex-column align-center mt-4 mb-3"},[a("CreateRoutine")],1),a("v-list",e._l(e.links,(function(t){return a("v-list-item",{key:t.text,attrs:{router:"",to:t.route}},[a("v-list-item-action",[a("v-icon",{staticClass:"white--text"},[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[e._v(e._s(t.text))])],1)],1)})),1)],1)],1)},P=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"success",attrs:{depressed:""}},"v-btn",n,!1),s),[e._v(" Add new routine")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[e._v("Add a new routine")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"mdi-run",rules:e.inputRules},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-spacer"),a("v-btn",{staticClass:"success mx-0 mt-3",attrs:{depressed:""},on:{click:e.submit}},[e._v(" Add Routine ")])],1)],1)],1)],1)},A=[],B=(a("b0c0"),a("c1df")),F=a.n(B),G={data:function(){return{name:"",errors:[],inputRules:[function(e){return e.length>=3||"Minimum length is 3 characters"}]}},methods:{submit:function(){var e=this;if(this.$refs.form.validate()){var t={name:this.name};d.a.post(this.$apiURL+"routines",{routine:t},{withCredentials:!0}).then((function(t){"created"===t.data.status?e.$emit("routineCreated",t.data):e.errors=t.data.errors}))}}},computed:{formatDate:function(){return this.due?F()(this.due).format("Do MMM YYYY"):""}}},H=G,Y=Object(f["a"])(H,M,A,!1,null,null,null),J=Y.exports;h()(Y,{VBtn:b["a"],VCard:g["a"],VCardText:j["b"],VCardTitle:j["c"],VDialog:x["a"],VForm:w["a"],VSpacer:C["a"],VTextField:y["a"]});var W={name:"NavbarLoggedIn",mounted:function(){this.getUser()},components:{CreateRoutine:J},data:function(){return{drawer:!1,links:[{icon:"mdi-weight-lifter",text:"Routines",route:"/routines"},{icon:"mdi-arm-flex",text:"Workouts",route:"/workouts"},{icon:"mdi-dumbbell",text:"Exercises",route:"/exercises"}],user:{}}},methods:{logout:function(){var e=this;d.a.delete(this.$apiURL+"logout",{withCredentials:!0}).then((function(t){t.data.logged_out&&(e.$emit("logout"),e.$router.push({name:"Home"}))}))},getUser:function(){var e=this;d.a.get(this.$apiURL+"logged_in",{withCredentials:!0}).then((function(t){e.user=t.data.user}))}}},K=W,Q=a("5bc1"),X=a("8860"),Z=a("da13"),ee=a("1800"),te=a("5d23"),ae=a("f774"),se=Object(f["a"])(K,D,P,!1,null,null,null),ne=se.exports;h()(se,{VAppBar:z["a"],VAppBarNavIcon:Q["a"],VBtn:b["a"],VIcon:_["a"],VList:X["a"],VListItem:Z["a"],VListItemAction:ee["a"],VListItemContent:te["a"],VListItemTitle:te["b"],VNavigationDrawer:ae["a"],VSpacer:C["a"],VToolbarTitle:I["a"]});var ie={name:"App",updated:function(){this.loginStatus()},mounted:function(){this.loginStatus()},methods:{handleLogin:function(e){this.isLoggedIn=!0,this.user=e.user},handleLogout:function(){this.isLoggedIn=!1,this.user={},this.$router.push({name:"Home"})},loginStatus:function(){var e=this;d.a.get(this.$apiURL+"logged_in",{withCredentials:!0}).then((function(t){t.data.logged_in?e.handleLogin(t):e.handleLogout()}))}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},components:{Navbar:U,NavbarLoggedIn:ne},data:function(){return{isLoggedIn:null,user:{},dialog:""}}},re=ie,oe=a("7496"),le=a("f6c4"),ce=Object(f["a"])(re,n,i,!1,null,null,null),ue=ce.exports;h()(ce,{VApp:oe["a"],VMain:le["a"]});a("96cf");var de=a("1da1"),me=a("8c4f"),pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("v-sheet",{attrs:{height:e.sheetHeight}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"text-center display-3 hidden-xs-only"},[a("span",{staticClass:"grey--text"},[e._v("GET")]),a("span",{staticClass:"grey--text text--darken-2"},[e._v(" STRONGR")])]),a("h1",{staticClass:"text-center display-1 hidden-sm-and-up"},[a("span",{staticClass:"grey--text"},[e._v("GET")]),a("span",{staticClass:"grey--text text--darken-2"},[e._v(" STRONGR")])])])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto ",attrs:{"max-width":"374"}},[a("v-img",{attrs:{"max-height":"250",src:"http://placekitten.com/400/400"}}),a("v-card-title",[e._v("You Should Sign Up")]),a("v-card-text",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto ",attrs:{"max-width":"374"}},[a("v-img",{attrs:{"max-height":"250",src:"http://placekitten.com/401/400"}}),a("v-card-title",[e._v("Wow Cool App")]),a("v-card-text",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"mx-auto ",attrs:{"max-width":"374"}},[a("v-img",{attrs:{"max-height":"250",src:"http://placekitten.com/403/400"}}),a("v-card-title",[e._v("Some Great Features")]),a("v-card-text",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],1)],1)],1)],1)},fe=[],ve={computed:{sheetHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"200px";case"sm":return"300px";case"md":return"300px";case"lg":return"300px";case"xl":return"350px"}return"300px"}}},he=ve,be=a("62ad"),ge=a("a523"),je=a("adda"),xe=a("0fd9"),we=a("8dd9"),_e=Object(f["a"])(he,pe,fe,!1,null,null,null),Ce=_e.exports;h()(_e,{VCard:g["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:be["a"],VContainer:ge["a"],VImg:je["a"],VRow:xe["a"],VSheet:we["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"routines"},[a("h1",{staticClass:"subtitle-1 grey--text px-6"},[e._v("Routines")]),a("v-container",{staticClass:"my-5"},[a("v-row",{attrs:{"no-gutters":""}},e._l(e.routines,(function(t){return a("v-col",{key:t.name,attrs:{col:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",{staticClass:"text-center ma-3",attrs:{flat:""}},[a("v-card-text",[a("div",{staticClass:"subtitle-1"},[e._v(e._s(t.name))])]),a("v-card-actions",[a("v-btn",{staticClass:"d-flex justify-space-between",attrs:{text:"",color:"grey"}},[a("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-pencil")]),a("span",[e._v("Edit")])],1),a("v-spacer"),a("v-btn",{staticClass:"d-flex justify-space-between",attrs:{text:"",color:"grey"},on:{click:function(a){return e.deleteRoutine(t.id)}}},[a("span",[e._v("Delete")]),a("v-icon",{attrs:{small:"",right:""}},[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1)},ke=[],Ve={mounted:function(){var e=this;d.a.get(this.$apiURL+"routines",{withCredentials:!0}).then((function(t){e.routines=t.data.routines,console.log(e.routines[0])}))},methods:{deleteRoutine:function(e){d.a.delete(this.$apiURL+"/routines/".concat(e),{withCredentials:!0})}},data:function(){return{routines:[],workouts:[]}}},qe=Ve,Le=Object(f["a"])(qe,ye,ke,!1,null,null,null),Re=Le.exports;h()(Le,{VBtn:b["a"],VCard:g["a"],VCardActions:j["a"],VCardText:j["b"],VCol:be["a"],VContainer:ge["a"],VIcon:_["a"],VRow:xe["a"],VSpacer:C["a"]});var Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects"},[a("h1",{staticClass:"subtitle-1 grey--text"},[e._v("Projects")]),a("v-container",{staticClass:"my-5"},[a("v-expansion-panels",e._l(e.myProjects,(function(t){return a("v-expansion-panel",{key:t.title},[a("v-expansion-panel-header",[e._v(" "+e._s(t.title)+" ")]),a("v-expansion-panel-content",{staticClass:"px grey--text"},[a("div",{staticClass:"font-weight-bold"},[e._v("Due by "+e._s(t.due))]),a("div",[e._v(e._s(t.content))])])],1)})),1)],1)],1)},$e=[],Oe=(a("4de4"),{data:function(){return{projects:[{title:"Design a new website",person:"The Net Ninja",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Code up the homepage",person:"Chun Li",due:"10th Jan 2019",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design video thumbnails",person:"Ryu",due:"20th Dec 2018",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Create a community forum",person:"Gouken",due:"20th Oct 2018",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design a new website... again",person:"The Net Ninja",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}]}},computed:{myProjects:function(){return this.projects.filter((function(e){return"The Net Ninja"===e.person}))}}}),Te=Oe,Ee=a("cd55"),ze=a("49e2"),Ie=a("c865"),Ne=a("0393"),Ue=Object(f["a"])(Te,Se,$e,!1,null,null,null),De=Ue.exports;h()(Ue,{VContainer:ge["a"],VExpansionPanel:Ee["a"],VExpansionPanelContent:ze["a"],VExpansionPanelHeader:Ie["a"],VExpansionPanels:Ne["a"]});var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team"},[a("h1",{staticClass:"subtitle-1 grey--text"},[e._v("Team")]),a("v-container",{staticClass:"my-5"},[a("v-row",{attrs:{"no-gutters":""}},e._l(e.team,(function(t){return a("v-col",{key:t.name,attrs:{col:"12",sm:"6",md:"4",lg:"3"}},[a("v-card",{staticClass:"text-center ma-3",attrs:{flat:""}},[a("v-responsive",{staticClass:"pt-4"},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:t.avatar,alt:"person.name"}})])],1),a("v-card-text",[a("div",{staticClass:"subtitle-1"},[e._v(e._s(t.name))]),a("div",{staticClass:"grey--text"},[e._v(e._s(t.role))])]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"grey"}},[a("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-message")]),a("span",[e._v("Message")])],1)],1)],1)],1)})),1)],1)],1)},Me=[],Ae={data:function(){return{team:[{name:"The Net Ninja",role:"Web developer",avatar:"/avatar-1.png"},{name:"Ryu",role:"Graphic designer",avatar:"/avatar-2.png"},{name:"Chun Li",role:"Web developer",avatar:"/avatar-3.png"},{name:"Gouken",role:"Social media maverick",avatar:"/avatar-4.png"},{name:"Yoshi",role:"Sales guru",avatar:"/avatar-5.png"}]}}},Be=Ae,Fe=a("8212"),Ge=a("6b53"),He=Object(f["a"])(Be,Pe,Me,!1,null,null,null),Ye=He.exports;h()(He,{VAvatar:Fe["a"],VBtn:b["a"],VCard:g["a"],VCardActions:j["a"],VCardText:j["b"],VCol:be["a"],VContainer:ge["a"],VIcon:_["a"],VResponsive:Ge["a"],VRow:xe["a"]}),s["a"].use(me["a"]);var Je=[{path:"/",name:"Home",component:Ce},{path:"/routines",name:"Routines",component:Re},{path:"/workouts",name:"Workouts",component:De},{path:"/exercises",name:"Exercises",component:Ye}],We=new me["a"]({mode:"history",base:"/",routes:Je});We.beforeEach(function(){var e=Object(de["a"])(regeneratorRuntime.mark((function e(t,a,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Home"===t.name){e.next=11;break}return e.next=3,Ke();case 3:if(e.sent){e.next=8;break}console.log("go home"),s({name:"Home"}),e.next=9;break;case 8:s();case 9:e.next=13;break;case 11:console.log("authorised"),s();case 13:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}());var Ke=function(){var e=Object(de["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3001/logged_in",{withCredentials:!0});case 2:if(t=e.sent,!t.data.logged_in){e.next=7;break}return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=We,Xe=a("f309"),Ze=a("fcf4");s["a"].use(Xe["a"]);var et=new Xe["a"]({theme:{themes:{light:{primary:Ze["a"].purple,secondary:Ze["a"].grey.darken1,accent:Ze["a"].shades.black,error:Ze["a"].red.accent3,background:Ze["a"].grey.lighten4},dark:{primary:Ze["a"].blue.lighten3,background:Ze["a"].indigo.base}}}}),tt=et;s["a"].config.productionTip=!1,s["a"].prototype.$apiURL="https://strongr-api.herokuapp.com/",new s["a"]({router:Qe,vuetify:tt,render:function(e){return e(ue)}}).$mount("#app")}});
//# sourceMappingURL=app.9f83af50.js.map