webpackJsonp([2],{468:function(n,s){n.exports={content:["article",["h2","\u4e00\u3001\u4f7f\u7528CDN\u5f15\u5165\u7b2c\u4e09\u65b9\u5e93"],["p","\u5728webpack\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u907f\u514d\u6253\u5305\u7684\u4f9d\u8d56\uff0c\u7136\u540e\u5728\u5165\u53e3html\u6a21\u677f\u6587\u4ef6\u4e2d\u624b\u52a8\u5f15\u5165script"],["p","\u5982\uff1a"],["h3","webpack.config.js"],["pre",{lang:"javascript",highlighted:'<span class="token comment" spellcheck="true">//webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"externals"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> \n\t\t<span class="token string">"react"</span><span class="token punctuation">:</span> <span class="token string">"window.React"</span> <span class="token punctuation">,</span>\n\t\t<span class="token string">"react-dom"</span><span class="token punctuation">:</span> <span class="token string">"window.ReactDOM"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"babel-polyfill"</span><span class="token punctuation">:</span> <span class="token string">"window"</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code",'//webpack.config.js\nmodule.exports = {\n    ...\n    "externals": { \n\t\t"react": "window.React" ,\n\t\t"react-dom": "window.ReactDOM",\n\t\t"babel-polyfill": "window"\n\t},\n    ...\n}']],["h3","index.html"],["pre",{lang:"html",highlighted:'!DOCTYPE html>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    ...\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.bootcss.com/babel-polyfill/7.0.0-rc.4/polyfill.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n...'},["code",'!DOCTYPE html>\n<html>\n<head>\n    ...\n    <script src="https://unpkg.com/react@16/umd/react.production.min.js"><\/script>\n    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"><\/script>\n    <script src="https://cdn.bootcss.com/babel-polyfill/7.0.0-rc.4/polyfill.min.js"><\/script>\n</head>\n...']],["h2","\u4e8c\u3001\u5355\u72ec\u6253\u5305\u7b2c\u4e09\u65b9\u5e93\uff0c\u5145\u5206\u5229\u7528\u7f13\u5b58"],["p","webpack.config.js\u914d\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:"javascript",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        index<span class="token punctuation">:</span> <span class="token string">\'./app/main.jsx\'</span><span class="token punctuation">,</span>\n        vendor<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'react-router\'</span><span class="token punctuation">,</span> <span class="token string">\'classnames\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        filename<span class="token punctuation">:</span> <span class="token string">"[name].[chunkHash:8].js"</span><span class="token punctuation">,</span>\n        publicPath<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n        chunkFilename<span class="token punctuation">:</span> <span class="token string">"[name].[chunkHash:8].js"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            names<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'vendor\'</span><span class="token punctuation">,</span> <span class="token string">\'manifest\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code","module.exports = {\n    ...\n    entry: {\n        index: './app/main.jsx',\n        vendor: ['react', 'react-dom', 'react-router', 'classnames']\n    },\n    output: {\n        path: path.resolve(__dirname, './dist'),\n        filename: \"[name].[chunkHash:8].js\",\n        publicPath: '',\n        chunkFilename: \"[name].[chunkHash:8].js\",\n    },\n    plugins: [\n        new webpack.optimize.CommonsChunkPlugin({\n            names: ['vendor', 'manifest'],\n        }),\n    ]\n    ...\n}"]],["p","\u53ef\u8fdb\u4e00\u6b65\u914d\u7f6eoutput.publicPath\u5c06\u6253\u5305\u597d\u7684\u7b2c\u4e09\u65b9\u5e93\u653e\u7f6eCDN"]],meta:{title:"webpack\u4f18\u5316",publishDate:"2019-03-05T00:00:00.000Z",category:"development",abstract:"webpack\u6253\u5305\u65f6\u7684\u7ec6\u8282\u4f18\u5316",filename:"posts/development/webpack-optimization.md"}}}});