webpackJsonp([20],{541:function(n,s){n.exports={content:["article",["pre",{lang:null,highlighted:'function <span class="token function">_arrayBufferToBase64</span><span class="token punctuation">(</span> raw <span class="token punctuation">)</span> {\n    var base64 <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token comment" spellcheck="true">;</span>\n    var encodings <span class="token operator">=</span> <span class="token string">\'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\'</span><span class="token comment" spellcheck="true">;</span>\n    var bytes <span class="token operator">=</span> new <span class="token function">Uint8Array</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    var byteLength <span class="token operator">=</span> bytes<span class="token punctuation">.</span>byteLength<span class="token comment" spellcheck="true">;</span>\n    var byteRemainder <span class="token operator">=</span> byteLength % <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>\n    var mainLength <span class="token operator">=</span> byteLength <span class="token operator">-</span> byteRemainder<span class="token comment" spellcheck="true">;</span>\n    var a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token comment" spellcheck="true">;</span>\n    var chunk<span class="token comment" spellcheck="true">;  </span>\n    <span class="token operator">/</span><span class="token operator">/</span> Main loop deals <span class="token keyword">with</span> bytes <span class="token keyword">in</span> chunks of <span class="token number">3</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; mainLength; i = i + 3) {</span>\n        <span class="token operator">/</span><span class="token operator">/</span> Combine the three bytes into a single integer\n        chunk <span class="token operator">=</span> <span class="token punctuation">(</span>bytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> | <span class="token punctuation">(</span>bytes<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> | bytes<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> Use bitmasks <span class="token keyword">to</span> extract <span class="token number">6</span><span class="token operator">-</span>bit segments from the triplet\n        a <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">16515072</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">18</span><span class="token comment" spellcheck="true">; // 16515072 = (2^6 - 1) &lt;&lt; 18</span>\n        b <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">258048</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">12</span><span class="token comment" spellcheck="true">; // 258048 = (2^6 - 1) &lt;&lt; 12</span>\n        c <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">4032</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">6</span><span class="token comment" spellcheck="true">; // 4032 = (2^6 - 1) &lt;&lt; 6</span>\n        d <span class="token operator">=</span> chunk <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token comment" spellcheck="true">; // 63 = 2^6 - 1</span>\n        <span class="token operator">/</span><span class="token operator">/</span> Convert the raw binary segments <span class="token keyword">to</span> the appropriate ASCII encoding\n        base64 <span class="token operator">+=</span> encodings<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n    }\n    <span class="token operator">/</span><span class="token operator">/</span> Deal <span class="token keyword">with</span> the remaining bytes <span class="token operator">and</span> padding\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>byteRemainder <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> {\n        chunk <span class="token operator">=</span> bytes<span class="token punctuation">[</span>mainLength<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n        a <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">252</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">2</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">252</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">6</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> Set the <span class="token number">4</span> least significant bits <span class="token keyword">to</span> zero\n        b <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">4</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">^</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n        base64 <span class="token operator">+=</span> encodings<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">\'==\'</span><span class="token comment" spellcheck="true">;</span>\n    }\n    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>byteRemainder <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> {\n        chunk <span class="token operator">=</span> <span class="token punctuation">(</span>bytes<span class="token punctuation">[</span>mainLength<span class="token punctuation">]</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> | bytes<span class="token punctuation">[</span>mainLength <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n        a <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">16128</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">16128</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">6</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">8</span><span class="token comment" spellcheck="true">;</span>\n        b <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">1008</span><span class="token punctuation">)</span> <span class="token operator">></span><span class="token operator">></span> <span class="token number">4</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">1008</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">6</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">4</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> Set the <span class="token number">2</span> least significant bits <span class="token keyword">to</span> zero\n        c <span class="token operator">=</span> <span class="token punctuation">(</span>chunk <span class="token operator">&amp;</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">15</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">^</span><span class="token number">4</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n        base64 <span class="token operator">+=</span> encodings<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">+</span> encodings<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">\'=\'</span><span class="token comment" spellcheck="true">;</span>\n    }\n    return "data<span class="token punctuation">:</span>image<span class="token operator">/</span>jpeg<span class="token comment" spellcheck="true">;base64," + base64;</span>\n}'},["code","function _arrayBufferToBase64( raw ) {\n    var base64 = '';\n    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n    var bytes = new Uint8Array(raw);\n    var byteLength = bytes.byteLength;\n    var byteRemainder = byteLength % 3;\n    var mainLength = byteLength - byteRemainder;\n    var a, b, c, d;\n    var chunk;  \n    // Main loop deals with bytes in chunks of 3\n    for (var i = 0; i < mainLength; i = i + 3) {\n        // Combine the three bytes into a single integer\n        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];\n        // Use bitmasks to extract 6-bit segments from the triplet\n        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18\n        b = (chunk & 258048) >> 12; // 258048 = (2^6 - 1) << 12\n        c = (chunk & 4032) >> 6; // 4032 = (2^6 - 1) << 6\n        d = chunk & 63; // 63 = 2^6 - 1\n        // Convert the raw binary segments to the appropriate ASCII encoding\n        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];\n    }\n    // Deal with the remaining bytes and padding\n    if (byteRemainder == 1) {\n        chunk = bytes[mainLength];\n        a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2;\n        // Set the 4 least significant bits to zero\n        b = (chunk & 3) << 4 // 3 = 2^2 - 1;\n        base64 += encodings[a] + encodings[b] + '==';\n    }\n    else if (byteRemainder == 2) {\n        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];\n        a = (chunk & 16128) >> 8 // 16128 = (2^6 - 1) << 8;\n        b = (chunk & 1008) >> 4 // 1008 = (2^6 - 1) << 4;\n        // Set the 2 least significant bits to zero\n        c = (chunk & 15) << 2 // 15 = 2^4 - 1;\n        base64 += encodings[a] + encodings[b] + encodings[c] + '=';\n    }\n    return \"data:image/jpeg;base64,\" + base64;\n}"]]],meta:{title:"Uint8Array\u8f6c\u6210base64",publishDate:"2019-3-07",category:"development",abstract:"Uint8Array\u8f6c\u6210base64\u7684\u65b9\u6cd5\u3002",filename:"posts/development/uint8array-to-base64.md"}}}});