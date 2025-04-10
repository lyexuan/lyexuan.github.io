webpackJsonp([30],{675:function(s,n){s.exports={content:["article",["h3","\u4e00\u3001\u5b9a\u4e49"],["h4","1.\u54ea\u4e9b\u6837\u5f0f\u5143\u7d20\u9700\u8981\u62bd\u79bb\u6210\u53d8\u91cf\uff1f"],["p","  \u4e3b\u8981\u662f\u914d\u8272\u65b9\u6848\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">*</span> \u4e3b\u8272\n<span class="token operator">*</span> \u8f85\u8272\n<span class="token operator">*</span> \u63d0\u9192\n<span class="token operator">*</span> \u8b66\u544a\n<span class="token operator">*</span> \u80cc\u666f\u4e3b\u8272\n<span class="token operator">*</span> \u80cc\u666f\u8f85\u8272\n<span class="token operator">*</span> \u6587\u5b57\u989c\u8272\u7ea7\u522b\n<span class="token operator">*</span> \u7070\u5ea6\u7ea7\u522b\n<span class="token operator">*</span> \u4e3b\u8981\u5143\u7d20\u989c\u8272\uff08\u8fb9\u6846\u3001\u5206\u5272\u7ebf<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\uff09\n<span class="token operator">*</span> \u7279\u6b8a\u5143\u7d20'},["code","* \u4e3b\u8272\n* \u8f85\u8272\n* \u63d0\u9192\n* \u8b66\u544a\n* \u80cc\u666f\u4e3b\u8272\n* \u80cc\u666f\u8f85\u8272\n* \u6587\u5b57\u989c\u8272\u7ea7\u522b\n* \u7070\u5ea6\u7ea7\u522b\n* \u4e3b\u8981\u5143\u7d20\u989c\u8272\uff08\u8fb9\u6846\u3001\u5206\u5272\u7ebf...\uff09\n* \u7279\u6b8a\u5143\u7d20"]],["p","  \u5177\u4f53\u9700UI\u914d\u5408\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u5b9a\u4e49\u3002  "],["h4","2.\u4e3b\u9898\u6e90\u7801\u7ed3\u6784\u5982\u4f55\u89c4\u5212\uff1f"],["ul",["li",["p","\u6e90\u7801\u653e\u7f6e\u5728\u516c\u5171\u4f9d\u8d56\u5305fzis-web\u4e2d"]],["li",["p","\u6e90\u7801\u76ee\u5f55\u7ed3\u6784\uff1a"],["pre",{lang:null,highlighted:'fzis<span class="token operator">-</span>web\n  |<span class="token operator">-</span><span class="token operator">-</span>themes\n    |<span class="token operator">-</span><span class="token operator">-</span>src\n      |<span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">default</span>\n        |<span class="token operator">-</span><span class="token operator">-</span>var<span class="token punctuation">.</span>less\n        |<span class="token operator">-</span><span class="token operator">-</span>component1<span class="token punctuation">.</span>less\n        |<span class="token operator">-</span><span class="token operator">-</span>component2<span class="token punctuation">.</span>less\n        |<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n        |<span class="token operator">-</span><span class="token operator">-</span>componentN<span class="token punctuation">.</span>less\n        |<span class="token operator">-</span><span class="token operator">-</span>theme<span class="token punctuation">.</span>less\n      |<span class="token operator">-</span><span class="token operator">-</span>theme1\n      |<span class="token operator">-</span><span class="token operator">-</span>theme2\n      |<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n      |<span class="token operator">-</span><span class="token operator">-</span>themeN\n    |<span class="token operator">-</span><span class="token operator">-</span>dist\n      |<span class="token operator">-</span><span class="token operator">-</span>themes<span class="token punctuation">.</span>css'},["code","fzis-web\n  |--themes\n    |--src\n      |--default\n        |--var.less\n        |--component1.less\n        |--component2.less\n        |--...\n        |--componentN.less\n        |--theme.less\n      |--theme1\n      |--theme2\n      |--...\n      |--themeN\n    |--dist\n      |--themes.css"]]],["li",["p","\u4e3b\u9898\u7684\u8f93\u51fa\u5f62\u5f0f\n\u5c06\u5404\u4e2a\u4e3b\u9898\u7684less\u7f16\u8bd1\u6210css\uff0c\u6700\u540e\u5408\u5e76css\u81f3fzis-web/themes/dist/themes.css"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> gulpfile<span class="token punctuation">.</span>js\n<span class="token keyword">const</span> { src<span class="token punctuation">,</span> dest } <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> less <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-less\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> concat <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-concat\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> cleanCSS <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'gulp-clean-css\'</span><span class="token punctuation">)</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> \u7f16\u8bd1less\nfunction buildLess <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">\'themes/src/*/theme.less\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">less</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u7f16\u8bd1\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">\'themes.css\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u5408\u5e76\u6587\u4ef6\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">cleanCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u538b\u7f29\u6587\u4ef6\n  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">\'themes/dict\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u8f93\u51fa\n}\n\nexports<span class="token punctuation">.</span><span class="token keyword">default</span> <span class="token operator">=</span> buildLess'},["code","// gulpfile.js\nconst { src, dest } = require('gulp')\nconst less = require('gulp-less')\nconst concat = require('gulp-concat')\nconst cleanCSS = require('gulp-clean-css')\n\n// \u7f16\u8bd1less\nfunction buildLess () {\n  return src('themes/src/*/theme.less')\n  .pipe(less()) // \u7f16\u8bd1\n  .pipe(concat('themes.css')) // \u5408\u5e76\u6587\u4ef6\n  .pipe(cleanCSS()) // \u538b\u7f29\u6587\u4ef6\n  .pipe(dest('themes/dict')) // \u8f93\u51fa\n}\n\nexports.default = buildLess"]]]],["h3","\u4e8c\u3001\u4f7f\u7528"],["h4","1.\u4e3b\u9898\u5305\u7684\u5f15\u7528"],["p","\u5728\u7a0b\u5e8f\u5165\u53e3\u5f15\u5165\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> src<span class="token operator">/</span>main<span class="token punctuation">.</span>js\nimport <span class="token string">\'fzis-web/themes/dist/themes.css\'</span>'},["code","// src/main.js\nimport 'fzis-web/themes/dist/themes.css'"]],["h4","2.\u4e3b\u9898\u7684\u4f5c\u7528\u8303\u56f4"],["ul",["li",["p","\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3b\u9898\u4ec5\u4f5c\u7528\u4e8e\u9884\u8bbe\u7684UI\u7ec4\u4ef6\u548c\u516c\u5171\u5e03\u5c40"]],["li",["p","\u82e5\u81ea\u5b9a\u4e49\u7684UI\u5143\u7d20\u9700\u8981\u4f7f\u7528\u4e3b\u9898\u989c\u8272\uff08\u5b57\u4f53\u989c\u8272\u3001\u80cc\u666f\u989c\u8272\u3001\u8fb9\u6846\u989c\u8272...\uff09\uff0c\u9700\u8981\u8d4b\u4e88\u7279\u5b9a\u7684class\u540d\u79f0\uff0c\u5b9e\u73b0\u601d\u8def\u7c7b\u4f3c\u4e8ebootstrap\u7684\u6837\u5f0f"]]],["h3","\u4e09\u3001\u5207\u6362"],["ul",["li",["p","\u9884\u8bbe\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u4f7f\u7528\u9ed8\u8ba4\u4e3b\u9898'fzis-web/themes/src/default/theme.less'"]],["li",["p","\u9ed8\u8ba4\u4e3b\u9898\u5916\u7684\u5176\u4ed6\u4e3b\u9898\u6837\u5f0f\u90fd\u88ab\u7ea6\u675f\u5728\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff08\u7c7b\u540d\u6216id\u540d\uff0c\u5f85\u5b9a\uff09\u4e0b\uff0c\u5c06\u5e94\u7528\u7684\u5916\u5c42dom\u5143\u7d20\u8d4b\u4e88\u76f8\u5e94\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5219\u5bf9\u5e94\u4e3b\u9898\u6837\u5f0f\u5373\u53ef\u751f\u6548"]]],["h3","\u56db\u3001\u7ef4\u62a4"],["ul",["li",["p","\u4e3b\u9898\u7684\u589e\u52a0\u548c\u7f16\u8f91\uff0c\u521d\u671f\u624b\u5de5\u7ef4\u62a4"]],["li",["p","\u540e\u671f\u82e5\u4e3b\u9898\u7e41\u591a\uff0c\u53ef\u521b\u5efa\u53ef\u89c6\u5316\u5e94\u7528\u8fdb\u884c\u7f16\u8f91"]],["li",["p","\u624b\u5de5\u7ef4\u62a4\u7684\u5185\u5bb9\uff1a"],["ul",["li",["p","\u4e3b\u9898\u6837\u5f0f\u6e90\u7801"]],["li",["p","\u6846\u67b6\u540e\u53f0\u7f16\u8f91\u4e3b\u9898\u914d\u7f6e\uff08\u524d\u7aef\u9700\u6839\u636e\u4e3b\u9898\u5217\u8868\u8fdb\u884c\u4e2a\u6027\u5316\u4e3b\u9898\u5207\u6362\uff09"]]]]],["h3","\u4e94\u3001\u53ef\u89c6\u5316\u4e3b\u9898\u7ef4\u62a4\u7684\u8bbe\u60f3"]],meta:{title:"\u4e3b\u9898\u6837\u5f0f",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"frame",abstract:"\u4e3b\u9898\u6837\u5f0f",order:90,filename:"posts/frame/90-\u4e3b\u9898\u6837\u5f0f.md"}}}});