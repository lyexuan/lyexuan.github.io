webpackJsonp([110],{544:function(s,n){s.exports={content:["article",["h3","1.\u6dfb\u52a0\u955c\u50cf\u6e90"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span><span class="token operator">-</span>silent <span class="token operator">-</span><span class="token operator">-</span>location https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>rpm<span class="token punctuation">.</span>nodesource<span class="token punctuation">.</span>com<span class="token operator">/</span>setup_10<span class="token punctuation">.</span>x | sudo bash'},["code","curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash"]],["h3","2.\u5b89\u88c5\u4f9d\u8d56"],["pre",{lang:null,highlighted:'sudo yum install gcc<span class="token operator">-</span>c<span class="token operator">+</span><span class="token operator">+</span> make'},["code","sudo yum install gcc-c++ make"]],["h3","3.\u5b89\u88c5nodejs"],["pre",{lang:null,highlighted:'sudo yum <span class="token operator">-</span>y install nodejs\n<span class="token operator">/</span><span class="token operator">/</span>\u5982\u679c\u4ee5\u4e0a\u6b65\u9aa4\u4e0d\u80fd\u5b89\u88c5 \u6700\u65b0\u7248 node\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u540e\u518d\u6267\u884c\u7b2c<span class="token number">3</span>\u6b65\uff1a\nsudo yum clean all\n<span class="token operator">/</span><span class="token operator">/</span>\u5982\u679c\u5b58\u5728\u591a\u4e2a nodesoucre\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c\u7b2c<span class="token number">1</span>\u7b2c<span class="token number">3</span>\u6b65\uff1a\nsudo rm <span class="token operator">-</span>fv <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>nodesource<span class="token operator">*</span>'},["code","sudo yum -y install nodejs\n//\u5982\u679c\u4ee5\u4e0a\u6b65\u9aa4\u4e0d\u80fd\u5b89\u88c5 \u6700\u65b0\u7248 node\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u540e\u518d\u6267\u884c\u7b2c3\u6b65\uff1a\nsudo yum clean all\n//\u5982\u679c\u5b58\u5728\u591a\u4e2a nodesoucre\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\uff0c\u7136\u540e\u91cd\u65b0\u6267\u884c\u7b2c1\u7b2c3\u6b65\uff1a\nsudo rm -fv /etc/yum.repos.d/nodesource*"]],["h3","4.\u5b89\u88c5cnpm"],["pre",{lang:null,highlighted:'npm install <span class="token operator">-</span>g cnpm <span class="token operator">-</span><span class="token operator">-</span>registry<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org'},["code","npm install -g cnpm --registry=https://registry.npm.taobao.org"]]],meta:{title:"CentOS7\u5b89\u88c5nodejs",publishDate:"2019-12-17T00:00:00.000Z",category:"development",abstract:"CentOS7\u5b89\u88c5nodejs",filename:"posts/development/CentOS7\u5b89\u88c5nodejs.md"}}}});