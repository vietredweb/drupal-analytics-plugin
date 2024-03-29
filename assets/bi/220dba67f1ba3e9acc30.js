"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[7788],{47788:(t,e,a)=>{a.r(e),a.d(e,{default:()=>P});var s=a(53701),o=a(65925),r=a(20513),i=a(70069),c=a(23541),l=a(67294),n=a(16550),d=a(68949),h=a(73022),m=a(26982),u=a(30381),p=a.n(u),g=a(73727),w=a(38585),b=a(91072),T=a(34155),E=class{constructor(){(0,c.o)(this,"getVisitor",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getVisitor(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getAttribute",(async(t,e,a,s,o)=>{try{const r=new h.Q22,i=await r.getAttribute(t,e);i?(0,d.z)((()=>{a(i,o)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getWoocommerce",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getEvents(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getWoocommerceStatistic",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getWoocommerceStatistic(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getWoocommerceStatisticChart",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getWoocommerceStatisticChart(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getWoocommerceProduct",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getWoocommerceProduct(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,c.o)(this,"getWoocommerceProductChart",(async(t,e,a,s)=>{try{const o=new h.Q22,r=await o.getWoocommerceProductChart(t,e);r?(0,d.z)((()=>{a(r)})):s({message:"Something went wrong from Server response"})}catch(t){(0,d.z)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},D=class{constructor(t,e){(0,c.o)(this,"data",[]),(0,c.o)(this,"globalViewModel",null),(0,c.o)(this,"toRaw",(()=>this.data)),(0,c.o)(this,"transformResponse",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{const a=this.data.filter((t=>t[h.Gl6.EVENT_NAME]===e[h.Gl6.EVENT_NAME]));t={...t,[e[h.Gl6.EVENT_NAME]]:a}})),t})),(0,c.o)(this,"transformWoocommerceResponse",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{const a=this.data.filter((t=>t[h.oZZ.EVENT_NAME]===e[h.oZZ.EVENT_NAME]));t={...t,[e[h.oZZ.EVENT_NAME]]:a}})),t})),(0,c.o)(this,"transformAttributeCartResponse",(t=>(this.dataAttr?.length>0&&(this.dataAddToCart={...t}),t))),(0,c.o)(this,"toAddToCartData",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{const a=this.data.filter((t=>t[h.oZZ.EVENT_NAME]===e[h.oZZ.EVENT_NAME]));t={...t,[e[h.oZZ.EVENT_NAME]]:a}})),t})),(0,c.o)(this,"getFilterName",(()=>{const t=this.transformResponse(),e=Object.keys(t).map((t=>({value:t,label:t})));return e?.unshift({value:"all",label:"All"}),e})),(0,c.o)(this,"getListLine",(()=>{const t=this.transformResponse();return Object.keys(t).map((t=>t))})),(0,c.o)(this,"toAreaChart",(()=>{const t=this.transformWoocommerceResponse(),e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=(0,h.F9f)(this.globalViewModel.dateFilter.date_start,this.globalViewModel.dateFilter.date_end),s={all:a.map((e=>({name:e&&p()(e,"YYYY-MM-DD").format("MM-DD"),...Object.keys(t).map((a=>{const s=t[a].filter((t=>t[h.oZZ.DATE]===e));return{[a]:s?.length?s[0][h.oZZ.TOTAL_VISITOR]:0}})).reduce(((t,e)=>({...e,...t})),{})}))),...Object.keys(t).map((e=>({[e]:a.map((a=>{const s=t[e].filter((t=>t[h.oZZ.DATE]===a));return{name:a&&p()(a,"YYYY-MM-DD").format("MM-DD"),[e]:s?.length?s[0][h.oZZ.TOTAL_VISITOR]:0}}))}))).reduce(((t,e)=>({...e,...t})),{})};return[{all:e.map(((e,a)=>({name:e,...Object.keys(t).map((t=>{const e=this.data?.filter((t=>p()(t[h.oZZ.DATE],"YYYY-MM-DD").month()===a))?.reduce(((t,e)=>t+e[h.oZZ.TOTAL_VISITOR]),0);return{[t]:e??0}})).reduce(((t,e)=>({...e,...t})),{})}))),...Object.keys(t).map((t=>({[t]:e.map(((e,a)=>{const s=this.data?.filter((t=>p()(t[h.oZZ.DATE],"YYYY-MM-DD").month()===a))?.reduce(((t,e)=>t+e[h.oZZ.TOTAL_VISITOR]),0);return s?{name:e,[t]:s}:{name:e,[t]:0}}))}))).reduce(((t,e)=>({...e,...t})),{})},s]})),(0,c.o)(this,"toBarChart",(()=>{const t=this.transformWoocommerceResponse();return Object.keys(t).map((e=>({name:e,number:t[e]?.reduce(((t,e)=>t+e[h.oZZ.TOTAL_VISITOR]),0)})))})),(0,c.o)(this,"handleChangeLink",((t,e)=>{t.preventDefault(),e&&this.globalViewModel.setIntegrationLink(e)})),(0,c.o)(this,"toEventTable",(t=>{const e=["Name","Type","URL","Referer","Date"],a=[h.Gl6.EVENT_NAME,h.Gl6.EVENT_TYPE,h.Gl6.URL,h.Gl6.REFERER,h.Gl6.START_DATE];if(this.data.length){const s=a.map(((a,s)=>({Header:e[s],accessor:a,Cell:({cell:e,column:a,row:s})=>{if(a.id===h.Gl6.EVENT_NAME&&e?.value)return l.createElement(l.Fragment,null,t?l.createElement("a",{href:"#",onClick:t=>this.handleChangeLink(t,`flow/${s.original?.[h.Gl6.UUID]}`),className:"px-3"},l.createElement("span",null,e?.value)):l.createElement(g.OL,{to:`/flow/${s.original?.[h.Gl6.UUID]}`,className:"px-3"},e?.value));if(a.id!==h.Gl6.REFERER&&a.id!==h.Gl6.URL||!e?.value)return l.createElement("div",{className:"px-3"},e?.value??null);{const t=new URL(e?.value);return l.createElement("div",{className:"px-3"},""===t?"Unknown":t.pathname+t.search)}}}))),o=this.data.map((t=>({...t,...a.map((e=>e===h.Gl6.START_DATE?{[e]:p()(t[e]).format("DD-MM-YYYY HH:mm:ss")}:{[e]:t[e]})).reduce(((t,e)=>({...e,...t})),{})})));return o?.length&&o?.sort(((t,e)=>p()(e.start,"DD-MM-YYYY HH:mm:ss")-p()(t.start,"DD-MM-YYYY HH:mm:ss"))),{header:s,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toChart",(()=>{const t=(0,h.F9f)(this.globalViewModel?.dateFilter?.date_start,this.globalViewModel?.dateFilter?.date_end),e=t.map((t=>{const e=this.data.find((e=>p()(e.date).format("YYYY-MM-DD")===t));return{name:t&&p()(t,"YYYY-MM-DD").format("DD MMM"),total_revenue:e?.[h.rNr.TOTAL_REVENUE]??0,total_purchasers:e?.[h.rNr.TOTAL_PURCHASERS]??0}})),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(((t,e)=>{const a=this.data.filter((t=>p()(t?.date).month()===e));let s=0,o=0;return a&&(s=a.reduce(((t,e)=>t+e[h.rNr.TOTAL_REVENUE]),0),o=a.reduce(((t,e)=>t+e[h.rNr.TOTAL_PURCHASERS]),0)),{name:t,total_revenue:s,total_purchasers:o}})),s={};t.forEach((t=>{const e=p()(t).startOf("isoWeek"),a=p()(t).endOf("isoWeek"),o=`${e.format("DD MMM")} - ${a.format("DD MMM")}`;s[o]||(s[o]={total_revenue:0,total_purchasers:0});const r=this.data.filter((t=>p()(t?.date).isBetween(e,a,null,"[]")));if(r){const t=r.reduce(((t,e)=>t+e[h.rNr.TOTAL_REVENUE]),0),e=r.reduce(((t,e)=>t+e[h.rNr.TOTAL_PURCHASERS]),0);s[o].total_revenue+=t,s[o].total_purchasers+=e}}));return[{visitors:a},{visitors:e},{visitors:Object.keys(s).map((t=>({name:t,total_revenue:s[t].total_revenue,total_purchasers:s[t].total_purchasers})))}]})),(0,c.o)(this,"toChartProduct",(()=>{const t=(0,h.F9f)(this.globalViewModel?.dateFilter?.date_start,this.globalViewModel?.dateFilter?.date_end),e=t.map((t=>{const e=this.data.find((e=>p()(e.date).format("YYYY-MM-DD")===t));return{name:t&&p()(t,"YYYY-MM-DD").format("DD MMM"),Products:e?.[h.Mk$.QUANTITY]??0}})),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(((t,e)=>{const a=this.data.filter((t=>p()(t?.date).month()===e));let s=0;return a&&(s=a.reduce(((t,e)=>t+e[h.Mk$.QUANTITY]),0)),{name:t,Products:s}})),s={};t.forEach((t=>{const e=p()(t).startOf("isoWeek"),a=p()(t).endOf("isoWeek"),o=`${e.format("DD MMM")} - ${a.format("DD MMM")}`;s[o]||(s[o]={quantity:0});const r=this.data.filter((t=>p()(t?.date).isBetween(e,a,null,"[]")));if(r){const t=r.reduce(((t,e)=>t+e[h.Mk$.QUANTITY]),0);s[o].quantity+=t}}));return[{visitors:a},{visitors:e},{visitors:Object.keys(s).map((t=>({name:t,Products:s[t].quantity})))}]})),t&&(this.data=t,this.globalViewModel=e)}},S=class{constructor(t,e){(0,c.o)(this,"data",[]),(0,c.o)(this,"globalViewModel",null),(0,c.o)(this,"toRaw",(()=>this.data)),(0,c.o)(this,"toWoocoomerceTableTop",(t=>{const e=["value","count"];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>"value"===e.id?l.createElement("div",{className:"px-15"},t?.value):l.createElement("div",{className:"px-15 text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toWoocoomerceTableCheckoutTop",(()=>{const t=["txt_product_name","txt_count","txt_total"],e=["value","count","total"];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>"value"===e.id?l.createElement("div",{className:"px-15"},t?.value):l.createElement("div",{className:"px-15 text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toViewProductTableTop",(()=>{const t=["txt_product","txt_visitors"],e=["value","count"];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>"value"===e.id?l.createElement("div",{className:""},t?.value):l.createElement("div",{className:"text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})})))?.sort(((t,e)=>e.count-t.count)),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toProductSearchTableTop",(()=>{const t=["txt_keyword","txt_clicks"],e=["value","count"];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>"value"===e.id?l.createElement("div",{className:""},t?.value):l.createElement("div",{className:"text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})})))?.sort(((t,e)=>e.count-t.count)),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toProductCartTableTop",(()=>{const t=["txt_product","txt_quantity"],e=["value","count"];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>"value"===e.id?l.createElement("div",{className:""},t?.value):l.createElement("div",{className:"text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})})))?.sort(((t,e)=>e.count-t.count)),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toWoocoomerceProductTopTable",(()=>{const t=["txt_product_name","txt_quantity","txt_product_revenue"],e=[h.hiX.PRODUCT,h.hiX.QUANTITY,h.hiX.PRODUCT_REVENUE];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>e.id===h.hiX.PRODUCT?l.createElement("div",{className:"px-15"},t?.value):l.createElement("div",{className:"px-15 text-end"},t?.value)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),(0,c.o)(this,"toWoocoomerceProductTable",(()=>{const t=["txt_product_name","txt_quantity","txt_items_sold","txt_product_revenue","txt_avg_price","txt_avg_quantity"],e=[h.hiX.PRODUCT,h.hiX.QUANTITY,h.hiX.ITEMS_SOLD,h.hiX.PRODUCT_REVENUE,h.hiX.AVG_PRICE,h.hiX.AVG_QUANTITY];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,width:170,Cell:({cell:t,column:e})=>(e.id,h.hiX.PRODUCT,l.createElement("div",{className:"px-15"},t?.value))}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),o=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:o}}return{header:[],data:[]}})),t&&(this.data=t??[],this.globalViewModel=e)}},M=class{constructor(t,e){(0,c.o)(this,"woocommerceStore",null),(0,c.o)(this,"status",r.r.READY),(0,c.o)(this,"statusTable",r.r.READY),(0,c.o)(this,"statusTopProductViewTable",r.r.READY),(0,c.o)(this,"statusTopProductCartTable",r.r.READY),(0,c.o)(this,"statusTopProductSearchTable",r.r.READY),(0,c.o)(this,"statusStatistic",r.r.READY),(0,c.o)(this,"statusStatisticChart",r.r.READY),(0,c.o)(this,"statusProduct",r.r.READY),(0,c.o)(this,"statusProductChart",r.r.READY),(0,c.o)(this,"globalStoreViewModel",null),(0,c.o)(this,"data",null),(0,c.o)(this,"dataWoocommerce",null),(0,c.o)(this,"dataAddToCart",null),(0,c.o)(this,"dataSearchProduct",null),(0,c.o)(this,"dataCheckout",null),(0,c.o)(this,"dataFilter",{}),(0,c.o)(this,"attributeData",null),(0,c.o)(this,"productViewTableData",null),(0,c.o)(this,"productCartTableData",null),(0,c.o)(this,"productSearchTableData",null),(0,c.o)(this,"statisticData",null),(0,c.o)(this,"statisticDataChart",null),(0,c.o)(this,"productData",null),(0,c.o)(this,"productDataChart",null),(0,c.o)(this,"productTableTopData",null),(0,c.o)(this,"initialize",(async(t,e)=>{this.getWoocommerceStatistic({...t},e),this.getWoocommerceStatisticChart({...t},e),this.getWoocommerceProduct({...t,page_size:10},e),Promise.all([this.getAttribute({...t,page_size:5,"filter[attribute_name]":"wooocommerce_product_name"},e,"cart"),this.getAttribute({...t,page_size:5,"filter[attribute_name]":"wooocommerce_search"},e,"search"),this.getAttribute({...t,page_size:5,"filter[attribute_name]":"woo.view_product"},e,"view_product")])})),(0,c.o)(this,"initializeProduct",(async(t,e)=>{this.getWoocommerceProduct({...t},e),this.getWoocommerceProductChart({...t},e)})),(0,c.o)(this,"getWoocommerceStatistic",((t,e)=>{this.statusStatistic=r.r.LOADING,this.dataFilterStatistic={page_size:"5",...this.dataFilterStatistic,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getWoocommerceStatistic(this.dataFilterStatistic,a,this.callbackOnDataWoocommerceStatisticSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getWoocommerceStatisticChart",((t,e)=>{this.statusStatisticChart=r.r.LOADING,this.dataFilterStatisticChart={page_size:"999",...this.dataFilterStatisticChart,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getWoocommerceStatisticChart(this.dataFilterStatisticChart,a,this.callbackOnDataWoocommerceStatisticChartSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getWoocommerceProduct",((t,e)=>{this.statusProduct=r.r.LOADING,this.dataFilterProduct={page_size:"5",...this.dataFilterProduct,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getWoocommerceProduct(this.dataFilterProduct,a,this.callbackOnDataWoocommerceProductSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getWoocommerceProductChart",((t,e)=>{this.statusProductChart=r.r.LOADING,this.dataFilterProductChart={page_size:"999",...this.dataFilterProductChart,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getWoocommerceProductChart(this.dataFilterProductChart,a,this.callbackOnDataWoocommerceProductChartSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getVisitor",((t,e)=>{this.statusTable=r.r.LOADING,this.dataFilterTable={page_size:"5","sort[]":"number_of_page_views","sort_direction[]":"desc",...this.dataFilterTable,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getVisitor(this.dataFilterTable,a,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getWoocommerce",((t,e)=>{this.status=r.r.LOADING,this.dataFilterWoocommerce={page_size:"1000",...this.dataFilterWoocommerce,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.woocommerceStore.getWoocommerce(this.dataFilterWoocommerce,a,this.callbackOnDataWoocommerceSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"getAttribute",((t,e,a)=>{this.status=r.r.LOADING,this.statusTopProductViewTable=r.r.LOADING,this.statusTopProductCartTable=r.r.LOADING,this.statusTopProductSearchTable=r.r.LOADING,this.dataFilterAttribute={...this.dataFilterAttribute,...t};const s={...this.globalStoreViewModel?.dateFilter,...e};this.woocommerceStore.getAttribute(this.dataFilterAttribute,s,this.callbackOnDataAttributeSuccessHandler,this.callbackOnErrorHandler,a)})),(0,c.o)(this,"setDataFilter",(t=>{this.dataFilter=t})),(0,c.o)(this,"handleFilterDateRange",((t,e)=>{this.status=r.r.LOADING,this.statusTopProductViewTable=r.r.LOADING,this.statusTopProductCartTable=r.r.LOADING,this.statusTopProductSearchTable=r.r.LOADING;const a={...this.globalStoreViewModel.dateFilter,date_start:p()(t).format("YYYY-MM-DD"),date_end:p()(e).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...a},this.initialize(this.dataFilter,a)})),(0,c.o)(this,"handleFilterTable",(async t=>{this.statusTable=r.r.LOADING,this.dataFilterTable={...this.dataFilterTable,...t};const e={...this.globalStoreViewModel.dateFilter};await this.woocommerceStore.getVisitor(this.dataFilterTable,e,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"callbackOnErrorHandler",(t=>{this.status=r.r.READY,(0,m.j5)(t.message,"error")})),(0,c.o)(this,"callbackOnDataSuccessHandler",(t=>{if(t?.list){this.statusTable=r.r.READY;const e=new D(t?.list,this.globalStoreViewModel);this.data={list:e,pagination:t.pagination}}else this.statusTable=r.r.ERROR,this.data=[]})),(0,c.o)(this,"handleFilterTableWoocommerceProduct",(async t=>{this.statusProduct=r.r.LOADING,this.dataFilterProduct={...this.dataFilterProduct,...t};const e={...this.globalStoreViewModel.dateFilter};await this.woocommerceStore.getWoocommerceProduct(this.dataFilterProduct,e,this.callbackOnDataWoocommerceProductSuccessHandler,this.callbackOnErrorHandler)})),(0,c.o)(this,"callbackOnDataWoocommerceStatisticSuccessHandler",(t=>{if(t?.list){this.statusStatistic=r.r.READY;const e=new D(t.list[0],this.globalStoreViewModel);this.statisticData=e?.data}else this.statusStatistic=r.r.ERROR,this.data=[]})),(0,c.o)(this,"callbackOnDataWoocommerceStatisticChartSuccessHandler",(t=>{if(t?.list){this.statusStatisticChart=r.r.READY;const e=new D(t?.list,this.globalStoreViewModel);this.statisticDataChart={list:e?.toChart(),pagination:t.pagination}}else this.statusStatisticChart=r.r.ERROR,this.data=[]})),(0,c.o)(this,"callbackOnDataWoocommerceProductSuccessHandler",(t=>{if(t?.list){this.statusProduct=r.r.READY;const e=new S(t.list,this.globalStoreViewModel);this.productData={list:e?.toWoocoomerceProductTable(),pagination:t.pagination},this.productTableTopData={list:e?.toWoocoomerceProductTopTable(),pagination:t.pagination}}else this.statusProduct=r.r.ERROR,this.data=[]})),(0,c.o)(this,"callbackOnDataWoocommerceProductChartSuccessHandler",(t=>{if(t?.list){this.statusProductChart=r.r.READY;const e=new D(t?.list,this.globalStoreViewModel);this.productDataChart={list:e?.toChartProduct(),pagination:t.pagination}}else this.statusProductChart=r.r.ERROR,this.data=[]})),(0,c.o)(this,"callbackOnDataWoocommerceSuccessHandler",(t=>{if(t){this.status=r.r.READY;const e=new D(t,this.globalStoreViewModel);this.dataWoocommerce=e}else this.status=r.r.ERROR,this.data=[]})),(0,c.o)(this,"callbackOnDataAttributeSuccessHandler",((t,e)=>{if(t)if(this.status=r.r.READY,"cart"===e){this.statusTopProductCartTable=r.r.READY;const e=new S(t?.list[0]?.values,this.globalStoreViewModel);this.productCartTableData={list:e?.toProductCartTableTop(),pagination:t.pagination}}else if("search"===e){this.statusTopProductSearchTable=r.r.READY;const e=new S(t?.list[0]?.values,this.globalStoreViewModel);this.productSearchTableData={list:e?.toProductSearchTableTop(),pagination:t.pagination}}else if("checkout"===e){const e=new S(t?.list[0]?.values,this.globalStoreViewModel);this.dataCheckout=e?.toWoocoomerceTableCheckoutTop()}else if("view_product"===e){this.statusTopProductViewTable=r.r.READY;const e=new S(t?.list[0]?.values,this.globalStoreViewModel);this.productViewTableData={list:e?.toViewProductTableTop(),pagination:t.pagination}}else this.attributeData=t;else this.status=r.r.ERROR,this.statusTopProductCartTable=r.r.ERROR,this.statusTopProductViewTable=r.r.ERROR,this.statusTopProductSearchTable=r.r.ERROR,this.dataAddToCart={},this.dataSearchProduct={},this.dataCheckout={},this.attributeData={}})),(0,d.ky)(this),this.woocommerceStore=t,this.globalStoreViewModel=e}},_=class{constructor(t,e){(0,c.o)(this,"woocommerceList",null),(0,c.o)(this,"getWoocommerceListViewModel",(()=>this.woocommerceList)),t&&(this.woocommerceList=new M(t,e))}},v=(0,l.lazy)((()=>Promise.all([a.e(7398),a.e(1744),a.e(6656),a.e(8032),a.e(2097)]).then(a.bind(a,32097)))),A=(0,l.lazy)((()=>Promise.all([a.e(7398),a.e(1744),a.e(6656),a.e(8032),a.e(3676)]).then(a.bind(a,83676)))),f=({link:t,...e})=>{switch(t){case"woocommerce":default:return l.createElement(v,{...e});case"woocommerce-product":return l.createElement(A,{...e})}},R=(0,w.Pi)(class extends l.Component{constructor(t){super(t),(0,c.o)(this,"woocommerceStore",null),(0,c.o)(this,"behaviorViewModel",null);const{viewModel:e}=t;this.viewModel=e||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.woocommerceStore=new E({}),this.behaviorViewModel=new _(this.woocommerceStore,this.biListViewModel)}render(){const{integration:t=!1}=this.props,{integrationLink:e,activeDomain:a}=this.biListViewModel,r=(0,n.LX)(m.m8.location.pathname,{path:T.env.REACT_APP_INTERGRATION?"/bi":"/woocommerce",exact:!0,strict:!1}),i=[{name:"Top Search",data:this?.behaviorViewModel?.woocommerceList?.productSearchTableData?.list?.data},{name:"Add to cart",data:this?.behaviorViewModel?.woocommerceList?.productCartTableData?.list?.data},{name:"Top Products",data:this?.behaviorViewModel?.woocommerceList?.productTableTopData?.list?.data},{name:"Top View",data:this?.behaviorViewModel?.woocommerceList?.productViewTableData?.list?.data}];return l.createElement(s.$,{viewModel:this.behaviorViewModel},(r?.isExact||"woocommerce"===e||"woocommerce-product"===e)&&l.createElement(o.V,{tableExport:i,i18n:this.props.i18n,t:this.props.t,componentRef:this.componentRef,sectionName:"woocommerce"}),l.createElement(O,{integration:t,integrationLink:e,activeDomain:a,ref:t=>this.componentRef=t}))}}),O=(0,w.Pi)(class extends l.Component{constructor(t){super(t)}render(){return l.createElement("div",{className:"aesirxui"},this.props.integration?l.createElement(f,{link:this.props.integrationLink,activeDomain:this.props.activeDomain,...this.props}):l.createElement(l.Fragment,null,l.createElement(n.AW,{exact:!0,path:["/woocommerce","/bi/woocommerce"]},l.createElement(v,null)),l.createElement(n.AW,{exact:!0,path:["/woocommerce/product","/bi/woocommerce/product"]},l.createElement(A,null))))}}),P=(0,b.Zh)()((0,i.NQ)(R))},53701:(t,e,a)=>{a.d(e,{$:()=>r,t:()=>i});var s=a(67294),o=s.createContext(),r=({children:t,viewModel:e})=>s.createElement(o.Provider,{value:e},t),i=()=>s.useContext(o)}}]);