webpackJsonp([25],{517:function(n,a){n.exports={content:["article",["h3","HTML"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\u7167\u76f8\u673a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>image<span class="token punctuation">\'</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token attr-name">capture</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>camera<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\u6444\u50cf\u673a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>video<span class="token punctuation">\'</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/*<span class="token punctuation">"</span></span> <span class="token attr-name">capture</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>camcorder<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\u5f55\u97f3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/*<span class="token punctuation">"</span></span> <span class="token attr-name">capture</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>microphone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>\u591a\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'},["code",'<div>\n    <label>\u7167\u76f8\u673a</label>\n    <input type="file" id=\'image\' accept="image/*" capture=\'camera\'>\n    <label>\u6444\u50cf\u673a</label>\n    <input type="file" id=\'video\' accept="video/*" capture=\'camcorder\'>\n    <label>\u5f55\u97f3</label>\n    <input type="file" accept="audio/*" capture="microphone">\n    <label>\u591a\u9009</label>\n    <input type="file" id="file" multiple>\n</div>']],["h3","javascript"],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">/*\n    \n    capture \u6355\u83b7\u5230\u7cfb\u7edf\u9ed8\u8ba4\u7684\u8bbe\u5907\uff0c\u6709\u4e09\u4e2a\u53c2\u6570\u503c\u53ef\u8bbe\u7f6e  camera--\u7167\u76f8\u673a\uff1b camcorder--\u6444\u50cf\u673a\uff1b microphone--\u5f55\u97f3\n\n    \u5728\u5404\u4e2a\u673a\u578b\u90fd\u53ef\u4ee5\u70b9\u51fb file \u8c03\u7528\u76f8\u518c \u548c \u6444\u50cf\u5934\u62cd\u7167 \n    1. \u5728\u8001\u7248\u672c\u7684\u5b89\u5353\u4e2d\uff0c\u5fc5\u987b\u52a0\u4e0acapture\uff0c\u5426\u5219\u53ea\u80fd\u8c03\u7528\u76f8\u518c \n    2. \u5728IOS\u4e2d \u52a0\u4e86capture\uff0c\u5c31\u53ea\u80fd\u8c03\u7528\u6444\u50cf\u5934\u4e0d\u80fd\u8c03\u7528\u76f8\u518c\n\n    \u89e3\u51b3\u529e\u6cd5: \n    \u5224\u65adios\uff0c\u5982\u679c\u662fios\u5c31\u53bb\u6389capture\u5c5e\u6027\n     */</span>\n<span class="token keyword">var</span> file <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getIos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    file<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">"capture"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">getIos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> ua<span class="token operator">=</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ua<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/iPhone\\sOS/i</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"iphone os"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/*\n    \u8bfb\u53d6\u56fe\u7247\u6587\u4ef6\uff0c\u5e76\u83b7\u5f97\u56fe\u7247\u7684url\n     */</span>\n<span class="token keyword">function</span> <span class="token function">getImgUrl</span><span class="token punctuation">(</span>$input<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> file <span class="token operator">=</span> $input<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    reader<span class="token punctuation">.</span>onload <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/*\n    \u53d6\u5f97\u6587\u4ef6\u7684url \n     */</span>\n<span class="token keyword">function</span> <span class="token function">getObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>createObjectURL<span class="token operator">!=</span>undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        url <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>URL<span class="token operator">!=</span>undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        url <span class="token operator">=</span> window<span class="token punctuation">.</span>URL<span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>webkitURL<span class="token operator">!=</span>undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        url <span class="token operator">=</span> window<span class="token punctuation">.</span>webkitURL<span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> \n    <span class="token keyword">return</span> url <span class="token punctuation">;</span> \n<span class="token punctuation">}</span> '},["code",'/*\n    \n    capture \u6355\u83b7\u5230\u7cfb\u7edf\u9ed8\u8ba4\u7684\u8bbe\u5907\uff0c\u6709\u4e09\u4e2a\u53c2\u6570\u503c\u53ef\u8bbe\u7f6e  camera--\u7167\u76f8\u673a\uff1b camcorder--\u6444\u50cf\u673a\uff1b microphone--\u5f55\u97f3\n\n    \u5728\u5404\u4e2a\u673a\u578b\u90fd\u53ef\u4ee5\u70b9\u51fb file \u8c03\u7528\u76f8\u518c \u548c \u6444\u50cf\u5934\u62cd\u7167 \n    1. \u5728\u8001\u7248\u672c\u7684\u5b89\u5353\u4e2d\uff0c\u5fc5\u987b\u52a0\u4e0acapture\uff0c\u5426\u5219\u53ea\u80fd\u8c03\u7528\u76f8\u518c \n    2. \u5728IOS\u4e2d \u52a0\u4e86capture\uff0c\u5c31\u53ea\u80fd\u8c03\u7528\u6444\u50cf\u5934\u4e0d\u80fd\u8c03\u7528\u76f8\u518c\n\n    \u89e3\u51b3\u529e\u6cd5: \n    \u5224\u65adios\uff0c\u5982\u679c\u662fios\u5c31\u53bb\u6389capture\u5c5e\u6027\n     */\nvar file = document.querySelector(\'input\');\nif (getIos()) {\n    file.removeAttribute("capture");\n}\nfunction getIos() {\n    var ua=navigator.userAgent.toLowerCase();\n    if (ua.match(/iPhone\\sOS/i) == "iphone os") {\n        return true;\n    } else {\n        return false;\n    }\n}\n\n/*\n    \u8bfb\u53d6\u56fe\u7247\u6587\u4ef6\uff0c\u5e76\u83b7\u5f97\u56fe\u7247\u7684url\n     */\nfunction getImgUrl($input){\n    var file = $input.files[0],\n        reader = new FileReader();\n\n    reader.readAsDataURL(file);\n    reader.onload = function(e){\n        console.log(e.target.result);\n    }\n}\n/*\n    \u53d6\u5f97\u6587\u4ef6\u7684url \n     */\nfunction getObjectURL(file) { \n    var url = null ; \n    if (window.createObjectURL!=undefined) { \n        url = window.createObjectURL(file) ; \n    } else if (window.URL!=undefined) { \n        url = window.URL.createObjectURL(file) ; \n    } else if (window.webkitURL!=undefined) { \n        url = window.webkitURL.createObjectURL(file) ; \n    } \n    return url ; \n} ']]],meta:{title:"H5\u8c03\u7528\u624b\u673a\u76f8\u518c",publishDate:"2019-3-12",category:"development",abstract:"\u5728\u6d4f\u89c8\u5668\u4e0a\u4f7f\u7528h5\u8c03\u8d77\u624b\u673a\u76f8\u518c\u7684\u65b9\u6cd5",filename:"posts/development/h5-camera.md"}}}});