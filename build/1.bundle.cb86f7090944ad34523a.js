(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{313:function(e,t,r){e.exports={"page-wrapper":"page-wrapper--10Zdn",pageWrapper:"page-wrapper--10Zdn","page-wrapper-content-centered":"page-wrapper-content-centered--2_j9G",pageWrapperContentCentered:"page-wrapper-content-centered--2_j9G","page-wrapper-padded":"page-wrapper-padded--2KihO",pageWrapperPadded:"page-wrapper-padded--2KihO","page-wrapper-portal":"page-wrapper-portal--1gG7V",pageWrapperPortal:"page-wrapper-portal--1gG7V","page-sidebar":"page-sidebar--riguU",pageSidebar:"page-sidebar--riguU","page-content":"page-content--5kYLl",pageContent:"page-content--5kYLl","page-content-with-sidebar":"page-content-with-sidebar--2uSau",pageContentWithSidebar:"page-content-with-sidebar--2uSau"}},314:function(e,t,r){e.exports={"error-page":"error-page--2wFye",errorPage:"error-page--2wFye","error-page-content":"error-page-content---zc34",errorPageContent:"error-page-content---zc34","image-wrapper":"image-wrapper--PRN2o",imageWrapper:"image-wrapper--PRN2o"}},318:function(e,t){e.exports="/resources/images/y18.gif"},319:function(e,t,r){e.exports={header:"header--xZfHN",logo:"logo--1G2Co"}},320:function(e,t){e.exports="/resources/images/grayarrow.gif"},322:function(e,t,r){e.exports={feed:"feed--1RYG9","feed-title":"feed-title--ZmqUw",feedTitle:"feed-title--ZmqUw","feed-author":"feed-author--iBCAd",feedAuthor:"feed-author--iBCAd","feed-arrow":"feed-arrow--3JqZx",feedArrow:"feed-arrow--3JqZx","feed-hide":"feed-hide--1Ll_U",feedHide:"feed-hide--1Ll_U","feed-pad-left":"feed-pad-left--3Qhb9",feedPadLeft:"feed-pad-left--3Qhb9",upvote:"upvote--XDpL7",comments:"comments--3FN03"}},327:function(e,t,r){e.exports={"margin-top":"margin-top--3nXWx",marginTop:"margin-top--3nXWx",more:"more--S8F4S"}},328:function(e,t,r){e.exports={"not-found":"not-found--3kwpx",notFound:"not-found--3kwpx","not-found__copy":"not-found__copy--2zEvn",notFoundCopy:"not-found__copy--2zEvn","image-wrapper":"image-wrapper--18Q7q",imageWrapper:"image-wrapper--18Q7q"}},329:function(e,t,r){e.exports={"content-container":"content-container--3pTgE",contentContainer:"content-container--3pTgE"}},330:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return we}));var n=r(12),a=r.n(n),c=r(52),o=r(298),i=r.n(o),s=r(299),p=r.n(s),l=r(300),u=r.n(l),d=r(301),f=r.n(d),m=r(302),h=r.n(m),g=r(1),b=r.n(g),y=r(304),E=r.n(y),v=r(155),w=r.n(v),O=r(96),j=r.n(O),P=r(9),N=r.n(P),k=r(313),C=r.n(k);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var D=function(e){var t,r,n=e.children,c=e.contentCentered,o=e.padded,i=(e.portal,e.sidebar),s=w()(e,["children","contentCentered","padded","portal","sidebar"]),p=j()(s.className,(t={},a()(t,C.a["page-wrapper"],!0),a()(t,C.a["page-wrapper-content-centered"],c),a()(t,C.a["page-wrapper-padded"],o),a()(t,C.a["page-wrapper-portal"],!0),t)),l=j()(s.pageClassName,(r={},a()(r,C.a["page-content"],!0),a()(r,C.a["page-content-with-sidebar"],i),r));return b.a.createElement("div",{className:p,"data-cy":"page"},i&&b.a.Children.map(n,(function(e){return b.a.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s,{className:l}))}),{}),!i&&b.a.createElement("div",{className:l},n))};D.Sidebar=function(e){return b.a.createElement("div",{className:C.a["page-sidebar"],"data-cy":"sidebar"},e.children)},D.defaultProps={sidebar:!1},D.propTypes={children:N.a.any.isRequired,sidebar:N.a.bool};var x=D,R=r(132),U=r(63),_=r(314),F=r.n(_);function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var W=function(e){h()(n,e);var t,r=(t=n,function(){var e,r=f()(t);if(H()){var n=f()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(e){var t;return i()(this,n),t=r.call(this,e),a()(E()(t),"removeError",(function(){t.setState({hasError:!1})})),t.state={hasError:!1},t}return p()(n,[{key:"componentDidCatch",value:function(e,t){var r=this;R.a.listen((function(e,t){"PUSH"!==t&&"POP"!==t||r.setState({hasError:!1})}))}},{key:"render",value:function(){return this.state.hasError?b.a.createElement(x,{contentCentered:!0,padded:!0,"data-cy":"error-page"},b.a.createElement("div",{className:F.a.errorPage},b.a.createElement("div",{className:F.a.imageWrapper},b.a.createElement(U.a,{id:"pages.error-page.title",defaultMessage:"This is embarrassing! Something went wrong."})))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(g.Component),A=Object(U.d)(W),I=r(66),q=r(303),L=r.n(q),T=r(318),V=r.n(T),Z=r(319),z=r.n(Z),G=function(){return b.a.createElement("div",{className:z.a.header,"data-cy":"hacker-news-header"},b.a.createElement("img",{src:V.a,className:z.a.logo}),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"top")),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"|")),b.a.createElement("a",{href:"#"},b.a.createElement("span",null,"new")))},M=r(320),Q=r.n(M),J=r(11),X=r.n(J),Y=r(321),B=r(322),K=r.n(B),$=function(e){var t=e.newsFeed,r=(e.index,e.backgroundColor),n=e.onHide,a=e.onUpVote,c=localStorage.getItem("hideIds"),o=Object(g.useState)(t.points),i=L()(o,2),s=i[0],p=i[1],l=Object(g.useState)(""),u=L()(l,2),d=u[0],f=u[1],m=Object(Y.useMediaQuery)({query:"(max-width: 768px)"});Object(g.useEffect)((function(){s!==t.points&&s-t.points<=10&&a({upvote:s,id:t.objectID})}),[s]),Object(g.useEffect)((function(){f(c)}),[]);var h=function(e){localStorage.setItem("hideIds",e)},y=function(e){null==c?(h(e),f(e)):c&&!c.includes(e)&&(h("".concat(c,",").concat(e)),f("".concat(c,",").concat(e))),n()};return(null==d||!d.includes(t.objectID))&&b.a.createElement(g.Fragment,null,m&&b.a.createElement("div",{className:K.a.feed,style:{backgroundColor:r}},b.a.createElement("div",{className:K.a.feedTitle},t.title),b.a.createElement("div",null,b.a.createElement("span",{className:K.a.feedAuthor},"(",b.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url),") by")," ",t.author,b.a.createElement("span",{className:K.a.feedAuthor},X()(t.createdAt).fromNow()),b.a.createElement("span",{className:K.a.feedPadLeft},"[",b.a.createElement("a",{onClick:function(){return y(t.objectID)},className:K.a.feedHide}," ","hide"," "),"]")),b.a.createElement("div",null,b.a.createElement("span",{className:K.a.comments},"Comments: ",t.numComments),b.a.createElement("span",null,"Votes: ",s,b.a.createElement("span",{className:K.a.upvote,onClick:function(){return s-t.points<=10&&p(s+1)}},b.a.createElement("img",{src:Q.a}))))),!m&&b.a.createElement("div",{className:K.a.feed,style:{backgroundColor:r}},b.a.createElement("div",null,t.numComments),b.a.createElement("div",null,s,b.a.createElement("span",{className:K.a.upvote,onClick:function(){return s-t.points<=10&&p(s+1)}},b.a.createElement("img",{src:Q.a}))),b.a.createElement("div",{className:K.a.feedTitle},t.title),b.a.createElement("div",null,b.a.createElement("span",{className:K.a.feedAuthor},"(",b.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url),") by")," ",t.author,b.a.createElement("span",{className:K.a.feedAuthor},X()(t.createdAt).fromNow()),b.a.createElement("span",{className:K.a.feedPadLeft},"[",b.a.createElement("a",{onClick:function(){return y(t.objectID)},className:K.a.feedHide}," ","hide"," "),"]"))))},ee=function(e){var t=e.hackerNews,r=e.onHide,n=e.handleUpVote,a=Object(g.useState)([]),c=L()(a,2),o=c[0],i=c[1];return Object(g.useEffect)((function(){t.hits&&i(t.hits)}),[t.hits]),b.a.createElement("div",{"data-cy":"news-feeds"},o.map((function(e,t){return b.a.createElement($,{key:e.title,newsFeed:e,index:t,onHide:r,onUpVote:n,backgroundColor:t%2==0?"#e6e5df":"#f6f5ef"})})))},te=r(323),re=r.n(te);function ne(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ae=function(e){h()(n,e);var t,r=(t=n,function(){var e,r=f()(t);if(ne()){var n=f()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(e){var t;return i()(this,n),(t=r.call(this,e)).chart=null,t.options={series:[{name:"votes",data:t.props.hits.map((function(e){return e.points}))}],chart:{height:350,type:"line",redrawOnWindowResize:!0,zoom:{enabled:!1}},dataLabels:{enabled:!0},stroke:{curve:"straight"},title:{text:"Votes",align:"top"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:t.props.hits.map((function(e){return e.objectID}))}},t}return p()(n,[{key:"componentDidMount",value:function(){this.chart=new re.a(document.querySelector("#chart"),this.options),this.chart.render()}},{key:"componentDidUpdate",value:function(e,t){var r=this.props,n=r.vote,a=r.hits;if(e.vote!==n&&this.chart){var c=a.map((function(e){return n.id===e.objectID?Object.assign(e,{points:n.upvote}):e}));this.chart.updateSeries([{name:"votes",data:c.map((function(e){return e.points}))}])}e.hits!==this.props.hits&&this.chart.updateSeries([{name:"votes",data:this.props.hits.map((function(e){return e.points}))}])}},{key:"render",value:function(){return b.a.createElement("div",{id:"chart","data-cy":"timeline-chart"})}}]),n}(g.Component),ce=r(324),oe=r(327),ie=r.n(oe),se=function(e){var t=e.hackerNews,r=e.onload,n=e.handleMore,a=Object(g.useState)(0),c=L()(a,2),o=c[0],i=c[1],s=Object(g.useState)(0),p=L()(s,2),l=p[0],u=p[1],d=Object(g.useState)([]),f=L()(d,2),m=f[0],h=f[1],y=Object(g.useState)({}),E=L()(y,2),v=E[0],w=E[1];Object(g.useEffect)((function(){r()}),[]),Object(g.useEffect)((function(){t.hits&&h(t.hits)}),[t.hits]),Object(g.useEffect)((function(){t.nbPages&&i(t.nbPages)}),[t.nbPages]),Object(g.useEffect)((function(){0!==l&&l+1<=o&&n(l)}),[l]);return b.a.createElement("div",{className:ie.a.marginTop,"data-cy":"hacker-news-page"},b.a.createElement(ce.a,null,b.a.createElement("title",null,"Hacker news app"),b.a.createElement("meta",{name:"description",content:"Hacker news page displays latest news feeds"})),b.a.createElement(x,{contentCentered:!0},b.a.createElement(G,null),b.a.createElement(ee,{hackerNews:t,onHide:function(){return n(l)},handleUpVote:function(e){w(e)}}),b.a.createElement("div",{className:ie.a.more,onClick:function(){return u(l+1)}},"More"),m.length>0&&b.a.createElement(ae,{hits:m,vote:v})))};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var le=Object(c.b)((function(e){return{hackerNews:e.hackerNews}}),null,(function(e,t,r){var n=t.dispatch;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},r,{onload:function(){n(Object(I.a)({page:0}))},handleMore:function(e){n(Object(I.a)({page:e}))}})}))(se),ue=r(328),de=r.n(ue),fe=function(){return b.a.createElement("div",{className:de.a["not-found"],"data-cy":"not-found"},b.a.createElement("div",{className:de.a["image-wrapper"]},"Page not found"))},me=r(332),he=r(329),ge=r.n(he);function be(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ye=function(e){h()(n,e);var t,r=(t=n,function(){var e,r=f()(t);if(be()){var n=f()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u()(this,e)});function n(){return i()(this,n),r.apply(this,arguments)}return p()(n,[{key:"render",value:function(){return b.a.createElement(g.Fragment,null,b.a.createElement("div",{className:ge.a.contentContainer},b.a.createElement(A,null,b.a.createElement("div",null,b.a.createElement(me.c,null,b.a.createElement(me.a,{path:"/",component:le,exact:!0}),b.a.createElement(me.a,null,b.a.createElement(fe,null)))))))}}]),n}(g.Component),Ee=Object(me.d)(ye);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var we=Object(c.b)((function(e){return{user:e.user}}),null,(function(e,t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},r,{dispatch:t.dispatch})}))(Ee)}}]);