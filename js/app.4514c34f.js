webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},"88Kt":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},i=[],a=n("XyMi");function o(e){n("+VGo")}var u=null,c=!1,p=o,m=null,l=null,d=Object(a["a"])(u,r,i,c,p,m,l),f=d.exports,h=n("/ocq"),j=(n("gbyG"),n("Gh7F"),n("PJh5")),v=n.n(j);n("CvWX"),n("mJx5");function g(e,t){return t.duration?e.concat(t.duration):e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"max";if(!["min","max"].includes(t))throw Error("Unknown duration part `".concat(t,"`"));var n={};for(var s in e){var r=e[s].toString().split("-"),i="min"===t?0:r.length-1;n[s]=r[i]}return n}function y(e){return b(e,"max")}function x(e){return b(e,"min")}function k(e){return v.a.duration(e)}function _(e,t){return e.add(t)}function z(e){var t=!1;for(var n in e){var s=e[n].toString().split("-");if(s.length>1){t=!0;break}}return t}function T(e){var t=e.split(" ");return t[t.length-1]}function w(e){var t=v.a.duration(e).humanize();if(t.startsWith("a")){var n=T(t);return(e[n]||e[n+"s"])+" "+n}return t}function S(e){var t=x(e),n=y(e),s=T(w(n));return[t,n].reduce(function(e,t){return e.concat(w(t).split(" ")[0])},[]).join("-")+" ".concat(s)}function D(e){return z(e)?S(e):w(e)}function O(e){return w(e)}var R={methods:{gatherStepsDurations:g,getMaxDuration:y,getMinDuration:x,momentDuration:k,sumMomentDurations:_,humanizeDuration:D,humanize:O}},E={name:"RecipeStep",mixins:[R],props:{step:Object,steps:Array,stepIdx:Number,totalTime:Object},computed:{typeLabel:function(){switch(this.step.type){case"perform":return"active";case"cook":return"wait";default:return this.step.type}},backgroundColor:function(){switch(this.step.type){case"prep":return"rgba(128,0,128,0.45)";case"perform":return"rgba(0,128,0,0.45)";case"cook":return"rgba(255,128,0,0.45)";default:return""}},linearGradient:function(){var e,t=this,n=[],s=function(){return t.step.duration?v.a.duration(t.getMaxDuration(t.step.duration)).as("milliseconds"):0}(),r=this.steps.filter(function(e,n){return n<t.stepIdx}).reduce(this.gatherStepsDurations,[]).map(this.getMaxDuration).map(this.momentDuration).reduce(this.sumMomentDurations,v.a.duration(0)).as("milliseconds"),i=(r/this.totalTime.as("milliseconds")*100).toFixed(3);if(0===s){var a=.33;e=(+i+a).toFixed(3),i=(+i-2*a).toFixed(3)}else e=+(s/this.totalTime.as("milliseconds")*100).toFixed(3)+ +i;return n.push("#fff 0%, #fff ".concat(i,"%")),n.push("".concat(this.backgroundColor," ").concat(i,"%, ").concat(this.backgroundColor," ").concat(e,"%")),n.push("#fff ".concat(e,"%, #fff 100%")),{"background-image":"linear-gradient(to right, ".concat(n.join(","),")")}}}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"boxShadow"},[n("div",{staticClass:"recipeStep",class:e.step.type,style:[e.linearGradient]},[n("span",{staticClass:"itemType"},[e._v(e._s(e.typeLabel))]),n("span",[e._v(e._s(e.step.text))]),e.step.after?n("span",[e._v(", and "+e._s(e.step.after))]):e._e(),e.step.duration&&"prep"!==e.step.type?n("span",[e._v(", "+e._s(e.humanizeDuration(e.step.duration)))]):e._e()])])},F=[];function M(e){n("Rx6o")}var L=!1,N=M,B="data-v-45a15196",P=null,q=Object(a["a"])(E,C,F,L,N,B,P),I=q.exports,A={name:"RecipeIngredient",props:{ingredient:Object}},H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipeIngredient",attrs:{itemprop:"recipeIngredient"}},[e._v("\n  "+e._s(e.ingredient.amount)+" "+e._s(e.ingredient.text)+"\n")])},X=[];function G(e){n("O4Cy")}var U=!1,V=G,W="data-v-60e0df53",K=null,J=Object(a["a"])(A,H,X,U,V,W,K),Y=J.exports,Q={name:"BetaRecipeTimeBar",props:{steps:Array}},Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BetaRecipeTimeBar",attrs:{"aria-hidden":""}},e._l(e.steps,function(t,s){return n("div",{key:s,class:t.type},[e._v("\n     \n  ")])}))},$=[];function ee(e){n("Yt80")}var te=!1,ne=ee,se="data-v-625da800",re=null,ie=Object(a["a"])(Q,Z,$,te,ne,se,re),ae=ie.exports,oe={name:"Recipe",components:{RecipeStep:I,RecipeIngredient:Y,BetaRecipeTimeBar:ae},mixins:[R],props:{recipe:{type:Object,default:function(){return{ingredients:[],steps:[]}}}},computed:{prepSteps:function(){return this.recipe.steps.filter(function(e){return"prep"===e.type})},performSteps:function(){return this.recipe.steps.filter(function(e){return"perform"===e.type})},cookSteps:function(){return this.recipe.steps.filter(function(e){return["cook","wait"].includes(e.type)})},prepTime:function(){return this.prepSteps.reduce(this.gatherStepsDurations,[]).map(this.getMaxDuration).map(this.momentDuration).reduce(this.sumMomentDurations,v.a.duration(0))},performTime:function(){return this.performSteps.reduce(this.gatherStepsDurations,[]).map(this.getMaxDuration).map(this.momentDuration).reduce(this.sumMomentDurations,v.a.duration(0))},cookTime:function(){return this.cookSteps.reduce(this.gatherStepsDurations,[]).map(this.getMaxDuration).map(this.momentDuration).reduce(this.sumMomentDurations,v.a.duration(0))},totalTime:function(){return[this.prepTime,this.performTime,this.cookTime].map(this.momentDuration).reduce(this.sumMomentDurations,v.a.duration(0))}}},ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Recipe",attrs:{itemscope:"",itemtype:"http://schema.org/Recipe"}},[n("h2",[e._v(e._s(e.recipe.title))]),n("h3",[e._v("Timings")]),n("BetaRecipeTimeBar",{attrs:{steps:e.recipe.steps}}),n("div",{staticClass:"prepTime"},[e._v("\n    Prep Time: "),n("meta",{attrs:{itemprop:"prepTime",content:e.prepTime}}),e._v(" "+e._s(e.humanize(e.prepTime))+"\n  ")]),n("div",{staticClass:"performTime"},[e._v("\n    Active Time: "),n("meta",{attrs:{itemprop:"performTime",content:e.performTime}}),e._v(" "+e._s(e.humanize(e.performTime))+"\n  ")]),n("div",[e._v("\n    Wait time: "+e._s(e.humanize(e.cookTime))+"\n  ")]),n("div",{staticClass:"totalTime"},[n("strong",[e._v("\n      Total Time: "),n("meta",{attrs:{itemprop:"totalTime",content:e.totalTime}}),e._v(" "+e._s(e.humanize(e.totalTime))+"\n    ")])]),n("h2",[e._v("Ingredients")]),n("ul",e._l(e.recipe.ingredients,function(e,t){return n("li",{key:t},[n("RecipeIngredient",{attrs:{ingredient:e}})],1)})),n("h2",[e._v("Steps")]),n("ol",{staticClass:"recipeInstructions",attrs:{itemprop:"recipeInstructions"}},e._l(e.recipe.steps,function(t,s){return n("li",{key:s,attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[n("RecipeStep",{attrs:{step:t,steps:e.recipe.steps,stepIdx:s,totalTime:e.totalTime}})],1)}))],1)},ce=[];function pe(e){n("oALa")}var me=!1,le=pe,de="data-v-42434614",fe=null,he=Object(a["a"])(oe,ue,ce,me,le,de,fe),je=he.exports,ve={name:"RecipeList",components:{Recipe:je},props:{recipes:Array}},ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.recipes,function(e,t){return n("div",{key:t},[n("Recipe",{attrs:{recipe:e}})],1)}))},be=[];function ye(e){n("88Kt")}var xe=!1,ke=ye,_e="data-v-60968886",ze=null,Te=Object(a["a"])(ve,ge,be,xe,ke,_e,ze),we=Te.exports,Se={name:"home",components:{RecipeList:we},data:function(){return{recipes:[{title:"Sweet and Sour Peppers",ingredients:[{text:"olive oil"},{text:"red onion",amount:1},{text:"red peppers",amount:2},{text:"sea salt"},{text:"freshly ground pepper"},{text:"sugar",amount:"1 tbsp"},{text:"red wine vinegar",amount:"3 tbsp"},{text:"extra virgin olive oil",amount:"1 tbsp"},{text:"basil, leaves only",amount:"small bunch"}],steps:[{type:"prep",text:"Seed and thinly sliced the red peppers",duration:{minutes:3}},{type:"prep",text:"Shred the basil, leaves only",duration:{minutes:1}},{type:"prep",text:"Peel and slice the red onion",duration:{minutes:3}},{type:"perform",text:"Heat olive oil in a large frying pan",duration:{minutes:2}},{type:"perform",text:"Add the onions and peppers, then season with salt and pepper."},{type:"perform",text:"Add the sugar",after:"stir"},{type:"perform",text:"Saute over high heat until soft and colored",duration:{minutes:"4-5"}},{type:"perform",text:"Add the vinegar"},{type:"perform",text:"Let the vinegar bubble until it has reduced and the peppers are soft",duration:{minutes:"1-2"}},{type:"perform",text:"Turn down the heat to medium"},{type:"cook",text:"Cook",duration:{minutes:"2-3"}},{type:"perform",text:"Stir in the shredded basil"},{type:"cook",text:"Cook",duration:{seconds:30}}]}]}}},De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("RecipeList",{attrs:{recipes:e.recipes}})],1)},Oe=[],Re=!1,Ee=null,Ce=null,Fe=null,Me=Object(a["a"])(Se,De,Oe,Re,Ee,Ce,Fe),Le=Me.exports,Ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Be=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],Pe=null,qe=!1,Ie=null,Ae=null,He=null,Xe=Object(a["a"])(Pe,Ne,Be,qe,Ie,Ae,He),Ge=Xe.exports;s["a"].use(h["a"]);var Ue=new h["a"]({routes:[{path:"/",name:"home",component:Le},{path:"/about",name:"about",component:Ge}]}),Ve=n("NYxO");s["a"].use(Ve["a"]);var We=new Ve["a"].Store({state:{},mutations:{},actions:{}}),Ke=n("ydGU");Object(Ke["a"])("".concat("/wip-recipe/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),s["a"].config.productionTip=!1,new s["a"]({router:Ue,store:We,render:function(e){return e(f)}}).$mount("#app")},O4Cy:function(e,t){},Rx6o:function(e,t){},Yt80:function(e,t){},oALa:function(e,t){},uslO:function(e,t,n){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return n(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id="uslO"}},[0]);
//# sourceMappingURL=app.4514c34f.js.map