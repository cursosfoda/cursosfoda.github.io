import"./vue.esm-bundler-veZ3DSMb.js";import{u as H,c as J,l as K}from"./locales-_vDlczwz.js";import{S as Y,u as Q}from"./SideInquiry-QNmreQeT.js";import{c as u,f as V,u as i,l as k,o as d,r as h,d as j,n as q,a as e,t as g,F,e as X,h as A,w as B,K as D,i as Z,L as ee,M as te,g as oe}from"./runtime-dom.esm-bundler-M0Y61t4C.js";import{P as se}from"./PropertySmall-zRQ5icv2.js";import{u as O}from"./useAjax-8MbNEC23.js";import{u as ae}from"./useSlick-6WOlwhl4.js";import{g as ne,c as le}from"./util-NLv13CSH.js";import{u as re}from"./useBookmarkProperty-eDSMMvVz.js";import{_ as ie}from"./_plugin-vue_export-helper-x3n3nnut.js";import{u as ce}from"./useIntlTel-Ii7em1vr.js";import{u as de}from"./usePropertySearchBox-RoTVcjyP.js";import"./Image-N-0A-szc.js";import"./noimage-ppyNDBQR.js";import"./useRecaptcha-6MbrFnS7.js";import"./useAuthentication-jFU3DdSg.js";const ue={key:0,class:"side_menu col-3"},pe={__name:"InquiryForm",props:{agent:Object,propertyCode:String},setup(s){const{t:a}=H();return(n,c)=>s.agent?(d(),u("aside",ue,[s.agent?(d(),V(Y,{key:0,agent:s.agent,"property-code":s.propertyCode,"show-agent-name":!1,title:i(a)("enquiries.show.js.contact_agent")},null,8,["agent","property-code","title"])):k("",!0)])):k("",!0)}},he={class:"property_botoom_slide",id:"home"},_e={key:0,class:"listing"},me={class:"c-ttl"},fe={class:"slider responsive"},M="recentlyViewedProperties",ve={__name:"RecentlyViewedProperties",props:{title:String},setup(s){const a=h([]),n=localStorage.getItem(M)?JSON.parse(localStorage.getItem(M)):[],{property_code:c,recently_viewed_path:l,recently_viewed_count:_}=window.app.page,{callGet:m}=O(),{slickResponsive:b}=ae();j(()=>{const o=f();v(o)});const f=()=>{const o=n.filter(t=>t!=c);return o.length==0||Promise.allSettled(o.map(t=>m(ne(`properties/${t}`)))).then(t=>{a.value=t.filter(r=>r.status=="fulfilled").map(r=>r.value.property),q(()=>b(".listing .responsive"))}),o},v=o=>{_&&(o.push(c),o.length>_&&o.shift(),localStorage.setItem(M,JSON.stringify(o)))};return(o,t)=>(d(),u("div",he,[a.value.length>0?(d(),u("div",_e,[e("h2",me,g(s.title),1),e("div",fe,[(d(!0),u(F,null,X(a.value,(r,p)=>(d(),V(se,{key:`recently-viewed-${p}`,property:r},null,8,["property"]))),128))])])):k("",!0)]))}},w=s=>(ee("data-v-f1764a41"),s=s(),te(),s),we={class:"share_fav d-flex justify-content-between"},ye=w(()=>e("i",{class:"fa-regular fa-share-from-square"},null,-1)),ge=[ye],ke={class:"fav"},be={class:"example2"},Se=["checked"],xe={class:"modal-body"},Ce={class:"modal-content"},$e={key:0,style:{"font-weight":"700",padding:"1rem","text-align":"center"}},Te=w(()=>e("h3",null,"Share home",-1)),Ee=["innerHTML"],Ie=["innerHTML"],Pe=["placeholder"],Le=["innerHTML"],Ne=w(()=>e("i",{class:"fa-brands fa-facebook-f"},null,-1)),Ae=[Ne],Be=w(()=>e("i",{class:"fa-brands fa-x-twitter"},null,-1)),De=[Be],Me=w(()=>e("i",{class:"fa-brands fa-facebook-messenger"},null,-1)),Oe=[Me],He=w(()=>e("i",{class:"fa-brands fa-whatsapp"},null,-1)),Ve=[He],je=w(()=>e("i",{class:"fa-brands fa-weixin"},null,-1)),qe=[je],Fe={__name:"ShareBookmark",setup(s){const{property_code:a}=window.app.page,n={CLOSED:0,OPENING:1,SHARED:2},{callPost:c,errors:l}=O(),{bookmark:_,getBookmark:m,unbookmark:b}=re(),{t:f,vt:v}=H("properties.show.js.share"),o=h(!1),t=h({to_address:"",from_address:"",body:""}),r=h(n.CLOSED),p=h(!1),T=`https://www.facebook.com/share.php?u=${location.href}`,E=document.querySelector("meta[property='fb:app_id']").getAttribute("content"),I=`https://www.facebook.com/dialog/send?link=${location.href}&redirect_uri=${new URL(window.location.href).origin}&app_id=${E}`,S=`https://twiter.com/share?url=${location.href}`,P=`https://www.addtoany.com/ext/wechat/share/#url=${location.href}`,L=`https://wa.me/?text=${location.href}`,N=A(()=>(r.value&n.OPENING)>0),R=A(()=>(r.value&n.SHARED)>0);A(()=>t.value.from_address&&t.value.to_address),j(async()=>{o.value=await m(a)});const z=async()=>{if(!p.value){p.value=!0;try{o.value?await b(a):await _(a),o.value=!o.value}finally{p.value=!1}}},G=()=>r.value=n.OPENING,U=()=>r.value=n.CLOSED,W=async()=>{p.value=!0;try{const C=await c(window.app.page.share_path,{share_content:t.value});C&&C.code=="ok"&&(t.value={},r.value|=n.SHARED)}catch{alert("Sorry something went wrong")}finally{p.value=!1}};return(C,y)=>(d(),u("div",we,[e("p",{class:"share"},[e("a",{class:"modal-open",onClick:G},ge)]),e("p",ke,[e("a",be,[e("input",{checked:o.value,type:"checkbox",id:"1"},null,8,Se),e("label",{for:"1"},[e("i",{class:"fa-solid fa-heart",onClick:z})])])]),e("div",{class:Z([{active:N.value},"modal-container"])},[e("div",xe,[e("div",{class:"modal-close",onClick:U},"×"),e("div",Ce,[R.value?(d(),u("div",$e,g(i(v)("sent")),1)):(d(),u(F,{key:1},[Te,e("dl",null,[e("dt",null,g(i(f)("activemodel.attributes.share_content.to_address")),1),e("dd",null,[B(e("input",{"onUpdate:modelValue":y[0]||(y[0]=x=>t.value.to_address=x),placeholder:"Email*",type:"text"},null,512),[[D,t.value.to_address]]),i(l).to_address?(d(),u("div",{key:0,class:"error_txt",innerHTML:i(l).to_address.join("<br>")},null,8,Ee)):k("",!0)])]),e("dl",null,[e("dt",null,g(i(f)("activemodel.attributes.share_content.from_address")),1),e("dd",null,[B(e("input",{"onUpdate:modelValue":y[1]||(y[1]=x=>t.value.from_address=x),placeholder:"Email*",type:"text"},null,512),[[D,t.value.from_address]]),i(l).from_address?(d(),u("div",{key:0,class:"error_txt",innerHTML:i(l).from_address.join("<br>")},null,8,Ie)):k("",!0)])]),e("dl",null,[e("dt",null,g(i(f)("activemodel.attributes.share_content.body")),1),e("dd",null,[B(e("textarea",{"onUpdate:modelValue":y[2]||(y[2]=x=>t.value.body=x),maxlength:"2000",rows:"3",placeholder:i(v)("placeholder_message")},null,8,Pe),[[D,t.value.body]]),i(l).body?(d(),u("div",{key:0,class:"error_txt",innerHTML:i(l).body.join("<br>")},null,8,Le)):k("",!0)])]),e("button",{type:"button",class:"btn",onClick:W},g(i(v)("send_email")),1),e("ul",{class:"sns_list"},[e("li",null,[e("a",{href:T,rel:"nofollow noopener",target:"_blank"},Ae)]),e("li",null,[e("a",{href:S,rel:"nofollow noopener",target:"_blank"},De)]),e("li",null,[e("a",{href:I,target:"_blank"},Oe)]),e("li",null,[e("a",{href:L,target:"_blank"},Ve)]),e("li",null,[e("a",{href:P,target:"_blank"},qe)])])],64))])])],2)]))}},Re=ie(Fe,[["__scopeId","data-v-f1764a41"]]),ze={components:{InquiryForm:pe,RecentlyViewedProperties:ve,ShareBookmark:Re},setup(){const s=h(null),a=h("property"),n=h(!1),c=h(null),{hidePropertySearchBox:l,showPropertySearchBox:_}=de(),{callGet:m,callPost:b}=O(),{intlCountry:f,intlNumber:v,initializeIntlTel:o}=ce("#intl_phone2"),t=document.querySelector("meta[name=viewport]"),r=t.getAttribute("content"),p=async()=>{const S=await m(window.app.page.agent_path);s.value=S.agent},T=()=>{a.value="property",_(),t.setAttribute("content",r),q(()=>$("body, html").scrollTop(0))},E=()=>n.value=!n.value,I=async()=>{a.value="images",l(),t.setAttribute("content","width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes");const{country:S,phone:P}=window.app.page,{getCsrfToken:L}=Q();o({country:S,phone:P}),c.value=$("#recaptcha_token").val();const N=await L();$(".contact_agent input[name=authenticity_token]").val(N)};return p(),b(window.app.page.tracking_path),{agent:s,mode:a,openingDescription:n,handleClickBackProperty:T,handleClickDescription:E,handleClickImage:I,intlCountry:f,intlNumber:v,recaptchaToken:c}},mounted(){Ge(),setTimeout(()=>document.querySelectorAll(".loading").forEach(s=>s.classList.remove("loading")),500)},methods:{clampText:le}},Ge=()=>{$(".photo_main_list").on("init",function(c,l){$(this).append('<div class="slick-num"><span class="now-count"></span> / <span class="all-count"></span></div>'),$(".now-count").text(l.currentSlide+1),$(".all-count").text(l.slideCount)});let s=$(".photo_main_list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".photo_nav_list",cssEase:"ease-out",responsive:[{breakpoint:993,settings:{arrows:!1,fade:!1,speed:240}}]}).on("beforeChange",function(c,l,_,m){$(".now-count").text(m+1)}),a=$(".photo_nav_list").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,speed:400,asNavFor:".photo_main_list",arrows:!0,focusOnSelect:!0,vertical:!0,verticalSwiping:!0,responsive:[{breakpoint:768,settings:{vertical:!1,verticalSwiping:!1,slidesToShow:4,adaptiveHeight:!0}}]}),n=$(window).width();$(window).resize(function(){var c=$(window).width();n!=c&&(s.slick("setPosition"),a.slick("setPosition"))})},Ue=J(K);document.addEventListener("DOMContentLoaded",()=>{oe(ze).use(Ue).mount("main")});
//# sourceMappingURL=property-OtRk2_5r.js.map
