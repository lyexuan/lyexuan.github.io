webpackJsonp([114],{544:function(n,s){n.exports={content:["article",["h2","\u4e00\u3001\u5b89\u88c5"],["h3","1.\u5b89\u88c5\u4f9d\u8d56"],["pre",{lang:null,highlighted:'<span class="token directive keyword">#gcc</span>\u5b89\u88c5\uff0cnginx\u6e90\u7801\u7f16\u8bd1\u9700\u8981\nyum install gcc<span class="token operator">-</span>c<span class="token operator">+</span><span class="token operator">+</span>\n\n<span class="token directive keyword">#PCRE</span> pcre<span class="token operator">-</span>devel \u5b89\u88c5\uff0cnginx \u7684 http \u6a21\u5757\u4f7f\u7528 pcre \u6765\u89e3\u6790\u6b63\u5219\u8868\u8fbe\u5f0f\nyum install <span class="token operator">-</span>y pcre pcre<span class="token operator">-</span>devel\n\n<span class="token directive keyword">#zlib</span>\u5b89\u88c5\uff0cnginx \u4f7f\u7528zlib\u5bf9http\u5305\u7684\u5185\u5bb9\u8fdb\u884cgzip\nyum install <span class="token operator">-</span>y zlib zlib<span class="token operator">-</span>devel\n\n<span class="token directive keyword">#OpenSSL</span> \u5b89\u88c5\uff0c\u5f3a\u5927\u7684\u5b89\u5168\u5957\u63a5\u5b57\u5c42\u5bc6\u7801\u5e93\uff0cnginx \u4e0d\u4ec5\u652f\u6301 http \u534f\u8bae\uff0c\u8fd8\u652f\u6301 https\uff08\u5373\u5728ssl\u534f\u8bae\u4e0a\u4f20\u8f93http\uff09\nyum install <span class="token operator">-</span>y openssl openssl<span class="token operator">-</span>devel'},["code","#gcc\u5b89\u88c5\uff0cnginx\u6e90\u7801\u7f16\u8bd1\u9700\u8981\nyum install gcc-c++\n\n#PCRE pcre-devel \u5b89\u88c5\uff0cnginx \u7684 http \u6a21\u5757\u4f7f\u7528 pcre \u6765\u89e3\u6790\u6b63\u5219\u8868\u8fbe\u5f0f\nyum install -y pcre pcre-devel\n\n#zlib\u5b89\u88c5\uff0cnginx \u4f7f\u7528zlib\u5bf9http\u5305\u7684\u5185\u5bb9\u8fdb\u884cgzip\nyum install -y zlib zlib-devel\n\n#OpenSSL \u5b89\u88c5\uff0c\u5f3a\u5927\u7684\u5b89\u5168\u5957\u63a5\u5b57\u5c42\u5bc6\u7801\u5e93\uff0cnginx \u4e0d\u4ec5\u652f\u6301 http \u534f\u8bae\uff0c\u8fd8\u652f\u6301 https\uff08\u5373\u5728ssl\u534f\u8bae\u4e0a\u4f20\u8f93http\uff09\nyum install -y openssl openssl-devel"]],["h3","2.\u4e0b\u8f7d"],["pre",{lang:null,highlighted:'wget <span class="token operator">-</span>c https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token punctuation">.</span>org<span class="token operator">/</span>download<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.16</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz'},["code","wget -c https://nginx.org/download/nginx-1.16.1.tar.gz"]],["h3","3.\u5b89\u88c5"],["pre",{lang:null,highlighted:'#\u6839\u76ee\u5f55\u4f7f\u7528ls\u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u4e0b\u8f7d\u7684nginx\u538b\u7f29\u5305\uff0c\u7136\u540e\u89e3\u538b\ntar <span class="token operator">-</span>zxvf nginx<span class="token operator">-</span><span class="token number">1.16</span><span class="token punctuation">.</span><span class="token number">1</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz\n\n#\u89e3\u538b\u540e\u8fdb\u5165\u76ee\u5f55\ncd nginx<span class="token operator">-</span><span class="token number">1.16</span><span class="token punctuation">.</span><span class="token number">1</span>\n\n#\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\n<span class="token punctuation">.</span><span class="token operator">/</span>configure\n\n#\u7f16\u8bd1\u5b89\u88c5\nmake\nmake install\n\n#\u67e5\u627e\u5b89\u88c5\u8def\u5f84\uff0c\u9ed8\u8ba4\u90fd\u662f\u8fd9\u4e2a\u8def\u5f84\n<span class="token punctuation">[</span>root<span class="token variable">@VM_0_12_centos</span> ~<span class="token punctuation">]</span># whereis nginx\nnginx<span class="token punctuation">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx\n\n#\u542f\u52a8\u3001\u505c\u6b62nginx\ncd <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx     #\u542f\u52a8\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s stop  #\u505c\u6b62\uff0c\u76f4\u63a5\u67e5\u627enginx\u8fdb\u7a0bid\u518d\u4f7f\u7528kill\u547d\u4ee4\u5f3a\u5236\u6740\u6389\u8fdb\u7a0b\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s quit  #\u9000\u51fa\u505c\u6b62\uff0c\u7b49\u5f85nginx\u8fdb\u7a0b\u5904\u7406\u5b8c\u4efb\u52a1\u518d\u8fdb\u884c\u505c\u6b62\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s reload  #\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539nginx<span class="token punctuation">.</span>conf\u540e\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u65b0\u914d\u7f6e\u5373\u53ef\u751f\u6548\n\n#\u91cd\u542fnginx\uff0c\u5efa\u8bae\u5148\u505c\u6b62\uff0c\u518d\u542f\u52a8\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s stop\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx\n\n#\u67e5\u770bnginx\u8fdb\u7a0b\uff0c\u5982\u4e0b\u8fd4\u56de\uff0c\u5373\u4e3a\u6210\u529f\n<span class="token punctuation">[</span>root<span class="token variable">@VM_0_12_centos</span> ~<span class="token punctuation">]</span># ps aux|grep nginx\nroot      <span class="token number">5984</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">112708</span>   <span class="token number">976</span> pts<span class="token operator">/</span><span class="token number">1</span>    R<span class="token operator">+</span>   <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">41</span>   <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">00</span> grep <span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">=</span>auto nginx\nroot     <span class="token number">18198</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>  <span class="token number">20552</span>   <span class="token number">612</span> <span class="token operator">?</span>        Ss   <span class="token number">11</span><span class="token punctuation">:</span><span class="token number">28</span>   <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">00</span> nginx<span class="token punctuation">:</span> master process <span class="token punctuation">.</span><span class="token operator">/</span>nginx\nnobody   <span class="token number">18199</span>  <span class="token number">0.0</span>  <span class="token number">0.0</span>  <span class="token number">23088</span>  <span class="token number">1632</span> <span class="token operator">?</span>        S    <span class="token number">11</span><span class="token punctuation">:</span><span class="token number">28</span>   <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">00</span> nginx<span class="token punctuation">:</span> worker process'},["code","#\u6839\u76ee\u5f55\u4f7f\u7528ls\u547d\u4ee4\u53ef\u4ee5\u770b\u5230\u4e0b\u8f7d\u7684nginx\u538b\u7f29\u5305\uff0c\u7136\u540e\u89e3\u538b\ntar -zxvf nginx-1.16.1.tar.gz\n\n#\u89e3\u538b\u540e\u8fdb\u5165\u76ee\u5f55\ncd nginx-1.16.1\n\n#\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\n./configure\n\n#\u7f16\u8bd1\u5b89\u88c5\nmake\nmake install\n\n#\u67e5\u627e\u5b89\u88c5\u8def\u5f84\uff0c\u9ed8\u8ba4\u90fd\u662f\u8fd9\u4e2a\u8def\u5f84\n[root@VM_0_12_centos ~]# whereis nginx\nnginx: /usr/local/nginx\n\n#\u542f\u52a8\u3001\u505c\u6b62nginx\ncd /usr/local/nginx/sbin/\n./nginx     #\u542f\u52a8\n./nginx -s stop  #\u505c\u6b62\uff0c\u76f4\u63a5\u67e5\u627enginx\u8fdb\u7a0bid\u518d\u4f7f\u7528kill\u547d\u4ee4\u5f3a\u5236\u6740\u6389\u8fdb\u7a0b\n./nginx -s quit  #\u9000\u51fa\u505c\u6b62\uff0c\u7b49\u5f85nginx\u8fdb\u7a0b\u5904\u7406\u5b8c\u4efb\u52a1\u518d\u8fdb\u884c\u505c\u6b62\n./nginx -s reload  #\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539nginx.conf\u540e\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u65b0\u914d\u7f6e\u5373\u53ef\u751f\u6548\n\n#\u91cd\u542fnginx\uff0c\u5efa\u8bae\u5148\u505c\u6b62\uff0c\u518d\u542f\u52a8\n./nginx -s stop\n./nginx\n\n#\u67e5\u770bnginx\u8fdb\u7a0b\uff0c\u5982\u4e0b\u8fd4\u56de\uff0c\u5373\u4e3a\u6210\u529f\n[root@VM_0_12_centos ~]# ps aux|grep nginx\nroot      5984  0.0  0.0 112708   976 pts/1    R+   14:41   0:00 grep --color=auto nginx\nroot     18198  0.0  0.0  20552   612 ?        Ss   11:28   0:00 nginx: master process ./nginx\nnobody   18199  0.0  0.0  23088  1632 ?        S    11:28   0:00 nginx: worker process"]],["h3","4.\u5f00\u673a\u81ea\u542f\u52a8"],["pre",{lang:null,highlighted:'#\u5728rc<span class="token punctuation">.</span><span class="token keyword">local</span>\u589e\u52a0\u542f\u52a8\u4ee3\u7801\u5373\u53ef\nvi <span class="token operator">/</span>etc<span class="token operator">/</span>rc<span class="token punctuation">.</span><span class="token keyword">local</span>\n#\u589e\u52a0\u4e00\u884c <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx\uff0c\u589e\u52a0\u540e\u4fdd\u5b58\n#\u8bbe\u7f6e\u6267\u884c\u6743\u9650\ncd <span class="token operator">/</span>etc\nchmod <span class="token number">755</span> rc<span class="token punctuation">.</span><span class="token keyword">local</span>'},["code","#\u5728rc.local\u589e\u52a0\u542f\u52a8\u4ee3\u7801\u5373\u53ef\nvi /etc/rc.local\n#\u589e\u52a0\u4e00\u884c /usr/local/nginx/sbin/nginx\uff0c\u589e\u52a0\u540e\u4fdd\u5b58\n#\u8bbe\u7f6e\u6267\u884c\u6743\u9650\ncd /etc\nchmod 755 rc.local"]],["h3","5.\u4fee\u6539nginx\u914d\u7f6e"],["pre",{lang:null,highlighted:'#\u8fdb\u5165nginx\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u627e\u5230nginx\u7684\u914d\u7f6e\u6587\u4ef6nginx<span class="token punctuation">.</span>conf\ncd <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>\n\n#\u76f4\u63a5\u4fee\u6539\nvi nginx<span class="token punctuation">.</span>conf\n#\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\ncd <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>\n<span class="token punctuation">.</span><span class="token operator">/</span>nginx <span class="token operator">-</span>s reload'},["code","#\u8fdb\u5165nginx\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u627e\u5230nginx\u7684\u914d\u7f6e\u6587\u4ef6nginx.conf\ncd /usr/local/nginx/conf/\n\n#\u76f4\u63a5\u4fee\u6539\nvi nginx.conf\n#\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\ncd /usr/local/nginx/sbin/\n./nginx -s reload"]],["h2","\u4e8c\u3001\u5355\u9875\u5e94\u7528\u914d\u7f6e"],["pre",{lang:null,highlighted:'location <span class="token operator">/</span> {\n    <span class="token directive keyword">#root</span>   html<span class="token comment" spellcheck="true">;</span>\n    <span class="token directive keyword">#index</span>  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token comment" spellcheck="true">;</span>\n    try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token comment" spellcheck="true">;</span>\n}\nlocation <span class="token operator">/</span>api<span class="token operator">/</span> {\n    proxy_pass  \t\thttp<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">3000</span><span class="token operator">/</span><span class="token comment" spellcheck="true">;     </span>\n}'},["code","location / {\n    #root   html;\n    #index  index.html index.htm;\n    try_files $uri $uri/ /index.html;\n}\nlocation /api/ {\n    proxy_pass  \t\thttp://127.0.0.1:3000/;     \n}"]]],meta:{title:"CentOS7\u4f7f\u7528nginx",publishDate:"2019-12-17T00:00:00.000Z",category:"development",abstract:"CentOS7\u4f7f\u7528nginx",filename:"posts/development/CentOS7\u4f7f\u7528nginx.md"}}}});