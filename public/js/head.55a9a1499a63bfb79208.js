!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n=window.webpackJsonp;window.webpackJsonp=function(i,s){for(var o,u,l=0,c=[];l<i.length;l++)u=i[l],a[u]&&c.push.apply(c,a[u]),a[u]=0;for(o in s)e[o]=s[o];for(n&&n(i,s);c.length;)c.shift().call(null,t);s[0]&&(r[0]=0,t(0))};var r={},a={4:0};return t.e=function(e,n){if(0===a[e])return n.call(null,t);if(void 0!==a[e])a[e].push(n);else{a[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+".55a9a1499a63bfb79208.js",r.appendChild(i)}},t.m=e,t.c=r,t.p="/js/",t(0)}({0:function(e,t,n){"use strict";n(18),n(7),t.init=n(8),t.login=n(9),n(10),t.Modal=n(11),t.fontTest=n(12),t.resizeOnload=n(19),n(13),n(14),n(15),n(16),n(17),n(20).init(),window.head=e.exports},2:function(e){"use strict";function t(e,t){for(var n=e.target;n;){if(n.matches(t))return n;if(n==e.currentTarget)break;n=n.parentElement}return null}function n(e,n,r,a,i){e.addEventListener(r,function(e){var r=t(e,n);e.delegateTarget=r,r&&a.call(i||this,e)})}n.delegateMixin=function(e){e.delegate=function(e,t,r){n(this.elem,e,t,r,this)}},e.exports=n},7:function(){"use strict";document.addEventListener("click",function(e){for(var t=e.target;t;){if(t.className.match(/_unready\b/))return void e.preventDefault();t=t.parentElement}}),document.addEventListener("submit",function(e){e.target.className.match(/_unready\b/)&&event.preventDefault()})},8:function(e){"use strict";function t(e){r[e]?r[e]():a[e]=!0}function n(e,t){a[e]?t():r[e]=t}var r={},a={};e.exports={whenReady:t,addHandler:n}},9:function(e,t,n){"use strict";function r(){var e=new i,t=new s;e.setContent(t.elem),t.start(),n.e(5,function(){e.remove();var t=n(46).AuthModal;new t},0)}var a=n(8),i=n(11),s=n(31);a.addHandler("login",function(){var e=document.querySelector(".sitetoolbar__login");e.onclick=function(e){e.preventDefault(),r()}}),e.exports=r},10:function(e){"use strict";function t(){var e=document.createElement("form");e.method="POST",e.action="/auth/logout?_csrf="+document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1],document.body.appendChild(e),e.submit()}document.addEventListener("click",function(e){e.target.hasAttribute("data-action-user-logout")&&(e.preventDefault(),t())}),e.exports=t},11:function(e){"use strict";function t(){this.render(),this.onClick=this.onClick.bind(this),this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.elem.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onDocumentKeyDown)}t.prototype.render=function(){document.body.insertAdjacentHTML("beforeEnd",'<div class="modal"><div class="modal-dialog"></div></div>'),this.elem=document.body.lastChild,this.contentElem=this.elem.lastChild},t.prototype.onClick=function(e){e.target.classList.contains("close-button")&&this.remove()},t.prototype.onDocumentKeyDown=function(e){27==e.keyCode&&(e.preventDefault(),this.remove())},t.prototype.showOverlay=function(){this.contentElem.classList.add("modal-overlay")},t.prototype.hideOverlay=function(){this.contentElem.classList.remove("modal-overlay")},t.prototype.setContent=function(e){"string"==typeof e?this.contentElem.innerHTML=e:(this.contentElem.innerHTML="",this.contentElem.appendChild(e));var t=this.contentElem.querySelector("[autofocus]");t&&t.focus()},t.prototype.remove=function(){document.body.removeChild(this.elem),document.removeEventListener("keydown",this.onDocumentKeyDown),this.elem.dispatchEvent(new CustomEvent("modalClose"))},e.exports=t},12:function(e){"use strict";e.exports=function(){function e(){n!=t.offsetWidth?document.body.classList.remove("no-icons"):setTimeout(e,100)}var t=document.createElement("span");document.body.appendChild(t),t.className="font-test",t.style.fontFamily="serif";var n=t.offsetWidth;t.style.fontFamily="",e()}},13:function(){"use strict";function e(){i&&console.log.apply(console,arguments)}function t(){e("compactifySidebar");var t=document.querySelector(".sidebar"),n=t.querySelector(".sidebar__content"),r=t.querySelector(".sidebar__inner"),a=t.classList.contains("sidebar_sticky-footer"),i=t.classList.contains("sidebar_compact");if(i){var s;s=a?n.lastElementChild.getBoundingClientRect().top-n.lastElementChild.previousElementSibling.getBoundingClientRect().bottom:n.getBoundingClientRect().bottom-n.lastElementChild.getBoundingClientRect().bottom,e("decompact?",s),s>150&&t.classList.remove("sidebar_compact")}else e(r.scrollHeight,r.clientHeight),r.scrollHeight>r.clientHeight&&(e("compact!"),t.classList.add("sidebar_compact"))}function n(){var n=document.querySelector(".sitetoolbar");if(!n)return void e("no sitetoolbar");var a=(n.offsetHeight,document.querySelector(".sidebar"));a&&(a.style.top=Math.max(n.getBoundingClientRect().bottom,0)+"px",t()),r()}function r(){var e=document.documentElement.clientWidth<=s,t=document.querySelector('meta[name="viewport"]').content;t=t.replace(/user-scalable=\w+/,"user-scalable="+(e?"yes":"no")),document.querySelector('meta[name="viewport"]').content=t}var a,i=!1,s=840;!function(){function t(){e("onWindowScrollAndResizeThrottled",a),a||(a=window.requestAnimationFrame(function(){n(),a=null}))}window.addEventListener("scroll",t),window.addEventListener("resize",t),document.addEventListener("DOMContentLoaded",t)}()},14:function(){"use strict";function e(){document.querySelector(".page").classList.toggle("page_sidebar_on"),document.querySelector(".page").classList.contains("page_sidebar_on")?delete localStorage.noSidebar:localStorage.noSidebar=1}function t(t){void 0!==t.target.dataset.sidebarToggle&&e()}function n(t){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&t.keyCode=="S".charCodeAt(0)){if(~navigator.userAgent.toLowerCase().indexOf("mac os x")){if(!t.metaKey||!t.altKey)return}else if(!t.altKey)return;e(),t.preventDefault()}}document.addEventListener("click",t),document.addEventListener("keydown",n)},15:function(e,t,n){"use strict";function r(e){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&e[s+"Key"]){var t=null;switch(e.keyCode){case 37:t="prev";break;case 39:t="next";break;default:return}var n=document.querySelector('link[rel="'+t+'"]');n&&(document.location=n.href,e.preventDefault())}}function a(){var e,t=s[0].toUpperCase()+s.slice(1),n=document.querySelector('link[rel="next"]');n&&(e=document.querySelector('a[href="'+n.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">→</span>');var r=document.querySelector('link[rel="prev"]');r&&(e=document.querySelector('a[href="'+r.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">←</span>')}var i=n(32),s=~navigator.userAgent.toLowerCase().indexOf("mac os x")?"ctrl":"alt";i(document,{onRight:function(){var e=document.querySelector('link[rel="prev"]');e&&(document.location=e.href)},onLeft:function(){var e=document.querySelector('link[rel="next"]');e&&(document.location=e.href)}}),document.addEventListener("keydown",r),document.addEventListener("DOMContentLoaded",a)},16:function(){"use strict";var e;document.addEventListener("mouseover",function(t){var n=t.target.closest("[data-add-class-on-hover]");n&&(e=n,n.classList.add("hover"))}),document.addEventListener("touchend",function(){setTimeout(function(){e&&(e.classList.remove("hover"),e=null)},500)}),document.addEventListener("mouseout",function(t){var n=t.target.closest("[data-add-class-on-hover]");n!=e&&(e.classList.remove("hover"),e=null)})},17:function(module,exports,__webpack_require__){"use strict";window.runDemo=function(button){for(var demoElem,parent=button;(parent=parent.parentElement)&&!(demoElem=parent.querySelector("[data-demo]")););demoElem?eval(demoElem.textContent):alert("Ошибка, нет элемента с демо")}},18:function(e,t,n){"use strict";n(38)},19:function(e,t,n){"use strict";var r=n(40),a=n(44),i=[];t.iframe=function(e){function t(){r.async(e,function(t,n){n&&(e.style.height=n+"px")})}t()},t.codeTabs=function(e){function t(){var t=e.closest(".code-tabs"),n=(e.closest("[data-code-tabs-content]"),t.querySelector("[data-code-tabs-switches]")),r=n.firstElementChild;r.offsetWidth>n.offsetWidth?t.classList.add("code-tabs_scroll"):t.classList.remove("code-tabs_scroll")}t(),i.push(t)},window.addEventListener("resize",a(function(){i.forEach(function(e){e()})},200))},20:function(e,t,n){"use strict";function r(e){s=new u(e)}var a=function(e,t){e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),e.__proto__=t},i=function(e,t,n){t&&Object.defineProperties(e,t),n&&Object.defineProperties(e.prototype,n)};t.init=r;var s,o=n(2),u=function(){var e=function(e){void 0===e&&(e={}),this.notifications=[],this.verticalSpace=e.verticalSpace||8};return e.prototype.register=function(e){var t=this;this.notifications.unshift(e),setTimeout(function(){return t.recalculate()},20)},e.prototype.unregister=function(e){var t=this.notifications.indexOf(e);this.notifications.splice(t,1),this.recalculate()},e.prototype.recalculate=function(){var e=this,t=this.verticalSpace;this.notifications.forEach(function(n){n.top=t,t+=n.height+e.verticalSpace})},e}(),l=function(){var e=function(e,t,n){var r='<div class="notification notification_popup notification_'+t+'">\n    <div class="notification__content">'+e+'</div>\n    <button title="Закрыть" class="notification__close"></button></div>';switch(document.body.insertAdjacentHTML("beforeEnd",r),this.elem=document.body.lastElementChild,n){case void 0:this.timeout=this.TIMEOUT_DEFAULT;break;case"slow":this.timeout=this.TIMEOUT_SLOW;break;case"fast":this.timeout=this.TIMEOUT_FAST;break;default:this.timeout=n}s.register(this),this.setupCloseHandler(),this.setupCloseTimeout()};return e.prototype.close=function(){this.elem.parentNode&&(this.elem.remove(),s.unregister(this))},e.prototype.setupCloseHandler=function(){var e=this;this.delegate(".notification__close","click",function(){return e.close()})},e.prototype.setupCloseTimeout=function(){var e=this;this.timeout&&setTimeout(function(){return e.close()},this.timeout)},i(e,null,{TIMEOUT_DEFAULT:{get:function(){return 2500}},TIMEOUT_SLOW:{get:function(){return 5e3}},TIMEOUT_FAST:{get:function(){return 1500}},height:{get:function(){return this.elem.offsetHeight}},top:{set:function(e){this.elem.style.transform="translateY("+e+"px)"}}}),e}();o.delegateMixin(l.prototype);var c=function(e){var t=function(t){e.call(this,t,"info")};return a(t,e),t}(l);t.Info=c;var d=function(e){var t=function(t){e.call(this,t,"warning")};return a(t,e),t}(l);t.Warning=d;var f=function(e){var t=function(t){e.call(this,t,"success")};return a(t,e),t}(l);t.Success=f;var h=function(e){var t=function(t){e.call(this,t,"error")};return a(t,e),i(t,null,{TIMEOUT_DEFAULT:{get:function(){return 5e3}}}),t}(l);t.Error=h;var m=function(e){var t=function(t){e.call(this,t,"error")};return a(t,e),i(t,null,{TIMEOUT_DEFAULT:{get:function(){return null}}}),t}(l);t.Test=m,window.Test=f},31:function(e){"use strict";function t(e){if(e=e||{},this.elem=e.elem,this.size=e.size||"medium",this["class"]=e["class"]?" "+e["class"]:"",this.elemClass=e.elemClass,"medium"!=this.size&&"small"!=this.size)throw Error("Unsupported size: "+this.size);this.elem||(this.elem=document.createElement("div"))}t.prototype.start=function(){this.elemClass&&this.elem.classList.toggle(this.elemClass),this.elem.insertAdjacentHTML("beforeend",'<span class="spinner spinner_active spinner_'+this.size+this["class"]+'"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>')},t.prototype.stop=function(){var e=this.elem.querySelector(".spinner");e&&(e.remove(),this.elemClass&&this.elem.classList.toggle(this.elemClass))},e.exports=t},32:function(e){"use strict";function t(e,t){t=t||{};var n,r,a,i,s,o=t.onRight||function(){},u=t.onLeft||function(){},l=t.tolerance||100,c=t.threshold||150,d=t.allowedTime||500;e.addEventListener("touchstart",function(e){var t=e.changedTouches[0];a=0,n=t.pageX,r=t.pageY,s=Date.now()},!1),e.addEventListener("touchend",function(e){var t=e.changedTouches[0];a=t.pageX-n,i=Date.now()-s,Math.abs(t.pageY-r)>l||i>d||(a>c&&o(e),-c>a&&u(e))},!1)}e.exports=t},38:function(e,t,n){"use strict";function r(e){if(e.length){if(1===e.length)return"string"==typeof e[0]?document.createTextNode(e[0]):e[0];for(var t,n=document.createDocumentFragment(),r=e.length,a=-1;++a<r;)t=e[a],n.appendChild("string"==typeof t?document.createTextNode(t):t);return n}throw Error("DOM Exception 8")}var a={matches:Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector,replace:function(){this.parentNode&&this.parentNode.replaceChild(r(arguments),this)},prepend:function(){this.insertBefore(r(arguments),this.firstChild)},append:function(){this.appendChild(r(arguments))},remove:function(){var e=this.parentNode;return e?e.removeChild(this):void 0},before:function(){this.parentNode&&this.parentNode.insertBefore(r(arguments),this)},after:function(){this.parentNode&&this.parentNode.insertBefore(r(arguments),this.nextSibling)},closest:function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}};for(var i in a)Element.prototype[i]||(Element.prototype[i]=a[i]);n(66)},40:function(e,t,n){"use strict";function r(e,t){function n(e,n){clearTimeout(r),t(e,n)}var r=setTimeout(function(){t(Error("timeout"))},500);try{(e.contentDocument||e.contentWindow.document).body}catch(s){a(e,n)}if(!e.offsetWidth){var o=e.cloneNode(!0);return o.name="",o.style.height="50px",o.style.position="absolute",o.style.display="block",o.style.top="10000px",o.onload=function(){var t=i(this.contentDocument);e.style.display="block",o.remove(),n(null,t)},void document.body.appendChild(o)}e.style.display="block",e.style.height="1px";var u=i(e.contentDocument);e.style.height="",n(null,u)}function a(){throw Error("Not implemented yet")}var i=n(67);r.async=function(e,t){setTimeout(function(){r(e,t)},0)},e.exports=r},44:function(e){"use strict";function t(e,t){function n(){return i?(r=arguments,void(a=this)):(e.apply(this,arguments),i=!0,void setTimeout(function(){i=!1,r&&(n.apply(a,r),r=a=null)},t))}var r,a,i=!1;return n}e.exports=t},66:function(){"use strict";try{new CustomEvent("IE has CustomEvent, but doesn't support constructor")}catch(e){window.CustomEvent=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},CustomEvent.prototype=Object.create(window.Event.prototype)}},67:function(e,t,n){"use strict";function r(e){e=e||document;var t=Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.body.clientHeight,e.documentElement.clientHeight);return e.documentElement.scrollWidth>e.documentElement.clientWidth&&(a||(a=i()),t+=a),t}var a,i=n(148);e.exports=r},148:function(e){"use strict";function t(){var e=document.createElement("div");if(e.style.cssText="visibility:hidden;height:100px",!document.body)throw Error("getScrollbarHeight called to early: no document.body");document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var r=n.offsetWidth;return e.parentNode.removeChild(e),t-r}e.exports=t}});