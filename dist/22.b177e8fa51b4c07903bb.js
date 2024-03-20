/*! For license information please see 22.b177e8fa51b4c07903bb.js.LICENSE.txt */
"use strict";(self.webpackChunkthree_shader_env01=self.webpackChunkthree_shader_env01||[]).push([[22],{22:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{HO:()=>A,Kx:()=>w,Tu:()=>Y,Ur:()=>G,ZC:()=>H,et:()=>C,nu:()=>B,q6:()=>S,tc:()=>b});var o,i,a,s,c,u,l,f,d,g,h,v,p,y=function(){return o||"undefined"!=typeof window&&(o=window.gsap)&&o.registerPlugin&&o},m=1,x=[],b=[],w=[],_=Date.now,M=function(e,t){return t},Y=function(e,t){return~w.indexOf(e)&&w[w.indexOf(e)+1][t]},X=function(e){return!!~g.indexOf(e)},k=function(e,t,n,r,o){return e.addEventListener(t,n,{passive:!1!==r,capture:!!o})},D=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},E="scrollLeft",O="scrollTop",P=function(){return h&&h.isPressed||b.cache++},T=function(e,t){var n=function n(r){if(r||0===r){m&&(a.history.scrollRestoration="manual");var o=h&&h.isPressed;r=n.v=Math.round(r)||(h&&h.iOS?1:0),e(r),n.cacheID=b.cache,o&&M("ss",r)}else(t||b.cache!==n.cacheID||M("ref"))&&(n.cacheID=b.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},C={s:E,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:T((function(e){return arguments.length?a.scrollTo(e,S.sc()):a.pageXOffset||s[E]||c[E]||u[E]||0}))},S={s:O,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:C,sc:T((function(e){return arguments.length?a.scrollTo(C.sc(),e):a.pageYOffset||s[O]||c[O]||u[O]||0}))},A=function(e,t){return(t&&t._ctx&&t._ctx.selector||o.utils.toArray)(e)[0]||("string"==typeof e&&!1!==o.config().nullTargetWarn?console.warn("Element not found:",e):null)},H=function(e,t){var n=t.s,r=t.sc;X(e)&&(e=s.scrollingElement||c);var i=b.indexOf(e),a=r===S.sc?1:2;!~i&&(i=b.push(e)-1),b[i+a]||k(e,"scroll",P);var u=b[i+a],l=u||(b[i+a]=T(Y(e,n),!0)||(X(e)?r:T((function(t){return arguments.length?e[n]=t:e[n]}))));return l.target=e,u||(l.smooth="smooth"===o.getProperty(e,"scrollBehavior")),l},G=function(e,t,n){var r=e,o=e,i=_(),a=i,s=t||50,c=Math.max(500,3*s),u=function(e,t){var c=_();t||c-i>s?(o=r,r=e,a=i,i=c):n?r+=e:r=o+(e-o)/(c-a)*(i-a)};return{update:u,reset:function(){o=r=n?0:r,a=i=0},getVelocity:function(e){var t=a,s=o,l=_();return(e||0===e)&&e!==r&&u(e),i===a||l-a>c?0:(r+(n?s:-s))/((n?l:i)-t)*1e3}}},L=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},R=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},I=function(){var e,t,n,r;(d=o.core.globals().ScrollTrigger)&&d.core&&(e=d.core,t=e.bridge||{},n=e._scrollers,r=e._proxies,n.push.apply(n,b),r.push.apply(r,w),b=n,w=r,M=function(e,n){return t[e](n)})},q=function(e){return o=e||y(),!i&&o&&"undefined"!=typeof document&&document.body&&(a=window,s=document,c=s.documentElement,u=s.body,g=[a,s,c,u],o.utils.clamp,p=o.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",l=B.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,v=B.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout((function(){return m=0}),500),I(),i=1),i};C.op=S,b.cache=0;var B=function(){function e(e){this.init(e)}var t,n;return e.prototype.init=function(e){i||q(o)||console.warn("Please gsap.registerPlugin(Observer)"),d||I();var t=e.tolerance,n=e.dragMinimum,r=e.type,g=e.target,y=e.lineHeight,m=e.debounce,b=e.preventDefault,w=e.onStop,M=e.onStopDelay,Y=e.ignore,E=e.wheelSpeed,O=e.event,T=e.onDragStart,B=e.onDragEnd,F=e.onDrag,N=e.onPress,V=e.onRelease,W=e.onRight,U=e.onLeft,j=e.onUp,z=e.onDown,K=e.onChangeX,Z=e.onChangeY,J=e.onChange,Q=e.onToggleX,$=e.onToggleY,ee=e.onHover,te=e.onHoverEnd,ne=e.onMove,re=e.ignoreCheck,oe=e.isNormalizer,ie=e.onGestureStart,ae=e.onGestureEnd,se=e.onWheel,ce=e.onEnable,ue=e.onDisable,le=e.onClick,fe=e.scrollSpeed,de=e.capture,ge=e.allowClicks,he=e.lockAxis,ve=e.onLockAxis;this.target=g=A(g)||c,this.vars=e,Y&&(Y=o.utils.toArray(Y)),t=t||1e-9,n=n||0,E=E||1,fe=fe||1,r=r||"wheel,touch,pointer",m=!1!==m,y||(y=parseFloat(a.getComputedStyle(u).lineHeight)||22);var pe,ye,me,xe,be,we,_e,Me=this,Ye=0,Xe=0,ke=e.passive||!b,De=H(g,C),Ee=H(g,S),Oe=De(),Pe=Ee(),Te=~r.indexOf("touch")&&!~r.indexOf("pointer")&&"pointerdown"===v[0],Ce=X(g),Se=g.ownerDocument||s,Ae=[0,0,0],He=[0,0,0],Ge=0,Le=function(){return Ge=_()},Re=function(e,t){return(Me.event=e)&&Y&&~Y.indexOf(e.target)||t&&Te&&"touch"!==e.pointerType||re&&re(e,t)},Ie=function(){var e=Me.deltaX=R(Ae),n=Me.deltaY=R(He),r=Math.abs(e)>=t,o=Math.abs(n)>=t;J&&(r||o)&&J(Me,e,n,Ae,He),r&&(W&&Me.deltaX>0&&W(Me),U&&Me.deltaX<0&&U(Me),K&&K(Me),Q&&Me.deltaX<0!=Ye<0&&Q(Me),Ye=Me.deltaX,Ae[0]=Ae[1]=Ae[2]=0),o&&(z&&Me.deltaY>0&&z(Me),j&&Me.deltaY<0&&j(Me),Z&&Z(Me),$&&Me.deltaY<0!=Xe<0&&$(Me),Xe=Me.deltaY,He[0]=He[1]=He[2]=0),(xe||me)&&(ne&&ne(Me),me&&(F(Me),me=!1),xe=!1),we&&!(we=!1)&&ve&&ve(Me),be&&(se(Me),be=!1),pe=0},qe=function(e,t,n){Ae[n]+=e,He[n]+=t,Me._vx.update(e),Me._vy.update(t),m?pe||(pe=requestAnimationFrame(Ie)):Ie()},Be=function(e,t){he&&!_e&&(Me.axis=_e=Math.abs(e)>Math.abs(t)?"x":"y",we=!0),"y"!==_e&&(Ae[2]+=e,Me._vx.update(e,!0)),"x"!==_e&&(He[2]+=t,Me._vy.update(t,!0)),m?pe||(pe=requestAnimationFrame(Ie)):Ie()},Fe=function(e){if(!Re(e,1)){var t=(e=L(e,b)).clientX,r=e.clientY,o=t-Me.x,i=r-Me.y,a=Me.isDragging;Me.x=t,Me.y=r,(a||Math.abs(Me.startX-t)>=n||Math.abs(Me.startY-r)>=n)&&(F&&(me=!0),a||(Me.isDragging=!0),Be(o,i),a||T&&T(Me))}},Ne=Me.onPress=function(e){Re(e,1)||e&&e.button||(Me.axis=_e=null,ye.pause(),Me.isPressed=!0,e=L(e),Ye=Xe=0,Me.startX=Me.x=e.clientX,Me.startY=Me.y=e.clientY,Me._vx.reset(),Me._vy.reset(),k(oe?g:Se,v[1],Fe,ke,!0),Me.deltaX=Me.deltaY=0,N&&N(Me))},Ve=Me.onRelease=function(e){if(!Re(e,1)){D(oe?g:Se,v[1],Fe,!0);var t=!isNaN(Me.y-Me.startY),n=Me.isDragging,r=n&&(Math.abs(Me.x-Me.startX)>3||Math.abs(Me.y-Me.startY)>3),i=L(e);!r&&t&&(Me._vx.reset(),Me._vy.reset(),b&&ge&&o.delayedCall(.08,(function(){if(_()-Ge>300&&!e.defaultPrevented)if(e.target.click)e.target.click();else if(Se.createEvent){var t=Se.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,a,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}))),Me.isDragging=Me.isGesturing=Me.isPressed=!1,w&&n&&!oe&&ye.restart(!0),B&&n&&B(Me),V&&V(Me,r)}},We=function(e){return e.touches&&e.touches.length>1&&(Me.isGesturing=!0)&&ie(e,Me.isDragging)},Ue=function(){return(Me.isGesturing=!1)||ae(Me)},je=function(e){if(!Re(e)){var t=De(),n=Ee();qe((t-Oe)*fe,(n-Pe)*fe,1),Oe=t,Pe=n,w&&ye.restart(!0)}},ze=function(e){if(!Re(e)){e=L(e,b),se&&(be=!0);var t=(1===e.deltaMode?y:2===e.deltaMode?a.innerHeight:1)*E;qe(e.deltaX*t,e.deltaY*t,0),w&&!oe&&ye.restart(!0)}},Ke=function(e){if(!Re(e)){var t=e.clientX,n=e.clientY,r=t-Me.x,o=n-Me.y;Me.x=t,Me.y=n,xe=!0,w&&ye.restart(!0),(r||o)&&Be(r,o)}},Ze=function(e){Me.event=e,ee(Me)},Je=function(e){Me.event=e,te(Me)},Qe=function(e){return Re(e)||L(e,b)&&le(Me)};ye=Me._dc=o.delayedCall(M||.25,(function(){Me._vx.reset(),Me._vy.reset(),ye.pause(),w&&w(Me)})).pause(),Me.deltaX=Me.deltaY=0,Me._vx=G(0,50,!0),Me._vy=G(0,50,!0),Me.scrollX=De,Me.scrollY=Ee,Me.isDragging=Me.isGesturing=Me.isPressed=!1,p(this),Me.enable=function(e){return Me.isEnabled||(k(Ce?Se:g,"scroll",P),r.indexOf("scroll")>=0&&k(Ce?Se:g,"scroll",je,ke,de),r.indexOf("wheel")>=0&&k(g,"wheel",ze,ke,de),(r.indexOf("touch")>=0&&l||r.indexOf("pointer")>=0)&&(k(g,v[0],Ne,ke,de),k(Se,v[2],Ve),k(Se,v[3],Ve),ge&&k(g,"click",Le,!0,!0),le&&k(g,"click",Qe),ie&&k(Se,"gesturestart",We),ae&&k(Se,"gestureend",Ue),ee&&k(g,f+"enter",Ze),te&&k(g,f+"leave",Je),ne&&k(g,f+"move",Ke)),Me.isEnabled=!0,e&&e.type&&Ne(e),ce&&ce(Me)),Me},Me.disable=function(){Me.isEnabled&&(x.filter((function(e){return e!==Me&&X(e.target)})).length||D(Ce?Se:g,"scroll",P),Me.isPressed&&(Me._vx.reset(),Me._vy.reset(),D(oe?g:Se,v[1],Fe,!0)),D(Ce?Se:g,"scroll",je,de),D(g,"wheel",ze,de),D(g,v[0],Ne,de),D(Se,v[2],Ve),D(Se,v[3],Ve),D(g,"click",Le,!0),D(g,"click",Qe),D(Se,"gesturestart",We),D(Se,"gestureend",Ue),D(g,f+"enter",Ze),D(g,f+"leave",Je),D(g,f+"move",Ke),Me.isEnabled=Me.isPressed=Me.isDragging=!1,ue&&ue(Me))},Me.kill=Me.revert=function(){Me.disable();var e=x.indexOf(Me);e>=0&&x.splice(e,1),h===Me&&(h=0)},x.push(Me),oe&&X(g)&&(h=Me),Me.enable(O)},t=e,(n=[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}])&&r(t.prototype,n),e}();B.version="3.12.5",B.create=function(e){return new B(e)},B.register=q,B.getAll=function(){return x.slice()},B.getById=function(e){return x.filter((function(t){return t.vars.id===e}))[0]},y()&&o.registerPlugin(B)}}]);