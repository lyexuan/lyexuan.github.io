webpackJsonp([6],{645:function(s,a){s.exports={content:["article",["h3","0.\u5378\u8f7dlibreoffice"],["pre",{lang:null,highlighted:'sudo apt<span class="token operator">-</span>get remove <span class="token operator">-</span><span class="token operator">-</span>purge libreoffice<span class="token operator">*</span>\nsudo apt clean\nsudo apt<span class="token operator">-</span>get autoremove'},["code","sudo apt-get remove --purge libreoffice*\nsudo apt clean\nsudo apt-get autoremove"]],["h3","1.\u4e0b\u8f7d"],["p","\u5b98\u7f51\u4e0b\u8f7d\u5373\u53ef"],["h3","2.\u5b89\u88c5"],["pre",{lang:null,highlighted:'sudo dpkg <span class="token operator">-</span>i wps<span class="token operator">-</span>office_10<span class="token punctuation">.</span><span class="token number">1.0</span><span class="token punctuation">.</span>6757_amd64<span class="token punctuation">.</span>deb'},["code","sudo dpkg -i wps-office_10.1.0.6757_amd64.deb"]],["h3","3. \u5b89\u88c5\u5b57\u4f53"],["p","\u7f51\u4e0a\u641c\u5b57\u4f53\u5e76\u4e0b\u8f7d"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> \u5b89\u88c5\u5b57\u4f53\nsudo cp <span class="token operator">*</span> <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>fonts\n<span class="token operator">/</span><span class="token operator">/</span> \u751f\u6210\u5b57\u4f53\u7d22\u5f15\u4fe1\u606f\uff08\u6b64\u6b65\u9aa4\u4e0d\u6267\u884c\u8c8c\u4f3c\u4e5f\u53ef\u4ee5\uff09\nsudo mkfontscale\nsudo mkfontdir\nsudo fc<span class="token operator">-</span>cache'},["code","// \u5b89\u88c5\u5b57\u4f53\nsudo cp * /usr/share/fonts\n// \u751f\u6210\u5b57\u4f53\u7d22\u5f15\u4fe1\u606f\uff08\u6b64\u6b65\u9aa4\u4e0d\u6267\u884c\u8c8c\u4f3c\u4e5f\u53ef\u4ee5\uff09\nsudo mkfontscale\nsudo mkfontdir\nsudo fc-cache"]]],meta:{title:"\u5b89\u88c5wps",publishDate:"2020-06-03T00:00:00.000Z",category:"ubuntu",abstract:"\u5b89\u88c5wps",order:4,filename:"posts/ubuntu/wps-install.md"}}}});