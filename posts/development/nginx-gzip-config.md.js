webpackJsonp([21],{524:function(n,a){n.exports={content:["article",["pre",{lang:null,highlighted:'    # Enable Gzip compressed<span class="token punctuation">.</span>\n    # http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>nginx<span class="token punctuation">.</span>org<span class="token operator">/</span>en<span class="token operator">/</span>docs<span class="token operator">/</span>http<span class="token operator">/</span>ngx_http_gzip_module<span class="token punctuation">.</span>html#gzip_http_version\n    gzip on<span class="token comment" spellcheck="true">;</span>\n\n    # Compression level <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    <span class="token directive keyword">#5</span> is a perfect compromise between size <span class="token operator">and</span> cpu usage<span class="token punctuation">,</span> offering about\n    <span class="token directive keyword">#75</span>% reduction <span class="token keyword">for</span> most ascii files <span class="token punctuation">(</span>almost identical <span class="token keyword">to</span> level <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span>\n    gzip_comp_level    <span class="token number">9</span><span class="token comment" spellcheck="true">;</span>\n\n    # Don<span class="token string">\'t compress anything that\'</span>s already small <span class="token operator">and</span> unlikely <span class="token keyword">to</span> shrink much\n    # <span class="token keyword">if</span> at all <span class="token punctuation">(</span>the <span class="token keyword">default</span> is <span class="token number">20</span> bytes<span class="token punctuation">,</span> which is bad as that usually leads <span class="token keyword">to</span>\n    # larger files after gzipping<span class="token punctuation">)</span><span class="token punctuation">.</span>\n    gzip_min_length    <span class="token number">256</span><span class="token comment" spellcheck="true">;</span>\n    gzip_disable <span class="token string">"msie6"</span><span class="token comment" spellcheck="true">;</span>\n\n    gzip_buffers <span class="token number">32</span> 4k<span class="token comment" spellcheck="true">;</span>\n    gzip_http_version <span class="token number">1.1</span><span class="token comment" spellcheck="true">;</span>\n    # https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>mail<span class="token operator">-</span>archive<span class="token punctuation">.</span>com<span class="token operator">/</span>search<span class="token operator">?</span>l<span class="token operator">=</span>nginx<span class="token variable">@nginx</span><span class="token punctuation">.</span>org<span class="token operator">&amp;</span>q<span class="token operator">=</span>subject<span class="token punctuation">:</span>%22Gzip<span class="token operator">+</span>issue<span class="token operator">+</span><span class="token keyword">with</span><span class="token operator">+</span>Safari%<span class="token number">22</span><span class="token operator">&amp;</span>o<span class="token operator">=</span>newest<span class="token operator">&amp;</span>f<span class="token operator">=</span><span class="token number">1</span>  <span class="token keyword">for</span> safira\n    gzip_static on<span class="token comment" spellcheck="true">;</span>\n\n    # Compress data even <span class="token keyword">for</span> clients that are connecting <span class="token keyword">to</span> us via proxies<span class="token punctuation">,</span>\n    # identified by the <span class="token string">"Via"</span> header <span class="token punctuation">(</span>required <span class="token keyword">for</span> CloudFront<span class="token punctuation">)</span><span class="token punctuation">.</span>\n    gzip_proxied       any<span class="token comment" spellcheck="true">;</span>\n\n    # Tell proxies <span class="token keyword">to</span> cache both the gzipped <span class="token operator">and</span> regular version of a resource\n    # whenever the client\'s Accept<span class="token operator">-</span>Encoding capabilities header varies<span class="token comment" spellcheck="true">;</span>\n    # Avoids the issue where a non<span class="token operator">-</span>gzip capable client <span class="token punctuation">(</span>which is extremely rare\n    # today<span class="token punctuation">)</span> would display gibberish <span class="token keyword">if</span> their proxy gave them the gzipped version<span class="token punctuation">.</span>\n    gzip_vary          on<span class="token comment" spellcheck="true">;</span>\n\n    # Compress all output labeled <span class="token keyword">with</span> one of the following MIME<span class="token operator">-</span>types<span class="token punctuation">.</span>\n    gzip_types\n        application<span class="token operator">/</span>atom<span class="token operator">+</span>xml\n        # \u8fd9\u4e2aapplication<span class="token operator">/</span>x<span class="token operator">-</span>javascript\u8fd8\u662f\u6709\u533a\u522b\u7684\n        application<span class="token operator">/</span>javascript\n        application<span class="token operator">/</span>json\n        application<span class="token operator">/</span>ld<span class="token operator">+</span>json\n        application<span class="token operator">/</span>manifest<span class="token operator">+</span>json\n        application<span class="token operator">/</span>rss<span class="token operator">+</span>xml\n        application<span class="token operator">/</span>vnd<span class="token punctuation">.</span>geo<span class="token operator">+</span>json\n        application<span class="token operator">/</span>vnd<span class="token punctuation">.</span>ms<span class="token operator">-</span>fontobject\n        application<span class="token operator">/</span>x<span class="token operator">-</span>font<span class="token operator">-</span>ttf\n        application<span class="token operator">/</span>x<span class="token operator">-</span>web<span class="token operator">-</span>app<span class="token operator">-</span>manifest<span class="token operator">+</span>json\n        application<span class="token operator">/</span>xhtml<span class="token operator">+</span>xml\n        application<span class="token operator">/</span>xml\n        font<span class="token operator">/</span>opentype\n        image<span class="token operator">/</span>bmp\n        image<span class="token operator">/</span>svg<span class="token operator">+</span>xml\n        image<span class="token operator">/</span>x<span class="token operator">-</span>icon\n        text<span class="token operator">/</span>cache<span class="token operator">-</span>manifest\n        text<span class="token operator">/</span>css\n        text<span class="token operator">/</span>plain\n        text<span class="token operator">/</span>vcard\n        text<span class="token operator">/</span>vnd<span class="token punctuation">.</span>rim<span class="token punctuation">.</span>location<span class="token punctuation">.</span>xloc\n        text<span class="token operator">/</span>vtt\n        text<span class="token operator">/</span>x<span class="token operator">-</span>component\n        application<span class="token operator">/</span>octet<span class="token operator">-</span>stream\n        text<span class="token operator">/</span>x<span class="token operator">-</span>cross<span class="token operator">-</span>domain<span class="token operator">-</span>policy<span class="token comment" spellcheck="true">;</span>\n    # text<span class="token operator">/</span>html is always compressed by HttpGzipModule'},["code",'    # Enable Gzip compressed.\n    # http://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_http_version\n    gzip on;\n\n    # Compression level (1-9).\n    #5 is a perfect compromise between size and cpu usage, offering about\n    #75% reduction for most ascii files (almost identical to level 9).\n    gzip_comp_level    9;\n\n    # Don\'t compress anything that\'s already small and unlikely to shrink much\n    # if at all (the default is 20 bytes, which is bad as that usually leads to\n    # larger files after gzipping).\n    gzip_min_length    256;\n    gzip_disable "msie6";\n\n    gzip_buffers 32 4k;\n    gzip_http_version 1.1;\n    # https://www.mail-archive.com/search?l=nginx@nginx.org&q=subject:%22Gzip+issue+with+Safari%22&o=newest&f=1  for safira\n    gzip_static on;\n\n    # Compress data even for clients that are connecting to us via proxies,\n    # identified by the "Via" header (required for CloudFront).\n    gzip_proxied       any;\n\n    # Tell proxies to cache both the gzipped and regular version of a resource\n    # whenever the client\'s Accept-Encoding capabilities header varies;\n    # Avoids the issue where a non-gzip capable client (which is extremely rare\n    # today) would display gibberish if their proxy gave them the gzipped version.\n    gzip_vary          on;\n\n    # Compress all output labeled with one of the following MIME-types.\n    gzip_types\n        application/atom+xml\n        # \u8fd9\u4e2aapplication/x-javascript\u8fd8\u662f\u6709\u533a\u522b\u7684\n        application/javascript\n        application/json\n        application/ld+json\n        application/manifest+json\n        application/rss+xml\n        application/vnd.geo+json\n        application/vnd.ms-fontobject\n        application/x-font-ttf\n        application/x-web-app-manifest+json\n        application/xhtml+xml\n        application/xml\n        font/opentype\n        image/bmp\n        image/svg+xml\n        image/x-icon\n        text/cache-manifest\n        text/css\n        text/plain\n        text/vcard\n        text/vnd.rim.location.xloc\n        text/vtt\n        text/x-component\n        application/octet-stream\n        text/x-cross-domain-policy;\n    # text/html is always compressed by HttpGzipModule']]],meta:{title:"nginx-gzip\u914d\u7f6e",publishDate:"2018-12-28T00:00:00.000Z",category:"development",abstract:"nginx-gzip\u914d\u7f6e",filename:"posts/development/nginx-gzip-config.md"}}}});