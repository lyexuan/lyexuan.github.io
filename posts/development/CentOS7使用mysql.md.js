webpackJsonp([130],{547:function(s,a){s.exports={content:["article",["h2","\u4e00\u3001\u5b89\u88c5"],["h3","1.\u5c06mysql\u7684yum\u4ed3\u5e93\u6dfb\u52a0\u5230\u64cd\u4f5c\u7cfb\u7edf\u7684\u4ed3\u5e93\u5217\u8868\u4e2d\u53bb"],["pre",{lang:null,highlighted:'<span class="token number">1</span><span class="token punctuation">.</span>\u8bbf\u95eehttps<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>dev<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>com<span class="token operator">/</span>downloads<span class="token operator">/</span>repo<span class="token operator">/</span>yum<span class="token operator">/</span>\u4e0b\u8f7d\uff1b\n<span class="token number">2</span><span class="token punctuation">.</span>\u6267\u884c wget <span class="token operator">-</span>i <span class="token operator">-</span>c http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>dev<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>com<span class="token operator">/</span>get<span class="token operator">/</span>mysql80<span class="token operator">-</span>community<span class="token operator">-</span>release<span class="token operator">-</span>el7<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">.</span>noarch<span class="token punctuation">.</span>rpm\n<span class="token number">3</span><span class="token punctuation">.</span>yum <span class="token operator">-</span>y install mysql80<span class="token operator">-</span>community<span class="token operator">-</span>release<span class="token operator">-</span>el7<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">.</span>noarch<span class="token punctuation">.</span>rpm'},["code","1.\u8bbf\u95eehttps://dev.mysql.com/downloads/repo/yum/\u4e0b\u8f7d\uff1b\n2.\u6267\u884c wget -i -c http://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm\n3.yum -y install mysql80-community-release-el7-3.noarch.rpm"]],["h3","2.\u5b89\u88c5mysql\u670d\u52a1\u5668"],["pre",{lang:null,highlighted:'yum <span class="token operator">-</span>y install mysql<span class="token operator">-</span>community<span class="token operator">-</span>server'},["code","yum -y install mysql-community-server"]],["h3","3.\u542f\u52a8mysql\u670d\u52a1"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span>\u542f\u52a8\u670d\u52a1\nsudo service mysqld start\n<span class="token operator">/</span><span class="token operator">/</span>\u67e5\u770b\u670d\u52a1\u542f\u52a8\u72b6\u6001\nsudo service mysqld status'},["code","//\u542f\u52a8\u670d\u52a1\nsudo service mysqld start\n//\u67e5\u770b\u670d\u52a1\u542f\u52a8\u72b6\u6001\nsudo service mysqld status"]],["h3","4.\u67e5\u770b\u5e76\u4fee\u6539root\u5bc6\u7801"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span>\u67e5\u770b<span class="token operator">=</span>QetZ75Voi<span class="token operator">-</span><span class="token punctuation">)</span>\nsudo grep <span class="token string">\'temporary password\'</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>mysqld<span class="token punctuation">.</span>log\n<span class="token operator">/</span><span class="token operator">/</span>\u4fee\u6539\nmysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p<span class="token comment" spellcheck="true">;</span>\nALTER USER <span class="token string">\'root\'</span>@<span class="token string">\'localhost\'</span> IDENTIFIED BY <span class="token string">\'newPassword\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span>\u91cd\u542fmysql\u670d\u52a1\nsystemctl restart mysqld'},["code","//\u67e5\u770b=QetZ75Voi-)\nsudo grep 'temporary password' /var/log/mysqld.log\n//\u4fee\u6539\nmysql -uroot -p;\nALTER USER 'root'@'localhost' IDENTIFIED BY 'newPassword';\n//\u91cd\u542fmysql\u670d\u52a1\nsystemctl restart mysqld"]],["h3","5.\u79fb\u9664yum\u5217\u8868"],["pre",{lang:null,highlighted:'yum <span class="token operator">-</span>y remove mysql80<span class="token operator">-</span>community<span class="token operator">-</span>release<span class="token operator">-</span>el7<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">.</span>noarch<span class="token punctuation">.</span>rpm'},["code","yum -y remove mysql80-community-release-el7-3.noarch.rpm"]],["h3","6.\u6dfb\u52a0\u8fdc\u7a0b\u8d26\u6237"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span>use mysql<span class="token comment" spellcheck="true">;</span>\ncreate user <span class="token string">\'username\'</span>@<span class="token string">\'%\'</span> identified by <span class="token string">\'password\'</span><span class="token comment" spellcheck="true">;</span>\ngrant all privileges on <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> username@<span class="token string">\'%\'</span> <span class="token keyword">with</span> grant option<span class="token comment" spellcheck="true">;</span>\nflush privileges<span class="token comment" spellcheck="true">;</span>'},["code","//use mysql;\ncreate user 'username'@'%' identified by 'password';\ngrant all privileges on *.* to username@'%' with grant option;\nflush privileges;"]],["h3","7.\u670d\u52a1\u5668\u9632\u706b\u5899\u5f00\u653e\u8fdc\u7a0b\u8bbf\u95ee\u7684\u7aef\u53e3"],["pre",{lang:null,highlighted:'firewall<span class="token operator">-</span>cmd <span class="token operator">-</span><span class="token operator">-</span>zone<span class="token operator">=</span>public <span class="token operator">-</span><span class="token operator">-</span>add<span class="token operator">-</span>port<span class="token operator">=</span><span class="token number">3306</span><span class="token operator">/</span>tcp <span class="token operator">-</span><span class="token operator">-</span>permanent'},["code","firewall-cmd --zone=public --add-port=3306/tcp --permanent"]],["pre",{lang:null,highlighted:'firewall<span class="token operator">-</span>cmd <span class="token operator">-</span><span class="token operator">-</span>reload'},["code","firewall-cmd --reload"]],["h2","\u4e8c\u3001\u547d\u4ee4\u884c\u5907\u4efd\u548c\u6062\u590d\u6570\u636e\u5e93"],["h3","1.\u5907\u4efd"],["pre",{lang:null,highlighted:'\u5907\u4efd\u547d\u4ee4<span class="token punctuation">:</span>\u683c\u5f0f\uff1amysqldump <span class="token operator">-</span>h\u4e3b\u673a\u540d <span class="token operator">-</span>P\u7aef\u53e3 <span class="token operator">-</span>u\u7528\u6237\u540d <span class="token operator">-</span>p\u5bc6\u7801 <span class="token operator">-</span><span class="token operator">-</span>database \u6570\u636e\u5e93\u540d <span class="token operator">></span> \u6587\u4ef6\u540d<span class="token punctuation">.</span>sql\n\n\u5907\u4efd\u538b\u7f29<span class="token punctuation">:</span>\u683c\u5f0f\uff1amysqldump <span class="token operator">-</span>h\u4e3b\u673a\u540d <span class="token operator">-</span>P\u7aef\u53e3 <span class="token operator">-</span>u\u7528\u6237\u540d <span class="token operator">-</span>p\u5bc6\u7801 <span class="token operator">-</span><span class="token operator">-</span>database \u6570\u636e\u5e93\u540d | gzip <span class="token operator">></span> \u6587\u4ef6\u540d<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>gz'},["code","\u5907\u4efd\u547d\u4ee4:\u683c\u5f0f\uff1amysqldump -h\u4e3b\u673a\u540d -P\u7aef\u53e3 -u\u7528\u6237\u540d -p\u5bc6\u7801 --database \u6570\u636e\u5e93\u540d > \u6587\u4ef6\u540d.sql\n\n\u5907\u4efd\u538b\u7f29:\u683c\u5f0f\uff1amysqldump -h\u4e3b\u673a\u540d -P\u7aef\u53e3 -u\u7528\u6237\u540d -p\u5bc6\u7801 --database \u6570\u636e\u5e93\u540d | gzip > \u6587\u4ef6\u540d.sql.gz"]],["h3","2.\u6062\u590d"],["pre",{lang:null,highlighted:'mysql <span class="token operator">-</span>u\u7528\u6237\u540d <span class="token operator">-</span>p\u5bc6\u7801 <span class="token operator">&lt;</span> \u6587\u4ef6\u540d<span class="token punctuation">.</span>sql'},["code","mysql -u\u7528\u6237\u540d -p\u5bc6\u7801 < \u6587\u4ef6\u540d.sql"]],["h2","\u4e09\u3001nodejs\u5e94\u7528\u8fde\u63a5\u6570\u636e\u62a5\u9519\u89e3\u51b3"],["p","mysql\u7248\u672c\u4e3a8"],["h4","\u9519\u8bef\u4fe1\u606f\uff1a"],["pre",{lang:null,highlighted:'Error<span class="token punctuation">:</span> ER_NOT_SUPPORTED_AUTH_MODE<span class="token punctuation">:</span> Client does <span class="token operator">not</span> support authentication protocol requested by server<span class="token comment" spellcheck="true">; consider upgrading MySQL client</span>'},["code","Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"]],["h4","\u4fee\u590d\u65b9\u5f0f\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span>\u4fee\u6539\u7528\u6237\u7684\u8ba4\u8bc1\u89c4\u5219\nalter user <span class="token string">\'username\'</span>@<span class="token string">\'%\'</span> identified <span class="token keyword">with</span> mysql_native_password by <span class="token string">\'password\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span>\u5237\u65b0\u6743\u9650\nflush privileges<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span>\u91cd\u542fmysql\u670d\u52a1\nsystemctl restart mysqld'},["code","//\u4fee\u6539\u7528\u6237\u7684\u8ba4\u8bc1\u89c4\u5219\nalter user 'username'@'%' identified with mysql_native_password by 'password';\n//\u5237\u65b0\u6743\u9650\nflush privileges;\n//\u91cd\u542fmysql\u670d\u52a1\nsystemctl restart mysqld"]]],meta:{title:"CentOS7\u4f7f\u7528mysql",publishDate:"2019-12-17T00:00:00.000Z",category:"development",abstract:"CentOS7\u4f7f\u7528mysql",filename:"posts/development/CentOS7\u4f7f\u7528mysql.md"}}}});