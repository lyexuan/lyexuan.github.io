webpackJsonp([91],{609:function(a,n){a.exports={content:["article",["h1","\u53c2\u8003"],["ul",["li",["p",["a",{title:null,href:"https://landscape.cncf.io/"},"https://landscape.cncf.io/"]]],["li",["p","www.docker.tips"]],["li",["p",["a",{title:null,href:"https://get.docker.com/"},"https://get.docker.com/"]]]],["h1","\u4e0b\u8f7d\u5b89\u88c5\u811a\u672c"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>fsSL get<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>com <span class="token operator">-</span>o get<span class="token operator">-</span>docker<span class="token punctuation">.</span>sh'},["code","curl -fsSL get.docker.com -o get-docker.sh"]],["h1","\u5b89\u88c5"],["pre",{lang:null,highlighted:'sh get<span class="token operator">-</span>docker<span class="token punctuation">.</span>sh'},["code","sh get-docker.sh"]],["h1","\u95ee\u9898"],["h2","1"],["pre",{lang:null,highlighted:'docker<span class="token punctuation">:</span> Error response from daemon<span class="token punctuation">:</span> driver failed programming external connectivity on endpoint objective_wozniak <span class="token punctuation">(</span>05f66cf3e930677a362f2bc1f1de2d6039b0df4e52a5b5ad97459f4cae039c69<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token punctuation">(</span>iptables failed<span class="token punctuation">:</span> iptables <span class="token operator">-</span><span class="token operator">-</span>wait <span class="token operator">-</span>t nat <span class="token operator">-</span>A DOCKER <span class="token operator">-</span>p tcp <span class="token operator">-</span>d <span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span> <span class="token operator">-</span><span class="token operator">-</span>dport <span class="token number">80</span> <span class="token operator">-</span>j DNAT <span class="token operator">-</span><span class="token operator">-</span><span class="token keyword">to</span><span class="token operator">-</span>destination <span class="token number">172.17</span><span class="token punctuation">.</span><span class="token number">0.2</span><span class="token punctuation">:</span><span class="token number">80</span> ! <span class="token operator">-</span>i docker0<span class="token punctuation">:</span> iptables<span class="token punctuation">:</span> No chain<span class="token operator">/</span>target<span class="token operator">/</span>match by that name<span class="token punctuation">.</span>'},["code","docker: Error response from daemon: driver failed programming external connectivity on endpoint objective_wozniak (05f66cf3e930677a362f2bc1f1de2d6039b0df4e52a5b5ad97459f4cae039c69):  (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 80 -j DNAT --to-destination 172.17.0.2:80 ! -i docker0: iptables: No chain/target/match by that name."]],["p","\u89e3\u51b3"],["pre",{lang:null,highlighted:'sudo pkill docker\nsudo iptables <span class="token operator">-</span>t nat <span class="token operator">-</span>F\nsudo ifconfig docker0 down\nsudo brctl delbr docker0\nsudo systemctl restart docker'},["code","sudo pkill docker\nsudo iptables -t nat -F\nsudo ifconfig docker0 down\nsudo brctl delbr docker0\nsudo systemctl restart docker"]]],meta:{filename:"posts/draft/java\u540e\u7aef/997.docker/1.\u5b89\u88c5.md"}}}});