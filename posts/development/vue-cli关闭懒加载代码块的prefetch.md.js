webpackJsonp([95],{566:function(n,s){n.exports={content:["article",["p","vue.config.js"],["pre",{lang:null,highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> {\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=</span><span class="token operator">></span> {\n    <span class="token operator">/</span><span class="token operator">/</span> \u79fb\u9664 prefetch \u63d2\u4ef6\n    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">\'prefetch\'</span><span class="token punctuation">)</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> \u6216\u8005\n    <span class="token operator">/</span><span class="token operator">/</span> \u4fee\u6539prefetch\u7684\u9009\u9879\uff1a\n    <span class="token operator">/</span><span class="token operator">*</span> config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">\'prefetch\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>options <span class="token operator">=</span><span class="token operator">></span> {\n      options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist <span class="token operator">=</span> options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist || <span class="token punctuation">[</span><span class="token punctuation">]</span>\n      options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fileBlacklist<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token function">myasyncRoute</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token operator">?</span>\\<span class="token punctuation">.</span>js$<span class="token operator">/</span><span class="token punctuation">)</span>\n      return options\n    }<span class="token punctuation">)</span> <span class="token operator">*</span><span class="token operator">/</span>\n\n  }<span class="token punctuation">,</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}'},["code","module.exports = {\n  ...\n  chainWebpack: config => {\n    // \u79fb\u9664 prefetch \u63d2\u4ef6\n    config.plugins.delete('prefetch')\n\n    // \u6216\u8005\n    // \u4fee\u6539prefetch\u7684\u9009\u9879\uff1a\n    /* config.plugin('prefetch').tap(options => {\n      options[0].fileBlacklist = options[0].fileBlacklist || []\n      options[0].fileBlacklist.push(/myasyncRoute(.)+?\\.js$/)\n      return options\n    }) */\n\n  },\n  ...\n}"]]],meta:{title:"vue-cli\u5173\u95ed\u61d2\u52a0\u8f7d\u4ee3\u7801\u5757\u7684prefetch",publishDate:"2020-12-07T00:00:00.000Z",createDate:"2020-12-07T00:00:00.000Z",category:"development",abstract:"vue-cli\u5173\u95ed\u61d2\u52a0\u8f7d\u4ee3\u7801\u5757\u7684prefetch",filename:"posts/development/vue-cli\u5173\u95ed\u61d2\u52a0\u8f7d\u4ee3\u7801\u5757\u7684prefetch.md"}}}});