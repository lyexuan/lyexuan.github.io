webpackJsonp([29],{554:function(n,s){n.exports={content:["article",["h3","\u573a\u666f\u63cf\u8ff0"],["p","\u6709\u4e9b\u6f14\u793a\u7cfb\u7edf\u9700\u8981\u5728\u5404\u79cd\u8bbe\u5907\u4e0a\u5c55\u793a\uff0c\u4e14\u8bbe\u5907\u7684\u7269\u7406\u5c3a\u5bf8\u548c\u5206\u8fa8\u7387\u5b58\u5728\u8f83\u5927\u7684\u5dee\u5f02\uff0c\u6bd4\u5982\u6f14\u793a\u9875\u9762\u9700\u8981\u540c\u65f6\u9002\u914d\u79fb\u52a8\u7aef\u8bbe\u5907\u548c\u5927\u5c4f\u5e55\u7535\u89c6\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u666e\u901a\u7684\u5e94\u7528\u82e5\u8981\u9002\u914d\u5404\u79cd\u5dee\u5f02\u6027\u5927\u7684\u8bbe\u5907\uff0c\u5e38\u89c4\u7684\u505a\u6cd5\u5e94\u5f53\u5bf9\u5404\u4e2a\u8bbe\u5907\u8fdb\u884c\u5e03\u5c40\u5b9a\u5236\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e9b\u9700\u8981\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u90fd\u8981\u6709\u4e00\u81f4\u8868\u73b0\u7684\u5e94\u7528\uff0c\u53ef\u91c7\u7528\u6574\u4f53\u7f29\u653e\u7684\u65b9\u6848\uff0c\u4ee5\u6700\u5c0f\u7684\u5f00\u53d1\u6210\u672c\uff0c\u8fdb\u884c\u9ad8\u6548\u9002\u914d\u3002"],["h3","\u5b9e\u73b0\u65b9\u5f0f"],["h4","1.\u7ed9\u9875\u9762\u7684\u5916\u5c42\u5bb9\u5668\u5b9a\u4e49\u57fa\u51c6\u5c3a\u5bf8"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n    <span class="token selector"><span class="token class">.container</span></span><span class="token punctuation">{</span>\n        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n        <span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">1920</span>px<span class="token punctuation">;</span>\n        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">1080</span>px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    ......\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'},["code",'<style>\n    .container{\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 1920px;\n        height: 1080px;\n    }\n</style>\n<div class="container" id="demo">\n    ......\n</div>']],["h4","2.\u8ba1\u7b97\u7f29\u653e\u6bd4\u7387"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">function</span> getScale <span class="token punctuation">(</span>baseWidth <span class="token operator">=</span> <span class="token number">1920</span><span class="token punctuation">,</span> baseHeight <span class="token operator">=</span> <span class="token number">1080</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> clientWidth<span class="token punctuation">,</span> clientHeight <span class="token punctuation">}</span> <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement\n    <span class="token keyword">const</span> scaleW <span class="token operator">=</span> clientWidth <span class="token operator">/</span> baseWidth\n    <span class="token keyword">const</span> scaleH <span class="token operator">=</span> contentHeight <span class="token operator">/</span> baseHeight\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        scaleW<span class="token punctuation">,</span>\n        scaleH\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","function getScale (baseWidth = 1920, baseHeight = 1080) {\n    const { clientWidth, clientHeight } = document.documentElement\n    const scaleW = clientWidth / baseWidth\n    const scaleH = contentHeight / baseHeight\n    return {\n        scaleW,\n        scaleH\n    }\n}"]],["h4","3.\u5bf9\u5916\u5bb9\u5668\u8bbe\u7f6e\u5408\u9002\u7684\u7f29\u653e\u503c"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">function</span> setScale <span class="token punctuation">(</span>element<span class="token punctuation">,</span> baseWidth<span class="token punctuation">,</span> baseHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> scaleW<span class="token punctuation">,</span> scaleH <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getScale</span><span class="token punctuation">(</span>baseWidth<span class="token punctuation">,</span> baseHeight<span class="token punctuation">)</span>\n    element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">`scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scaleW<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>scaleH<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span>\n    element<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">\'transform-origin\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'0 0 0\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'demo\'</span><span class="token punctuation">)</span>\n<span class="token function">setScale</span><span class="token punctuation">(</span>$container<span class="token punctuation">)</span>'},["code","function setScale (element, baseWidth, baseHeight) {\n    const { scaleW, scaleH } = getScale(baseWidth, baseHeight)\n    element.style.transform = `scale(${scaleW},${scaleH})`\n    element.style['transform-origin'] = '0 0 0'\n}\n\nconst $container = document.getElementById('demo')\nsetScale($container)"]],["h4","4.\u5176\u4ed6"],["ul",["li",["p","\u6709\u65f6\u5019\u9700\u8981\u76d1\u542c\u6d4f\u89c8\u5668\u7684resize\u4e8b\u4ef6\u53bb\u591a\u6b21\u8bbe\u7f6e\u5916\u5bb9\u5668\u7684\u7f29\u653e\u5c3a\u5bf8\uff1b"]],["li",["p","\u57fa\u51c6\u5c3a\u5bf8\u7684\u8bbe\u7f6e\u9700\u8981\u6839\u636e\u9879\u76ee\u9700\u6c42\u53bb\u7075\u6d3b\u8bbe\u7f6e\uff1b"]]]],meta:{title:"\u6f14\u793a\u7cfb\u7edf\u591a\u5206\u8fa8\u7387\u9002\u914d",publishDate:"2020-06-03T00:00:00.000Z",createDate:"2020-06-03T00:00:00.000Z",category:"development",abstract:"\u6570\u636e\u53ef\u89c6\u5316\u5c55\u793a-\u6f14\u793a\u7cfb\u7edf\u591a\u5206\u8fa8\u7387\u9002\u914d",filename:"posts/development/\u6f14\u793a\u7cfb\u7edf\u591a\u5206\u8fa8\u7387\u9002\u914d.md"}}}});