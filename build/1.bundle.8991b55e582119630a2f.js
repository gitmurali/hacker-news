(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{297:function(e,t,n){e.exports={feed:"feed--1RYG9","feed-title":"feed-title--ZmqUw",feedTitle:"feed-title--ZmqUw","feed-author":"feed-author--iBCAd",feedAuthor:"feed-author--iBCAd","feed-arrow":"feed-arrow--3JqZx",feedArrow:"feed-arrow--3JqZx","feed-hide":"feed-hide--1Ll_U",feedHide:"feed-hide--1Ll_U","feed-pad-left":"feed-pad-left--3Qhb9",feedPadLeft:"feed-pad-left--3Qhb9",upvote:"upvote--XDpL7",comments:"comments--3FN03"}},298:function(e,t){e.exports="/resources/images/grayarrow.gif"},307:function(e,t,n){e.exports={"page-wrapper":"page-wrapper--10Zdn",pageWrapper:"page-wrapper--10Zdn","page-wrapper-content-centered":"page-wrapper-content-centered--2_j9G",pageWrapperContentCentered:"page-wrapper-content-centered--2_j9G","page-wrapper-padded":"page-wrapper-padded--2KihO",pageWrapperPadded:"page-wrapper-padded--2KihO","page-wrapper-portal":"page-wrapper-portal--1gG7V",pageWrapperPortal:"page-wrapper-portal--1gG7V","page-sidebar":"page-sidebar--riguU",pageSidebar:"page-sidebar--riguU","page-content":"page-content--5kYLl",pageContent:"page-content--5kYLl","page-content-with-sidebar":"page-content-with-sidebar--2uSau",pageContentWithSidebar:"page-content-with-sidebar--2uSau"}},308:function(e,t,n){e.exports={"error-page":"error-page--2wFye",errorPage:"error-page--2wFye","error-page-content":"error-page-content---zc34",errorPageContent:"error-page-content---zc34","image-wrapper":"image-wrapper--PRN2o",imageWrapper:"image-wrapper--PRN2o"}},312:function(e,t){e.exports="/resources/images/y18.gif"},313:function(e,t,n){e.exports={header:"header--xZfHN",logo:"logo--1G2Co"}},319:function(e,t,n){e.exports={"margin-top":"margin-top--3nXWx",marginTop:"margin-top--3nXWx",more:"more--S8F4S"}},320:function(e,t,n){e.exports={"not-found":"not-found--3kwpx",notFound:"not-found--3kwpx","not-found__copy":"not-found__copy--2zEvn",notFoundCopy:"not-found__copy--2zEvn","image-wrapper":"image-wrapper--18Q7q",imageWrapper:"image-wrapper--18Q7q"}},321:function(e,t,n){e.exports={"content-container":"content-container--3pTgE",contentContainer:"content-container--3pTgE"}},322:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var r=n(9),a=n.n(r),o=n(57),c=n(290),i=n.n(c),s=n(291),l=n.n(s),p=n(292),u=n.n(p),d=n(293),f=n.n(d),m=n(294),h=n.n(m),g=n(0),b=n.n(g),v=n(296),w=n.n(v),E=n(148),y=n.n(E),O=n(90),j=n.n(O),P=n(6),k=n.n(P),N=n(307),C=n.n(N);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D=function(e){var t,n,r=e.children,o=e.contentCentered,c=e.padded,i=(e.portal,e.sidebar),s=y()(e,["children","contentCentered","padded","portal","sidebar"]),l=j()(s.className,(t={},a()(t,C.a["page-wrapper"],!0),a()(t,C.a["page-wrapper-content-centered"],o),a()(t,C.a["page-wrapper-padded"],c),a()(t,C.a["page-wrapper-portal"],!0),t)),p=j()(s.pageClassName,(n={},a()(n,C.a["page-content"],!0),a()(n,C.a["page-content-with-sidebar"],i),n));return b.a.createElement("div",{className:l,"data-cy":"page"},i&&b.a.Children.map(r,(function(e){return b.a.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,{className:p}))}),{}),!i&&b.a.createElement("div",{className:p},r))};D.Sidebar=function(e){return b.a.createElement("div",{className:C.a["page-sidebar"],"data-cy":"sidebar"},e.children)},D.defaultProps={sidebar:!1},D.propTypes={children:k.a.any.isRequired,sidebar:k.a.bool};var x=D,R=n(91),F=n(58),H=n(308),U=n.n(H);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var W=function(e){h()(r,e);var t,n=(t=r,function(){var e,n=f()(t);if(_()){var r=f()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u()(this,e)});function r(e){var t;return i()(this,r),t=n.call(this,e),a()(w()(t),"removeError",(function(){t.setState({hasError:!1})})),t.state={hasError:!1},t}return l()(r,[{key:"componentDidCatch",value:function(e,t){var n=this;R.a.listen((function(e,t){"PUSH"!==t&&"POP"!==t||n.setState({hasError:!1})}))}},{key:"render",value:function(){return this.state.hasError?b.a.createElement(x,{contentCentered:!0,padded:!0,"data-cy":"error-page"},b.a.createElement("div",{className:U.a.errorPage},b.a.createElement("div",{className:U.a.imageWrapper},b.a.createElement(F.a,{id:"pages.error-page.title",defaultMessage:"This is embarrassing! Something went wrong."})))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),r}(g.Component),A=Object(F.d)(W),I=n(60),V=n(295),q=n.n(V),L=n(312),T=n.n(L),Z=n(313),z=n.n(Z),G=function(){return b.a.createElement(g.Fragment,null,b.a.createElement("header",null,b.a.createElement("h1",null,"Hacker News")),b.a.createElement("div",{className:z.a.header},b.a.createElement("img",{alt:"Header logo",src:T.a,className:z.a.logo}),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"top")),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"|")),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"new"))))},M=n(297),Q=n.n(M),J=n(298),X=n.n(J),Y=n(7),B=n.n(Y),K=function(e){var t=e.newsFeed,n=e.upvote,r=e.backgroundColor,a=e.setUpvote,o=e.handleHide,c=e.newsFeedVote,i=e.hits;return console.log(t.points,i),b.a.createElement("div",{className:Q.a.feed,style:{backgroundColor:r},"data-cy":"desktop-feed"},b.a.createElement("div",null,t.numComments),b.a.createElement("div",null,n,b.a.createElement("span",{className:Q.a.upvote,onClick:function(){return n-c<=10&&a(n+1)}},b.a.createElement("img",{alt:"upvote arrow",src:X.a}))),b.a.createElement("div",{className:Q.a.feedTitle},t.title,b.a.createElement("span",{className:Q.a.feedAuthor},"(",b.a.createElement("a",{"aria-label":"News link",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url),") by")," ",t.author,b.a.createElement("span",{className:Q.a.feedAuthor},B()(t.createdAt).fromNow()),b.a.createElement("span",{className:Q.a.feedPadLeft},"[",b.a.createElement("a",{"aria-label":"hide",onClick:function(){return o(t.objectID)},className:Q.a.feedHide}," ","hide"," "),"]")))},$=n(314),ee=function(e){var t=e.newsFeed,n=(e.index,e.backgroundColor),r=e.onHide,a=e.onUpVote,o=e.hits,c=t.points,i=localStorage.getItem("hideIds"),s=Object(g.useState)(t.points),l=q()(s,2),p=l[0],u=l[1],d=Object(g.useState)(""),f=q()(d,2),m=f[0],h=f[1],v=Object($.useMediaQuery)({query:"(max-width: 768px)"});Object(g.useEffect)((function(){p!==t.points&&p-t.points<=10&&a({upvote:p,id:t.objectID})}),[p]),Object(g.useEffect)((function(){h(i)}),[]);var w=function(e){localStorage.setItem("hideIds",e)},E=function(e){null==i?(w(e),h(e)):i&&!i.includes(e)&&(w("".concat(i,",").concat(e)),h("".concat(i,",").concat(e))),r()};return(null==m||!m.includes(t.objectID))&&b.a.createElement(g.Fragment,null,v&&b.a.createElement("div",{className:Q.a.feed,style:{backgroundColor:n}},b.a.createElement("div",{className:Q.a.feedTitle},t.title),b.a.createElement("div",null,b.a.createElement("span",{className:Q.a.feedAuthor},"(",b.a.createElement("a",{"aria-label":"news link",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url),") by")," ",t.author,b.a.createElement("span",{className:Q.a.feedAuthor},B()(t.createdAt).fromNow()),b.a.createElement("span",{className:Q.a.feedPadLeft},"[",b.a.createElement("a",{"aria-label":"hide",onClick:function(){return E(t.objectID)},className:Q.a.feedHide}," ","hide"," "),"]")),b.a.createElement("div",null,b.a.createElement("span",{className:Q.a.comments},"Comments: ",t.numComments),b.a.createElement("span",null,"Votes: ",p,b.a.createElement("span",{"aria-label":"upvote",className:Q.a.upvote,onClick:function(){return p-c<=10&&u(p+1)}},b.a.createElement("img",{alt:"upvote arrow",src:X.a}))))),!v&&b.a.createElement(K,{newsFeed:t,upvote:p,backgroundColor:n,setUpvote:u,hits:o,newsFeedVote:c,handleHide:E}))},te=function(e){var t=e.hackerNews,n=e.onHide,r=e.handleUpVote,a=Object(g.useState)([]),o=q()(a,2),c=o[0],i=o[1];return Object(g.useEffect)((function(){t.hits&&i(t.hits)}),[t.hits]),b.a.createElement("div",{"data-cy":"news-feeds"},c.map((function(e,t){return b.a.createElement(ee,{key:e.title,newsFeed:e,index:t,onHide:n,upvote:e.points,hits:c,onUpVote:r,backgroundColor:t%2==0?"#e6e5df":"#f6f5ef"})})))},ne=n(315),re=n.n(ne);function ae(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var oe=function(e){h()(r,e);var t,n=(t=r,function(){var e,n=f()(t);if(ae()){var r=f()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u()(this,e)});function r(e){var t;return i()(this,r),(t=n.call(this,e)).chart=null,t.options={series:[{name:"votes",data:t.props.hits.map((function(e){return e.points}))}],chart:{height:350,type:"line",redrawOnWindowResize:!0,zoom:{enabled:!1}},dataLabels:{enabled:!0},stroke:{curve:"straight"},title:{text:"Votes",align:"top"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:t.props.hits.map((function(e){return e.objectID}))}},t}return l()(r,[{key:"componentDidMount",value:function(){this.chart=new re.a(document.querySelector("#chart"),this.options),this.chart.render()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.vote,a=n.hits;if(e.vote!==r&&this.chart){var o=a.map((function(e){return r.id===e.objectID?Object.assign(e,{points:r.upvote}):e}));this.chart.updateSeries([{name:"votes",data:o.map((function(e){return e.points}))}])}e.hits!==this.props.hits&&this.chart.updateSeries([{name:"votes",data:this.props.hits.map((function(e){return e.points}))}])}},{key:"render",value:function(){return b.a.createElement("div",{id:"chart","data-cy":"timeline-chart"})}}]),r}(g.Component),ce=n(316),ie=n(319),se=n.n(ie),le=function(e){var t=e.hackerNews,n=e.onload,r=e.handleMore,a=Object(g.useState)(0),o=q()(a,2),c=o[0],i=o[1],s=Object(g.useState)(0),l=q()(s,2),p=l[0],u=l[1],d=Object(g.useState)([]),f=q()(d,2),m=f[0],h=f[1],v=Object(g.useState)({}),w=q()(v,2),E=w[0],y=w[1];Object(g.useEffect)((function(){n()}),[]),Object(g.useEffect)((function(){t.hits&&h(t.hits)}),[t.hits]),Object(g.useEffect)((function(){t.nbPages&&i(t.nbPages)}),[t.nbPages]),Object(g.useEffect)((function(){0!==p&&p+1<=c&&r(p)}),[p]);return b.a.createElement("div",{className:se.a.marginTop,"data-cy":"hacker-news-page"},b.a.createElement(ce.a,null,b.a.createElement("title",null,"Hacker news app"),b.a.createElement("meta",{name:"description",content:"Hacker news page displays latest news feeds"})),b.a.createElement(x,{contentCentered:!0},b.a.createElement(G,null),b.a.createElement("main",null,b.a.createElement(te,{hackerNews:t,onHide:function(){return r(p)},handleUpVote:function(e){y(e)}}),b.a.createElement("div",{className:se.a.more,onClick:function(){return u(p+1)}},"More"),m.length>0&&b.a.createElement(oe,{hits:m,vote:E}))))};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ue=Object(o.b)((function(e){return{hackerNews:e.hackerNews}}),null,(function(e,t,n){var r=t.dispatch;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},n,{onload:function(){r(Object(I.a)({page:0}))},handleMore:function(e){r(Object(I.a)({page:e}))}})}))(le),de=n(320),fe=n.n(de),me=function(){return b.a.createElement("div",{className:fe.a["not-found"],"data-cy":"not-found"},b.a.createElement("div",{className:fe.a["image-wrapper"]},"Page not found"))},he=n(324),ge=n(321),be=n.n(ge);function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var we=function(e){h()(r,e);var t,n=(t=r,function(){var e,n=f()(t);if(ve()){var r=f()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u()(this,e)});function r(){return i()(this,r),n.apply(this,arguments)}return l()(r,[{key:"render",value:function(){return b.a.createElement(g.Fragment,null,b.a.createElement("div",{className:be.a.contentContainer},b.a.createElement(A,null,b.a.createElement("div",null,b.a.createElement(he.c,null,b.a.createElement(he.a,{path:"/",component:ue,exact:!0}),b.a.createElement(he.a,null,b.a.createElement(me,null)))))))}}]),r}(g.Component),Ee=Object(he.d)(we);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Oe=Object(o.b)(null,null,(function(e,t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},n,{dispatch:t.dispatch})}))(Ee)}}]);