function flyingPages(){const e=new Set,n=new Set,t=document.createElement("link"),o=t.relList&&t.relList.supports&&t.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype;if((!navigator.connection||!navigator.connection.saveData&&!(navigator.connection.effectiveType||"").includes("2g"))&&o){const t=function(e){return new Promise((function(n,t){const o=document.createElement("link");o.rel="prefetch",o.href=e,o.onload=n,o.onerror=t,document.head.appendChild(o)}))},o=function(e){const n=setTimeout((function(){return r()}),5e3);t(e).catch((function(){return r()})).finally((function(){return clearTimeout(n)}))},i=function(t){const r=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(!n.has(t)&&!e.has(t)){const i=window.location.origin;if(t.substring(0,i.length)===i&&window.location.href!==t){for(let e=0;e<window.FPConfig.ignoreKeywords.length;e++)if(t.includes(window.FPConfig.ignoreKeywords[e]))return;r?(o(t),n.add(t)):e.add(t)}}},c=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){const n=e.target.href;i(n,!window.FPConfig.maxRPS)}}))})),s=function(){return setInterval((function(){Array.from(e).slice(0,window.FPConfig.maxRPS).forEach((function(t){o(t),n.add(t),e.delete(t)}))}),1e3)};let u=null;const a=function(e){const t=e.target.closest("a");t&&t.href&&!n.has(t.href)&&(u=setTimeout((function(){i(t.href,!0)}),window.FPConfig.hoverDelay))},f=function(e){const t=e.target.closest("a");t&&t.href&&!n.has(t.href)&&i(t.href,!0)},d=function(e){const t=e.target.closest("a");t&&t.href&&!n.has(t.href)&&clearTimeout(u)},l=window.requestIdleCallback||function(e){const n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return(0,Math.max)(0,50-(Date.now()-n))}})}),1)};var r=function(){document.querySelectorAll("a").forEach((function(e){return c.unobserve(e)})),e.clear(),document.removeEventListener("mouseover",a,!0),document.removeEventListener("mouseout",d,!0),document.removeEventListener("touchstart",f,!0)};s(),l((function(){return setTimeout((function(){return document.querySelectorAll("a").forEach((function(e){return c.observe(e)}))}),1e3*window.FPConfig.delay)}));const m={capture:!0,passive:!0};document.addEventListener("mouseover",a,m),document.addEventListener("mouseout",d,m),document.addEventListener("touchstart",f,m)}}flyingPages();