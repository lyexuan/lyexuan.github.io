webpackJsonp([13],{654:function(n,s){n.exports={content:["article",["h3","\u53c2\u8003"],["ul",["li",["p",["a",{title:null,href:"https://gitee.com/wszqkzqk/deepin-wine-for-ubuntu"},"https://gitee.com/wszqkzqk/deepin-wine-for-ubuntu"]]],["li",["p",["a",{title:null,href:"https://blog.csdn.net/lixuedong1024/article/details/105815815/"},"https://blog.csdn.net/lixuedong1024/article/details/105815815/"]]]],["h3","\u5b89\u88c5deepin-wine"],["pre",{lang:null,highlighted:'#!<span class="token operator">/</span>bin<span class="token operator">/</span>bash\nmkdir <span class="token punctuation">.</span><span class="token operator">/</span>deepintemp\ncd <span class="token punctuation">.</span><span class="token operator">/</span>deepintemp\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">/</span>deepin<span class="token operator">-</span>wine_2<span class="token punctuation">.</span><span class="token number">18</span><span class="token operator">-</span><span class="token number">22</span>~rc0_all<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">/</span>deepin<span class="token operator">-</span>wine32_2<span class="token punctuation">.</span><span class="token number">18</span><span class="token operator">-</span><span class="token number">22</span>~rc0_i386<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">/</span>deepin<span class="token operator">-</span>wine32<span class="token operator">-</span>preloader_2<span class="token punctuation">.</span><span class="token number">18</span><span class="token operator">-</span><span class="token number">22</span>~rc0_i386<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>helper<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>helper_1<span class="token punctuation">.</span>2deepin8_i386<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>plugin<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>plugin_1<span class="token punctuation">.</span>0deepin2_amd64<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>plugin<span class="token operator">-</span>virtual<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>plugin<span class="token operator">-</span>virtual_1<span class="token punctuation">.</span>0deepin3_all<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>uninstaller<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">-</span>uninstaller_0<span class="token punctuation">.</span>1deepin2_i386<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>u<span class="token operator">/</span>udis86<span class="token operator">/</span>udis86_1<span class="token punctuation">.</span><span class="token number">72</span><span class="token operator">-</span>2_i386<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">/</span>deepin<span class="token operator">-</span>fonts<span class="token operator">-</span>wine_2<span class="token punctuation">.</span><span class="token number">18</span><span class="token operator">-</span><span class="token number">22</span>~rc0_all<span class="token punctuation">.</span>deb\nwget http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>non<span class="token operator">-</span>free<span class="token operator">/</span>d<span class="token operator">/</span>deepin<span class="token operator">-</span>wine<span class="token operator">/</span>deepin<span class="token operator">-</span>libwine_2<span class="token punctuation">.</span><span class="token number">18</span><span class="token operator">-</span><span class="token number">22</span>~rc0_i386<span class="token punctuation">.</span>deb\nwget https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>main<span class="token operator">/</span>libj<span class="token operator">/</span>libjpeg<span class="token operator">-</span>turbo<span class="token operator">/</span>libjpeg62<span class="token operator">-</span>turbo_1<span class="token punctuation">.</span><span class="token number">5.1</span><span class="token operator">-</span>2_amd64<span class="token punctuation">.</span>deb <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>check<span class="token operator">-</span>certificate\nwget https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>deepin<span class="token operator">/</span>pool<span class="token operator">/</span>main<span class="token operator">/</span>libj<span class="token operator">/</span>libjpeg<span class="token operator">-</span>turbo<span class="token operator">/</span>libjpeg62<span class="token operator">-</span>turbo_1<span class="token punctuation">.</span><span class="token number">5.1</span><span class="token operator">-</span>2_i386<span class="token punctuation">.</span>deb <span class="token operator">-</span><span class="token operator">-</span>no<span class="token operator">-</span>check<span class="token operator">-</span>certificate\n \necho <span class="token string">\'\u51c6\u5907\u6dfb\u52a032\u4f4d\u652f\u6301\'</span>\nsudo dpkg <span class="token operator">-</span><span class="token operator">-</span>add<span class="token operator">-</span>architecture i386\necho <span class="token string">\'\u6dfb\u52a0\u6210\u529f\uff0c\u51c6\u5907\u5237\u65b0apt\u7f13\u5b58\u4fe1\u606f...\'</span>\nsudo apt update\necho <span class="token string">\'\u5373\u5c06\u5f00\u59cb\u5b89\u88c5...\'</span>\nsudo dpkg <span class="token operator">-</span>i <span class="token operator">*</span><span class="token punctuation">.</span>deb\necho <span class="token string">\'\u5b89\u88c5\u5b8c\u6210\uff0c\u6b63\u5728\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56...\'</span>\nsudo apt install <span class="token operator">-</span>fy\n \nrm <span class="token operator">-</span>vfr <span class="token punctuation">.</span><span class="token operator">/</span>deepintemp\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300c\u96e8\u5c71\u5c45\u6728\u5b50\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC <span class="token number">4.0</span> BY<span class="token operator">-</span>SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002\n\u539f\u6587\u94fe\u63a5\uff1ahttps<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span>net<span class="token operator">/</span>lixuedong1024<span class="token operator">/</span>java<span class="token operator">/</span>article<span class="token operator">/</span>details<span class="token operator">/</span><span class="token number">105815815</span>'},["code","#!/bin/bash\nmkdir ./deepintemp\ncd ./deepintemp\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine_2.18-22~rc0_all.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32_2.18-22~rc0_i386.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-wine32-preloader_2.18-22~rc0_i386.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-helper/deepin-wine-helper_1.2deepin8_i386.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-plugin/deepin-wine-plugin_1.0deepin2_amd64.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-plugin-virtual/deepin-wine-plugin-virtual_1.0deepin3_all.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine-uninstaller/deepin-wine-uninstaller_0.1deepin2_i386.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/u/udis86/udis86_1.72-2_i386.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-fonts-wine_2.18-22~rc0_all.deb\nwget http://mirrors.aliyun.com/deepin/pool/non-free/d/deepin-wine/deepin-libwine_2.18-22~rc0_i386.deb\nwget https://mirrors.aliyun.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_amd64.deb --no-check-certificate\nwget https://mirrors.aliyun.com/deepin/pool/main/libj/libjpeg-turbo/libjpeg62-turbo_1.5.1-2_i386.deb --no-check-certificate\n \necho '\u51c6\u5907\u6dfb\u52a032\u4f4d\u652f\u6301'\nsudo dpkg --add-architecture i386\necho '\u6dfb\u52a0\u6210\u529f\uff0c\u51c6\u5907\u5237\u65b0apt\u7f13\u5b58\u4fe1\u606f...'\nsudo apt update\necho '\u5373\u5c06\u5f00\u59cb\u5b89\u88c5...'\nsudo dpkg -i *.deb\necho '\u5b89\u88c5\u5b8c\u6210\uff0c\u6b63\u5728\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56...'\nsudo apt install -fy\n \nrm -vfr ./deepintemp\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\u7248\u6743\u58f0\u660e\uff1a\u672c\u6587\u4e3aCSDN\u535a\u4e3b\u300c\u96e8\u5c71\u5c45\u6728\u5b50\u300d\u7684\u539f\u521b\u6587\u7ae0\uff0c\u9075\u5faaCC 4.0 BY-SA\u7248\u6743\u534f\u8bae\uff0c\u8f6c\u8f7d\u8bf7\u9644\u4e0a\u539f\u6587\u51fa\u5904\u94fe\u63a5\u53ca\u672c\u58f0\u660e\u3002\n\u539f\u6587\u94fe\u63a5\uff1ahttps://blog.csdn.net/lixuedong1024/java/article/details/105815815"]],["h3","\u8f6f\u4ef6\u5b89\u88c5"],["p","\u4ee5\u5fae\u4fe1\u4e3a\u4f8b\uff0c\u4e0b\u8f7d\u5b89\u88c5\u5305\uff1a",["a",{title:null,href:"https://mirrors.aliyun.com/deepin/pool/non-free/d/deepin.com.wechat/"},"https://mirrors.aliyun.com/deepin/pool/non-free/d/deepin.com.wechat/"]],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> \u5b89\u88c5\nsudo dpkg <span class="token operator">-</span>i deepin<span class="token punctuation">.</span>com<span class="token punctuation">.</span>wechat_2<span class="token punctuation">.</span><span class="token number">6.8</span><span class="token punctuation">.</span>65deepin0_i386<span class="token punctuation">.</span>deb'},["code","// \u5b89\u88c5\nsudo dpkg -i deepin.com.wechat_2.6.8.65deepin0_i386.deb"]],["h3","\u5176\u4ed6"],["p","\u4f7f\u7528deepin-wine\u5b89\u88c5exe\u5b89\u88c5\u5305\u6216\u8005\u8fd0\u884cexe\u7a0b\u5e8f\uff0c\u90fd\u53ea\u8981\u6267\u884c"],["pre",{lang:null,highlighted:'deepin<span class="token operator">-</span>wine softwareName<span class="token punctuation">.</span>exe'},["code","deepin-wine softwareName.exe"]]],meta:{title:"deepin-wine\u7684\u4f7f\u7528",publishDate:"2020-06-03T00:00:00.000Z",category:"ubuntu",abstract:"\u4f7f\u7528deepin-wine\u5b89\u88c5windows\u4e0b\u7684\u8f6f\u4ef6",order:3,filename:"posts/ubuntu/deepin-wine.md"}}}});