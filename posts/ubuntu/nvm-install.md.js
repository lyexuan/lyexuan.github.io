webpackJsonp([10],{695:function(n,s){n.exports={content:["article",["h3","\u80cc\u666f"],["p","\u53d7\u9650\u4e8elinux\u7684\u6743\u9650\u4f53\u7cfb\uff0c\u5168\u5c40\u5b89\u88c5\u67d0\u4e9bnpm\u5305\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u5bfc\u81f4\u5b89\u88c5\u5931\u8d25\u3002\u6211\u5728ubuntu\u4e0b\u7528vue-cli\u8fd0\u884cuni-app\u5e94\u7528\u7684\u65f6\u5019\uff0c\u8981\u5b89\u88c5sass-loader\u4f9d\u8d56\uff0c\u800csass-loader\u53c8\u4f9d\u8d56\u4e8enode-sass\uff0c\u4f46\u662f\u901a\u8fc7\u5e38\u89c4\u7684npm install node-sass --save-dev\u88c5\u4f9d\u8d56\uff0c\u88c5\u4e0d\u6210\u529f\uff0c\u5728\u7f51\u4e0a\u67e5\u4e86\u4e00\u4e9b\u8d44\u6599\u540e\uff0c\u5f97\u5230\u4e00\u4e9b\u89e3\u51b3\u65b9\u5f0f\uff0c\u4f46\u5b9e\u65bd\u540e\u603b\u8fd0\u5230\u5404\u79cd\u5404\u6837\u7684\u95ee\u9898\uff0c\u7ed3\u679c\u5e76\u6ca1\u6709\u6309\u7167\u7f51\u4e0a\u7684\u89e3\u51b3\u65b9\u6cd5\u6210\u529f\u89e3\u51b3\u95ee\u9898\uff0c\u4f46\u5f97\u5230\u4e86\u4e00\u4e2a\u601d\u8def\uff1a\u901a\u8fc7nvm\u5b89\u88c5node\uff0c\u7136\u540e\u518d\u5168\u5c40\u5b89\u88c5node-sass\uff0c\u56e0\u4e3a\u901a\u8fc7nvm\u7ba1\u7406node\uff0c\u5b89\u88c5\u7684\u4f9d\u8d56\u662f\u5b89\u88c5\u5230\u7528\u6237\u4e2a\u4eba\u5bb6\u76ee\u5f55\u4e0b\u7684\uff0c\u4e0d\u4f1a\u53d7\u5230\u6743\u9650\u7684\u5236\u7ea6\u3002"],["h3","\u5b89\u88c5nvm"],["p","\u4ed3\u5e93\u5730\u5740\uff1a",["a",{title:null,href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm"]],["p","\u4ecenvm\u7684\u5b89\u88c5\u4ecb\u7ecd\u6765\u770b\uff0c\u5176\u5b89\u88c5\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u7684\u547d\u4ee4\uff1a"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>o<span class="token operator">-</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>nvm<span class="token operator">-</span>sh<span class="token operator">/</span>nvm<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">35.3</span><span class="token operator">/</span>install<span class="token punctuation">.</span>sh | bash\n<span class="token operator">/</span><span class="token operator">/</span> \u6216\u8005\nwget <span class="token operator">-</span>qO<span class="token operator">-</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>nvm<span class="token operator">-</span>sh<span class="token operator">/</span>nvm<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">35.3</span><span class="token operator">/</span>install<span class="token punctuation">.</span>sh | bash'},["code","curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash\n// \u6216\u8005\nwget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash"]],["p","\u4f46\u662f\u771f\u6b63\u6267\u884c\u8d77\u6765\u5374\u4e0d\u987a\u5229\uff0c\u7531\u4e8e\u56fd\u5185\u7684\u7f51\u7edc\u73af\u5883\u95ee\u9898\uff0c\u4f1a\u62a5\u4ee5\u4e0b\u9519\u8bef\uff1a"],["pre",{lang:null,highlighted:'curl<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> Failed <span class="token keyword">to</span> connect <span class="token keyword">to</span> raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com port <span class="token number">443</span><span class="token punctuation">:</span> \u62d2\u7edd\u8fde\u63a5'},["code","curl: (7) Failed to connect to raw.githubusercontent.com port 443: \u62d2\u7edd\u8fde\u63a5"]],["p","\u4ed4\u7ec6\u9605\u8bfb\u4e86\u5b89\u88c5\u8bf4\u660e\uff0c\u8bf4\u660e\u539f\u6587\u662f\uff1a"],["pre",{lang:null,highlighted:'Running either of the above commands downloads a script <span class="token operator">and</span> runs it<span class="token punctuation">.</span> The script clones the nvm repository <span class="token keyword">to</span> ~<span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token punctuation">,</span> <span class="token operator">and</span> attempts <span class="token keyword">to</span> add the source lines from the snippet below <span class="token keyword">to</span> the correct profile file <span class="token punctuation">(</span>~<span class="token operator">/</span><span class="token punctuation">.</span>bash_profile<span class="token punctuation">,</span> ~<span class="token operator">/</span><span class="token punctuation">.</span>zshrc<span class="token punctuation">,</span> ~<span class="token operator">/</span><span class="token punctuation">.</span>profile<span class="token punctuation">,</span> <span class="token operator">or</span> ~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc<span class="token punctuation">)</span><span class="token punctuation">.</span>\n\nexport NVM_DIR<span class="token operator">=</span><span class="token string">"$([ -z "</span>${XDG_CONFIG_HOME<span class="token operator">-</span>}<span class="token string">" ] &amp;&amp; printf %s "</span>${HOME}<span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token string">" || printf %s "</span>${XDG_CONFIG_HOME}<span class="token operator">/</span>nvm<span class="token string">")"</span>\n<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> \\<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/nvm.sh"</span> # This loads nvm'},["code",'Running either of the above commands downloads a script and runs it. The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).\n\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm']],["p","\u7ffb\u8bd1\u8fc7\u6765\u5c31\u662f\u8bf4\uff0c\u4ee5\u4e0a\u63d0\u4f9b\u7684\u5b89\u88c5\u547d\u4ee4\u4f5c\u4e86\u4e24\u4ef6\u4e8b\u60c5\uff1a"],["p","1.\u5c06nvm\u7684\u4ee3\u7801\u4ed3\u5e93\u514b\u9686\u5230\u76ee\u5f55~/.nvm\u4e0b\uff1b"],["p","2.\u5c06\u8bf4\u660e\u4e2d\u63d0\u4f9b\u7684\u4ee3\u7801\u7247\u6bb5\u52a0\u5165\u5230\u6307\u5b9a\u7684\u6587\u4ef6\u4e2d\uff08\u8fd9\u4e2a\u6587\u4ef6\u53ef\u80fd\u662f~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc\u4e2d\u7684\u4e00\u4e2a\uff09\u3002"],["p","\u65e2\u7136\u5b89\u88c5\u547d\u4ee4\u6267\u884c\u5931\u8d25\u4e86\uff0c\u90a3\u6211\u5c31\u5c1d\u8bd5\u624b\u52a8\u6267\u884c\u5b89\u88c5\u547d\u4ee4\u4e2d\u5b9e\u73b0\u7684\u6b65\u9aa4\u3002"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">.</span>\u5728\u5bb6\u76ee\u5f55\u521b\u5efa\u6587\u4ef6\u5939<span class="token punctuation">.</span>nvm\ncd ~\nmkdir <span class="token punctuation">.</span>nvm\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">.</span>\u514b\u9686\u6e90\u4ee3\u7801\u5230 ~<span class="token operator">/</span><span class="token punctuation">.</span>nvm\ncd ~<span class="token operator">/</span><span class="token punctuation">.</span>nvm\nclone https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>nvm<span class="token operator">-</span>sh<span class="token operator">/</span>nvm<span class="token punctuation">.</span>git\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">.</span>\u4fee\u6b63\u76ee\u5f55\u7ed3\u6784\n\u514b\u9686\u5b8c\u6210\u540e\uff0c\u6e90\u4ee3\u7801\u4f1a\u653e\u5728~<span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token operator">/</span>nvm\u4e0b\uff0c\u9700\u8981\u7a0d\u5fae\u4fee\u6b63\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff0c\u628a~<span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token operator">/</span>nvm\u91cc\u8fb9\u7684\u6587\u4ef6\u5168\u90fd\u62f7\u8d1d\u5230~<span class="token operator">/</span><span class="token punctuation">.</span>nvm\u4e0b\u3002\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">.</span>\u5207\u6362\u6e90\u4ee3\u7801\u5230\u786e\u5207\u7684\u7248\u672c\u5206\u652f\ngit checkout v0<span class="token punctuation">.</span><span class="token number">35.3</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">.</span>\u7f16\u8f91~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc\u6587\u4ef6\uff08ubuntu20<span class="token punctuation">.</span><span class="token number">4</span>\u662f\u8fd9\u4e2a\u6587\u4ef6\uff09\n\u628a\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230\u6587\u4ef6\u4e2d\nexport NVM_DIR<span class="token operator">=</span><span class="token string">"$([ -z "</span>${XDG_CONFIG_HOME<span class="token operator">-</span>}<span class="token string">" ] &amp;&amp; printf %s "</span>${HOME}<span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token string">" || printf %s "</span>${XDG_CONFIG_HOME}<span class="token operator">/</span>nvm<span class="token string">")"</span>\n<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> \\<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/nvm.sh"</span> # This loads nvm\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">.</span>\u4f7f~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc\u751f\u6548\nsource ~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc'},["code",'// 1.\u5728\u5bb6\u76ee\u5f55\u521b\u5efa\u6587\u4ef6\u5939.nvm\ncd ~\nmkdir .nvm\n// 2.\u514b\u9686\u6e90\u4ee3\u7801\u5230 ~/.nvm\ncd ~/.nvm\nclone https://github.com/nvm-sh/nvm.git\n// 3.\u4fee\u6b63\u76ee\u5f55\u7ed3\u6784\n\u514b\u9686\u5b8c\u6210\u540e\uff0c\u6e90\u4ee3\u7801\u4f1a\u653e\u5728~/.nvm/nvm\u4e0b\uff0c\u9700\u8981\u7a0d\u5fae\u4fee\u6b63\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff0c\u628a~/.nvm/nvm\u91cc\u8fb9\u7684\u6587\u4ef6\u5168\u90fd\u62f7\u8d1d\u5230~/.nvm\u4e0b\u3002\n// 4.\u5207\u6362\u6e90\u4ee3\u7801\u5230\u786e\u5207\u7684\u7248\u672c\u5206\u652f\ngit checkout v0.35.3\n// 5.\u7f16\u8f91~/.bashrc\u6587\u4ef6\uff08ubuntu20.4\u662f\u8fd9\u4e2a\u6587\u4ef6\uff09\n\u628a\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230\u6587\u4ef6\u4e2d\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n// 6.\u4f7f~/.bashrc\u751f\u6548\nsource ~/.bashrc']],["p","\u81f3\u6b64nvm\u5e94\u5f53\u662f\u5b89\u88c5\u6210\u529f\u4e86\u3002"],["h3","\u5b89\u88c5node"],["p","\u7528nvm\u5b89\u88c5node\u7684\u65f6\u5019\uff0c\u7f51\u7edc\u53ef\u80fd\u5f88\u6162\uff0c\u53ef\u4ee5\u4f7f\u7528\u963f\u91cc\u955c\u50cf\u4e0b\u8f7d\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> \u5728~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff08\u767e\u5ea6\u4e00\u4e0b\u963f\u91cc\u955c\u50cf\uff0c\u5373\u5f97\u5230\u4ee5\u4e0b\u7f51\u5740https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>developer<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>mirror<span class="token operator">/</span>\uff0c\u91cc\u9762\u53c8\u5404\u79cd\u5404\u6837\u7684\u955c\u50cf\uff0c\u627e\u5230\u9700\u8981\u7684\uff0c\u91cc\u9762\u6709\u8bf4\u660e\u8981\u600e\u4e48\u4f7f\u7528\uff09\nexport NVM_NODEJS_ORG_MIRROR<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node\n<span class="token operator">/</span><span class="token operator">/</span> \u4fdd\u5b58\u6587\u4ef6\uff0c\u5e76\u6267\u884c\uff1a\nsource ~<span class="token operator">/</span><span class="token punctuation">.</span>bashrc'},["code","// \u5728~/.bashrc\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff08\u767e\u5ea6\u4e00\u4e0b\u963f\u91cc\u955c\u50cf\uff0c\u5373\u5f97\u5230\u4ee5\u4e0b\u7f51\u5740https://developer.aliyun.com/mirror/\uff0c\u91cc\u9762\u53c8\u5404\u79cd\u5404\u6837\u7684\u955c\u50cf\uff0c\u627e\u5230\u9700\u8981\u7684\uff0c\u91cc\u9762\u6709\u8bf4\u660e\u8981\u600e\u4e48\u4f7f\u7528\uff09\nexport NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node\n// \u4fdd\u5b58\u6587\u4ef6\uff0c\u5e76\u6267\u884c\uff1a\nsource ~/.bashrc"]],["p","\u8bbe\u7f6e\u5b8c\u955c\u50cf\uff0c\u5c31\u53ef\u4ee5\u5b89\u88c5nodejs\u4e86"],["pre",{lang:null,highlighted:'nvm install <span class="token number">14.3</span>'},["code","nvm install 14.3"]],["h3","\u5b89\u88c5node-sass"],["pre",{lang:null,highlighted:'SASS_BINARY_SITE<span class="token operator">=</span>http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>node<span class="token operator">-</span>sass npm install node<span class="token operator">-</span>sass'},["code","SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass npm install node-sass"]],["h3","\u5199\u5728\u6700\u540e"],["p","\u89e3\u51b3\u95ee\u9898\u5e94\u8be5\u4ece\u6839\u6e90\u7740\u624b\uff0c\u5b98\u65b9\u7684\u8bf4\u660e\u5f80\u5f80\u5df2\u7ecf\u7ed9\u51fa\u4e86\u7b54\u6848\uff0c\u4ece\u7f51\u4e0a\u627e\u5230\u7684\u89e3\u51b3\u65b9\u6848\u4e0d\u4e00\u5b9a\u80fd\u539f\u539f\u672c\u672c\u7167\u7740\u6b65\u9aa4\u505a\uff0c\u5173\u952e\u662f\u4ece\u4e2d\u5f97\u5230\u542f\u53d1\uff0c\u5f97\u5230\u89e3\u51b3\u95ee\u9898\u7684\u601d\u8def\u3002"]],meta:{title:"\u5b89\u88c5nvm",publishDate:"2020-06-03T00:00:00.000Z",category:"ubuntu",abstract:"\u5b89\u88c5nvm",order:6,filename:"posts/ubuntu/nvm-install.md"}}}});