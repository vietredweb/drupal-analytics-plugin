"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[3729],{23729:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(38415),r=s(51751),i=s(53800),l=s(81252),n=s(96540),o=s(56347),h=s(27813),c=s(99194),d=s(14630),M=s(95093),m=s.n(M),E=s(44015),u=s(32389),g=class{constructor(){(0,l.M)(this,"getVisitor",(async(e,t,s,a)=>{try{const r=new c.L20,i=await r.getVisitor(e,t);i&&"AxiosError"!==i?.name?(0,h.h5)((()=>{s(i)})):a({message:i?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,h.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,l.M)(this,"getAttribute",(async(e,t,s,a)=>{try{const r=new c.L20,i=await r.getAttribute(e,t);i&&"AxiosError"!==i?.name?(0,h.h5)((()=>{s(i)})):a({message:i?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,h.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,l.M)(this,"getEvents",(async(e,t,s,a)=>{try{const r=new c.L20,i=await r.getEvents(e,t);i&&"AxiosError"!==i?.name?(0,h.h5)((()=>{s(i)})):a({message:i?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,h.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},D=class{constructor(e,t){(0,l.M)(this,"data",[]),(0,l.M)(this,"globalViewModel",null),(0,l.M)(this,"toRaw",(()=>this.data)),(0,l.M)(this,"transformResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const s=this.data.filter((e=>e[c.sSJ.EVENT_NAME]===t[c.sSJ.EVENT_NAME]));e={...e,[t[c.sSJ.EVENT_NAME]]:s}})),e})),(0,l.M)(this,"transformEventsResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const s=this.data.filter((e=>e[c.HMX.EVENT_NAME]===t[c.HMX.EVENT_NAME]));e={...e,[t[c.HMX.EVENT_NAME]]:s}})),e})),(0,l.M)(this,"getFilterName",(()=>{const e=this.transformResponse(),t=Object.keys(e).map((e=>({value:e,label:e})));return t?.unshift({value:"all",label:"All"}),t})),(0,l.M)(this,"getListLine",(()=>{const e=this.transformResponse();return Object.keys(e).map((e=>e))})),(0,l.M)(this,"toAreaChart",(()=>{const e=this.transformEventsResponse(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=(0,c.jgq)(this.globalViewModel.dateFilter.date_start,this.globalViewModel.dateFilter.date_end),a={},r={all:s.map((t=>({name:t&&m()(t,"YYYY-MM-DD").format("DD MMM"),...Object.keys(e).map((s=>{const a=e[s].filter((e=>e[c.HMX.DATE]===t));return{[s]:a?.length?a[0][c.HMX.TOTAL_VISITOR]:0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((t=>({[t]:s.map((s=>{const a=e[t].filter((e=>e[c.HMX.DATE]===s));return{name:s&&m()(s,"YYYY-MM-DD").format("DD MMM"),[t]:a?.length?a[0][c.HMX.TOTAL_VISITOR]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})},i={all:t.map(((t,s)=>({name:t,...Object.keys(e).map((e=>{const t=this.data?.filter((e=>m()(e[c.HMX.DATE],"YYYY-MM-DD").month()===s))?.reduce(((e,t)=>e+t[c.HMX.TOTAL_VISITOR]),0);return{[e]:t??0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((e=>({[e]:t.map(((t,s)=>{const a=this.data?.filter((e=>m()(e[c.HMX.DATE],"YYYY-MM-DD").month()===s))?.reduce(((e,t)=>e+t[c.HMX.TOTAL_VISITOR]),0);return a?{name:t,[e]:a}:{name:t,[e]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})};s.forEach((t=>{const s=m()(t).startOf("isoWeek").format("YYYY-MM-DD"),r=m()(t).endOf("isoWeek").format("YYYY-MM-DD"),i=`${m()(s).format("DD MMM")} - ${m()(r).format("DD MMM")}`;a[i]||(a[i]={},Object.keys(e).forEach((e=>{a[i][e]=0}))),Object.keys(e).forEach((s=>{const r=e[s].filter((e=>e[c.HMX.DATE]===t));a[i][s]+=r?.length?r[0][c.HMX.TOTAL_VISITOR]:0}))}));return[i,r,{all:Object.keys(a).map((e=>({name:e,...a[e]})))}]})),(0,l.M)(this,"toBarChart",(()=>{const e=this.transformEventsResponse();return Object.keys(e).map((t=>({name:t,number:e[t]?.reduce(((e,t)=>e+t[c.HMX.TOTAL_VISITOR]),0)})))})),(0,l.M)(this,"handleChangeLink",((e,t)=>{e.preventDefault(),t&&this.globalViewModel.setIntegrationLink(t)})),(0,l.M)(this,"toEventTable",(()=>{const e=["Name","Type","URL","Referer","Date",""],t=[c.sSJ.EVENT_NAME,c.sSJ.EVENT_TYPE,c.sSJ.URL,c.sSJ.REFERER,c.sSJ.START_DATE,c.sSJ.UUID];if(this.data.length){const s=t.map(((t,s)=>({Header:e[s],accessor:t,width:t===c.sSJ.UUID?10:170,allowSort:t===c.sSJ.START_DATE,Cell:({cell:e,column:t})=>{if(t.id===c.sSJ.EVENT_NAME&&e?.value)return n.createElement("div",{className:"px-3"},e?.value??null);if(t.id===c.sSJ.UUID)return n.createElement(n.Fragment,null);if(t.id!==c.sSJ.REFERER&&t.id!==c.sSJ.URL||!e?.value)return n.createElement("div",{className:"px-3"},e?.value??null);{const t=new URL(e?.value);return n.createElement("div",{className:"px-3"},""===t?"Unknown":t.pathname+t.search)}}}))),a=this.data.map((e=>({...e,...t.map((t=>t===c.sSJ.START_DATE?{[t]:m()(e[t]).format("DD-MM-YYYY HH:mm:ss")}:{[t]:e[t]})).reduce(((e,t)=>({...t,...e})),{})}))),r=a?.map((e=>{for(let s in e)t.includes(s)||delete e[s];return e}));return{header:s,data:r}}return{header:[],data:[]}})),e&&(this.data=e,this.globalViewModel=t)}},b=class{constructor(e,t){(0,l.M)(this,"EventsDetailStore",null),(0,l.M)(this,"status",r.s.READY),(0,l.M)(this,"statusTable",r.s.READY),(0,l.M)(this,"globalStoreViewModel",null),(0,l.M)(this,"data",null),(0,l.M)(this,"dataEvents",null),(0,l.M)(this,"dataFilter",{}),(0,l.M)(this,"attributeData",null),(0,l.M)(this,"search",{}),(0,l.M)(this,"sortBy",{"sort[]":"","sort_direction[]":""}),(0,l.M)(this,"transformDataToEventsDetailModel",(()=>new D(this.data))),(0,l.M)(this,"getVisitor",(async(e,t,s={},a={})=>{this.statusTable=r.s.LOADING,this.sortBy=s,this.search=a,this.dataFilterTable={page_size:"5",...this.dataFilterTable,...e,...this.sortBy,...this.search};const i={...this.globalStoreViewModel.dateFilter,...t};await this.EventsDetailStore.getVisitor(this.dataFilterTable,i,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,l.M)(this,"getEventDetail",((e,t)=>{this.status=r.s.LOADING,this.dataFilterEvents={page_size:"1000",...this.dataFilterEvents,...e};const s={...this.globalStoreViewModel.dateFilter,...t};this.EventsDetailStore.getEvents(this.dataFilterEvents,s,this.callbackOnDataEventsSuccessHandler,this.callbackOnErrorHandler)})),(0,l.M)(this,"getAttribute",((e,t)=>{this.status=r.s.LOADING,this.dataFilter={...this.dataFilter,...e};const s={...this.globalStoreViewModel?.dateFilter,...t};this.EventsDetailStore.getAttribute(e,s,this.callbackOnDataAttributeSuccessHandler,this.callbackOnErrorHandler)})),(0,l.M)(this,"setDataFilter",(e=>{this.dataFilter=e})),(0,l.M)(this,"handleFilterDateRange",((e,t)=>{this.status=r.s.LOADING,this.statusTable=r.s.LOADING;const s={...this.globalStoreViewModel.dateFilter,date_start:m()(e).format("YYYY-MM-DD"),date_end:m()(t).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...s},this.EventsDetailStore.getVisitor(this.dataFilterTable,s,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler),this.EventsDetailStore.getEvents(this.dataFilterEvents,s,this.callbackOnDataEventsSuccessHandler,this.callbackOnErrorHandler)})),(0,l.M)(this,"handleFilterTable",(async e=>{this.statusTable=r.s.LOADING,this.dataFilterTable={...this.dataFilterTable,...e};const t={...this.globalStoreViewModel.dateFilter};await this.EventsDetailStore.getVisitor(this.dataFilterTable,t,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,l.M)(this,"callbackOnErrorHandler",(e=>{this.status=r.s.READY,(0,d.me)(e.message,"error")})),(0,l.M)(this,"callbackOnDataSuccessHandler",(e=>{if(e?.list){if("canceled"!==e?.message){this.statusTable=r.s.READY;const t=new D(e?.list,this.globalStoreViewModel);this.data={list:t,pagination:e.pagination}}}else this.statusTable=r.s.ERROR,this.data=[]})),(0,l.M)(this,"callbackOnDataEventsSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){this.status=r.s.READY;const t=new D(e,this.globalStoreViewModel);this.dataEvents=t}}else this.status=r.s.ERROR,this.data=[]})),(0,l.M)(this,"callbackOnDataAttributeSuccessHandler",(e=>{e?"canceled"!==e?.message&&(this.status=r.s.READY,this.attributeData=e?.list):(this.status=r.s.ERROR,this.attributeData={})})),(0,h.l_)(this),this.EventsDetailStore=e,this.globalStoreViewModel=t}},p=class{constructor(e,t){(0,l.M)(this,"eventsDetail",null),(0,l.M)(this,"getEventsDetailViewModel",(()=>this.eventsDetail)),e&&(this.eventsDetail=new b(e,t))}},S=(0,n.lazy)((()=>Promise.all([s.e(514),s.e(450),s.e(8255),s.e(183)]).then(s.bind(s,70183)))),v=(0,E.PA)(class extends n.Component{constructor(e){super(e),(0,l.M)(this,"EventsDetailStore",null),(0,l.M)(this,"behaviorViewModel",null);const{viewModel:t}=e;this.viewModel=t||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.EventsDetailStore=new g({}),this.behaviorViewModel=new p(this.EventsDetailStore,this.biListViewModel)}render(){return n.createElement(a.F,{viewModel:this.behaviorViewModel},n.createElement(S,{...this.props}))}}),w=(0,u.CI)()((0,i.cm)((0,o.y)(v)))},38415:(e,t,s)=>{s.d(t,{F:()=>i,g:()=>l});var a=s(96540),r=a.createContext(),i=({children:e,viewModel:t})=>a.createElement(r.Provider,{value:t},e),l=()=>a.useContext(r)}}]);