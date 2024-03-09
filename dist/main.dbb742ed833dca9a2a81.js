(()=>{var e,t={499:()=>{const e=(({el:e,wrap:t,item:n,bar:r})=>{const o=document.querySelector(e);if(!o)return;const i=o.querySelector(t),a=o.querySelectorAll(n),s=o.querySelector(r);let c=0,l=0,d=0,u=0,m=0,v=!1,p=0,g=0,w=0,f=null;const h=()=>{g=a[0].clientWidth*a.length,i.style.width=`${g}px`,w=g-o.clientWidth},y=()=>{return e=c,0,t=w,c=Math.max(0,Math.min(e,t));var e,t},x=e=>{c+=e.deltaY,y()},b=e=>{e.preventDefault(),v=!0,p=e.clientX||e.touches[0].clientX,o.classList.add("dragging")},A=e=>{if(!v)return;const t=e.clientX||e.touches[0].clientX;c+=2.5*(p-t),p=t,y()},S=()=>{v=!1,o.classList.remove("dragging")},E=()=>{f=requestAnimationFrame(E),u=(1-.1)*u+.1*c,m=u/w,i.style.transform=`translateX(${-u}px)`,s.style.transform=`scaleX(${.18+.82*m})`,l=Math.min(100,d-u),d=u,a.forEach((e=>{const t=1-.002*Math.abs(l);e.style.transform=`scale(${t})`,e.querySelector("img").style.transform=`scaleX(${1+.004*Math.abs(l)})`}))},P=()=>{h(),window.addEventListener("resize",h),window.addEventListener("wheel",x),o.addEventListener("touchstart",b),window.addEventListener("touchmove",A),window.addEventListener("touchend",S),window.addEventListener("mousedown",b),window.addEventListener("mousemove",A),window.addEventListener("mouseup",S),document.body.addEventListener("mouseleave",S)};return new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(E(),t.unobserve(o))}))}),{threshold:.1}).observe(s),P(),{update:h,refresh:P,stop:()=>cancelAnimationFrame(f)}})({el:".carousel",wrap:".carousel--wrap",item:".carousel--item",bar:".carousel--progress-bar"});requestAnimationFrame((function t(){requestAnimationFrame(t),e.refresh()}))},48:(e,t,n)=>{"use strict";var r=n(437),o=n(880);window.addEventListener("DOMContentLoaded",(()=>{setTimeout((()=>{!function(){let e=document.querySelectorAll(".loader__bg");const t=o.Ay.timeline();o.Ay.set(e,{transformOrigin:"100% 100%",scaleX:1}),t.to(e,{scaleX:0,transformOrigin:"0% 0%",stagger:.07,ease:"power4.inOut"}).to(".overlay-white",{duration:.7,xPercent:100,ease:"cubic-bezier(0.961, 0.03, 0.961)"}).to(".overlay-red",{duration:.9,xPercent:150,ease:"cubic-bezier(0.961, 0.83, 0.961)"}).to(".overlay-white2",{duration:.7,xPercent:100,ease:"cubic-bezier(0.961, 0.03, 0.961)"}).to(".overlay-red2",{duration:.9,xPercent:100,ease:"cubic-bezier(0.961, 0.03, 0.961)"}).to(".white-outlined-text",{duration:.8,opacity:1,ease:"cubic-bezier(0.961, 0.03, 0.961)",stagger:{amount:.8,from:"start"},transform:"translateY(0)"}).to(".hero-text",{duration:1.5,delay:.1,color:"rgba(60, 57, 57, 1)",ease:"cubic-bezier(0.961, 0.03, 0.961)",opacity:1}).to(".hero-vision-bg",{duration:.5,xPercent:0,opacity:1,width:"100%",ease:"cubic-bezier(0.961, 0.03, 0.961)"})}()}),100)}));let i,a,s,c,l,d,u=0;const m=async e=>{a=new r.JeP({alpha:!0}),a.setSize(window.innerWidth,window.innerHeight),document.querySelector(".canvas-bg-blur").appendChild(a.domElement),s=new r.ubm(75,window.innerWidth/window.innerHeight,.1,1e3),s.position.z=600,i=new r.Z58,c=new r.Tap;try{d=await Promise.all(e.map((e=>new Promise(((t,n)=>{c.load(e,(e=>{e.magFilter=r.k6q,t(e)}),void 0,n)})))));const t=new r.BKk({uniforms:{map:{value:d[u]},aspectRatio:{value:d[u].image.width/d[u].image.height},containerAspectRatio:{value:window.innerWidth/window.innerHeight}},vertexShader:"// Vertex Shader\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",fragmentShader:"\n\n// Fragment Shader\nuniform sampler2D map;\nuniform float aspectRatio;\nuniform float containerAspectRatio;\nvarying vec2 vUv;\n\nvoid main() {\n    vec2 adjustedUV = vUv;\n    // テクスチャのアスペクト比とコンテナのアスペクト比を比較してUV座標を調整\n    if (aspectRatio > containerAspectRatio) {\n        // 画像がコンテナよりも横長の場合\n        adjustedUV.x = (vUv.x - 0.5) * (containerAspectRatio / aspectRatio) + 0.5;\n    } else {\n        // 画像がコンテナよりも縦長の場合\n        adjustedUV.y = (vUv.y - 0.5) * (aspectRatio / containerAspectRatio) + 0.5;\n    }\n\n    gl_FragColor = texture2D(map, adjustedUV);\n}\n",transparent:!0});v(1900,971,t),setInterval(w,8e3)}catch(e){console.error("Error loading textures:",e)}window.addEventListener("resize",p,!1),g()},v=(e,t,n)=>{l&&i.remove(l);const o=new r.bdM(e,t);l=new r.eaF(o,n),i.add(l),l.position.set(0,0,0)},p=()=>{const e=window.innerWidth/window.innerHeight;s.aspect=e;const t=.1*Math.tan(r.cj9.degToRad(75)/2)*2;s.aspect=e,s.fov=r.cj9.radToDeg(2*Math.atan(t/.2)),s.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)},g=()=>{requestAnimationFrame(g),a.render(i,s)};function w(){if(d){const e=(u+1)%d.length;l.material.uniforms.map.value=d[e],u=e}o.os.to(".canvas-bg-blur",{duration:8,opacity:0,ease:"power2.inOut",repeat:-1})}const f=e=>{d&&e<d.length&&(u=e,l.material.uniforms.map.value=d[u])},h=new r.Z58,y=new r.ubm(75,window.innerWidth/window.innerHeight,1,1e3),x=new r.JeP({antialias:!0}),b=100;let A=0,S=0;function E(){requestAnimationFrame(E),function(){const e=A.geometry.attributes.position.array;let t=0;for(let n=0;n<40;n++)for(let r=0;r<b;r++)e[t+1]=155*Math.sin(.35*(n+S))+155*Math.sin(.2*(r+S)),t+=3;A.geometry.attributes.position.needsUpdate=!0,x.render(h,y),S+=.05}()}!function(){x.setPixelRatio(window.devicePixelRatio),x.setSize(window.innerWidth,window.innerHeight),document.querySelector(".wave-content").appendChild(x.domElement),y.position.x=350,y.position.y=150,y.position.z=250,y.lookAt(h.position),x.setClearColor(3946809,1);const e=new Float32Array(4e4);let t=0;for(let n=0;n<40;n++)for(let r=0;r<b;r++)e[t]=70*n-1400,e[t+1]=0,e[t+2]=70*r-3500,t+=3;const n=new r.LoY;n.setAttribute("position",new r.THS(e,3)),A=new r.ONl(n),h.add(A),x.render(h,y),E()}();let P=!1;document.querySelector(".menu-btn").addEventListener("click",(function(){const e=document.querySelectorAll(".text-stroke-fill-ltr"),t=document.querySelectorAll(".hover-reveal"),n=document.querySelectorAll(".hidden-img");for(let r=0;r<e.length;r++)e[r].addEventListener("mousemove",(e=>{t[r].style.opacity=.6,t[r].style.transform="translate(150%, -70% ) rotate(5deg)",n[r].style.transform="scale(1, 1)",t[r].style.left=e.clientX+"px"})),e[r].addEventListener("mouseleave",(e=>{t[r].style.opacity=0,t[r].style.transform="translate(-50%, -50%) rotate(-5deg)",n[r].style.transform="scale(0.8, 0.8)"}));let r=o.os.timeline({onStart:function(){document.querySelector(".menu-bg").style.visibility="visible"},onComplete:function(){P||(document.querySelector(".menu-bg").style.visibility="hidden")}});P?r.to(".menu-bg",{duration:.4,left:"-100%",ease:"power4.Out"}):r.to(".menu-bg",{duration:.4,left:0,ease:"power4.In"}).fromTo(".menu-bg nav ul li",{x:-40,opacity:0},{duration:1,x:0,opacity:1,stagger:.3,ease:"power2.out"}),P=!P})),n(49),n(499);var L=n(575);o.Ay.registerPlugin(L.u),o.Ay.fromTo(".parallax-right",{x:"15.1797px"},{x:"-3603.18px",scrollTrigger:{trigger:".video-section",start:"top center-=300",end:"bottom top",scrub:.1}}),o.Ay.fromTo(".parallax-left",{x:"-1000.1797px"},{x:"3603.18px",scrollTrigger:{trigger:".video-section",start:"top center-=300",end:"bottom top",scrub:1}}),o.Ay.utils.toArray(".text-effect").forEach((e=>{o.Ay.to(e,{backgroundSize:"100%",ease:"none",scrollTrigger:{trigger:e,start:"center 80%",end:"center 20%",scrub:!0,once:!0}})}));const q=document.querySelector(".link-effect");let M,I=!1;o.Ay.to(q,{scrollTrigger:{trigger:q,start:"top bottom",onEnter:()=>{I||(I=!0,M=setInterval((()=>{if(!I)return;const e=q.innerHTML;q.innerHTML=e.split("").map((e=>"ABCDEFGHIJKLMNOPRSTUVWXYZ"[Math.floor(25*Math.random())])).join("")}),30),setTimeout((()=>{clearInterval(M),I=!1,q.innerHTML="GET IN TOUCH"}),1e3))},once:!0}});const F=n.p+"videos/AdobeStock_483252332 (video-converter.com).mp4",O=n.p+"videos/AdobeStock_585956923 (video-converter.com).mp4",T=n.p+"videos/AdobeStock_732033388 (video-converter.com).mp4",U=document.querySelector(".sticky-image01"),k=document.createElement("video");k.src=F,k.autoplay=!0,k.muted=!0,k.loop=!0,k.classList.add("sticky-image"),U.appendChild(k);const H=document.createElement("video");H.src=O,H.autoplay=!0,H.muted=!0,H.loop=!0,H.classList.add("sticky-image"),U.appendChild(H);const j=document.createElement("video");j.src=T,j.autoplay=!0,j.muted=!0,j.loop=!0,j.classList.add("sticky-image"),U.appendChild(j);const z=new(n(973).A)({lerp:.1,duration:4,easing:function(e){return 1- --e*e*e*e}});z.on("scroll",(e=>{console.log(e)})),requestAnimationFrame((function e(t){z.raf(t),requestAnimationFrame(e)}));let C,W,_,R,D,X=0;async function V(e){return new Promise(((t,n)=>{(new r.Tap).load(e,t,void 0,n)}))}function J(){if(!D)return;const e=window.innerWidth/window.innerHeight,t=1920/1080;C.setSize(window.innerWidth,window.innerHeight),_.aspect=e,_.updateProjectionMatrix(),R&&(R.uniforms.uPlaneAspect.value=e),e>t?(D.scale.x=e/t,D.scale.y=1):(D.scale.x=1,D.scale.y=t/e)}(async function(e){try{C=new r.JeP({alpha:!0}),C.setSize(window.innerWidth,window.innerHeight),document.querySelector(".canvas-bg-dist").appendChild(C.domElement),W=new r.Z58,_=new r.ubm(70,window.innerWidth/window.innerHeight,.1,1e3),_.position.z=2;const t=await Promise.all(e.map((e=>V(e)))),n=await V("./assets/textures/fluid.jpg");R=new r.BKk({uniforms:{currentImage:{value:t[0]},nextImage:{value:t[1]},disp:{value:n},dispFactor:{value:0},uImageAspect:{value:window.innerWidth/window.innerHeight},uPlaneAspect:{value:window.innerWidth/window.innerHeight}},vertexShader:"      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n      }",fragmentShader:"varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform sampler2D disp;\nuniform float dispFactor;\nuniform float uPlaneAspect;\n\nvoid main() {\n    // 画像のアスペクト比を保持するためのユニフォーム uImageAspect は JavaScript から設定されるものとします\n    // uImageAspect の値が 1699 / 597 のアスペクト比を持つ画像のアスペクト比であると仮定して計算します\n\n    vec2 ratio = vec2(\n        min(uPlaneAspect / (1699.0 / 597.0), 1.0),\n        min((1.0 / uPlaneAspect) / ((1.0 / 1699.0) / 597.0), 1.0)\n    );\n\n    vec2 fixedUv = vec2(\n        (vUv.x - 0.5) * ratio.x + 0.5,\n        (vUv.y - 0.5) * ratio.y + 0.5\n    );\n\n    vec2 uv = fixedUv;\n\n    vec4 dispMap = texture2D(disp, uv);\n    vec2 dispValue = dispMap.rg * 2.0 - 1.0;\n    vec2 calcPosition = uv + dispValue * (1.0 - dispFactor) * 0.9;\n\n    vec4 _currentImage = texture2D(currentImage, fixedUv);\n    vec4 _nextImage = texture2D(nextImage, calcPosition);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n}\n",transparent:!0});const i=new r.bdM(4,window.innerHeight/window.innerWidth*4);function a(){const e=(X+1)%t.length;R.uniforms.nextImage.value=t[e],o.os.to(R.uniforms.dispFactor,{value:1,duration:1,ease:"power2.inOut",onComplete:()=>{R.uniforms.currentImage.value=t[e],R.uniforms.nextImage.value=t[(e+1)%t.length],R.uniforms.dispFactor.value=0,X=e,f(X)}})}function s(){requestAnimationFrame(s),C.render(W,_)}D=new r.eaF(i,R),W.add(D),window.addEventListener("resize",J),setInterval(a,8e3),s(),m(e)}catch(c){console.error("An error occurred:",c)}})(["./assets/images/hero-image-01.jpg","./assets/images/hero-image-02.jpg","./assets/images/hero-image-03.jpg"]).catch((e=>console.error(e)))},49:()=>{const e=document.querySelector(".light");function t(t){e.style.top=t.pageY-100+"px",e.style.left=t.pageX-100+"px"}document.addEventListener("mousemove",(function(e){t(e)})),document.addEventListener("touchmove",(function(e){t(e)}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/toplace/",(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunkthree_shader_env01=self.webpackChunkthree_shader_env01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[880,867],(()=>r(48)));o=r.O(o)})();