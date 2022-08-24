webpackJsonp([32],{620:function(n,s){n.exports={content:["article",["h2","\u4e00\u3001\u89c6\u56fe\uff08\u9875\u9762\uff09"],["p","\u5e94\u7528\u7684\u6700\u8868\u5c42\u4f53\u73b0\uff0c\u7531'src/App.vue'\u4e3a\u5165\u53e3\uff0c\u901a\u8fc7\u8def\u7531\u5206\u53d1\uff08\u8def\u7531\u914d\u7f6e\u4f4d\u4e8e'src/common/router.config.js'\uff09\uff0c\u6307\u5411'src/views'\u4e2d\u7684\u5177\u4f53\u9875\u9762\u3002"],["h3","App.vue"],["p","\u5165\u53e3\u9875\u9762\u9664\u4e86\u5bf9\u5168\u5c40\u505a\u4e9b\u914d\u7f6e\u5916\uff0c\u6700\u91cd\u8981\u7684\u529f\u80fd\u5c31\u662f\u5bf9\u6240\u6709\u9875\u9762\u8fdb\u884c\u524d\u7aef\u7684\u6743\u9650\u6821\u9a8c\uff0c\u5176\u5b9e\u73b0\u53ea\u9700\u5728\u5e94\u7528\u5916\u56f4\u5305\u88f9\u6743\u9650\u6821\u9a8c\u7ec4\u4ef6\u5373\u53ef\u3002"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>pc<span class="token operator">-</span>layout<span class="token operator">-</span>auth\n  <span class="token punctuation">:</span>bypassRoute<span class="token operator">=</span><span class="token string">"BUYPASS_ROUTE"</span>\n  <span class="token variable">@afterAuth</span><span class="token operator">=</span><span class="token string">"handleAfterAuth"</span>\n<span class="token operator">></span>\n  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>pc<span class="token operator">-</span>layout<span class="token operator">-</span>auth<span class="token operator">></span>'},["code",'<pc-layout-auth\n  :bypassRoute="BUYPASS_ROUTE"\n  @afterAuth="handleAfterAuth"\n>\n  <router-view/>\n</pc-layout-auth>']],["p","\u5176\u4e2d\u53c2\u6570BUYPASS_ROUTE\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5c06\u4e0d\u9700\u8981\u6821\u9a8c\u6743\u9650\u7684\u8def\u7531\u4f20\u5165\uff0c\u5982\u767b\u5f55\u9875\u7b49\uff1b\nafterAuth\u5c06\u4f1a\u76d1\u542c\u9875\u9762\u901a\u8fc7\u6743\u9650\u6821\u9a8c\u540e\u7684\u4e8b\u4ef6\u3002"],["h3","views"],["p","\u4e00\u4e2a\u9875\u9762\u5177\u4f53\u7531\u4e09\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\u7ec4\u5408\u800c\u6210\uff0c\u5206\u522b\u662f\u5e03\u5c40\u7ec4\u4ef6\uff08\u4f4d\u4e8e'src/components/layout'\uff09\u3001\u901a\u7528\u7ec4\u4ef6\uff08\u4f4d\u4e8e'src/components/common'\uff09\u3001\u4e1a\u52a1\u7ec4\u4ef6\uff08\u4f4d\u4e8e'src/components/business'\uff09\u3002"],["h2","\u4e8c\u3001\u6a21\u578b"],["p","\u9875\u9762\u6a21\u578b\u4e3b\u8981\u7531\u79c1\u6709\u6a21\u578b\u3001\u901a\u7528\u6a21\u578b\u3001\u5168\u5c40\u6a21\u578b\u7ec4\u6210\u3002\u5176\u4e2d\u901a\u7528\u6a21\u578b\u4f4d\u4e8e'src/common/mixins'\uff0c\u5168\u5c40\u6a21\u578b\u4f4d\u4e8e'src/store'\u3002"],["h3","\u901a\u7528\u6a21\u578b"],["ul",["li",["p","'src/common/mixins/page.js'\u5b9a\u4e49\u4e86\u5e38\u89c4\u9875\u9762\u5171\u6709\u7684\u884c\u4e3a"]],["li",["p","'src/common/mixins/curd.js'\u5b9a\u4e49\u4e86\u589e\u5220\u6539\u67e5\u65b9\u6cd5"]],["li",["p","'src/common/mixins/loading.js'\u5b9a\u4e49\u4e86\u5168\u5c40loading\u72b6\u6001\u7684\u53d6\u7528\u65b9\u6cd5"]]],["h3","\u5168\u5c40\u6a21\u578b"],["ul",["li",["p","'src/store/user.js'\u5b58\u653e\u7528\u6237\u4fe1\u606f"]],["li",["p","'src/store/loading'\u5168\u653e\u5168\u5c40loading\u72b6\u6001"]]],["h2","\u4e09\u3001\u63a5\u53e3"],["h3","\u63a5\u53e3\u5b9a\u4e49"],["p","\u4f4d\u4e8e'src/services'"],["h3","\u5e95\u5c42\u4f9d\u8d56"],["p","\u4f9d\u8d56\u4e8e'umi-request'\uff0c\u5728'fzis-web/utils/http/request'\u4e2d\u53c8\u505a\u4e86\u4e00\u5c42\u5c01\u88c5\uff0c\u4e3b\u8981\u5904\u7406\u4e00\u4e0b\u51e0\u4ef6\u4e8b\uff1a"],["ul",["li",["p","\u7edf\u4e00\u9519\u8bef\u5904\u7406"]],["li",["p","\u8bf7\u6c42\u6210\u529f\u540e\u7edf\u4e00\u52a0\u5de5\u8fd4\u56de\u6570\u636e"]],["li",["p","\u5bf9\u7279\u6b8a\u4e1a\u52a1\u7801\u8fdb\u884c\u7279\u6b8a\u54cd\u5e94"]],["li",["p","\u767b\u5f55\u5931\u6548\u540e\u8df3\u8f6c\u81f3\u767b\u5f55\u9875"]],["li",["p","\u7ef4\u62a4\u63a5\u53e3\u7684loading\u72b6\u6001"]]],["h3","\u8bf7\u6c42\u914d\u7f6e"],["p","\u4e0d\u540c\u7684\u9879\u76ee\u9700\u8981\u5bf9\u7edf\u4e00\u8bf7\u6c42\u65b9\u6cd5\u505a\u4e00\u4e9b\u914d\u7f6e\uff0c\u914d\u7f6e\u9879\u4f4d\u4e8e'src/common/config.js'\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> \u901a\u7528\u8bf7\u6c42\u5de5\u5177\u7684\u914d\u7f6e\n<span class="token keyword">const</span> REQUEST_CONFIG <span class="token operator">=</span> {\n  SUCCESS_CODE<span class="token punctuation">:</span> API_SUCCESS_CODE<span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u4ee3\u8868\u6210\u529f\u7684\u4e1a\u52a1\u7801\n  BACK_TO_LOGIN_CODE<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span> \u9700\u8981\u8fd4\u56de\u767b\u5f55\u9875\u7684\u4e1a\u52a1\u7801\n  LOGIN_URL<span class="token punctuation">:</span> LOGIN_PAGE_ROUTE<span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u767b\u5f55\u9875url\n  TIME_BEFORE_BACK_TO_LOGIN<span class="token punctuation">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u8fd4\u56de\u767b\u5f55\u9875\u524d\u9875\u9762\u505c\u7559\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n  BUYPASS_BUSINESS_CODE<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">5000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u9700\u8981\u7279\u6b8a\u5904\u7406\u7684\u4e1a\u52a1\u9519\u8bef\u7801\uff08\u4e0d\u7edf\u4e00\u62a5\u9519\uff0c\u7531\u7279\u5b9a\u7a0b\u5e8f\u53bb\u5904\u7406\u9519\u8bef\uff09\n  BUYPASS_API<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'/group1\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u9700\u7279\u6b8a\u5904\u7406\u7684api url\n}'},["code","// \u901a\u7528\u8bf7\u6c42\u5de5\u5177\u7684\u914d\u7f6e\nconst REQUEST_CONFIG = {\n  SUCCESS_CODE: API_SUCCESS_CODE, // \u4ee3\u8868\u6210\u529f\u7684\u4e1a\u52a1\u7801\n  BACK_TO_LOGIN_CODE: [100],  // \u9700\u8981\u8fd4\u56de\u767b\u5f55\u9875\u7684\u4e1a\u52a1\u7801\n  LOGIN_URL: LOGIN_PAGE_ROUTE, // \u767b\u5f55\u9875url\n  TIME_BEFORE_BACK_TO_LOGIN: 2000, // \u8fd4\u56de\u767b\u5f55\u9875\u524d\u9875\u9762\u505c\u7559\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\n  BUYPASS_BUSINESS_CODE: [5000], // \u9700\u8981\u7279\u6b8a\u5904\u7406\u7684\u4e1a\u52a1\u9519\u8bef\u7801\uff08\u4e0d\u7edf\u4e00\u62a5\u9519\uff0c\u7531\u7279\u5b9a\u7a0b\u5e8f\u53bb\u5904\u7406\u9519\u8bef\uff09\n  BUYPASS_API: ['/group1'], // \u9700\u7279\u6b8a\u5904\u7406\u7684api url\n}"]],["p","\u5728\u5165\u53e3\u6587\u4ef6'src/App.vue'\u4e2d\u5bf9\u8bf7\u6c42\u914d\u7f6e\u8fdb\u884c\u8bbe\u7f6e\uff1a"],["pre",{lang:null,highlighted:'<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nimport { requestInit } from <span class="token string">\'@/common/utils/request-init\'</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">/</span><span class="token operator">/</span> \u7edf\u4e00\u8bf7\u6c42\u521d\u59cb\u5316\u914d\u7f6e\n<span class="token function">requestInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","...\nimport { requestInit } from '@/common/utils/request-init'\n...\n// \u7edf\u4e00\u8bf7\u6c42\u521d\u59cb\u5316\u914d\u7f6e\nrequestInit()\n..."]]],meta:{title:"\u903b\u8f91\u5206\u5c42",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"frame",abstract:"\u903b\u8f91\u5206\u5c42",order:40,filename:"posts/frame/40-\u903b\u8f91\u5206\u5c42.md"}}}});