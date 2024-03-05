webpackJsonp([11],{664:function(n,a){n.exports={content:["article",["h3","\u62a5\u9519\u4fe1\u606f"],["pre",{lang:null,highlighted:'The disk contains an unclean file system <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\nMetadata kept <span class="token keyword">in</span> Windows cache<span class="token punctuation">,</span> refused <span class="token keyword">to</span> mount<span class="token punctuation">.</span>\nFalling back <span class="token keyword">to</span> read<span class="token operator">-</span>only mount because the NTFS partition is <span class="token keyword">in</span> an\nunsafe state<span class="token punctuation">.</span> Please resume <span class="token operator">and</span> shutdown Windows fully <span class="token punctuation">(</span>no hibernation\n<span class="token operator">or</span> fast restarting<span class="token punctuation">.</span><span class="token punctuation">)</span>\nCould <span class="token operator">not</span> mount read<span class="token operator">-</span>write<span class="token punctuation">,</span> trying read<span class="token operator">-</span>only'},["code","The disk contains an unclean file system (0, 0).\nMetadata kept in Windows cache, refused to mount.\nFalling back to read-only mount because the NTFS partition is in an\nunsafe state. Please resume and shutdown Windows fully (no hibernation\nor fast restarting.)\nCould not mount read-write, trying read-only"]],["h3","\u89e3\u51b3\u65b9\u5f0f"],["pre",{lang:null,highlighted:'# \u5b89\u88c5\u4fee\u590d\u5de5\u5177\nsudo apt<span class="token operator">-</span>get install ntfs<span class="token operator">-</span>3g\n\n# \u6267\u884c\u4fee\u590d\nsudo ntfsfix <span class="token operator">/</span>dev<span class="token operator">/</span>sdb1'},["code","# \u5b89\u88c5\u4fee\u590d\u5de5\u5177\nsudo apt-get install ntfs-3g\n\n# \u6267\u884c\u4fee\u590d\nsudo ntfsfix /dev/sdb1"]]],meta:{title:"\u6302\u8f7dntfd\u78c1\u76d8\u5931\u8d25",publishDate:"2020-09-21T00:00:00.000Z",category:"ubuntu",abstract:"\u53cc\u7cfb\u7edf\u4e0b\u6302\u8f7dntfd\u78c1\u76d8\u5931\u8d25\u7684\u89e3\u51b3\u65b9\u5f0f",filename:"posts/ubuntu/mount-ntfs-fail.md"}}}});