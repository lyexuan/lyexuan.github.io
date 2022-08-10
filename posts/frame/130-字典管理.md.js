webpackJsonp([42],{609:function(n,a){n.exports={content:["article",["h2","\u4e00\u3001\u9759\u6001\u5b57\u5178"],["h3","\u5b9a\u4e49"],["p","\u5728'src/common/dict'\u4e2d\u5b9a\u4e49\u6574\u4e2a\u5e94\u7528\u7684\u5b57\u5178\u6570\u636e\u3002"],["h3","\u6ce8\u518c"],["p","\u5728\u5e94\u7528\u7684\u5165\u53e3\u7a0b\u5e8f'src/main.js'\u4e2d\u6ce8\u518c\u5b57\u5178\u6570\u636e\uff1a"],["pre",{lang:null,highlighted:'<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nimport { DICT_DATA } from <span class="token string">\'@/common/dict\'</span>\nimport { setDict } from <span class="token string">\'fzis-web/utils/data/dict\'</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token function">setDict</span><span class="token punctuation">(</span>DICT_DATA<span class="token punctuation">)</span>'},["code","...\nimport { DICT_DATA } from '@/common/dict'\nimport { setDict } from 'fzis-web/utils/data/dict'\n...\n...\nsetDict(DICT_DATA)"]],["h3","\u4f7f\u7528"],["p","'fzis-web/utils/data/dict'\u4e2d\u6709\u82e5\u5e72\u5b57\u5178\u4f7f\u7528\u7684\u65b9\u6cd5"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>\n <span class="token operator">*</span> \u83b7\u53d6\u9759\u6001\u5b57\u5178\u9009\u9879\n <span class="token operator">*</span> <span class="token variable">@param</span> {String} dictName \u5b57\u5178\u540d\u79f0\n <span class="token operator">*</span> <span class="token variable">@param</span> {Boolean} <span class="token punctuation">[</span>withAll<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">]</span> \u662f\u5426\u9644\u52a0\u5168\u90e8\u8fd9\u4e00\u9009\u9879\n <span class="token operator">*</span> <span class="token variable">@param</span> {String } <span class="token punctuation">[</span>valueType<span class="token operator">=</span><span class="token string">\'string\'</span><span class="token punctuation">]</span> \u9009\u9879\u503c\u7684\u6570\u636e\u7c7b\u578b<span class="token punctuation">,</span>\u53ef\u9009\u503c<span class="token string">\'string\'</span><span class="token punctuation">,</span> <span class="token string">\'number\'</span> \n <span class="token operator">*</span> <span class="token variable">@returns</span> {Array} options \u4e00\u7ec4\u9009\u9879\u503c\uff0c\u5e38\u7528\u4e8e<span class="token keyword">select</span><span class="token operator">/</span>radio<span class="token operator">/</span>checkbox\u7b49\u7ec4\u4ef6\n<span class="token operator">*</span><span class="token operator">/</span>\nfunction getOptions <span class="token punctuation">(</span>dictName <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> withAll <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> valueType <span class="token operator">=</span> <span class="token string">\'string\'</span><span class="token punctuation">)</span> {\n  let options <span class="token operator">=</span> withAll <span class="token operator">?</span> <span class="token punctuation">[</span>{ label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\'</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">null</span> }<span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>dictName <span class="token operator">&amp;</span><span class="token operator">&amp;</span> DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">)</span> {\n    options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">]</span>\n  }\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>valueType <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> {\n    options <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> {\n      item<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n      return item\n    }<span class="token punctuation">)</span>\n  }\n  return options\n}\n\n<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>\n <span class="token operator">*</span> \u6839\u636e\u503c\u83b7\u53d6\u9009\u9879\u5bf9\u8c61\n <span class="token operator">*</span> <span class="token variable">@param</span> {String|Number} value \u5b57\u6bb5\u503c\n <span class="token operator">*</span> <span class="token variable">@param</span> {String} dictName \u5b57\u5178\u540d\u79f0\n <span class="token operator">*</span> <span class="token variable">@return</span> {Object}\n<span class="token operator">*</span><span class="token operator">/</span>\nfunction getOption <span class="token punctuation">(</span>value<span class="token punctuation">,</span> dictName<span class="token punctuation">)</span> {\n  try {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>dictName <span class="token operator">&amp;</span><span class="token operator">&amp;</span> DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">)</span> {\n      <span class="token keyword">const</span> options <span class="token operator">=</span> DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">.</span>data\n      <span class="token keyword">const</span> target <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> || {}\n      return target\n    } <span class="token keyword">else</span> {\n      return {}\n    }\n  } <span class="token function">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> {\n    return {}\n  }\n}\n\n<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>\n <span class="token operator">*</span> \u6839\u636e\u503c\u83b7\u53d6\u540d\u79f0\n <span class="token operator">*</span> <span class="token variable">@param</span> {String|Number} value \u5b57\u6bb5\u503c\n <span class="token operator">*</span> <span class="token variable">@param</span> {String} dictName \u5b57\u5178\u540d\u79f0\n <span class="token operator">*</span> <span class="token variable">@return</span> {String} label \u5b57\u6bb5\u540d\u79f0\n<span class="token operator">*</span><span class="token operator">/</span>\nfunction getName <span class="token punctuation">(</span>value<span class="token punctuation">,</span> dictName<span class="token punctuation">)</span> {\n  <span class="token keyword">const</span> defaultLabel <span class="token operator">=</span> <span class="token string">\'\'</span>\n  let label <span class="token operator">=</span> defaultLabel\n  try {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>dictName <span class="token operator">&amp;</span><span class="token operator">&amp;</span> DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">)</span> {\n      <span class="token keyword">const</span> options <span class="token operator">=</span> DICT_DATA<span class="token punctuation">[</span>dictName<span class="token punctuation">]</span><span class="token punctuation">.</span>data\n      <span class="token keyword">const</span> target <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> {\n        label <span class="token operator">=</span> target<span class="token punctuation">.</span>label || defaultLabel\n      }\n    }\n  } <span class="token function">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> {\n    label <span class="token operator">=</span> <span class="token string">\'\'</span>\n  }\n  return label\n}'},["code","/**\n * \u83b7\u53d6\u9759\u6001\u5b57\u5178\u9009\u9879\n * @param {String} dictName \u5b57\u5178\u540d\u79f0\n * @param {Boolean} [withAll=false] \u662f\u5426\u9644\u52a0\u5168\u90e8\u8fd9\u4e00\u9009\u9879\n * @param {String } [valueType='string'] \u9009\u9879\u503c\u7684\u6570\u636e\u7c7b\u578b,\u53ef\u9009\u503c'string', 'number' \n * @returns {Array} options \u4e00\u7ec4\u9009\u9879\u503c\uff0c\u5e38\u7528\u4e8eselect/radio/checkbox\u7b49\u7ec4\u4ef6\n*/\nfunction getOptions (dictName = '', withAll = false, valueType = 'string') {\n  let options = withAll ? [{ label: '\u5168\u90e8', value: null }] : []\n  if (dictName && DICT_DATA[dictName]) {\n    options = [...options, ...DICT_DATA[dictName].data]\n  }\n  if (valueType === 'number') {\n    options = options.map(item => {\n      item.value = parseInt(item.value)\n      return item\n    })\n  }\n  return options\n}\n\n/**\n * \u6839\u636e\u503c\u83b7\u53d6\u9009\u9879\u5bf9\u8c61\n * @param {String|Number} value \u5b57\u6bb5\u503c\n * @param {String} dictName \u5b57\u5178\u540d\u79f0\n * @return {Object}\n*/\nfunction getOption (value, dictName) {\n  try {\n    if (dictName && DICT_DATA[dictName]) {\n      const options = DICT_DATA[dictName].data\n      const target = options.filter(item => item.value.toString() === value.toString())[0] || {}\n      return target\n    } else {\n      return {}\n    }\n  } catch(e) {\n    return {}\n  }\n}\n\n/**\n * \u6839\u636e\u503c\u83b7\u53d6\u540d\u79f0\n * @param {String|Number} value \u5b57\u6bb5\u503c\n * @param {String} dictName \u5b57\u5178\u540d\u79f0\n * @return {String} label \u5b57\u6bb5\u540d\u79f0\n*/\nfunction getName (value, dictName) {\n  const defaultLabel = ''\n  let label = defaultLabel\n  try {\n    if (dictName && DICT_DATA[dictName]) {\n      const options = DICT_DATA[dictName].data\n      const target = options.filter(item => item.value.toString() === value.toString())[0]\n      if (target) {\n        label = target.label || defaultLabel\n      }\n    }\n  } catch(e) {\n    label = ''\n  }\n  return label\n}"]],["h2","\u4e8c\u3001\u52a8\u6001\u5b57\u5178"]],meta:{title:"\u5b57\u5178\u7ba1\u7406",publishDate:"2021-01-05T00:00:00.000Z",createDate:"2021-01-05T00:00:00.000Z",category:"frame",abstract:"\u5b57\u5178\u7ba1\u7406",order:130,filename:"posts/frame/130-\u5b57\u5178\u7ba1\u7406.md"}}}});