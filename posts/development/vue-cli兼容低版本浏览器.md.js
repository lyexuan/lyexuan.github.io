webpackJsonp([98],{569:function(n,s){n.exports={content:["article",["h3","\u80cc\u666f"],["p","\u5728\u5b89\u5353\u7248\u672c\u4f4e\u7684\u624b\u673a\u4e0a\u8fd0\u884cuni-app\uff0c\u5176\u4e2d\u7684h5\u9875\u9762\u4f1a\u56e0\u811a\u672c\u62a5\u9519\u800c\u505c\u6b62\u6e32\u67d3\uff0c\u4ee5\u81f3\u4e8e\u767d\u5c4f\u663e\u793a\u3002h5\u9875\u9762\u662f\u7ecf\u7531vue\u6280\u672f\u6808\u5b9e\u73b0\u3002"],["h3","\u89e3\u51b3\u65b9\u5411"],["p","\u811a\u672c\u62a5\u9519\uff0c\u5373\u6d4f\u89c8\u5668\u5bf9js\u7279\u6027\u4e0d\u652f\u6301\u3002ES6\u5373ES2015\uff0c\u53d1\u5e03\u4e8e2015\u5e74\uff0c\u56e0\u800c\u57282015\u5e74\u53ca\u4ee5\u524d\u53d1\u5e03\u7684\u5b89\u5353\u7248\u672c\u5bf9ES6\u4e0d\u652f\u6301\u6216\u652f\u6301\u7279\u6027\u6781\u5c11\uff0c\u9488\u5bf9\u5e02\u9762\u4e0a\u8fd8\u5728\u5927\u91cf\u4f7f\u7528\u7684\u624b\u673a\uff0c\u4e3b\u8981\u8868\u73b0\u4e3a\u5b89\u53534.4\u548c\u5b89\u53535.1\u8fd9\u4e24\u4e2a\u7248\u672c\u3002\u6d4f\u89c8\u5668\u5bf9js\u7279\u6027\u4e0d\u652f\u6301\u8868\u73b0\u5728\uff1a"],["ul",["li",["p","\u8bed\u6cd5\u4e0d\u652f\u6301"]],["li",["p","\u65b9\u6cd5\u4e0d\u652f\u6301"]]],["p","\u8bed\u6cd5\u4e0d\u652f\u6301\uff0c\u53ef\u4ee5\u901a\u8fc7babel\u8f6c\u8bd1\u5de5\u5177\uff0c\u5bf9es6\u8bed\u6cd5\u4e0b\u7684js\u4ee3\u7801\u8fdb\u884c\u9884\u5904\u7406\uff1b\u65b9\u6cd5\u4e0d\u652f\u6301\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165polyfill\u5bf9\u5168\u5c40js\u5bf9\u8c61\u8fdb\u884c\u65b9\u6cd5\u6269\u5145\u3002"],["h3","\u67e5\u8be2\u5b98\u65b9\u6587\u6863"],["p","vue-cli\u6587\u6863\u7ed9\u51fa\u6d4f\u89c8\u5668\u517c\u5bb9\u914d\u7f6e\u8bf4\u660e\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"],["ul",["li",["p","browserslist\u914d\u7f6e"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span>browserslistrc\n<span class="token operator">></span> <span class="token number">1</span>%\nlast <span class="token number">2</span> versions\n<span class="token operator">not</span> dead\nAndroid <span class="token operator">>=</span> <span class="token number">4.4</span>'},["code","// .browserslistrc\n> 1%\nlast 2 versions\nnot dead\nAndroid >= 4.4"]]],["li",["p","polyfill\u914d\u7f6e"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  presets<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>\n      {\n        <span class="token string">"useBuiltIns"</span><span class="token punctuation">:</span> <span class="token string">"entry"</span>\n      }\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n}\n<span class="token operator">/</span><span class="token operator">/</span> \u7a0b\u5e8f\u5165\u53e3main<span class="token punctuation">.</span>js\nimport <span class="token string">\'core-js/stable\'</span>\nimport <span class="token string">\'regenerator-runtime/runtime\'</span>'},["code",'// babel.config.js\nmodule.exports = {\n  presets: [\n    [\n      "@babel/preset-env",\n      {\n        "useBuiltIns": "entry"\n      }\n    ]\n  ]\n}\n// \u7a0b\u5e8f\u5165\u53e3main.js\nimport \'core-js/stable\'\nimport \'regenerator-runtime/runtime\'']]]],["p","\u7136\u540e\uff0c\u7ecf\u8fc7\u6b64\u756a\u8bbe\u7f6e\uff0c\u4f9d\u65e7\u6ca1\u6709\u89e3\u51b3\u95ee\u9898\uff0c\u4ee3\u7801\u8fd8\u662f\u62a5\u9519\u3002"],["h3","\u5206\u6790\u62a5\u9519\u4fe1\u606f"],["p","\u4ece\u62a5\u9519\u4fe1\u606f\u4e0a\u6765\u770b\uff0c\u662f\u8bed\u6cd5\u9519\u8bef\uff1b\u7531\u4e8epolyfill\u662f\u5168\u5c40\u6ce8\u5165\u7684\uff0c\u7f16\u8bd1\u65f6\u5b9a\u4e49\u597dbrowserslist\uff0c\u5c31\u80fd\u8865\u9f50\u7f3a\u5931\u7684\u65b9\u6cd5\uff1b\u56e0\u6b64\u5c06\u9519\u8bef\u8fdb\u4e00\u6b65\u9501\u5b9a\u5728\u4e86\u8bed\u6cd5\u9519\u8bef\u3002"],["h3","\u5b9a\u4f4d\u9519\u8bef\u4ee3\u7801"],["p","\u4ece\u9519\u8bef\u63d0\u793a\u5b9a\u4f4d\u5230\u9519\u8bef\u4ee3\u7801\u7684\u5177\u4f53\u4f4d\u7f6e\uff0c\u53d1\u73b0\u6253\u5305\u5b8c\u540e\uff0c\u4ee3\u7801\u4e2d\u51fa\u73b0\u4e86\u7bad\u5934\u51fd\u6570\uff08=>\uff09\uff0c\u800c\u4f4e\u7248\u672c\u7684\u5b89\u5353\u6d4f\u89c8\u5668\u662f\u4e0d\u652f\u6301\u7684\uff0c\u9519\u8bef\u53d1\u751f\u7684\u4ee3\u7801\u4f4d\u7f6e\u548cmoment\u7ec4\u4ef6\u7684\u8bed\u8a00\u5305\u6709\u5173\uff0c\u56e0\u800c\u505a\u4e86\u4e00\u4e2a\u6d4b\u8bd5\uff0c\u6253\u5305\u65f6\u5c06moment\u8bed\u8a00\u5305\u6392\u9664\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js\nvar webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n\tchainWebpack<span class="token punctuation">:</span> config <span class="token operator">=</span><span class="token operator">></span> {\n    \tconfig<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">\'ignore\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>new webpack<span class="token punctuation">.</span><span class="token function">IgnorePlugin</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token operator">^</span>\\<span class="token punctuation">.</span>\\<span class="token operator">/</span>locale$<span class="token operator">/</span><span class="token punctuation">,</span> <span class="token operator">/</span>moment$<span class="token operator">/</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  \t}\n}'},["code","// vue.config.js\nvar webpack = require('webpack')\nmodule.exports = {\n\tchainWebpack: config => {\n    \tconfig.plugin('ignore')\n          .use(new webpack.IgnorePlugin(/^\\.\\/locale$/, /moment$/))\n  \t}\n}"]],["p","\u79fb\u9664\u8bed\u8a00\u5305\u540e\uff0c\u9519\u8bef\u63d0\u793a\u7684\u4ee3\u7801\u4f4d\u7f6e\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u4ecd\u7136\u662f\u62a5\u7bad\u5934\u51fd\u6570\u7684\u9519\u8bef\u3002\u4e0d\u65ad\u79fb\u9664\u9519\u8bef\u4ee3\u7801\u4e0d\u662f\u89e3\u51b3\u95ee\u9898\u7684\u6839\u672c\u529e\u6cd5\uff0c\u51b5\u4e14\u6709\u4e9b\u4ee3\u7801\u662f\u8fd0\u884c\u9700\u8981\u7684\uff0c\u4e0d\u80fd\u79fb\u9664\u3002\u90a3\u4e48\u95ee\u9898\u5c31\u51fa\u5728webpack\u5728\u6253\u5305\u65f6\uff0c\u90e8\u5206\u4ee3\u7801\u6ca1\u6709\u7ecf\u8fc7babel\u9884\u5904\u7406\uff0c\u901a\u5e38\u6e90\u4ee3\u7801src\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u90fd\u662f\u4f1a\u88ab\u5904\u7406\u7684\uff0c\u90a3\u4e48\u4e0d\u4f1a\u88ab\u5904\u7406\u7684\u6587\u4ef6\u53ea\u80fd\u662fnode_modules\u4e0b\u7684\u4f9d\u8d56\u5305\u3002"],["p",'\u8fdb\u4e00\u6b65\u67e5vue-cli\u6587\u6863\uff0c\u53d1\u73b0\u4e86\u4e00\u4e2a\u53c2\u6570"transpileDependencies"\uff0c\u6b64\u53c2\u6570\u53ef\u4ee5\u5b9a\u4e49\u989d\u5916\u7684\uff0c\u9700\u8981\u88abbabel\u8f6c\u8bd1\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\u3002'],["h3","transpileDependencies\u914d\u7f6e"],["p","\u4e3a\u4e86\u66f4\u5feb\u770b\u5230\u6548\u679c\uff0c\u5c06package.json\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u4f9d\u8d56\u5305\u90fd\u52a0\u5165\u5230\u4e86transpileDependencies\u4e2d\uff0c\u4f46\u662f\u7136\u540e\u62a5\u9519\uff0c\u5bf9\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u8fdb\u884c\u641c\u7d22\uff0c\u53d1\u73b0\u8fd8\u6709\u7bad\u5934\u51fd\u6570\u5b58\u5728\uff0c\u4f46\u662f\u4e2a\u6570\u6bd4\u8d77\u6ca1\u6709\u914d\u7f6etranspileDependencies\u4ee5\u524d\u5c11\u4e86\u5f88\u591a\uff0c\u8bf4\u660e\u914d\u7f6e\u8d77\u5230\u4e86\u4f5c\u7528\u3002\u90a3\u4e48\u6b8b\u7559\u7684\u7bad\u5934\u51fd\u6570\uff0c\u5e94\u8be5\u662f\u6b8b\u7559\u5728\u4f9d\u8d56\u5305\u4e8c\u6b21\u4f9d\u8d56\u4e2d\uff0c\u751a\u81f3\u662f\u66f4\u6df1\u5c42\u6b21\u7684\u4f9d\u8d56\u3002"],["h3","\u5c42\u5c42\u8ffd\u6eaf\u4f9d\u8d56"],["p","\u901a\u8fc7\u5bf9\u4f9d\u8d56\u5305\u4e00\u5c42\u4e00\u5c42\u56de\u5f52\u5206\u6790\uff0c\u6700\u540e\u9501\u5b9a\u5230\u4e86'query-string'\u4ee5\u53ca\u5176\u4f9d\u8d56\u7684\u4e09\u4e2a\u5305'strict-uri-encode', 'decode-uri-component', 'split-on-first',\u6700\u7ec8\uff0c\u5c06\u8fd9\u56db\u4e2a\u5305\u52a0\u5165\u5230vue.config.js\u7684transpileDependencies\u914d\u7f6e\u9879\u4e2d\uff0c\u67e5\u770b\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u91cc\u9762\u5df2\u7ecf\u627e\u4e0d\u5230\u7bad\u5934\u51fd\u6570\u3002\u5c06h5\u5e94\u7528\u6253\u5305\uff0c\u6700\u540e\u5728\u5b89\u53534.4\u7684\u673a\u5b50\u4e2d\u9875\u9762\u6e32\u67d3\u51fa\u6765\u4e86\u3002"],["h3","\u7cbe\u51c6\u5b9a\u4f4d"],["p","\u5148\u524d\u4e3a\u4e86\u65b9\u4fbf\u5c06\u6240\u6709\u4f9d\u8d56\u5305\u4e00\u80a1\u8111\u52a0\u5165transpileDependencies\uff0c\u73b0\u5728\u628a\u4ee5\u4e0a\u56db\u4e2a\u4f9d\u8d56\u5305\u4fdd\u7559\uff0c\u79fb\u9664\u5176\u4ed6\u4f9d\u8d56\uff0c\u4ee5\u4fbf\u5b9a\u4f4d\u5230\u771f\u6b63\u53d1\u751f\u95ee\u9898\u7684\u6240\u6709\u4f9d\u8d56\u3002\u79fb\u9664\u540ejs\u53c8\u62a5\u9519\u4e86\uff0c\u6b64\u6b21\u7684\u9519\u8bef\u4ecd\u7136\u662f\u8bed\u6cd5\u9519\u8bef\uff0c\u662f\u7528const\u5b9a\u4e49\u53d8\u91cf\u7684\u9519\u8bef\u3002\u6328\u4e2a\u5bf9\u4f9d\u8d56\u5305\u8fdb\u884c\u68c0\u67e5\uff0c\u6700\u540e\u5b9a\u4f4d\u5230\u95ee\u9898\u51fa\u5728\u4f9d\u8d56'umi-request'\u3002\u6392\u9664\u8c03const\u9519\u8bef\u540e\uff0c\u9519\u8bef\u63d0\u793a\u7ee7\u7eed\u6539\u53d8\uff0c\u53d8\u6210\uff1aUncaught SyntaxError: Use of future reserved word in strict mode\u3002\u7ecf\u8fc7\u4e00\u4e9b\u5217\u7684\u6392\u67e5\uff0c\u6700\u540e\u9501\u5b9a\u7684\u76ee\u6807\u4f9d\u65e7\u662f\u4e00\u4e2a\u4e8c\u6b21\u4f9d\u8d56\uff0c\u4e3a'vue-echarts'\u4f9d\u8d56\u7684'resize-detector'\uff0c\u7ee7\u7eed\u5c06\u5176\u52a0\u5165\u5230transpileDependencies\u4e2d\uff0c\u7ec8\u4e8e\uff0c\u4e0d\u518d\u51fa\u73b0\u62a5\u9519\u4fe1\u606f\uff0c\u5728\u5b89\u53534.4\u7684\u6d4f\u89c8\u5668\u4e0b\uff0c\u9875\u9762\u6b63\u5e38\u663e\u793a\u3002"]],meta:{title:"vue-cli\u517c\u5bb9\u4f4e\u7248\u672c\u6d4f\u89c8\u5668",publishDate:"2020-06-03T00:00:00.000Z",createDate:"2020-06-03T00:00:00.000Z",category:"development",abstract:"vue-cli\u517c\u5bb9\u4f4e\u7248\u672c\u6d4f\u89c8\u5668",filename:"posts/development/vue-cli\u517c\u5bb9\u4f4e\u7248\u672c\u6d4f\u89c8\u5668.md"}}}});