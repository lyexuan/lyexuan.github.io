webpackJsonp([13],{532:function(n,s){n.exports={content:["article",["p","js\u652f\u6301\u5c06\u9875\u9762\u4e2d\u7684\u67d0\u4e00\u90e8\u5206\u5185\u5bb9\u8fdb\u884c\u5168\u5c4f\u663e\u793a\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4ee3\u7801\u4e0d\u80fd\u81ea\u53d1\u8c03\u7528\u5168\u5c4f\u7684\u65b9\u6cd5\uff0c\u9700\u8981\u4f7f\u7528\u8005\u89e6\u53d1\u67d0\u4e2a\u64cd\u4f5c\u4e8b\u4ef6\u624d\u884c\uff0c\u6bd4\u5982\u70b9\u51fb\u4e8b\u4ef6\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"],["pre",{lang:null,highlighted:'var body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\nbody<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n    <span class="token function">fullScreen</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\nfunction <span class="token function">fullScreen</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> { \n    <span class="token function">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>requestFullScreen<span class="token punctuation">)</span> { \n        element<span class="token punctuation">.</span><span class="token function">requestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">; </span>\n    } <span class="token keyword">else</span> <span class="token function">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>webkitRequestFullScreen <span class="token punctuation">)</span> { \n        element<span class="token punctuation">.</span><span class="token function">webkitRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">; </span>\n    } <span class="token keyword">else</span> <span class="token function">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>mozRequestFullScreen<span class="token punctuation">)</span> { \n        element<span class="token punctuation">.</span><span class="token function">mozRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">; </span>\n    } \n}'},["code","var body = document.getElementsByTagName('body')[0];\n\nbody.onclick = function(){\n    fullScreen(body);\n}\n\nfunction fullScreen(element) { \n    if(element.requestFullScreen) { \n        element.requestFullScreen(); \n    } else if(element.webkitRequestFullScreen ) { \n        element.webkitRequestFullScreen(); \n    } else if(element.mozRequestFullScreen) { \n        element.mozRequestFullScreen(); \n    } \n}"]]],meta:{title:"\u6d4f\u89c8\u5668\u5168\u5c4f\u663e\u793a\u7684js\u811a\u672c",publishDate:"2019-8-15",category:"development",abstract:"\u6d4f\u89c8\u5668\u5168\u5c4f\u663e\u793a\u7684js\u811a\u672c",filename:"posts/development/\u6d4f\u89c8\u5668\u5168\u5c4f\u663e\u793a\u7684js\u811a\u672c.md"}}}});