(()=>{var e,t={342:()=>{function e(e,t){t.style.top=e.pageY-100+"px",t.style.left=e.pageX-100+"px"}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".light"),r=document.querySelector(".light2"),n=function(n){t&&e(n,t),r&&e(n,r)};document.addEventListener("mousemove",n),document.addEventListener("touchmove",n)}))},142:(e,t,r)=>{"use strict";r(342);var n=r(607),o=r(650),i=n.os.registerPlugin(o.H0)||n.os;i.core.Tween,document.body.style.overflow="hidden",document.body.classList.add("fixed"),document.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1});var a=!1;document.querySelector(".menu-btn").addEventListener("click",(function(){for(var e=document.querySelectorAll(".text-stroke-fill-ltr"),t=document.querySelectorAll(".hover-reveal"),r=document.querySelectorAll(".hidden-img"),n=function(n){e[n].addEventListener("mousemove",(function(e){t[n].style.opacity=.6,t[n].style.transform="translate(150%, -70% ) rotate(5deg)",r[n].style.transform="scale(1, 1)",t[n].style.left=e.clientX+"px"})),e[n].addEventListener("mouseleave",(function(e){t[n].style.opacity=0,t[n].style.transform="translate(-50%, -50%) rotate(-5deg)",r[n].style.transform="scale(0.8, 0.8)"}))},o=0;o<e.length;o++)n(o);var l=i.timeline({onStart:function(){document.querySelector(".menu-bg").style.visibility="visible"},onComplete:function(){a||(document.querySelector(".menu-bg").style.visibility="hidden")}});a?l.to(".menu-bg",{duration:.4,left:"-100%",ease:"power4.Out"}):l.to(".menu-bg",{duration:.4,left:0,ease:"power4.In"}).fromTo(".menu-bg nav ul li",{x:-40,opacity:0},{duration:1,x:0,opacity:1,stagger:.3,ease:"power2.out"}),a=!a}));var l,s=new(r(973).A)({lerp:.1,duration:30});requestAnimationFrame((function e(t){s.raf(t),requestAnimationFrame(e)})),l=document.querySelectorAll(".loader__bg"),i.timeline().set(l,{transformOrigin:"100% 100%",scaleX:1}).to(l,{scaleX:0,transformOrigin:"0% 0%",stagger:.07,ease:"power4.inOut"});var u=r(575);document.body.style.overflow="",document.body.classList.remove("fixed"),i.registerPlugin(u.u),document.addEventListener("DOMContentLoaded",(function(){i.utils.toArray(".text-effect").forEach((function(e){i.to(e,{backgroundSize:"100%",ease:"power1.inOut",scrollTrigger:{trigger:e,start:"top bottom",end:"top 70%",scrub:!0,once:!0}})}))})),document.body.classList.contains("index-page")&&initializeScene(imageUrls)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={477:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkthree_shader_env01=self.webpackChunkthree_shader_env01||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[38],(()=>n(142)));o=n.O(o)})();