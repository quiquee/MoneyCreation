(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)o=s[d],a[o]&&h.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},1:function(t,e){},2:function(t,e){},"26bc":function(t,e,i){"use strict";var n=i("9eb4"),a=i.n(n);a.a},"407b":function(t,e,i){"use strict";var n=i("929a"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("a026"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",[t._v("Money Creation Simulator")]),i("input",{attrs:{title:"BORROW MONEY FROM BANK",type:"button",value:"Borrow Money"},on:{click:t.askLoan}}),i("input",{attrs:{title:"PAY BACK LOAN",type:"button",value:"Pay Back"},on:{click:t.payLoan}}),i("input",{attrs:{title:"BUY TOKENS WITH BITCOINS",disabled:this.$store.state.dbGl["me"]["Bitcoins"]<=0,type:"button",value:"Buy Tokens"},on:{click:t.buyIco}}),i("input",{attrs:{title:"DRAW CASH FROM BANK",disabled:this.$store.state.dbGl["me"]["Current Account"]<=0||this.$store.state.dbGl["bank"]["Cash"]<=0,type:"button",value:"Draw Cash"},on:{click:t.drawCash}}),i("input",{attrs:{title:"MINE BITCOINS",type:"button",value:"Mine Bitcoin"},on:{click:t.mineBitcoin}}),i("input",{attrs:{title:"BUY BITCOINS WITH CASH",disabled:this.$store.state.dbGl["me"]["Cash"]<=0||this.$store.state.dbGl["other"]["Bitcoins"]<=0,type:"button",value:"Buy Bitcoin"},on:{click:t.buyBitcoin}}),i("h3",[t._v("Money in the System is "+t._s(t.totalMoney)+" USD")]),i("div",{attrs:{id:"NewStyle"}},[i("div",[i("Ledger",{attrs:{title:"Bank",gl:"bank"}}),i("Chart",{attrs:{title:"Bank",gl:"bank",width:"300",height:"200"}})],1),i("div",[i("Ledger",{attrs:{title:"Me",gl:"me"}}),i("Chart",{attrs:{title:"Me",gl:"me",width:"300",height:"200"}})],1),i("div",[i("Ledger",{attrs:{title:"Startup",gl:"startup"}}),i("Chart",{attrs:{title:"Startup",gl:"startup",width:"300",height:"200"}})],1),i("div",[i("Ledger",{attrs:{title:"Others",gl:"other"}}),i("Chart",{attrs:{title:"Other",gl:"other",width:"300",height:"200"}})],1)])])},r=[],o=i("a4bb"),s=i.n(o),l=i("2f62");n["a"].use(l["a"]);var c=new l["a"].Store({state:{dbGl:{bank:{"Client Loan":0,Bitcoins:100,"Client Deposits":-200,Cash:300,Capital:-100},me:{Tokens:0,Bitcoins:100,"Current Account":100,"Debt with Bank":0},other:{"Current Account":100,Tokens:100,Bitcoins:100,Shares:200},startup:{Bitcoins:100,Capital:-100}},moneyAccounts:["Current Account","Bitcoins","Tokens","Cash"]},mutations:{gl:function(t,e){isNaN(t.dbGl[e.gl][e.credit])&&(t.dbGl[e.gl][e.credit]=0),isNaN(t.dbGl[e.gl][e.debit])&&(t.dbGl[e.gl][e.debit]=0),t.dbGl[e.gl][e.credit]+=e.amount,t.dbGl[e.gl][e.debit]-=e.amount}},getters:{ledgers:function(t){return s()(t.dbGl)}}}),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ledger"},[i("h1",[t._v(t._s(t.title))]),t._l(this.$store.state.dbGl[t.gl],function(e,n){return i("div",[e>0?i("div",{staticClass:"asset"},[t._v("\n            "+t._s(n)+" : "+t._s(e)+" USD"),i("br")]):e<0?i("div",{staticClass:"liability"},[t._v("\n            "+t._s(n)+" : "+t._s(e)+" USD"),i("br")]):t._e()])})],2)},d=[],h={props:["title","gl"],name:"Ledger"},b=h,p=(i("26bc"),i("2877")),f=Object(p["a"])(b,u,d,!1,null,null,null),g=f.exports,m={askLoan:function(t){t.commit("gl",{gl:"bank",credit:"Client Loan",debit:"Client Deposits",amount:100}),t.commit("gl",{gl:"me",credit:"Current Account",debit:"Debt with Bank",amount:100})},payLoan:function(t){t.commit("gl",{gl:"bank",debit:"Client Loan",credit:"Client Deposits",amount:100}),t.commit("gl",{gl:"me",debit:"Current Account",credit:"Debt with Bank",amount:100})},buyIco:function(t){t.commit("gl",{gl:"other",credit:"Bitcoins",debit:"Tokens",amount:100}),t.commit("gl",{gl:"me",credit:"Tokens",debit:"Bitcoins",amount:100})},drawCash:function(t){t.commit("gl",{gl:"me",credit:"Cash",debit:"Current Account",amount:100}),t.commit("gl",{gl:"bank",credit:"Client Deposits",debit:"Cash",amount:100})},mineBitcoin:function(t){t.commit("gl",{gl:"other",credit:"Bitcoins",debit:"Profit&Loss",amount:100}),t.commit("gl",{gl:"me",credit:"Bitcoins",debit:"Current Account",amount:100})},buyBitcoin:function(t){t.commit("gl",{gl:"other",credit:"Current Account",debit:"Bitcoins",amount:100}),t.commit("gl",{gl:"me",credit:"Bitcoins",debit:"Cash",amount:100})}},v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"graph"},[t.assetData.data.length>0?i("v-chart",{attrs:{chartData:Object.assign({},t.chartData,{selector:"asset"+this.title},{title:"Assets"},t.assetData)}}):t._e(),t.liabilityData.data.length>0?i("v-chart",{attrs:{chartData:Object.assign({},t.chartData,{selector:"liab"+this.title},{title:"Liabilities"},{overrides:{palette:{fill:["#922","#ddd"]}}},t.liabilityData)}}):t._e()],1)},y=[],C=i("bd86"),B={name:"example",props:["title","gl","width","height"],data:function(){return{chartData:Object(C["a"])({chartType:"vBarChart",title:this.title,width:this.width,height:this.height,dim:"acc",metric:"balance"},"chartType","vBarChart")}},computed:{graphData:function(){var t=[];for(var e in this.$store.state.dbGl[this.gl])t.push({acc:e,balance:this.$store.state.dbGl[this.gl][e]});return{data:t}},assetData:function(){var t=[];for(var e in this.$store.state.dbGl[this.gl]){var i=this.$store.state.dbGl[this.gl][e];i>0&&t.push({acc:e,balance:i})}return{data:t}},liabilityData:function(){var t=[];for(var e in this.$store.state.dbGl[this.gl]){var i=this.$store.state.dbGl[this.gl][e];i<0&&t.push({acc:e,balance:-i})}return{data:t}}}},k=B,w=(i("407b"),Object(p["a"])(k,v,y,!1,null,null,null)),O=w.exports,$={name:"app",components:{Ledger:g,Chart:O},data:function(){return{}},methods:{askLoan:function(){m.askLoan(this.$store)},payLoan:function(){m.payLoan(this.$store)},buyIco:function(){m.buyIco(this.$store)},mineBitcoin:function(){m.mineBitcoin(this.$store)},buyBitcoin:function(){m.buyBitcoin(this.$store)},drawCash:function(){m.drawCash(this.$store)}},computed:{totalMoney:function(){for(var t=0,e=this.$store.getters.ledgers,i=(this.$data.moneyAccounts,0);i<e.length;i++)for(var n in this.$store.state.dbGl[e[i]]){var a=this.$store.state.dbGl[e[i]][n];this.$store.state.moneyAccounts.indexOf(n)>-1&&(t+=a)}return t}}},_=$,D=(i("034f"),Object(p["a"])(_,a,r,!1,null,null,null)),G=D.exports,A=i("8984");n["a"].config.productionTip=!1,n["a"].use(A["a"]),new n["a"]({store:c,render:function(t){return t(G)}}).$mount("#app")},"64a9":function(t,e,i){},"929a":function(t,e,i){},"9eb4":function(t,e,i){}});
//# sourceMappingURL=app.891e8a20.js.map