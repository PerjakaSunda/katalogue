webpackJsonp([1],{"8m66":function(t,e,a){"use strict";var s=a("Sazm"),n=a.n(s);a.d(e,"a",function(){return n.a});n.a.initializeApp({apiKey:"AIzaSyCN39p7EvVlvChIV9lhNRpXNqQ5PLKsBkw",authDomain:"dotapp-69dcf.firebaseapp.com",databaseURL:"https://dotapp-69dcf.firebaseio.com",projectId:"dotapp-69dcf",storageBucket:"dotapp-69dcf.appspot.com",messagingSenderId:"5998765842"})},IcnI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"strict",function(){return p}),a.d(e,"state",function(){return l}),a.d(e,"mutations",function(){return m}),a.d(e,"actions",function(){return v});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),o=a.n(r),i=a("8m66"),u=a("YaEn"),c=i.a.database().ref("products"),d=i.a.storage().ref(),p=!1,l=function(){return{loading:!1,isMobile:!1,head:{title:"KATALOGUE"},user:{auth:!1,email:"",password:""},products:[],products_new_popup:!1,products_new:{nama:"",harga:null,jenis:"",stock:null,image:null}}},m={Loading:function(t,e){t.loading="hide"!==e},Auth:function(t,e){t.user.auth=1===e},ClearProductAdd:function(t){t.products_new={nama:"",harga:null,jenis:"",stock:null,image:null}}},v={Req:function(t,e){var a=this,s=(t.dispatch,t.commit),r=t.state;return o()(n.a.mark(function t(){var o,p;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.action,t.next="firstLoad"===t.t0?3:"signIn"===t.t0?7:"signOut"===t.t0?12:"productAdd"===t.t0?16:"productUpdate"===t.t0?19:"productDelete"===t.t0?20:"imageUpload"===t.t0?22:26;break;case 3:return s("Loading"),t.next=6,i.a.auth().onAuthStateChanged(function(t){t?(s("Auth",1),u.a.replace({name:"Dashboard"})):s("Auth",0),s("Loading","hide")});case 6:return t.abrupt("break",27);case 7:return s("Loading"),o={},t.next=11,i.a.auth().signInWithEmailAndPassword(r.user.email,r.user.password).then(function(t){s("Auth",1),s("Loading","hide"),o={status:!0,message:""}},function(t){s("Auth",0),s("Loading","hide"),o="auth/user-not-found"===t.code?{status:!1,message:"User not found."}:{status:!1,message:t.message}});case 11:return t.abrupt("return",o);case 12:return s("Loading"),t.next=15,i.a.auth().signOut().then(function(){s("Auth",0),u.a.replace({name:"Home"}),s("Loading","hide")});case 15:return t.abrupt("break",27);case 16:return c.push(r.products_new),s("ClearProductAdd"),t.abrupt("break",27);case 19:return t.abrupt("break",27);case 20:return c.child(e.key).remove(),t.abrupt("break",27);case 22:return s("Loading"),(p=e.e.target.files)?d.child(Date.now()+".jpg").put(p[0]).then(function(t){r.products_new.image=t.downloadURL,s("Loading","hide")}):(r.products_new.image=null,s("Loading","hide")),t.abrupt("break",27);case 26:return t.abrupt("break",27);case 27:case"end":return t.stop()}},t,a)}))()}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade"}},[this.$store.state.loading?e("div",{staticClass:"loader-wrapper"},[e("div",{attrs:{id:"loader"}})]):this._e()]),this._v(" "),e("router-view")],1)},staticRenderFns:[]},r=a("VU/8")({name:"App"},n,!1,null,null,null).exports,o=a("YaEn"),i=a("NYxO"),u=a("mtWM"),c=a.n(u),d=a("Rf8U"),p=a.n(d),l=a("8m66");a("VaBq");s.a.use(i.a),s.a.use(p.a,c.a);var m=a("IcnI"),v=new i.a.Store(m);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,store:v,components:{App:r},template:"<App/>",created:function(){var t=this;l.a.database().ref("products").on("value",function(e){t.$store.state.products=e.val()}),t.$store.dispatch("Req",{action:"firstLoad"})},watch:{$route:function(t,e){var a=this;l.a.database().ref("products").on("value",function(t){a.$store.state.products=t.val()})}}})},VaBq:function(t,e){},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),r={name:"Home",data:function(){return{}},methods:{goSignIn:function(){var t=this;""===t.$store.state.user.email?alert("Email is empty"):""===t.$store.state.user.password?alert("Password is empty"):t.$store.dispatch("Req",{action:"signIn"}).then(function(e){e.status?t.$router.replace({name:"Dashboard"}):alert(e.message)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg-body",staticStyle:{"background-image":"url(./static/images/bg.svg)"}},[a("div",{staticClass:"inner-body"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"inner-main"},[a("h1",{staticClass:"title"},[a("span",{staticClass:"account"},[t._v(t._s(t.$store.state.head.title))])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.user.email,expression:"$store.state.user.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.$store.state.user.email},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.goSignIn()},input:function(e){e.target.composing||t.$set(t.$store.state.user,"email",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.user.password,expression:"$store.state.user.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.$store.state.user.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.goSignIn()},input:function(e){e.target.composing||t.$set(t.$store.state.user,"password",e.target.value)}}}),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"button",value:"Sign In"},on:{click:function(e){t.goSignIn()}}})])])])])},staticRenderFns:[]},i=a("VU/8")(r,o,!1,null,null,null).exports,u={name:"Dashboard",methods:{addNewProduct:function(){""===this.$store.state.products_new.nama?alert("Product name is empty"):this.$store.state.products_new.harga<=1e3?alert("Invalid price"):this.$store.state.products_new.stock<=0?alert("Add stock"):""===this.$store.state.products_new.jenis?alert("Select product type"):this.$store.state.products_new.image&&""!==this.$store.state.products_new.image?(this.$store.dispatch("Req",{action:"productAdd"}),this.$store.state.products_new_popup=!1):alert("Add product photo")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg-body",staticStyle:{"background-image":"url(./static/images/bg.svg)"}},[a("div",{staticClass:"navbar shadow-dark"},[a("div",{staticClass:"item"},[a("span",[t._v(t._s(t.$store.state.head.title))])]),t._v(" "),a("div",{staticClass:"item right",on:{click:function(e){t.$store.dispatch("Req",{action:"signOut"})}}},[t._v("\n      SIGNOUT\n    ")])]),t._v(" "),a("div",{staticClass:"inner-body dashboard"},[a("div",{staticClass:"inner-dashboard-nav"},[a("div",{staticClass:"dashboard-list active",on:{click:function(e){t.$store.state.products_new_popup=!1}}},[t._v("\n        Products\n      ")]),t._v(" "),a("div",{staticClass:"dashboard-list new",on:{click:function(e){t.$store.state.products_new_popup=!t.$store.state.products_new_popup}}},[t._v("\n        Add New\n      ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.products_new_popup,expression:"$store.state.products_new_popup"}],staticClass:"popup-add-product"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.products_new.nama,expression:"$store.state.products_new.nama"}],staticClass:"add-product",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.$store.state.products_new.nama},on:{input:function(e){e.target.composing||t.$set(t.$store.state.products_new,"nama",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.products_new.harga,expression:"$store.state.products_new.harga"}],staticClass:"add-product",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.$store.state.products_new.harga},on:{input:function(e){e.target.composing||t.$set(t.$store.state.products_new,"harga",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.products_new.stock,expression:"$store.state.products_new.stock"}],staticClass:"add-product",attrs:{type:"number",placeholder:"Stock"},domProps:{value:t.$store.state.products_new.stock},on:{input:function(e){e.target.composing||t.$set(t.$store.state.products_new,"stock",e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.products_new.jenis,expression:"$store.state.products_new.jenis"}],staticClass:"add-product",attrs:{type:"text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$store.state.products_new,"jenis",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Type")]),t._v(" "),a("option",{attrs:{value:"Shoes"}},[t._v("Shoes")]),t._v(" "),a("option",{attrs:{value:"Tops"}},[t._v("Tops")]),t._v(" "),a("option",{attrs:{value:"Bottoms"}},[t._v("Bottoms")])]),t._v(" "),a("input",{staticClass:"add-product",attrs:{type:"file",accept:"image/x-png,image/gif,image/jpeg"},on:{change:function(e){t.$store.dispatch("Req",{action:"imageUpload",e:e})}}}),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"button",value:"Add product"},on:{click:function(e){t.addNewProduct()}}})]),t._v(" "),a("div",{staticClass:"clearfix"})]),t._v(" "),a("div",{staticClass:"inner-dashboard-main"},[a("div",{staticClass:"dashboard-content"},[t._l(t.$store.state.products,function(e,s){return a("div",{key:s,staticClass:"product-item"},[a("div",{staticClass:"product-content"},[a("span",{staticClass:"remove",on:{click:function(e){t.$store.dispatch("Req",{action:"productDelete",key:s})}}},[t._v("\n              Remove\n            ")]),t._v(" "),a("div",{staticClass:"image b100",style:{"background-image":"url("+e.image+")"}}),t._v(" "),a("div",{staticClass:"clearfix"}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v("\n                "+t._s(e.nama)+"\n              ")]),t._v(" "),a("div",{staticClass:"price"},[t._v("\n                IDR "+t._s(e.harga)+"\n              ")])])])])}),t._v(" "),a("div",{staticClass:"clearfix"})],2)])])])},staticRenderFns:[]},d=a("VU/8")(u,c,!1,null,null,null).exports;s.a.use(n.a);e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:i},{path:"/dashboard",name:"Dashboard",component:d}]})}},["NHnr"]);
//# sourceMappingURL=app.0b24dbf6754758d65067.js.map