webpackJsonp([12],{658:function(n,s){n.exports={content:["article",["p","\u5728Ubuntu\u7cfb\u7edf\u4e0b\u9ed8\u8ba4\u81ea\u5e26\u6709firefox\u6d4f\u89c8\u5668\uff0c\u4f46\u662f\u4f7f\u7528\u8fd9\u4e2afirefox\u6d4f\u89c8\u5668\u4f1a\u53d1\u73b0\u8d26\u53f7\u65e0\u6cd5\u767b\u5f55\uff0c\u539f\u6765\u5728windows\u7cfb\u7edf\u4e0b\u7684\u6570\u636e\u6ca1\u6709\u529e\u6cd5\u540c\u6b65\uff0c\u4e66\u7b7e\u4e5f\u540c\u6b65\u4e0d\u4e86\u3002\u7ecf\u8fc7\u67e5\u8be2\u8d44\u6599\u540e\u5f97\u77e5\uff0cUbuntu\u7cfb\u7edf\u4e0b\u81ea\u5e26\u7684firefox\u6d4f\u89c8\u5668\u662f\u56fd\u9645\u7248\u672c\uff0c\u670d\u52a1\u5668\u4e0ewindows\u4e0b\u7684\u4e0d\u4e00\u6837\uff0c\u56e0\u6b64\u6ca1\u6cd5\u5b9e\u73b0\u6570\u636e\u540c\u6b65\uff0c\u6240\u4ee5\u9700\u8981\u5728Ubuntu\u4e0b\u91cd\u65b0\u5b89\u88c5\u4e2d\u56fd\u7248\u7684firefox\u6d4f\u89c8\u5668\uff0c\u8fd9\u6837\u5e10\u53f7\u65e0\u6cd5\u767b\u9646\u7684\u95ee\u9898\u5c31\u80fd\u89e3\u51b3\u4e86\u3002"],["p",["strong","\u5177\u4f53\u6b65\u9aa4"]],["p",["strong","1.\u9996\u5148\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684\u4e2d\u56fd\u7248firefox\u6d4f\u89c8\u5668"],"\n",["a",{title:null,href:"http://www.firefox.com.cn/"},"\u4e0b\u8f7d\u5730\u5740"]],["p",["strong","2.\u5378\u8f7d\u81ea\u5e26\u7684firefox"],"\n\u8fd0\u884c\uff1asudo apt-get remove firefox"],["p",["strong","3.\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u89e3\u538b\uff0c\u5c06\u89e3\u538b\u540e\u7684firefox\u79fb\u52a8\u5230/opt\u76ee\u5f55\u4e0b"],"\n\u8fd0\u884c\uff1asudo mv firefox /opt"],["p",["strong","4.\u8fdb\u5165\u4e0b\u9762\u7684\u76ee\u5f55"],"\n\u8fd0\u884c\uff1acd /usr/share/applications"],["p",["strong","5.\u521b\u5efadesktop\u6587\u4ef6\uff0c\u4f7f\u7528\u7f16\u8bd1\u5668\u7f16\u5199\u4ee3\u7801"]],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span>\u7528vim\u7f16\u5199desktop\nsudo vim firefox<span class="token punctuation">.</span>desktop\n<span class="token operator">/</span><span class="token operator">/</span>\u7f16\u5199\u7684\u5185\u5bb9\n<span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>\nName<span class="token operator">=</span>firefox\nName<span class="token punctuation">[</span>zh_CN<span class="token punctuation">]</span><span class="token operator">=</span>\u706b\u72d0\u6d4f\u89c8\u5668\nComment<span class="token operator">=</span>\u706b\u72d0\u6d4f\u89c8\u5668\nExec<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>firefox<span class="token operator">/</span>firefox\nIcon<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>firefox<span class="token operator">/</span>browser<span class="token operator">/</span>chrome<span class="token operator">/</span>icons<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">/</span>default128<span class="token punctuation">.</span>png\nTerminal<span class="token operator">=</span><span class="token boolean">false</span>\nType<span class="token operator">=</span>Application\nCategories<span class="token operator">=</span>Application<span class="token comment" spellcheck="true">;</span>\nEncoding<span class="token operator">=</span>UTF<span class="token operator">-</span><span class="token number">8</span>\nStartupNotify<span class="token operator">=</span><span class="token boolean">true</span>'},["code","//\u7528vim\u7f16\u5199desktop\nsudo vim firefox.desktop\n//\u7f16\u5199\u7684\u5185\u5bb9\n[Desktop Entry]\nName=firefox\nName[zh_CN]=\u706b\u72d0\u6d4f\u89c8\u5668\nComment=\u706b\u72d0\u6d4f\u89c8\u5668\nExec=/opt/firefox/firefox\nIcon=/opt/firefox/browser/chrome/icons/default/default128.png\nTerminal=false\nType=Application\nCategories=Application;\nEncoding=UTF-8\nStartupNotify=true"]],["p",["strong","6.\u4fdd\u5b58\u540e\uff0c\u767b\u5f55\u8d26\u53f7\u5373\u53ef"]]],meta:{title:"\u91cd\u88c5\u706b\u72d0\u6d4f\u89c8\u5668",publishDate:"2020-06-03T00:00:00.000Z",category:"ubuntu",abstract:"\u91cd\u88c5\u706b\u72d0\u6d4f\u89c8\u5668",order:5,filename:"posts/ubuntu/firefox-install.md"}}}});