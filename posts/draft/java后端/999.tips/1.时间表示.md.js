webpackJsonp([87],{613:function(n,a){n.exports={content:["article",["h1","MySql"],["p","datetime"],["h1","Java"],["p","java.time.LocalDateTime"],["h1","Spring Boot\u683c\u5f0f\u5316LocalDateTime"],["h2","\u5355\u72ec\u5bf9\u5b57\u6bb5\u8fdb\u884c\u8bbe\u7f6e"],["pre",{lang:null,highlighted:'@<span class="token function">JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">,</span> timezone <span class="token operator">=</span> <span class="token string">"GMT+8"</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u5e8f\u5217\u5316\n@<span class="token function">DateTimeFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> \u53cd\u5e8f\u5217\u5316\nprivate LocalDateTime deleteTime<span class="token comment" spellcheck="true">;</span>'},["code",'@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8") // \u5e8f\u5217\u5316\n@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") // \u53cd\u5e8f\u5217\u5316\nprivate LocalDateTime deleteTime;']],["h2","\u5168\u5c40\u8bbe\u7f6e"],["h3","\u5b9a\u4e49\u8f6c\u6362\u5668"],["pre",{lang:null,highlighted:'import com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span>DeserializationFeature<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span>ObjectMapper<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span>module<span class="token punctuation">.</span>SimpleModule<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>deser<span class="token punctuation">.</span>LocalDateDeserializer<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>deser<span class="token punctuation">.</span>LocalDateTimeDeserializer<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>deser<span class="token punctuation">.</span>LocalTimeDeserializer<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>ser<span class="token punctuation">.</span>LocalDateSerializer<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>ser<span class="token punctuation">.</span>LocalDateTimeSerializer<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>datatype<span class="token punctuation">.</span>jsr310<span class="token punctuation">.</span>ser<span class="token punctuation">.</span>LocalTimeSerializer<span class="token comment" spellcheck="true">;</span>\n\nimport java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>LocalDate<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>LocalDateTime<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>LocalTime<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span>DateTimeFormatter<span class="token comment" spellcheck="true">;</span>\n\npublic class JacksonObjectMapper extends ObjectMapper {\n    public <span class="token keyword">static</span> final String DEFAULT_DATE_FORMAT <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd"</span><span class="token comment" spellcheck="true">;</span>\n    public <span class="token keyword">static</span> final String DEFAULT_TIME_FORMAT <span class="token operator">=</span> <span class="token string">"HH:mm:ss"</span><span class="token comment" spellcheck="true">;</span>\n    public <span class="token keyword">static</span> final String DEFAULT_DATE_TIME_FORMAT <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token operator">/</span><span class="token operator">/</span> public <span class="token keyword">static</span> final String DATE_TIME_FORMAT_NO_SECOND <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm"</span><span class="token comment" spellcheck="true">;</span>\n\n    public JacksonObjectMapper <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        <span class="token function">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> \u6536\u5230\u672a\u77e5\u5c5e\u6027\u65f6\u4e0d\u62a5\u5f02\u5e38\n        this<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span>DeserializationFeature<span class="token punctuation">.</span>FAIL_ON_UNKNOWN_PROPERTIES<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> \u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u5c5e\u6027\u4e0d\u5b58\u5728\u7684\u517c\u5bb9\u5904\u7406\n        this<span class="token punctuation">.</span><span class="token function">getDeserializationConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withoutFeatures</span><span class="token punctuation">(</span>DeserializationFeature<span class="token punctuation">.</span>FAIL_ON_UNKNOWN_PROPERTIES<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n        SimpleModule simpleModule <span class="token operator">=</span> new <span class="token function">SimpleModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addDeserializer</span><span class="token punctuation">(</span>LocalDateTime<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalDateTimeDeserializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_DATE_TIME_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addDeserializer</span><span class="token punctuation">(</span>LocalDate<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalDateDeserializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_DATE_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addDeserializer</span><span class="token punctuation">(</span>LocalTime<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalTimeDeserializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_TIME_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addSerializer</span><span class="token punctuation">(</span>LocalDateTime<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalDateTimeSerializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_DATE_TIME_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addSerializer</span><span class="token punctuation">(</span>LocalDate<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalDateSerializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_DATE_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">addSerializer</span><span class="token punctuation">(</span>LocalTime<span class="token punctuation">.</span>class<span class="token punctuation">,</span> new <span class="token function">LocalTimeSerializer</span><span class="token punctuation">(</span>DateTimeFormatter<span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>DEFAULT_TIME_FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n        this<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span>simpleModule<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import com.fasterxml.jackson.databind.DeserializationFeature;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.fasterxml.jackson.databind.module.SimpleModule;\nimport com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;\nimport com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;\nimport com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;\nimport com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;\nimport com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;\nimport com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;\n\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class JacksonObjectMapper extends ObjectMapper {\n    public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";\n    public static final String DEFAULT_TIME_FORMAT = "HH:mm:ss";\n    public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";\n    // public static final String DATE_TIME_FORMAT_NO_SECOND = "yyyy-MM-dd HH:mm";\n\n    public JacksonObjectMapper () {\n        super();\n        // \u6536\u5230\u672a\u77e5\u5c5e\u6027\u65f6\u4e0d\u62a5\u5f02\u5e38\n        this.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);\n        // \u53cd\u5e8f\u5217\u5316\u65f6\uff0c\u5c5e\u6027\u4e0d\u5b58\u5728\u7684\u517c\u5bb9\u5904\u7406\n        this.getDeserializationConfig().withoutFeatures(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);\n\n        SimpleModule simpleModule = new SimpleModule()\n                .addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))\n                .addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))\n                .addDeserializer(LocalTime.class, new LocalTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)))\n                .addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))\n                .addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))\n                .addSerializer(LocalTime.class, new LocalTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)));\n\n        this.registerModule(simpleModule);\n    }\n}']],["h3","\u5728\u914d\u7f6e\u4e2d\u4f7f\u7528\u8f6c\u6362\u5668"],["pre",{lang:null,highlighted:'<span class="token variable">@Configuration</span>\npublic class WebConfig implements WebMvcConfigurer {\n    <span class="token variable">@Override</span>\n    public void <span class="token function">extendMessageConverters</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>HttpMessageConverter<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">></span><span class="token operator">></span> converters<span class="token punctuation">)</span> {\n        <span class="token operator">/</span><span class="token operator">/</span> WebMvcConfigurer<span class="token punctuation">.</span>super<span class="token punctuation">.</span><span class="token function">extendMessageConverters</span><span class="token punctuation">(</span>converters<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MappingJackson2HttpMessageConverter converter <span class="token operator">=</span> new <span class="token function">MappingJackson2HttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        converter<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>new <span class="token function">JacksonObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> converter<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n    }\n}'},["code","@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {\n        // WebMvcConfigurer.super.extendMessageConverters(converters);\n        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();\n        converter.setObjectMapper(new JacksonObjectMapper());\n        converters.add(0, converter);\n\n    }\n}"]]],meta:{filename:"posts/draft/java\u540e\u7aef/999.tips/1.\u65f6\u95f4\u8868\u793a.md"}}}});