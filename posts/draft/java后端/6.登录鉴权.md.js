webpackJsonp([98],{595:function(n,s){n.exports={content:["article",["h1","\u7b80\u5355\u6d41\u7a0b"],["h2","\uff081\uff09\u767b\u5f55"],["p","\u53d1\u9001\u8d26\u53f7\u5bc6\u7801\u5230\u670d\u52a1\u7aef\n\u670d\u52a1\u7aef\u63a5\u6536\n\u67e5\u6570\u636e\u5e93\u6821\u9a8c\n\u6821\u9a8c\u901a\u8fc7\u751f\u6210\u4ee4\u724c\u5e76\u8fd4\u56de"],["h2","\uff082\uff09\u9274\u6743"],["p","\u643a\u5e26\u4ee4\u724c\u8bbf\u95ee\u670d\u52a1\n\u89e3\u5bc6\u4ee4\u724c\n\u67e5\u8be2\u7528\u6237\u6570\u636e"],["h1","\u53c2\u8003\u8fde\u63a5"],["ul",["li",["p",["a",{title:null,href:"https://blog.csdn.net/wenjiangwang/article/details/135126120"},"https://blog.csdn.net/wenjiangwang/article/details/135126120"]]],["li",["p",["a",{title:null,href:"https://blog.csdn.net/weixin_46195957/article/details/115326648"},"https://blog.csdn.net/weixin_46195957/article/details/115326648"]]]],["h1","jwt\u7b80\u8981\u8bf4\u660e"],["p","Jwt\u6784\u6210\nHeader\uff08\u5934\u90e8\uff09\uff1a\u653e\u6709\u7b7e\u540d\u7b97\u6cd5\u548c\u4ee4\u724c\u7c7b\u578b\nPayload\uff08\u8d1f\u8f7d\uff09\uff1a\u4f60\u5728\u4ee4\u724c\u4e0a\u9644\u5e26\u7684\u4fe1\u606f\uff1a\u6bd4\u5982\u7528\u6237\u7684\u59d3\u540d\uff0c\u8fd9\u6837\u4ee5\u540e\u9a8c\u8bc1\u4e86\u4ee4\u724c\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u4ece\u8fd9\u91cc\u83b7\u53d6\u4fe1\u606f\u800c\u4e0d\u7528\u518d\u67e5\u6570\u636e\u5e93\u4e86\nSignature\uff08\u7b7e\u540d\uff09\uff1a\u5bf9\u524d\u4e24\u90e8\u5206\u7684\u7b7e\u540d\uff0c\u9632\u6b62\u6570\u636e\u7be1\u6539"],["h1","\u751f\u547d\u4f9d\u8d56"],["p","pom.xml"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>dependency<span class="token operator">></span>\n    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>com<span class="token punctuation">.</span>auth0<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>\n    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>java<span class="token operator">-</span>jwt<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>\n    <span class="token operator">&lt;</span>version<span class="token operator">></span><span class="token number">3.4</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">></span>'},["code","<dependency>\n    <groupId>com.auth0</groupId>\n    <artifactId>java-jwt</artifactId>\n    <version>3.4.0</version>\n</dependency>"]],["h1","\u6784\u9020\u7528\u6237\u6570\u636e"],["p","user\u8868:id\u3001username\u3001password"],["h1","JWT\u4ee4\u724c\u751f\u6210\u548c\u6821\u9a8c"],["p","\u793a\u4f8b\u4ee3\u7801\uff1a"],["pre",{lang:null,highlighted:'import com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>JWT<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>JWTVerifier<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>algorithms<span class="token punctuation">.</span>Algorithm<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>auth0<span class="token punctuation">.</span>jwt<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span>DecodedJWT<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>lyexuan<span class="token punctuation">.</span>sb1<span class="token punctuation">.</span>domain<span class="token punctuation">.</span>User<span class="token comment" spellcheck="true">;</span>\nimport com<span class="token punctuation">.</span>lyexuan<span class="token punctuation">.</span>sb1<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span>UserMapper<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>GetMapping<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RequestParam<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RestController<span class="token comment" spellcheck="true">;</span>\n\nimport java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Calendar<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>HashMap<span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@RestController</span>\npublic class LoginController {\n    private final UserMapper userMapper<span class="token comment" spellcheck="true">;</span>\n\n    public LoginController <span class="token punctuation">(</span>UserMapper userMapper<span class="token punctuation">)</span> {\n        this<span class="token punctuation">.</span>userMapper <span class="token operator">=</span> userMapper<span class="token comment" spellcheck="true">;</span>\n    }\n\n    private final <span class="token keyword">static</span> String SECRET_KEY <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token comment" spellcheck="true">;</span>\n\n    @<span class="token function">GetMapping</span><span class="token punctuation">(</span><span class="token string">"/api/login"</span><span class="token punctuation">)</span>\n    public String login <span class="token punctuation">(</span>@<span class="token function">RequestParam</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span> String username<span class="token punctuation">,</span> @<span class="token function">RequestParam</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span> String password<span class="token punctuation">)</span> {\n        User user <span class="token operator">=</span>  userMapper<span class="token punctuation">.</span><span class="token function">checkUser</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>user !<span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> {\n            HashMap<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Object<span class="token operator">></span> map <span class="token operator">=</span> new HashMap<span class="token operator">&lt;></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            Calendar calendarInstance <span class="token operator">=</span> Calendar<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            calendarInstance<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Calendar<span class="token punctuation">.</span>SECOND<span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n            String token <span class="token operator">=</span> JWT<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">withHeader</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">withExpiresAt</span><span class="token punctuation">(</span>calendarInstance<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>Algorithm<span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>LoginController<span class="token punctuation">.</span>SECRET_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            return token<span class="token comment" spellcheck="true">;</span>\n        } <span class="token keyword">else</span> {\n            return <span class="token string">"-1"</span><span class="token comment" spellcheck="true">;</span>\n        }\n    }\n\n    @<span class="token function">GetMapping</span><span class="token punctuation">(</span><span class="token string">"/api/checkLogin"</span><span class="token punctuation">)</span>\n    public User checkLogin <span class="token punctuation">(</span>@<span class="token function">RequestParam</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span> String token<span class="token punctuation">)</span> {\n        User user <span class="token operator">=</span> new <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        JWTVerifier jwtVerifier <span class="token operator">=</span> JWT<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span>Algorithm<span class="token punctuation">.</span><span class="token function">HMAC256</span><span class="token punctuation">(</span>LoginController<span class="token punctuation">.</span>SECRET_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        DecodedJWT verify <span class="token operator">=</span> jwtVerifier<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>verify<span class="token punctuation">.</span><span class="token function">getClaim</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        user<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span>verify<span class="token punctuation">.</span><span class="token function">getClaim</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        user<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>verify<span class="token punctuation">.</span><span class="token function">getClaim</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        return user<span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import com.auth0.jwt.JWT;\nimport com.auth0.jwt.JWTVerifier;\nimport com.auth0.jwt.algorithms.Algorithm;\nimport com.auth0.jwt.interfaces.DecodedJWT;\nimport com.lyexuan.sb1.domain.User;\nimport com.lyexuan.sb1.mapper.UserMapper;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport java.util.Calendar;\nimport java.util.HashMap;\n\n@RestController\npublic class LoginController {\n    private final UserMapper userMapper;\n\n    public LoginController (UserMapper userMapper) {\n        this.userMapper = userMapper;\n    }\n\n    private final static String SECRET_KEY = "abc";\n\n    @GetMapping("/api/login")\n    public String login (@RequestParam("username") String username, @RequestParam("password") String password) {\n        User user =  userMapper.checkUser(username, password);\n        if (user != null) {\n            HashMap<String, Object> map = new HashMap<>();\n            Calendar calendarInstance = Calendar.getInstance();\n            calendarInstance.add(Calendar.SECOND, 180);\n\n            String token = JWT.create()\n                    .withHeader(map)\n                    .withClaim("id", user.getId())\n                    .withClaim("username", user.getUsername())\n                    .withClaim("password", user.getPassword())\n                    .withExpiresAt(calendarInstance.getTime())\n                    .sign(Algorithm.HMAC256(LoginController.SECRET_KEY));\n            return token;\n        } else {\n            return "-1";\n        }\n    }\n\n    @GetMapping("/api/checkLogin")\n    public User checkLogin (@RequestParam("token") String token) {\n        User user = new User();\n        JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(LoginController.SECRET_KEY)).build();\n        DecodedJWT verify = jwtVerifier.verify(token);\n        user.setId(verify.getClaim("id").asInt());\n        user.setUsername(verify.getClaim("username").asString());\n        user.setPassword(verify.getClaim("password").asString());\n        return user;\n    }\n}']]],meta:{filename:"posts/draft/java\u540e\u7aef/6.\u767b\u5f55\u9274\u6743.md"}}}});