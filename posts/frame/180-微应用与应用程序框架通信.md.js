webpackJsonp([40],{635:function(n,s){n.exports={content:["article",["h2","\u5fae\u5e94\u7528\u4e0e\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u901a\u4fe1"],["h3","\u901a\u4fe1\u8bf4\u660e"],["p","\u5fae\u5e94\u7528\u901a\u8fc7window.postMessage\u5411\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u53d1\u9001\u6d88\u606f\uff0c\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u901a\u8fc7\u76d1\u542c'message'\u4e8b\u4ef6\u505a\u51fa\u76f8\u5e94\u52a8\u4f5c\u3002"],["h3","\u5de5\u5177\u4f7f\u7528"],["pre",{lang:null,highlighted:'import { listenMessagesFromChildWindow<span class="token punctuation">,</span> registMessageHandler<span class="token punctuation">,</span> sentMessage } from <span class="token string">\'fzis-web/utils/vue-pc/windowMessage\'</span>\n<span class="token operator">/</span><span class="token operator">*</span>\n<span class="token operator">*</span> \u76d1\u542c\u5b50\u7a97\u53e3\u4f20\u6765\u7684\u6d88\u606f\uff0c\u4f20\u5165vue\u5b9e\u4f8b\uff0c\u4e00\u822c\u5728\u5e94\u7528\u5165\u53e3\u6587\u4ef6main<span class="token punctuation">.</span>js\u6267\u884c\u6b64\u65b9\u6cd5\n<span class="token operator">*</span><span class="token operator">/</span>\n<span class="token function">listenMessagesFromChildWindow</span><span class="token punctuation">(</span>vueInstance<span class="token punctuation">)</span>\n\n<span class="token operator">/</span><span class="token operator">*</span>\n<span class="token operator">*</span> \u6ce8\u518c\u6d88\u606f\u5904\u7406\u51fd\u6570\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u5177\u4f53\u7684\u9875\u9762\u6ce8\u518c\u5904\u7406\u51fd\u6570\n<span class="token operator">*</span> param String code \u6d88\u606f\u6807\u8bc6\uff0c\u7531\u5b50\u7a97\u53e3\u53d1\u9001\u65f6\u5b9a\u4e49\uff0c\u5982\uff1a<span class="token string">\'ON_TODO_SUCCESS\'</span>\n<span class="token operator">*</span> param String path \u5177\u4f53\u67d0\u5982\u9875\u9762\u7684\u8def\u7531\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a<span class="token string">\'/\'</span>\n<span class="token operator">*</span> param Function handle \u6d88\u606f\u5904\u7406\u51fd\u6570\n<span class="token operator">*</span><span class="token operator">/</span>\n<span class="token function">registMessageHandler</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> path<span class="token punctuation">,</span> handle<span class="token punctuation">)</span>\n\n<span class="token operator">/</span><span class="token operator">*</span>\n<span class="token operator">*</span> \u53d1\u9001\u6d88\u606f\n<span class="token operator">*</span> param String code \u6d88\u606f\u6807\u8bc6\uff0c\u7531\u5b50\u7a97\u53e3\u53d1\u9001\u65f6\u5b9a\u4e49\uff0c\u5982\uff1a<span class="token string">\'ON_TODO_SUCCESS\'</span>\n<span class="token operator">*</span> param Object data \u8981\u53d1\u9001\u7684\u6570\u636e\n<span class="token operator">*</span><span class="token operator">/</span>\n<span class="token function">sentMessage</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> data<span class="token punctuation">)</span>'},["code","import { listenMessagesFromChildWindow, registMessageHandler, sentMessage } from 'fzis-web/utils/vue-pc/windowMessage'\n/*\n* \u76d1\u542c\u5b50\u7a97\u53e3\u4f20\u6765\u7684\u6d88\u606f\uff0c\u4f20\u5165vue\u5b9e\u4f8b\uff0c\u4e00\u822c\u5728\u5e94\u7528\u5165\u53e3\u6587\u4ef6main.js\u6267\u884c\u6b64\u65b9\u6cd5\n*/\nlistenMessagesFromChildWindow(vueInstance)\n\n/*\n* \u6ce8\u518c\u6d88\u606f\u5904\u7406\u51fd\u6570\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u5177\u4f53\u7684\u9875\u9762\u6ce8\u518c\u5904\u7406\u51fd\u6570\n* param String code \u6d88\u606f\u6807\u8bc6\uff0c\u7531\u5b50\u7a97\u53e3\u53d1\u9001\u65f6\u5b9a\u4e49\uff0c\u5982\uff1a'ON_TODO_SUCCESS'\n* param String path \u5177\u4f53\u67d0\u5982\u9875\u9762\u7684\u8def\u7531\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a'/'\n* param Function handle \u6d88\u606f\u5904\u7406\u51fd\u6570\n*/\nregistMessageHandler(code, path, handle)\n\n/*\n* \u53d1\u9001\u6d88\u606f\n* param String code \u6d88\u606f\u6807\u8bc6\uff0c\u7531\u5b50\u7a97\u53e3\u53d1\u9001\u65f6\u5b9a\u4e49\uff0c\u5982\uff1a'ON_TODO_SUCCESS'\n* param Object data \u8981\u53d1\u9001\u7684\u6570\u636e\n*/\nsentMessage(code, data)"]]],meta:{title:"\u5fae\u5e94\u7528\u4e0e\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u901a\u4fe1",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"frame",abstract:"\u5fae\u5e94\u7528\u4e0e\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u901a\u4fe1",order:180,filename:"posts/frame/180-\u5fae\u5e94\u7528\u4e0e\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u901a\u4fe1.md"}}}});