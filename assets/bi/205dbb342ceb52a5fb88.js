"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[603],{56646:(e,t)=>{var o="circle-info",l=["info-circle"],r="f05a",n="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";t.DF={prefix:"fas",iconName:o,icon:[512,512,l,r,n]},t.DB=t.DF},84603:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var l,r=o(61887),n=(o(90346),o(77746)),s=(o(62359),o(80677)),a=(o(83874),o(20513),o(70069)),i=o(23541),c=o(67294),u=o(34051),d=o(31555),m=o(91072),p=o(38585),v=o(40872),h=o(16550),f=o(30381),E=o.n(f),w=o(17905),_=o(91136),g=(0,p.Pi)(class extends c.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{t:e}=this.props,{statusTopTable:t}=this.listViewModel;return c.createElement("div",{className:"position-relative h-100"},c.createElement(w.Z.Container,{id:"left-tabs-example",defaultActiveKey:"page"},c.createElement(u.Z,{className:"gx-24"},c.createElement(d.Z,{sm:2},c.createElement("div",{className:"bg-white rounded-3 px-15 py-2 shadow-sm"},c.createElement(_.Z,{variant:"pills",className:"flex-column"},c.createElement(_.Z.Item,null,c.createElement(_.Z.Link,{eventKey:"page",className:"ps-0"},e("txt_page")))))),c.createElement(d.Z,{sm:10},c.createElement("div",{className:"bg-white rounded-3 shadow-sm h-100 position-relative"},c.createElement(w.Z.Content,null,c.createElement(w.Z.Pane,{eventKey:"page"},c.createElement(r.tw,{data:this.listViewModel?.pagesTableData?.list,pagination:this.listViewModel?.pagesTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterPages({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterPages({page:1,page_size:e})},status:t,...this.props}))))))))}}),b=(0,m.Zh)()((0,h.EN)(g)),y=(0,p.Pi)((l=class extends c.Component{constructor(e){super(e),(0,i.o)(this,"componentDidMount",(()=>{this.audienceListViewModel.initializeBehavior({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,i.o)(this,"componentDidUpdate",(e=>{this.props.location===e.location&&this.props.activeDomain===e.activeDomain||this.audienceListViewModel.initializeBehavior({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,i.o)(this,"handleDateRangeChange",((e,t)=>{this.audienceListViewModel.handleFilterDateRange(e??t,t??e)})),(0,i.o)(this,"generateCard",(()=>{const{t:e}=this.props;return[{className:"col-12 mb-24",title:e("txt_page_views"),icon:v.OB.PUBLIC_URL+"/assets/images/view.svg",iconColor:"#2E71B1",value:v.Wt.numberWithCommas(this.audienceListViewModel.metricsData?.[v.lF.NUMBER_OF_PAGE_VIEWS]),isIncrease:!1,loading:this.audienceListViewModel.statusMetrics,options:[{label:e("txt_all"),value:v.lF.NUMBER_OF_PAGE_VIEWS,actualValue:v.Wt.numberWithCommas(this.audienceListViewModel.metricsData?.[v.lF.NUMBER_OF_PAGE_VIEWS])},{label:e("txt_unique"),value:v.lF.NUMBER_OF_UNIQUE_PAGE_VIEWS,actualValue:v.Wt.numberWithCommas(this.audienceListViewModel.metricsData?.[v.lF.NUMBER_OF_UNIQUE_PAGE_VIEWS])}],defaultValue:{label:e("txt_all"),value:v.lF.NUMBER_OF_PAGE_VIEWS,actualValue:v.Wt.numberWithCommas(this.audienceListViewModel.metricsData?.[v.lF.NUMBER_OF_PAGE_VIEWS])}},{className:"col-12 mb-24",title:e("txt_acg_session_duration"),icon:v.OB.PUBLIC_URL+"/assets/images/duration.svg",iconColor:"#EF3737",value:(this.audienceListViewModel?.metricsData?.[v.lF.AVERAGE_SESSION_DURATION]?E().utc(1e3*this.audienceListViewModel?.metricsData?.[v.lF.AVERAGE_SESSION_DURATION]).format("HH:mm:ss"):"00:00:00")+"s",isIncrease:!1,loading:this.audienceListViewModel.statusMetrics},{className:"col-12",title:e("txt_page_session"),icon:v.OB.PUBLIC_URL+"/assets/images/page.svg",iconColor:"#FFBE55",value:v.Wt.numberWithCommas(this.audienceListViewModel?.metricsData?.[v.lF.NUMBER_OF_PAGES_PER_SESSION]),isIncrease:!1,loading:this.audienceListViewModel?.statusMetrics}]}));const{viewModel:t}=e;this.viewModel=t||null,this.audienceListViewModel=this.viewModel?this.viewModel.getAudienceListViewModel():null}render(){const{t:e}=this.props,t=this.generateCard();return c.createElement("div",{className:"py-4 px-3"},c.createElement("div",{className:"d-flex align-items-center justify-content-between mb-3"},c.createElement("div",null,c.createElement("h2",{className:"text-blue-0 fw-bold mb-8px"},e("txt_behavior")),c.createElement("p",{className:"mb-0 text-color"},e("txt_analytic_details"))),c.createElement("div",{className:"position-relative"},c.createElement(s.r,{onChange:this.handleDateRangeChange}))),c.createElement(u.Z,{className:"mb-24"},c.createElement(d.Z,{lg:9},c.createElement(r.mI,{lines:["page_views"],areaColors:["#9747FF"],lineColors:["#9747FF"],isSelection:!1,listViewModel:this.audienceListViewModel,status:this.audienceListViewModel?.statusOverview})),c.createElement(d.Z,{lg:3},c.createElement(r.uw,{data:t??[]}))),c.createElement(b,{listViewModel:this.audienceListViewModel}))}},(0,i.o)(l,"contextType",a.Fv),l)),S=(0,m.Zh)()((0,h.EN)((0,n.b)(y)))},90346:(e,t,o)=>{o.d(t,{$:()=>a,T:()=>i});var l=o(20513),r=o(67294),n=o(38994),s=o(40872);document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.icon-card {\n  width: 56px;\n  height: 56px;\n}\n.icon-card .icon {\n  width: 100%;\n  height: 100%;\n  background-color: var(--sidebar-menu-item-color);\n}\n\n.icon-grown {\n  width: 18px;\n  height: 18px;\n}"));function a(e,t){var o=parseInt(e.slice(1,3),16),l=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return t?"rgba("+o+", "+l+", "+r+", "+t+")":"rgb("+o+", "+l+", "+r+")"}var i=({title:e,icon:t,iconColor:o,value:i,isIncrease:c,percent:u,textPercent:d,options:m,defaultValue:p,loading:v})=>{const[h,f]=(0,r.useState)(p??null),[E,w]=(0,r.useState)(i);(0,r.useEffect)((()=>{w(i)}),[i]);return r.createElement("div",{className:"bg-white p-24 shadow-sm rounded-3 h-100"},r.createElement("div",{className:"d-flex justify-content-between align-items-center mb-16"},r.createElement("div",{className:"d-flex align-items-center position-relative"},t&&r.createElement("div",{className:"icon-card rounded-circle me-16 ",style:{background:a(o,.15)}},r.createElement("span",{className:"icon arrow d-inline-block align-text-bottom ms-auto",style:{WebkitMaskImage:`url(${t})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",backgroundColor:a(o)}})),r.createElement("h6",{className:"mb-0 fw-semibold text-blue-0"},e)),m&&r.createElement(n.nW,{value:h,options:m,className:"fs-sm",isBorder:!0,onChange:e=>{f(e),e?.actualValue&&w(e?.actualValue)},isSearchable:!1})),r.createElement("div",{className:"d-flex justify-content-between position-relative"},v===l.r.LOADING&&r.createElement(n.DC,{className:"d-flex justify-content-start align-items-center bg-white",size:"10px"}),r.createElement("h3",{className:"mb-0 fw-semibold fs-24 text-color"},E),r.createElement("div",{className:"d-flex flex-wrap align-item-center"},u&&r.createElement("div",{className:"d-flex w-100 mb-sm justify-content-end"},r.createElement("span",{className:"icon-grown arrow d-inline-block align-text-bottom ms-auto text-primary "+(c?"bg-green":"bg-red"),style:{WebkitMaskImage:`url(${s.OB.PUBLIC_URL}${c?"/assets/images/grown-up.svg":"/assets/images/grown-down.svg"})`,WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center"}}),r.createElement("span",{className:(c?"text-green":"text-danger")+" fw-semibold"},c?"+":"-",u)),r.createElement("div",{className:"w-100 text-gray fs-sm text-end"},d))))}},61887:(e,t,o)=>{o.d(t,{P8:()=>w,bG:()=>E,mI:()=>y,tw:()=>S,uw:()=>g});var l=o(90346),r=o(62359),n=o(83874),s=o(20513),a=o(67294),i=o(91072),c=o(38585),u=o(16550),d=o(38994),m=o(40872),p=o(42444),v=o(70982),h=o(56646),f=a.createContext(),E=({children:e,viewModel:t})=>a.createElement(f.Provider,{value:t},e),w=e=>t=>a.createElement(e,{...t,viewModel:a.useContext(f)}),_=(0,c.Pi)(class extends a.Component{constructor(e){super(e)}render(){return a.createElement("div",{className:"row gx-24"},this.props.data.length>0?this.props.data.map(((e,t)=>a.createElement("div",{className:e.className,key:t},a.createElement(l.T,{title:e.title,icon:e.icon,iconColor:e.iconColor,value:e.value,isIncrease:e.isIncrease,loading:e.loading,options:e.options,defaultValue:e.defaultValue})))):null)}}),g=(0,i.Zh)()((0,u.EN)(w(_))),b=(0,c.Pi)(class extends a.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{t:e,status:t,lines:o,lineColors:l,areaColors:n}=this.props;return a.createElement("div",{className:"position-relative h-100"},a.createElement(r.J,{chartTitle:e("txt_menu_overview"),height:420,data:this?.listViewModel?.visitorData?.toAreaChart(),colors:["#1AB394"],lineType:"monotone",areaColors:n,lineColors:l,lines:o,isDot:!0,hiddenGrid:{vertical:!1},XAxisOptions:{axisLine:!0,padding:{left:50,right:50}},defaultValue:{label:"Visitors",value:"visitors"},options:[{label:"Visitors",value:"visitors"}],loading:t,tooltipComponent:{header:e("txt_in_total"),value:1===o?.length&&o[0]+":"},status:t,filterData:this?.listViewModel?.visitorData?.getFilterName(),isSelection:!1,isLegend:!0}))}}),y=(0,i.Zh)()((0,u.EN)(b)),S=(0,i.Zh)()((0,u.EN)((e=>{const{data:t,isPagination:o=!0,pagination:l,selectPage:r,selectPageSize:i,status:c,t:u}=e,f=a.useMemo((()=>t?.header?.map(((e,t)=>{let o="";switch(e?.accessor){case m.lF.NUMBER_OF_VISITORS:o="txt_tooltip_visitors";break;case m.lF.NUMBER_OF_PAGE_VIEWS:o="txt_tooltip_page_views";break;case m.lF.NUMBER_OF_UNIQUE_PAGE_VIEWS:o="txt_tooltip_unique_page_views";break;case m.lF.BOUNCE_RATE:o="txt_tooltip_bounce_rate";break;case m.lF.NUMBER_OF_PAGES_PER_SESSION:o="txt_tooltip_page_session";break;case m.lF.AVERAGE_SESSION_DURATION:o="txt_tooltip_avg_session_duration";break;default:o=""}return{...e,className:`px-15 py-16 fs-sm fw-semibold border-bottom border-gray-800 align-middle ${0!==t?"rounded-top-end-3 text-end":""} ${0===t?"rounded-top-start-3":""}`,width:e.width?e.width:0===t?"auto":170,Header:a.createElement("span",{className:"align-middle"},u(e.Header),o&&a.createElement(a.Fragment,null,a.createElement(v.G,{"data-tooltip-id":"tooltipTable","data-tooltip-content":u(o),className:"mx-sm fs-12 mb-1",icon:h.DB}),a.createElement(p.u,{id:"tooltipTable"})))}}))),[t?.header]),E=a.useMemo((()=>t?.data),[t?.data]);return a.createElement(a.Fragment,null,c===s.r.LOADING?a.createElement(d.QI,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?a.createElement(n.k,{classNameTable:"mb-0 table table-striped",columns:f,data:E,canSort:!0,pagination:o,paginationClass:"fs-14 px-4",isPaginationAPI:!0,paginationResponse:l,selectPage:r,selectPageSize:i}):a.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},a.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},a.createElement(n.x,{icons:m.OB.PUBLIC_URL+"/assets/images/ic_project.svg",title:u("txt_no_data"),width:"w-50"}))))})))},42444:(e,t,o)=>{o.d(t,{u:()=>x});var l=o(67294),r=o(94184),n=o(88301),s=o(55863),a=o(34155);const i="react-tooltip-core-styles",c="react-tooltip-base-styles",u={core:!1,base:!1};function d({css:e,id:t=c,type:o="base",ref:l}){var r,n;if(!e||"undefined"==typeof document||u[o])return;if("core"===o&&void 0!==a&&(null===(r=null==a?void 0:a.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==o&&void 0!==a&&(null===(n=null==a?void 0:a.env)||void 0===n?void 0:n.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===o&&(t=i),l||(l={});const{insertAt:s}=l;if(document.getElementById(t))return;const d=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.id=t,m.type="text/css","top"===s&&d.firstChild?d.insertBefore(m,d.firstChild):d.appendChild(m),m.styleSheet?m.styleSheet.cssText=e:m.appendChild(document.createTextNode(e)),u[o]=!0}const m=(e,t,o)=>{let l=null;return function(...r){const n=()=>{l=null,o||e.apply(this,r)};o&&!l&&(e.apply(this,r),l=setTimeout(n,t)),o||(l&&clearTimeout(l),l=setTimeout(n,t))}},p="DEFAULT_TOOLTIP_ID",v={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},h=(0,l.createContext)({getTooltipData:()=>v});function f(e=p){return(0,l.useContext)(h).getTooltipData(e)}const E="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,w=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},_=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(w(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},g=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:l="top",offset:r=10,strategy:a="absolute",middlewares:i=[(0,n.cv)(Number(r)),(0,n.RR)(),(0,n.uY)({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:l};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:l};const u=i;return o?(u.push((0,n.x7)({element:o,padding:5})),(0,s.oo)(e,t,{placement:l,strategy:a,middleware:u}).then((({x:e,y:t,placement:o,middlewareData:l})=>{var r,n;const s={left:`${e}px`,top:`${t}px`,border:c},{x:a,y:i}=null!==(r=l.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]])&&void 0!==n?n:"bottom",d=c&&{top:{borderBottom:c,borderRight:c},right:{borderBottom:c,borderLeft:c},bottom:{borderTop:c,borderLeft:c},left:{borderTop:c,borderRight:c}}[o.split("-")[0]];let m=0;if(c){const e=`${c}`.match(/(\d+)px/);m=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:s,tooltipArrowStyles:{left:null!=a?`${a}px`:"",top:null!=i?`${i}px`:"",right:"",bottom:"",...d,[u]:`-${4+m}px`},place:o}}))):(0,s.oo)(e,t,{placement:"bottom",strategy:a,middleware:u}).then((({x:e,y:t,placement:o})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:o})))};var b={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const y=({id:e,className:t,classNameArrow:o,variant:n="dark",anchorId:s,anchorSelect:a,place:i="top",offset:c=10,events:u=["hover"],openOnClick:d=!1,positionStrategy:p="absolute",middlewares:v,wrapper:h,delayShow:w=0,delayHide:y=0,float:S=!1,hidden:x=!1,noArrow:N=!1,clickable:A=!1,closeOnEsc:L=!1,closeOnScroll:R=!1,closeOnResize:C=!1,style:M,position:k,afterShow:O,afterHide:T,content:I,contentWrapperRef:V,isOpen:B,setIsOpen:F,activeAnchor:P,setActiveAnchor:D,border:W,opacity:U})=>{const $=(0,l.useRef)(null),G=(0,l.useRef)(null),Z=(0,l.useRef)(null),j=(0,l.useRef)(null),[z,H]=(0,l.useState)(i),[q,K]=(0,l.useState)({}),[X,Q]=(0,l.useState)({}),[Y,J]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(!1),oe=(0,l.useRef)(!1),le=(0,l.useRef)(null),{anchorRefs:re,setActiveAnchor:ne}=f(e),se=(0,l.useRef)(!1),[ae,ie]=(0,l.useState)([]),ce=(0,l.useRef)(!1),ue=d||u.includes("click");E((()=>(ce.current=!0,()=>{ce.current=!1})),[]),(0,l.useEffect)((()=>{if(!Y){const e=setTimeout((()=>{te(!1)}),150);return()=>{clearTimeout(e)}}return()=>null}),[Y]);const de=e=>{ce.current&&(e&&te(!0),setTimeout((()=>{ce.current&&(null==F||F(e),void 0===B&&J(e))}),10))};(0,l.useEffect)((()=>{if(void 0===B)return()=>null;B&&te(!0);const e=setTimeout((()=>{J(B)}),10);return()=>{clearTimeout(e)}}),[B]),(0,l.useEffect)((()=>{Y!==oe.current&&(oe.current=Y,Y?null==O||O():null==T||T())}),[Y]);const me=(e=y)=>{j.current&&clearTimeout(j.current),j.current=setTimeout((()=>{se.current||de(!1)}),e)},pe=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return D(null),void ne({current:null});w?(Z.current&&clearTimeout(Z.current),Z.current=setTimeout((()=>{de(!0)}),w)):de(!0),D(o),ne({current:o}),j.current&&clearTimeout(j.current)},ve=()=>{A?me(y||100):y?me():de(!1),Z.current&&clearTimeout(Z.current)},he=({x:e,y:t})=>{g({place:i,offset:c,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:$.current,tooltipArrowReference:G.current,strategy:p,middlewares:v,border:W}).then((e=>{Object.keys(e.tooltipStyles).length&&K(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Q(e.tooltipArrowStyles),H(e.place)}))},fe=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};he(o),le.current=o},Ee=e=>{pe(e),y&&me()},we=e=>{var t;[document.querySelector(`[id='${s}']`),...ae].some((t=>null==t?void 0:t.contains(e.target)))||(null===(t=$.current)||void 0===t?void 0:t.contains(e.target))||(de(!1),Z.current&&clearTimeout(Z.current))},_e=m(pe,50,!0),ge=m(ve,50,!0);(0,l.useEffect)((()=>{var e,t;const o=new Set(re);ae.forEach((e=>{o.add({current:e})}));const l=document.querySelector(`[id='${s}']`);l&&o.add({current:l});const r=()=>{de(!1)},n=_(P),a=_($.current);R&&(window.addEventListener("scroll",r),null==n||n.addEventListener("scroll",r),null==a||a.addEventListener("scroll",r)),C&&window.addEventListener("resize",r);const i=e=>{"Escape"===e.key&&de(!1)};L&&window.addEventListener("keydown",i);const c=[];ue?(window.addEventListener("click",we),c.push({event:"click",listener:Ee})):(c.push({event:"mouseenter",listener:_e},{event:"mouseleave",listener:ge},{event:"focus",listener:_e},{event:"blur",listener:ge}),S&&c.push({event:"mousemove",listener:fe}));const u=()=>{se.current=!0},d=()=>{se.current=!1,ve()};return A&&!ue&&(null===(e=$.current)||void 0===e||e.addEventListener("mouseenter",u),null===(t=$.current)||void 0===t||t.addEventListener("mouseleave",d)),c.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||void 0===l||l.addEventListener(e,t)}))})),()=>{var e,t;R&&(window.removeEventListener("scroll",r),null==n||n.removeEventListener("scroll",r),null==a||a.removeEventListener("scroll",r)),C&&window.removeEventListener("resize",r),ue&&window.removeEventListener("click",we),L&&window.removeEventListener("keydown",i),A&&!ue&&(null===(e=$.current)||void 0===e||e.removeEventListener("mouseenter",u),null===(t=$.current)||void 0===t||t.removeEventListener("mouseleave",d)),c.forEach((({event:e,listener:t})=>{o.forEach((o=>{var l;null===(l=o.current)||void 0===l||l.removeEventListener(e,t)}))}))}}),[ee,re,ae,L,u]),(0,l.useEffect)((()=>{let t=null!=a?a:"";!t&&e&&(t=`[data-tooltip-id='${e}']`);const o=new MutationObserver((o=>{const l=[];o.forEach((o=>{if("attributes"===o.type&&"data-tooltip-id"===o.attributeName&&o.target.getAttribute("data-tooltip-id")===e&&l.push(o.target),"childList"===o.type&&(P&&[...o.removedNodes].some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,P))&&(te(!1),de(!1),D(null),Z.current&&clearTimeout(Z.current),j.current&&clearTimeout(j.current),!0)})),t))try{const e=[...o.addedNodes].filter((e=>1===e.nodeType));l.push(...e.filter((e=>e.matches(t)))),l.push(...e.flatMap((e=>[...e.querySelectorAll(t)])))}catch(e){}})),l.length&&ie((e=>[...e,...l]))}));return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{o.disconnect()}}),[e,a,P]);const be=()=>{k?he(k):S?le.current&&he(le.current):g({place:i,offset:c,elementReference:P,tooltipReference:$.current,tooltipArrowReference:G.current,strategy:p,middlewares:v,border:W}).then((e=>{ce.current&&(Object.keys(e.tooltipStyles).length&&K(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Q(e.tooltipArrowStyles),H(e.place))}))};(0,l.useEffect)((()=>{be()}),[Y,P,I,M,i,c,p,k]),(0,l.useEffect)((()=>{if(!(null==V?void 0:V.current))return()=>null;const e=new ResizeObserver((()=>{be()}));return e.observe(V.current),()=>{e.disconnect()}}),[I,null==V?void 0:V.current]),(0,l.useEffect)((()=>{var e;const t=document.querySelector(`[id='${s}']`),o=[...ae,t];P&&o.includes(P)||D(null!==(e=ae[0])&&void 0!==e?e:t)}),[s,ae,P]),(0,l.useEffect)((()=>()=>{Z.current&&clearTimeout(Z.current),j.current&&clearTimeout(j.current)}),[]),(0,l.useEffect)((()=>{let t=a;if(!t&&e&&(t=`[data-tooltip-id='${e}']`),t)try{const e=Array.from(document.querySelectorAll(t));ie(e)}catch(t){ie([])}}),[e,a]);const ye=!x&&I&&Y&&Object.keys(q).length>0;return ee?l.createElement(h,{id:e,role:"tooltip",className:r("react-tooltip","core-styles-module_tooltip__3vRRp",b.tooltip,b[n],t,`react-tooltip__place-${z}`,{"core-styles-module_show__Nt9eE":ye,"core-styles-module_fixed__pcSol":"fixed"===p,"core-styles-module_clickable__ZuTTB":A}),style:{...M,...q,opacity:void 0!==U&&ye?U:void 0},ref:$},I,l.createElement(h,{className:r("react-tooltip-arrow","core-styles-module_arrow__cvMwQ",b.arrow,o,{"core-styles-module_noArrow__xock6":N}),style:X,ref:G})):null},S=({content:e})=>l.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),x=({id:e,anchorId:t,anchorSelect:o,content:r,html:n,render:s,className:a,classNameArrow:i,variant:c="dark",place:u="top",offset:d=10,wrapper:m="div",children:p=null,events:v=["hover"],openOnClick:h=!1,positionStrategy:E="absolute",middlewares:w,delayShow:_=0,delayHide:g=0,float:b=!1,hidden:x=!1,noArrow:N=!1,clickable:A=!1,closeOnEsc:L=!1,closeOnScroll:R=!1,closeOnResize:C=!1,style:M,position:k,isOpen:O,disableStyleInjection:T=!1,border:I,opacity:V,setIsOpen:B,afterShow:F,afterHide:P})=>{const[D,W]=(0,l.useState)(r),[U,$]=(0,l.useState)(n),[G,Z]=(0,l.useState)(u),[j,z]=(0,l.useState)(c),[H,q]=(0,l.useState)(d),[K,X]=(0,l.useState)(_),[Q,Y]=(0,l.useState)(g),[J,ee]=(0,l.useState)(b),[te,oe]=(0,l.useState)(x),[le,re]=(0,l.useState)(m),[ne,se]=(0,l.useState)(v),[ae,ie]=(0,l.useState)(E),[ce,ue]=(0,l.useState)(null),de=(0,l.useRef)(T),{anchorRefs:me,activeAnchor:pe}=f(e),ve=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var l;return o.startsWith("data-tooltip-")&&(t[o.replace(/^data-tooltip-/,"")]=null!==(l=null==e?void 0:e.getAttribute(o))&&void 0!==l?l:null),t}),{}),he=e=>{const t={place:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:u)},content:e=>{W(null!=e?e:r)},html:e=>{$(null!=e?e:n)},variant:e=>{var t;z(null!==(t=e)&&void 0!==t?t:c)},offset:e=>{q(null===e?d:Number(e))},wrapper:e=>{var t;re(null!==(t=e)&&void 0!==t?t:m)},events:e=>{const t=null==e?void 0:e.split(" ");se(null!=t?t:v)},"position-strategy":e=>{var t;ie(null!==(t=e)&&void 0!==t?t:E)},"delay-show":e=>{X(null===e?_:Number(e))},"delay-hide":e=>{Y(null===e?g:Number(e))},float:e=>{ee(null===e?b:"true"===e)},hidden:e=>{oe(null===e?x:"true"===e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,o])=>{var l;null===(l=t[e])||void 0===l||l.call(t,o)}))};(0,l.useEffect)((()=>{W(r)}),[r]),(0,l.useEffect)((()=>{$(n)}),[n]),(0,l.useEffect)((()=>{Z(u)}),[u]),(0,l.useEffect)((()=>{z(c)}),[c]),(0,l.useEffect)((()=>{q(d)}),[d]),(0,l.useEffect)((()=>{X(_)}),[_]),(0,l.useEffect)((()=>{Y(g)}),[g]),(0,l.useEffect)((()=>{ee(b)}),[b]),(0,l.useEffect)((()=>{oe(x)}),[x]),(0,l.useEffect)((()=>{ie(E)}),[E]),(0,l.useEffect)((()=>{de.current}),[T]),(0,l.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===T,disableBase:T}}))}),[]),(0,l.useEffect)((()=>{var l;const r=new Set(me);let n=o;if(!n&&e&&(n=`[data-tooltip-id='${e}']`),n)try{document.querySelectorAll(n).forEach((e=>{r.add({current:e})}))}catch(l){}const s=document.querySelector(`[id='${t}']`);if(s&&r.add({current:s}),!r.size)return()=>null;const a=null!==(l=null!=ce?ce:s)&&void 0!==l?l:pe.current,i=new MutationObserver((e=>{e.forEach((e=>{var t;if(!a||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=ve(a);he(o)}))})),c={attributes:!0,childList:!1,subtree:!1};if(a){const e=ve(a);he(e),i.observe(a,c)}return()=>{i.disconnect()}}),[me,pe,ce,t,o]),(0,l.useEffect)((()=>{null==M||M.border,I&&CSS.supports("border",`${I}`),null==M||M.opacity,V&&CSS.supports("opacity",`${V}`)}),[]);let fe=p;const Ee=(0,l.useRef)(null);if(s){const e=s({content:null!=D?D:null,activeAnchor:ce});fe=e?l.createElement("div",{ref:Ee,className:"react-tooltip-content-wrapper"},e):null}else D&&(fe=D);U&&(fe=l.createElement(S,{content:U}));const we={id:e,anchorId:t,anchorSelect:o,className:a,classNameArrow:i,content:fe,contentWrapperRef:Ee,place:G,variant:j,offset:H,wrapper:le,events:ne,openOnClick:h,positionStrategy:ae,middlewares:w,delayShow:K,delayHide:Q,float:J,hidden:te,noArrow:N,clickable:A,closeOnEsc:L,closeOnScroll:R,closeOnResize:C,style:M,position:k,isOpen:O,border:I,opacity:V,setIsOpen:B,afterShow:F,afterHide:P,activeAnchor:ce,setActiveAnchor:e=>ue(e)};return l.createElement(y,{...we})};"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||d({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),e.detail.disableBase||d({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px;transform:rotate(45deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}))}}]);