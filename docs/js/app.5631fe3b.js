(function(t){function e(e){for(var r,o,u=e[0],c=e[1],s=e[2],d=0,f=[];d<u.length;d++)o=u[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"26bc":function(t,e,n){"use strict";var r=n("9eb4"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Money Creation Simulator")]),n("input",{attrs:{type:"button",value:"Ask for a Loan"},on:{click:t.askLoan}}),n("input",{attrs:{type:"button",value:"Buy Tokens"},on:{click:t.buyIco}}),n("input",{attrs:{type:"button",value:"Draw Cash"},on:{click:t.drawCash}}),n("input",{attrs:{type:"button",value:"Mine Bitcoin"},on:{click:t.mineBitcoin}}),n("input",{attrs:{type:"button",value:"Buy Bitcoin"},on:{click:t.buyBitcoin}}),n("h3",[t._v("Money in the System is "+t._s(t.totalMoney)+" USD")]),n("div",{attrs:{id:"NewStyle"}},[n("Ledger",{attrs:{title:"bank"}}),n("Ledger",{attrs:{title:"me"}}),n("Ledger",{attrs:{title:"startup"}}),n("Ledger",{attrs:{title:"other"}})],1),n("button",{on:{click:t.drawChart}},[t._v("Click me")]),n("div",{attrs:{id:"dashboard"}})])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ledger"},[n("h1",[t._v(t._s(t.title))]),t._l(this.$store.state[t.title],function(e,r){return n("div",{key:r},[e>0?n("div",{staticClass:"asset"},[t._v("\n      "+t._s(r)+" : "+t._s(e)+" USD"),n("br")]):n("div",{staticClass:"liability"},[t._v(t._s(r)+" : "+t._s(e)+" USD"),n("br")])])})],2)},u=[],c=n("2f62"),s={props:["title"],name:"Ledger",computed:Object(c["b"])(["OtherThing"])},l=s,d=(n("26bc"),n("2877")),f=Object(d["a"])(l,o,u,!1,null,null,null),p=f.exports,h=(n("55dd"),n("ac6a"),{drawchart:function(t,e){var r="steelblue";function a(t){return{Cash:"#807dba",Bitcoins:"#e08214","Current Account":"#41ab5d",Tokens:"#ba7d80"}[t]}var i=n("6e58");function o(n){var a={},o={t:60,r:0,b:30,l:0};o.w=500-o.l-o.r,o.h=300-o.t-o.b;var u=i.select(t).append("svg").attr("width",o.w+o.l+o.r).attr("height",o.h+o.t+o.b).append("g").attr("transform","translate("+o.l+","+o.t+")"),c=i.scale.ordinal().rangeRoundBands([0,o.w],.1).domain(n.map(function(t){return t[0]}));u.append("g").attr("class","x axis").attr("transform","translate(0,"+o.h+")").call(i.svg.axis().scale(c).orient("bottom"));var l=i.scale.linear().range([o.h,0]).domain([0,i.max(n,function(t){return t[1]})]),d=u.selectAll(".bar").data(n).enter().append("g").attr("class","bar");function h(t){var n=e.filter(function(e){return e.Ledger==t[0]})[0],r=i.keys(n.freq).map(function(t){return{type:t,freq:n.bs[t]}});f.update(r),p.update(r)}function m(t){f.update(s),p.update(s)}return d.append("rect").attr("x",function(t){return c(t[0])}).attr("y",function(t){return l(t[1])}).attr("width",c.rangeBand()).attr("height",function(t){return o.h-l(t[1])}).attr("fill",r).on("mouseover",h).on("mouseout",m),d.append("text").text(function(t){return i.format(",")(t[1])}).attr("x",function(t){return c(t[0])+c.rangeBand()/2}).attr("y",function(t){return l(t[1])-5}).attr("text-anchor","middle"),a.update=function(t,e){l.domain([0,i.max(t,function(t){return t[1]})]);var n=u.selectAll(".bar").data(t);n.select("rect").transition().duration(500).attr("y",function(t){return l(t[1])}).attr("height",function(t){return o.h-l(t[1])}).attr("fill",e),n.select("text").transition().duration(500).text(function(t){return i.format(",")(t[1])}).attr("y",function(t){return l(t[1])-5})},a}function u(n){var o={},u={w:250,h:250};u.r=Math.min(u.w,u.h)/2;var c=i.select(t).append("svg").attr("width",u.w).attr("height",u.h).append("g").attr("transform","translate("+u.w/2+","+u.h/2+")"),s=i.svg.arc().outerRadius(u.r-10).innerRadius(0),l=i.layout.pie().sort(null).value(function(t){return t.freq});function f(t){d.update(e.map(function(e){return[e.Ledger,e.bs[t.data.type]]}),a(t.data.type))}function p(t){d.update(e.map(function(t){return[t.Ledger,t.total]}),r)}function h(t){var e=i.interpolate(this._current,t);return this._current=e(0),function(t){return s(e(t))}}return c.selectAll("path").data(l(n)).enter().append("path").attr("d",s).each(function(t){this._current=t}).style("fill",function(t){return a(t.data.type)}).on("mouseover",f).on("mouseout",p),o.update=function(t){c.selectAll("path").data(l(t)).transition().duration(500).attrTween("d",h)},o}function c(e){var n={},r=i.select(t).append("table").attr("class","legend"),o=r.append("tbody").selectAll("tr").data(e).enter().append("tr");function u(t,e){return i.format("%")(t.freq/i.sum(e.map(function(t){return t.freq})))}return o.append("td").append("svg").attr("width","16").attr("height","16").append("rect").attr("width","16").attr("height","16").attr("fill",function(t){return a(t.type)}),o.append("td").text(function(t){return t.type}),o.append("td").attr("class","legendFreq").text(function(t){return i.format(",")(t.freq)}),o.append("td").attr("class","legendPerc").text(function(t){return u(t,e)}),n.update=function(t){var e=r.select("tbody").selectAll("tr").data(t);e.select(".legendFreq").text(function(t){return i.format(",")(t.freq)}),e.select(".legendPerc").text(function(e){return u(e,t)})},n}e.forEach(function(t){t.total=t.bs.low+t.bs.mid+t.bs.high});var s=["Tokens","Bitcoins","Cash","Current Account"].map(function(t){return{type:t,freq:i.sum(e.map(function(e){return e.bs[t]}))}}),l=e.map(function(t){return[t.Ledger,t.total]}),d=o(l),f=u(s),p=c(s)}}),m={askLoan:function(t){t.commit("gl",{gl:"bank",credit:"Client Loan",debit:"Client Deposits",amount:1e3}),t.commit("gl",{gl:"me",credit:"Current Account",debit:"Debt with Bank",amount:1e3})},buyIco:function(t){t.commit("gl",{gl:"other",credit:"Bitcoins",debit:"Tokens",amount:10}),t.commit("gl",{gl:"me",credit:"Tokens",debit:"Bitcoins",amount:10})},drawCash:function(t){t.commit("gl",{gl:"me",credit:"Cash",debit:"Current Account",amount:10}),t.commit("gl",{gl:"bank",credit:"Client Deposits",debit:"Cash",amount:10})},mineBitcoin:function(t){t.commit("gl",{gl:"other",credit:"Bitcoins",debit:"Profit&Loss",amount:1}),t.commit("gl",{gl:"me",credit:"Bitcoins",debit:"Current Account",amount:1})},buyBitcoin:function(t){t.commit("gl",{gl:"other",credit:"Current Account",debit:"Bitcoins",amount:1}),t.commit("gl",{gl:"me",credit:"Bitcoins",debit:"Current Account",amount:1})}},b=(n("6e58"),{name:"app",components:{Ledger:p},data:function(){return{ledgers:["bank","me","startup","other"],moneyAccounts:["Current Account","Bitcoins","Tokens","Cash"],freqData:[{Ledger:"AL",bs:{Bitcoins:4786,Cash:1319,Tokens:-249}},{Ledger:"AZ",bs:{low:1101,Bitcoins:412,"Current Account":674}},{Ledger:"CT",bs:{"Current Account":932,Tokens:2149,Cash:418}},{Ledger:"DE",bs:{Cash:832,Bitcoins:1152,"Current Account":1862}},{Ledger:"FL",bs:{Bitcoins:4481,mid:3304,Tokens:948}},{Ledger:"GA",bs:{Cash:1619,"Current Account":167,Bitcoins:1063}},{Ledger:"IA",bs:{low:1819,Tokens:247,Cash:1203}},{Ledger:"IL",bs:{"Current Account":4498,mid:3852,high:942}},{Ledger:"IN",bs:{low:797,"Current Account":1849,high:1534}},{Ledger:"KS",bs:{low:162,mid:379,"Current Account":471}}]}},methods:{askLoan:function(){m.askLoan(this.$store)},buyIco:function(){m.buyIco(this.$store)},drawCash:function(){m.drawCash(this.$store)},mineBitcoin:function(){m.mineBitcoin(this.$store)},buyBitcoin:function(){m.buyBitcoin(this.$store)},drawChart:function(){for(var t=[],e=this.$data.ledgers,n=0;n<e.length;n++){var r={};for(var a in this.$store.state[e[n]]){var i=this.$store.state[e[n]][a];r[a]=i}t.push({Ledger:e[n],bs:r})}h.drawchart("#dashboard",t)}},computed:{totalMoney:function(){for(var t=0,e=this.$data.ledgers,n=this.$data.moneyAccounts,r=0;r<e.length;r++)for(var a in this.$store.state[e[r]]){var i=this.$store.state[e[r]][a];n.indexOf(a)>-1&&(t+=i)}return t}}}),g=b,v=(n("034f"),Object(d["a"])(g,a,i,!1,null,null,null)),y=v.exports;r["a"].use(c["a"]);var C=new c["a"].Store({state:{bank:{"Client Loan":0,"Client Deposits":-210,Cash:310,Capital:-100},me:{Tokens:0,Bitcoins:0,"Current Account":10,"Debt with Bank":0},other:{"Current Account":200,Tokens:100,Bitcoins:100,Shares:100},startup:{Bitcoins:100,Capital:-100}},mutations:{gl:function(t,e){isNaN(t[e.gl][e.credit])&&(t[e.gl][e.credit]=0),isNaN(t[e.gl][e.debit])&&(t[e.gl][e.debit]=0),t[e.gl][e.credit]+=e.amount,t[e.gl][e.debit]-=e.amount}},actions:{},getters:{}});r["a"].config.productionTip=!1,new r["a"]({store:C,render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,n){},"9eb4":function(t,e,n){}});
//# sourceMappingURL=app.5631fe3b.js.map