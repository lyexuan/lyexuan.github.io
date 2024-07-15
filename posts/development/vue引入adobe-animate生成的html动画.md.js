webpackJsonp([131],{571:function(n,a){n.exports={content:["article",["h3","\u4e00\u3001\u6a21\u677f\u6587\u4ef6\u4e2d\u5f15\u5165\u4f9d\u8d56"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>script<span class="token operator">></span>\n  var createjs<span class="token punctuation">,</span> AdobeAn<span class="token punctuation">,</span> exportRoot<span class="token comment" spellcheck="true">;  </span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://code.createjs.com/1.0.0/createjs.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>'},["code",'<script>\n  var createjs, AdobeAn, exportRoot;  \n<\/script>\n<script src="https://code.createjs.com/1.0.0/createjs.min.js"><\/script>']],["h3","\u4e8c\u3001\u6ce8\u518c\u52a8\u753b"],["p","\u6ce8\uff1a\u539f\u59cb\u7d20\u6750\u5168\u90e8\u4f7f\u7528\u82f1\u6587\u547d\u540d\u3002\n\u5f15\u5165\u7d20\u6750\u5305\u91cc\u9762\u7684js\u6587\u4ef6\u3002\njs\u9700\u8981\u6539\u9020\uff1a\n1.\u5c06createjs\u548cexportRoot\u6307\u5411\u5168\u5c40window\uff1b\n2.\u5220\u9664\u7f16\u8bd1\u62a5\u9519\u7684\u4e00\u4e9b\u65e0\u7528\u4ee3\u7801\uff1b"],["p","\u5728\u52a8\u753b\u7ec4\u4ef6\u6e32\u67d3\u4e4b\u524d\u5bfc\u5165\u6ce8\u518c\u811a\u672c"],["pre",{lang:null,highlighted:"import <span class=\"token string\">'./assets/arrowAnimate/qqweew'</span>"},["code","import './assets/arrowAnimate/qqweew'"]],["h3","\u4e09\u3001\u5b9a\u4e49\u521d\u59cb\u5316\u65b9\u6cd5"],["p","\u5c06\u7d20\u6750\u5305\u4e2dhtml\u6587\u4ef6\u4e2d\u7684\u811a\u672c\u6539\u9020"],["pre",{lang:null,highlighted:'function <span class="token function">init</span><span class="token punctuation">(</span>canvasId <span class="token operator">=</span> <span class="token string">\'canvas\'</span><span class="token punctuation">,</span> animContainerId <span class="token operator">=</span> <span class="token string">\'animation_container\'</span><span class="token punctuation">,</span> domOerlayContainerId <span class="token operator">=</span> <span class="token string">\'dom_overlay_container\'</span><span class="token punctuation">,</span> componentId <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> exportRootLibFnName <span class="token operator">=</span> <span class="token string">\'qerwe\'</span><span class="token punctuation">)</span> {\n\tvar canvas<span class="token punctuation">,</span> stage<span class="token punctuation">,</span> exportRoot <span class="token operator">=</span> window<span class="token punctuation">.</span>exportRoot<span class="token punctuation">,</span> anim_container<span class="token punctuation">,</span> dom_overlay_container<span class="token punctuation">,</span> fnStartAnimation<span class="token punctuation">,</span> createjs <span class="token operator">=</span> window<span class="token punctuation">.</span>createjs<span class="token punctuation">,</span> AdobeAn <span class="token operator">=</span> window<span class="token punctuation">.</span>AdobeAn<span class="token comment" spellcheck="true">;</span>\n\tcanvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>canvasId<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tanim_container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>animContainerId<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tdom_overlay_container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>domOerlayContainerId<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> anim_container<span class="token punctuation">,</span> dom_overlay_container<span class="token punctuation">)</span>\n\tvar comp<span class="token operator">=</span>AdobeAn<span class="token punctuation">.</span><span class="token function">getComposition</span><span class="token punctuation">(</span>componentId<span class="token punctuation">)</span><span class="token comment" spellcheck="true">; // 22D097C76A6BC44EB333E85C5675FD05</span>\n\tvar lib<span class="token operator">=</span>comp<span class="token punctuation">.</span><span class="token function">getLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tvar loader <span class="token operator">=</span> new createjs<span class="token punctuation">.</span><span class="token function">LoadQueue</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tloader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"fileload"</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>{<span class="token function">handleFileLoad</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span>comp<span class="token punctuation">)</span>}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tloader<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"complete"</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>evt<span class="token punctuation">)</span>{<span class="token function">handleComplete</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span>comp<span class="token punctuation">,</span> exportRootLibFnName<span class="token punctuation">)</span>}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tlib<span class="token operator">=</span>comp<span class="token punctuation">.</span><span class="token function">getLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tloader<span class="token punctuation">.</span><span class="token function">loadManifest</span><span class="token punctuation">(</span>lib<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>manifest<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n\tfunction <span class="token function">handleFileLoad</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span> comp<span class="token punctuation">)</span> {\n\t\tvar images<span class="token operator">=</span>comp<span class="token punctuation">.</span><span class="token function">getImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;\t</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>evt <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>item<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">"image"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> { images<span class="token punctuation">[</span>evt<span class="token punctuation">.</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> evt<span class="token punctuation">.</span>result<span class="token comment" spellcheck="true">; }\t</span>\n\t}\n\tfunction <span class="token function">handleComplete</span><span class="token punctuation">(</span>evt<span class="token punctuation">,</span>comp<span class="token punctuation">,</span> exportRootLibFnName<span class="token punctuation">)</span> {\n\t\t<span class="token operator">/</span><span class="token operator">/</span>This function is always called<span class="token punctuation">,</span> irrespective of the content<span class="token punctuation">.</span> You can use the variable <span class="token string">"stage"</span> after it is created <span class="token keyword">in</span> token create_stage<span class="token punctuation">.</span>\n\t\tvar lib<span class="token operator">=</span>comp<span class="token punctuation">.</span><span class="token function">getLibrary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\tvar ss<span class="token operator">=</span>comp<span class="token punctuation">.</span><span class="token function">getSpriteSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\tvar queue <span class="token operator">=</span> evt<span class="token punctuation">.</span>target<span class="token comment" spellcheck="true">;</span>\n\t\tvar ssMetadata <span class="token operator">=</span> lib<span class="token punctuation">.</span>ssMetadata<span class="token comment" spellcheck="true">;</span>\n\t\t<span class="token function">for</span><span class="token punctuation">(</span>let i<span class="token operator">=</span><span class="token number">0</span><span class="token comment" spellcheck="true">; i&lt;ssMetadata.length; i++) {</span>\n\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ssMetadata<span class="token punctuation">)</span>\n\t\t\tss<span class="token punctuation">[</span>ssMetadata<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> new createjs<span class="token punctuation">.</span><span class="token function">SpriteSheet</span><span class="token punctuation">(</span> {<span class="token string">"images"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>queue<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span>ssMetadata<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"frames"</span><span class="token punctuation">:</span> ssMetadata<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>frames} <span class="token punctuation">)</span>\n\t\t}\n\t\texportRoot <span class="token operator">=</span> new lib<span class="token punctuation">[</span>exportRootLibFnName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\tstage <span class="token operator">=</span> new lib<span class="token punctuation">.</span><span class="token function">Stage</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;\t</span>\n\t\t<span class="token operator">/</span><span class="token operator">/</span>Registers the <span class="token string">"tick"</span> event listener<span class="token punctuation">.</span>\n\t\tfnStartAnimation <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\t\t\tstage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>exportRoot<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\t\tcreatejs<span class="token punctuation">.</span>Ticker<span class="token punctuation">.</span>framerate <span class="token operator">=</span> lib<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>fps<span class="token comment" spellcheck="true">;</span>\n\t\t\tcreatejs<span class="token punctuation">.</span>Ticker<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"tick"</span><span class="token punctuation">,</span> stage<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\t}\t    \n\t\t<span class="token operator">/</span><span class="token operator">/</span>Code <span class="token keyword">to</span> support hidpi screens <span class="token operator">and</span> responsive scaling<span class="token punctuation">.</span>\n\t\tAdobeAn<span class="token punctuation">.</span><span class="token function">makeResponsive</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string">\'both\'</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span>canvas<span class="token punctuation">,</span>anim_container<span class="token punctuation">,</span>dom_overlay_container<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;\t</span>\n\t\tAdobeAn<span class="token punctuation">.</span><span class="token function">compositionLoaded</span><span class="token punctuation">(</span>lib<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\t<span class="token function">fnStartAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t}\n}\n\nexport { init }'},["code",'function init(canvasId = \'canvas\', animContainerId = \'animation_container\', domOerlayContainerId = \'dom_overlay_container\', componentId = \'\', exportRootLibFnName = \'qerwe\') {\n\tvar canvas, stage, exportRoot = window.exportRoot, anim_container, dom_overlay_container, fnStartAnimation, createjs = window.createjs, AdobeAn = window.AdobeAn;\n\tcanvas = document.getElementById(canvasId);\n\tanim_container = document.getElementById(animContainerId);\n\tdom_overlay_container = document.getElementById(domOerlayContainerId);\n\tconsole.log(canvas, anim_container, dom_overlay_container)\n\tvar comp=AdobeAn.getComposition(componentId); // 22D097C76A6BC44EB333E85C5675FD05\n\tvar lib=comp.getLibrary();\n\tvar loader = new createjs.LoadQueue(false);\n\tloader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});\n\tloader.addEventListener("complete", function(evt){handleComplete(evt,comp, exportRootLibFnName)});\n\tlib=comp.getLibrary();\n\tloader.loadManifest(lib.properties.manifest);\n\n\tfunction handleFileLoad(evt, comp) {\n\t\tvar images=comp.getImages();\t\n\t\tif (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }\t\n\t}\n\tfunction handleComplete(evt,comp, exportRootLibFnName) {\n\t\t//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.\n\t\tvar lib=comp.getLibrary();\n\t\tvar ss=comp.getSpriteSheet();\n\t\tvar queue = evt.target;\n\t\tvar ssMetadata = lib.ssMetadata;\n\t\tfor(let i=0; i<ssMetadata.length; i++) {\n\t\t\tconsole.log(ssMetadata)\n\t\t\tss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )\n\t\t}\n\t\texportRoot = new lib[exportRootLibFnName]();\n\t\tstage = new lib.Stage(canvas);\t\n\t\t//Registers the "tick" event listener.\n\t\tfnStartAnimation = function() {\n\t\t\tstage.addChild(exportRoot);\n\t\t\tcreatejs.Ticker.framerate = lib.properties.fps;\n\t\t\tcreatejs.Ticker.addEventListener("tick", stage);\n\t\t}\t    \n\t\t//Code to support hidpi screens and responsive scaling.\n\t\tAdobeAn.makeResponsive(true,\'both\',false,1,[canvas,anim_container,dom_overlay_container]);\t\n\t\tAdobeAn.compositionLoaded(lib.properties.id);\n\t\tfnStartAnimation();\n\t}\n}\n\nexport { init }']],["h3","\u56db\u3001\u521b\u5efa\u52a8\u753b\u7ec4\u4ef6"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>template<span class="token operator">></span>\n  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"animation_container2"</span> style<span class="token operator">=</span>"background<span class="token operator">-</span>color<span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">; width:67px; height:40px"></span>\n    <span class="token operator">&lt;</span>canvas id<span class="token operator">=</span><span class="token string">"canvas2"</span> width<span class="token operator">=</span><span class="token string">"67"</span> height<span class="token operator">=</span><span class="token string">"40"</span> style<span class="token operator">=</span>"position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">; display: block; background-color:rgba(255, 255, 255, 0.00);">&lt;/canvas></span>\n    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"animation_container2"</span> style<span class="token operator">=</span>"pointer<span class="token operator">-</span>events<span class="token punctuation">:</span>none<span class="token comment" spellcheck="true">; overflow:hidden; width:67px; height:40px; position: absolute; left: 0px; top: 0px; display: block;"></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token operator">/</span><span class="token operator">/</span> import { registAnimate } from <span class="token string">\'./assets/qqweew\'</span>\nimport { init } from <span class="token string">\'./assets/animate\'</span>\nexport <span class="token keyword">default</span> {\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>createjs<span class="token punctuation">,</span> window<span class="token punctuation">.</span>AdobeAn<span class="token punctuation">,</span> window<span class="token punctuation">.</span>exportRoot<span class="token punctuation">)</span>\n    <span class="token operator">/</span><span class="token operator">/</span> <span class="token function">registAnimate</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>createjs <span class="token operator">=</span> window<span class="token punctuation">.</span>createjs||{}<span class="token punctuation">,</span> window<span class="token punctuation">.</span>AdobeAn <span class="token operator">=</span> window<span class="token punctuation">.</span>AdobeAn||{}<span class="token punctuation">)</span>\n    <span class="token function">init</span><span class="token punctuation">(</span><span class="token string">\'canvas2\'</span><span class="token punctuation">,</span> <span class="token string">\'animation_container2\'</span><span class="token punctuation">,</span> <span class="token string">\'animation_container2\'</span><span class="token punctuation">,</span> <span class="token string">\'1759A853B69A5C40A5822615891A9E00\'</span><span class="token punctuation">)</span>\n  }\n}\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>'},["code",'<template>\n  <div id="animation_container2" style="background-color:rgba(0,0,0,1); width:67px; height:40px">\n    <canvas id="canvas2" width="67" height="40" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 0.00);"></canvas>\n    <div id="animation_container2" style="pointer-events:none; overflow:hidden; width:67px; height:40px; position: absolute; left: 0px; top: 0px; display: block;">\n    </div>\n  </div>\n</template>\n\n<script>\n// import { registAnimate } from \'./assets/qqweew\'\nimport { init } from \'./assets/animate\'\nexport default {\n  mounted() {\n    console.log(window.createjs, window.AdobeAn, window.exportRoot)\n    // registAnimate(window.createjs = window.createjs||{}, window.AdobeAn = window.AdobeAn||{})\n    init(\'canvas2\', \'animation_container2\', \'animation_container2\', \'1759A853B69A5C40A5822615891A9E00\')\n  }\n}\n<\/script>']],["h3","\u4e94\u3001\u56fe\u7247\u8d44\u6e90\u6587\u4ef6"],["p","\u5b58\u653e\u81f3public\u6587\u4ef6\u5939\u4e0b"]],meta:{title:"vue\u5f15\u5165adobe-animate\u751f\u6210\u7684html\u52a8\u753b",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"development",abstract:"vue\u5f15\u5165adobe-animate\u751f\u6210\u7684html\u52a8\u753b\u7684\u6b65\u9aa4\u548c\u7ec6\u8282",filename:"posts/development/vue\u5f15\u5165adobe-animate\u751f\u6210\u7684html\u52a8\u753b.md"}}}});