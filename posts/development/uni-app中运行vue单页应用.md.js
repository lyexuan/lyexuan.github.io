webpackJsonp([33],{543:function(n,s){n.exports={content:["article",["p","uni-app\u8fd0\u884c\u672c\u5730H5\u9875\u9762\uff0c\u82e5H5\u5e94\u7528\u91c7\u7528history\u6a21\u5f0f\u7684\u8def\u7531\uff0c\u90a3\u4e48\u65e0\u6cd5\u8bbf\u95ee\u9664\u5165\u53e3\u9875\u9762\u4ee5\u5916\u7684\u5176\u4ed6\u9875\u9762\uff0c\u56e0\u4e3auni-app\u5bb9\u5668\u65e0\u6cd5\u5bf9\u90e8\u7f72\u76ee\u5f55\u8fdb\u884c\u548c\u5e38\u89c4web\u670d\u52a1\u5668\u4e00\u6837\u7684\u914d\u7f6e\uff0c\u7136\u540e\u6240\u6709\u8def\u7531\u5730\u5740\u90fd\u8bbf\u95eeindex\u9875\u9762\u3002"],["h3","\u4e00\u3001vue\u9879\u76ee"],["p","\uff081\uff09\u9700\u5c06\u8def\u7531\u65b9\u5f0f\u8bbe\u7f6e\u6210hash\u6a21\u5f0f\uff1b"],["p","\uff082\uff09\u9700\u5c06\u9759\u6001\u8d44\u6e90\u7684\u57fa\u7840\u8def\u5f84\u8bbe\u7f6e\u6210\u76f8\u5bf9\u8def\u5f84"],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">// vue.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  publicPath<span class="token punctuation">:</span> <span class="token string">\'./\'</span>\n<span class="token punctuation">}</span>'},["code","// vue.config.js\nmodule.exports = {\n  publicPath: './'\n}"]],["h3","\u4e8c\u3001uni-app\u9879\u76ee"],["p","\uff081\uff09\u9700\u521b\u5efa\u4e00\u4e2a\u9875\u9762\u4f5c\u4e3awebview\u5bb9\u5668\uff0c\u5e76\u5c06\u624b\u673a\u8fd4\u56de\u952e\u7684\u9ed8\u8ba4\u884c\u4e3a\u7981\u7528"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-view</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hybrid/html/index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-view</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n\t<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// \u4fee\u6539\u9ed8\u8ba4\u7684\u8fd4\u56de\u884c\u4e3a</span>\n        onBackPress <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment" spellcheck="true">// \u83b7\u53d6webview\u5bf9\u8c61\uff0c\u6267\u884c\u9875\u9762\u7684\u5730\u5740\u8fd4\u56de</span>\n          <span class="token keyword">const</span> currentWebview <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$mp<span class="token punctuation">.</span>page<span class="token punctuation">.</span><span class="token function">$getAppWebview</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token keyword">const</span> childWebview <span class="token operator">=</span> currentWebview<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n          childWebview<span class="token punctuation">.</span><span class="token function">evalJS</span><span class="token punctuation">(</span><span class="token string">\'window.history.back()\'</span><span class="token punctuation">)</span>\n          <span class="token keyword">return</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>'},["code","<template>\n\t<view>\n\t\t<web-view src=\"/hybrid/html/index.html\"></web-view>\n\t</view>\n</template>\n<script>\n\texport default {\n        // \u4fee\u6539\u9ed8\u8ba4\u7684\u8fd4\u56de\u884c\u4e3a\n        onBackPress () {\n          // \u83b7\u53d6webview\u5bf9\u8c61\uff0c\u6267\u884c\u9875\u9762\u7684\u5730\u5740\u8fd4\u56de\n          const currentWebview = this.$mp.page.$getAppWebview()\n          const childWebview = currentWebview.children()[0]\n          childWebview.evalJS('window.history.back()')\n          return true\n        }\n\t}\n<\/script>"]]],meta:{title:"uni-app\u4e2d\u8fd0\u884cvue\u5355\u9875\u5e94\u7528",publishDate:"2020-06-03T00:00:00.000Z",createDate:"2020-06-03T00:00:00.000Z",category:"development",abstract:"uni-app\u4e2d\u8fd0\u884cvue\u5355\u9875\u5e94\u7528",filename:"posts/development/uni-app\u4e2d\u8fd0\u884cvue\u5355\u9875\u5e94\u7528.md"}}}});