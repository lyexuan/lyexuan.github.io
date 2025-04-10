webpackJsonp([132],{571:function(n,a){n.exports={content:["article",["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">// vue.config.js</span>\n<span class="token keyword">var</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">\'ignore\'</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex">/^\\.\\/locale$/</span><span class="token punctuation">,</span> <span class="token regex">/moment$/</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// vue.config.js\nvar webpack = require('webpack')\nmodule.exports = {\n    chainWebpack: config => {\n        config.plugin('ignore')\n            .use(new webpack.IgnorePlugin(/^\\.\\/locale$/, /moment$/))\n    }\n}"]]],meta:{title:"vue-cli\u6253\u5305\u5ffd\u7565\u8bed\u8a00\u5305",publishDate:"2020-06-03T00:00:00.000Z",createDate:"2020-06-03T00:00:00.000Z",category:"development",abstract:"vue-cli\u6253\u5305\u5ffd\u7565\u8bed\u8a00\u5305",filename:"posts/development/vue-cli\u6253\u5305\u5ffd\u7565\u8bed\u8a00\u5305.md"}}}});