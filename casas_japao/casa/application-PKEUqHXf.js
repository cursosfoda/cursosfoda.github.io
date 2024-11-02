import"./vue.esm-bundler-veZ3DSMb.js";import{u as _,c as y,l as S}from"./locales-_vDlczwz.js";import{r as p,c as d,a as e,j as f,u as t,l as C,o as h,d as P,m as T,w as x,v as I,t as l,F as k,e as M,i as w,g as L}from"./runtime-dom.esm-bundler-M0Y61t4C.js";import{g as v,p as O}from"./util-NLv13CSH.js";import{u as b}from"./useAuthentication-jFU3DdSg.js";const A={class:"container"},H=["href"],V={__name:"CookieAcceptance",setup(n){const o=p(!1),{privacyPolicyPath:s}=window.app.common;document.cookie.indexOf("accepted")<0&&(o.value=!0,document.cookie="accepted=t; max-age=157680000");const i=()=>o.value=!1;return(c,a)=>o.value?(h(),d("div",{key:0,id:"header-cookie",class:"l-header__cookie",onClick:a[0]||(a[0]=()=>o.value=!1)},[e("div",A,[e("p",null,[f("We use cookies to give you the best possible experience on our site and to analyse traffic. By continuing browsing this website, you agree to our use of cookies. View our "),e("a",{href:t(s)},"Privacy Policy",8,H),f(" for more information."),e("a",{class:"clink",href:"#",id:"accept-cookie",onClick:i}," OK")])])])):C("",!0)}},W={class:"c-select__language"},z=["value"],B=["value"],N={__name:"LanguageSelector",setup(n){const o=p(document.querySelector("html").getAttribute("lang")),s={en:"English","zh-CN":"简体中文","zh-TW":"繁體中文",th:"ไทย"},{t:i}=_();return P(()=>{$(".c-select__language select").SumoSelect()}),T(o,c=>location.href=window.app.common.localesPath[c]),(c,a)=>(h(),d("div",null,[e("label",W,[x(e("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>o.value=u),class:"",tabindex:"-1"},[e("option",{class:"select_placeholder",disabled:"true",selected:"true",value:o.value},l(t(i)("shared.header.language")),9,z),(h(),d(k,null,M(s,(u,r)=>e("option",{key:`locale-${r}`,class:w({cr:r==o.value}),value:r},l(u),11,B)),64))],512),[[I,o.value]])])]))}},U={class:"sub_list"},D={class:"nav-item logIn"},E=["href"],j={class:"nav-item logOut"},F=["href"],q={__name:"SignIn",setup(n){const{t:o}=_(),s=v("login",""),i=v("signup","");return(c,a)=>(h(),d("ul",U,[e("li",D,[e("a",{href:t(s),class:"nav-link"},l(t(o)("c.login")),9,E)]),e("li",j,[e("a",{href:t(i),class:"nav-link"},l(t(o)("c.sign_up")),9,F)])]))}},K={class:"sub_list nav-item d-none d-lg-block logIn my-account"},G=["href"],J=["href"],Q={class:"sub_list d-lg-none"},R={class:"nav-item logIn"},X={__name:"UserMenu",setup(n){const o=p(!1),{vt:s,t:i}=_("shared.header.js"),{bookmarksPath:c,deleteAccountPath:a,logoutPath:u}=window.app.common,r=()=>o.value=!o.value,m=()=>{const{signedOutToStorage:g}=b();g(),window.location.href=u};return(g,ne)=>(h(),d(k,null,[e("div",K,[e("a",{class:"nav__acc",onClick:r},l(t(s)("myaccount")),1),e("ul",{class:w([{open:o.value},"megaMenu"])},[e("li",null,[e("a",{onClick:r},l(t(s)("myaccount")),1)]),e("li",null,[e("a",{href:t(c)},l(t(s)("favorite")),9,G)]),e("li",null,[e("a",{href:t(a)},l(t(s)("delete_account")),9,J)]),e("li",null,[e("a",{onClick:m},l(t(i)("c.logout")),1)])],2)]),e("ul",Q,[e("li",R,[e("a",{onClick:m},l(t(i)("c.logout")),1)])])],64))}},Y={components:{CookieAcceptance:V,LanguageSelector:N,SignIn:q,UserMenu:X},setup(){const{signedIn:n}=b();return{signedIn:n}},data(){return{openingSpMenu:!1}},mounted(){Z(),oe(),ee()}},Z=()=>{$(".nav-item a, .nav-item p").on("click",function(){window.innerWidth<=992&&($(this).next(".sub-menus").slideToggle(500),$(this).toggleClass("is-open"))})},ee=()=>{setTimeout(()=>{const n=".more_open, .more_close, .select_price .nav-link";$('a[href^="#"]').not(n).click(function(){const c=$(this).attr("href"),a=$(c=="#"||c==""?"html":c),u=a.offset().top-60,r=a.offset().top-60;return window.innerWidth>=768?$("html, body").animate({scrollTop:u},400,"swing"):$("html, body").animate({scrollTop:r},400,"swing"),!1})},1e3)},oe=()=>{const n=$("#pagetop");n.on("click",()=>O()),window.innerWidth>=768&&(n.hide(),$(window).scroll(()=>$(window).scrollTop()>800?n.fadeIn(500):n.fadeOut(500)))},te=y(S);document.addEventListener("DOMContentLoaded",()=>{L(Y).use(te).mount("header")});
//# sourceMappingURL=application-PKEUqHXf.js.map
