(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-zuo" viewBox="0 0 1537 1024">'+""+'<path d="M946.038 980.166c52.017 0 94.185-42.158 94.185-94.185 0-29.25-13.342-55.408-34.287-72.671l-300.817-300.818 298.895-298.895c22.032-17.245 36.198-44.051 36.198-74.196 0-52.015-42.158-94.176-94.185-94.176-26.629 0-50.682 11.084-67.822 28.867l-0.103-0.103-376.826 376.826 0.269 0.269c-14.313 16.528-22.986 38.048-22.986 61.616 0 27.999 12.221 53.116 31.629 70.383l365.471 365.471c17.258 19.395 42.382 31.629 70.389 31.629h-0.001zM946.038 980.166z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-you" viewBox="0 0 1537 1024">'+""+'<path d="M584.355 45.214c-52.017 0-94.185 42.158-94.185 94.185 0 29.25 13.342 55.408 34.287 72.671l300.817 300.818-298.895 298.895c-22.032 17.245-36.198 44.051-36.198 74.196 0 52.015 42.158 94.176 94.185 94.176 26.629 0 50.682-11.084 67.822-28.867l0.103 0.103 376.826-376.826-0.269-0.269c14.313-16.528 22.986-38.048 22.986-61.616 0-27.999-12.221-53.116-31.628-70.383l-365.471-365.471c-17.258-19.395-42.382-31.629-70.389-31.629l0.001 0zM584.355 45.214z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)