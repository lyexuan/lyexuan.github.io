webpackJsonp([9],{642:function(n,s){n.exports={content:["article",["h3","0.ubuntu20.4\u9ed8\u8ba4\u5b89\u88c5\u7684\u8fdc\u7a0b\u5de5\u5177"],["p","Remmina\u8fdc\u7a0b\u684c\u9762\u5ba2\u6237\u7aef"],["h3","1.\u5b89\u88c5rdesktop"],["pre",{lang:null,highlighted:'sudo apt<span class="token operator">-</span>get install rdesktop'},["code","sudo apt-get install rdesktop"]],["h3","2.windows\u7aef\u8bbe\u7f6e"],["pre",{lang:null,highlighted:'\u9700\u8981\u5141\u8bb8\u6b64windows\u8fdc\u7a0b\u8bbf\u95ee\u3002\n\u6211\u7684windows\u662fwindows server2012\uff0c\u57fa\u672c\u64cd\u4f5c\uff1a\u8ba1\u7b97\u673a<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\u5c5e\u6027<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\u8fdc\u7a0b\u8bbe\u7f6e<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\u8fdc\u7a0b\uff0c\n\u52fe\u9009\uff1a\u5141\u8bb8\u8fdc\u7a0b\u8fde\u63a5\u5230\u6b64\u8ba1\u7b97\u673a\u3002\u53bb\u6389\u9ed8\u8ba4\u52fe\u9009\uff1a\u4ec5\u5141\u8bb8\u8fd0\u884c\u4f7f\u7528\u7f51\u7edc\u7ea7\u522b\u9a8c\u8bc1'},["code","\u9700\u8981\u5141\u8bb8\u6b64windows\u8fdc\u7a0b\u8bbf\u95ee\u3002\n\u6211\u7684windows\u662fwindows server2012\uff0c\u57fa\u672c\u64cd\u4f5c\uff1a\u8ba1\u7b97\u673a---\u5c5e\u6027---\u8fdc\u7a0b\u8bbe\u7f6e---\u8fdc\u7a0b\uff0c\n\u52fe\u9009\uff1a\u5141\u8bb8\u8fdc\u7a0b\u8fde\u63a5\u5230\u6b64\u8ba1\u7b97\u673a\u3002\u53bb\u6389\u9ed8\u8ba4\u52fe\u9009\uff1a\u4ec5\u5141\u8bb8\u8fd0\u884c\u4f7f\u7528\u7f51\u7edc\u7ea7\u522b\u9a8c\u8bc1"]],["h3","3.\u8fdc\u7a0b\u8fde\u63a5"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> rdesktop <span class="token punctuation">[</span>options<span class="token punctuation">]</span> server<span class="token punctuation">[</span><span class="token punctuation">:</span>port<span class="token punctuation">]</span>\nrdesktop <span class="token operator">-</span>f <span class="token operator">-</span>a <span class="token number">16</span>  <span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">1.112</span>'},["code","// rdesktop [options] server[:port]\nrdesktop -f -a 16  192.168.1.112"]],["h3","4.\u5e38\u7528\u53c2\u6570"],["pre",{lang:null,highlighted:'<span class="token operator">-</span>u\u7528\u6237\u540d\n<span class="token operator">-</span>p\u5bc6\u7801\n<span class="token operator">-</span>n\u5ba2\u6237\u7aef\u4e3b\u673a\u540d\uff08\u663e\u793awindows\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u7684\u8fde\u63a5\u5ba2\u6237\u7aef\u540d\uff09\n<span class="token operator">-</span>g\u684c\u9762\u5927\u5c0f\uff08 \u5bbd\uff0a \u9ad8\uff09<span class="token punctuation">[</span>\u4e5f\u53ef\u4ee5\u7528 <span class="token function">x</span><span class="token punctuation">(</span>\u5c0f\u5199\u7684X<span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token operator">-</span>f\u5168\u5c4f\u6a21\u5f0f<span class="token punctuation">,</span>\u4ece\u5168\u5c4f\u6a21\u5f0f\u5207\u6362\u51fa\u6765\u6309Ctrl<span class="token operator">+</span>Alt<span class="token operator">+</span>Enter\n<span class="token operator">-</span>a\u8fde\u63a5\u989c\u8272\u6df1\u5ea6\uff08\u6700\u9ad8\u5230<span class="token number">16</span>\u4f4d\uff09\uff0c\u4e00\u822c\u9009<span class="token number">16</span>\u624d\u4f1a\u663e\u793a\u771f\u5f69\u8272\uff08window7\u652f\u6301<span class="token number">32</span>\u4f4d\uff09\n<span class="token operator">-</span><span class="token number">0</span>\u6570\u5b57<span class="token number">0</span>\u8868\u793a\u8fde\u63a5\u4e0awindows\u63a7\u5236\u53f0\uff0c\u7b49\u6548mstsc<span class="token operator">/</span>console\u547d\u4ee4\n\n\u4f8b\u5b50\uff1a\n<span class="token number">1</span>\u3001\u5728\u5168\u5c4f\u6a21\u5f0f\u4e0b\u7528\u771f\u5f69\u8272\u3001\u5ba2\u6237\u7aef\u540d\u4e3aconnection\u3001\u7528\u6237\u540dpan\u8fde\u63a5<span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.100</span>\u63a7\u5236\u53f0\n<span class="token variable">$rdesktop</span><span class="token operator">-</span>f <span class="token operator">-</span>a <span class="token number">16</span> <span class="token operator">-</span>n connection <span class="token operator">-</span>u pan <span class="token operator">-</span><span class="token number">0</span> <span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.100</span>\n<span class="token number">2</span>\u3001\u4ee5<span class="token number">800</span><span class="token operator">*</span><span class="token number">600</span>\uff08W\uff0aH\uff09\u7a97\u53e3\u5927\u5c0f\u3001\u771f\u5f69\u8272\u3001\u7528\u6237\u540dpan\u3001\u6253\u5f00\u8fdc\u7a0b\u7aef\u53e3\u4e3a<span class="token number">16453</span>\u7684<span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.101</span>\u63a7\u5236\u53f0\n<span class="token variable">$rdesktop</span> <span class="token operator">-</span>g <span class="token number">800</span><span class="token operator">*</span><span class="token number">600</span> <span class="token operator">-</span>a <span class="token number">16</span> <span class="token operator">-</span>u pan <span class="token operator">-</span><span class="token number">0</span> <span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">0.101</span><span class="token punctuation">:</span><span class="token number">16453</span>'},["code","-u\u7528\u6237\u540d\n-p\u5bc6\u7801\n-n\u5ba2\u6237\u7aef\u4e3b\u673a\u540d\uff08\u663e\u793awindows\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u7684\u8fde\u63a5\u5ba2\u6237\u7aef\u540d\uff09\n-g\u684c\u9762\u5927\u5c0f\uff08 \u5bbd\uff0a \u9ad8\uff09[\u4e5f\u53ef\u4ee5\u7528 x(\u5c0f\u5199\u7684X)]\n-f\u5168\u5c4f\u6a21\u5f0f,\u4ece\u5168\u5c4f\u6a21\u5f0f\u5207\u6362\u51fa\u6765\u6309Ctrl+Alt+Enter\n-a\u8fde\u63a5\u989c\u8272\u6df1\u5ea6\uff08\u6700\u9ad8\u523016\u4f4d\uff09\uff0c\u4e00\u822c\u900916\u624d\u4f1a\u663e\u793a\u771f\u5f69\u8272\uff08window7\u652f\u630132\u4f4d\uff09\n-0\u6570\u5b570\u8868\u793a\u8fde\u63a5\u4e0awindows\u63a7\u5236\u53f0\uff0c\u7b49\u6548mstsc/console\u547d\u4ee4\n\n\u4f8b\u5b50\uff1a\n1\u3001\u5728\u5168\u5c4f\u6a21\u5f0f\u4e0b\u7528\u771f\u5f69\u8272\u3001\u5ba2\u6237\u7aef\u540d\u4e3aconnection\u3001\u7528\u6237\u540dpan\u8fde\u63a5192.168.0.100\u63a7\u5236\u53f0\n$rdesktop-f -a 16 -n connection -u pan -0 192.168.0.100\n2\u3001\u4ee5800*600\uff08W\uff0aH\uff09\u7a97\u53e3\u5927\u5c0f\u3001\u771f\u5f69\u8272\u3001\u7528\u6237\u540dpan\u3001\u6253\u5f00\u8fdc\u7a0b\u7aef\u53e3\u4e3a16453\u7684192.168.0.101\u63a7\u5236\u53f0\n$rdesktop -g 800*600 -a 16 -u pan -0 192.168.0.101:16453"]]],meta:{title:"\u8fdc\u7a0b\u8fde\u63a5windows",publishDate:"2020-06-03T00:00:00.000Z",category:"ubuntu",abstract:"\u8fdc\u7a0b\u8fde\u63a5windows",order:7,filename:"posts/ubuntu/remote-desktop.md"}}}});