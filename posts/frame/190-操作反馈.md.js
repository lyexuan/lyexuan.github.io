webpackJsonp([39],{631:function(n,a){n.exports={content:["article",["h2","\u4e00\u3001loading\u72b6\u6001"],["h3","\u5168\u5c40loading\u5b9a\u4e49"],["p","\u5168\u5c40loading\u7684\u57fa\u672c\u5b9e\u73b0\u4f4d\u4e8e'fzis-web/utils/http/loading.js'\u4e0b\uff0c\u5e76\u5728\u7edf\u4e00\u8bf7\u6c42\u5de5\u5177'fzis-web/utils/http/request.js'\u4e2d\u5728\u8bf7\u6c42\u7684\u4e0d\u540c\u9636\u6bb5\u8c03\u7528setLoading\u65b9\u6cd5\uff0c\u53bb\u6539\u53d8\u4e0d\u540c\u8bf7\u6c42\u7684loading\u72b6\u6001\u3002\n\u5982\u679c\u9879\u76ee\u4e2d\u4e0d\u4f7f\u7528\u6846\u67b6\u7684\u7edf\u4e00\u8bf7\u6c42\u5de5\u5177\uff0c\u4e5f\u53ef\u624b\u52a8\u8c03\u7528setLoading,getLoading,getLoadings,getGlobalLoading\u8fd9\u51e0\u4e2a\u65b9\u6cd5\uff0c\u53bb\u5355\u72ec\u4f7f\u7528loading\u5de5\u5177\u3002"],["h3","loading\u503c\u7684\u53d6\u7528"],["h4","\u4f7f\u7528\u5168\u5c40mixin"],["p","\u5728\u5165\u53e3\u6587\u4ef6'src/main.js'\u4e2d\u6ce8\u518c\u5168\u5c40mixin"],["pre",{lang:null,highlighted:'<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nimport { loading } from <span class="token string">\'fzis-web/mixins\'</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nVue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>{\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>loading\n}<span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","...\nimport { loading } from 'fzis-web/mixins'\n...\nVue.mixin({\n  ...loading\n})\n..."]],["p","\u9875\u9762\u4e2d\u4f7f\u7528\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>a<span class="token operator">-</span>button <span class="token punctuation">:</span>loading<span class="token operator">=</span><span class="token string">"getLoading(\'/apiUrl\')"</span><span class="token operator">></span>\u6309\u94ae<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">></span>'},["code","<a-button :loading=\"getLoading('/apiUrl')\">\u6309\u94ae</a-button>"]],["h4","\u5355\u72ec\u4f7f\u7528"],["p","\u9875\u9762\u4e2d\u4f7f\u7528\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>template<span class="token operator">></span>\n  <span class="token operator">&lt;</span>a<span class="token operator">-</span>button <span class="token punctuation">:</span>loading<span class="token operator">=</span><span class="token string">"loading"</span><span class="token operator">></span>\u6309\u94ae<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>button<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\nimport { getLoading } from <span class="token string">\'fzis-web/utils/http/loading\'</span>\nexport <span class="token keyword">default</span> {\n  computed<span class="token punctuation">:</span> {\n    loading <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n      return <span class="token function">getLoading</span><span class="token punctuation">(</span><span class="token string">\'/apiUrl\'</span><span class="token punctuation">)</span>\n    }\n  }\n}\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>'},["code","<template>\n  <a-button :loading=\"loading\">\u6309\u94ae</a-button>\n</template>\n\n<script>\nimport { getLoading } from 'fzis-web/utils/http/loading'\nexport default {\n  computed: {\n    loading () {\n      return getLoading('/apiUrl')\n    }\n  }\n}\n<\/script>"]],["h2","\u4e8c\u3001\u8fdb\u5ea6"],["h2","\u4e09\u3001\u6210\u529f\u3001\u5931\u8d25\u53cd\u9988"]],meta:{title:"\u64cd\u4f5c\u53cd\u9988",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"frame",abstract:"\u64cd\u4f5c\u53cd\u9988",order:190,filename:"posts/frame/190-\u64cd\u4f5c\u53cd\u9988.md"}}}});