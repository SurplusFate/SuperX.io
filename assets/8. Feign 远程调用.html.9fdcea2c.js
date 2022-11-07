import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as a,d as i,e as l,r as c}from"./app.1407a880.js";const o={},u=n("h1",{id:"_8-feign-远程调用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-feign-远程调用","aria-hidden":"true"},"#"),a(" 8. Feign 远程调用")],-1),r=n("p",null,"先来看我们以前利用 RestTemplate 发起远程调用的代码：",-1),d=n("p",null,[n("img",{src:"https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714174814204.png",alt:"image-20210714174814204"})],-1),g=n("p",null,"存在下面的问题：",-1),k=n("p",null,"•代码可读性差，编程体验不统一",-1),m=n("p",null,"•参数复杂 URL 难以维护",-1),v={href:"https://github.com/OpenFeign/feign",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>其作用就是帮助我们优雅的实现 http 请求的发送，解决上面提到的问题。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714174918088.png" alt="image-20210714174918088"></p><h2 id="_8-1-feign-替代-resttemplate" tabindex="-1"><a class="header-anchor" href="#_8-1-feign-替代-resttemplate" aria-hidden="true">#</a> 8.1.Feign 替代 RestTemplate</h2><p>Fegin 的使用步骤如下：</p><h3 id="_8-1-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_8-1-1-引入依赖" aria-hidden="true">#</a> 8.1.1.引入依赖</h3><p>我们在 order-service 服务的 pom 文件中引入 feign 的依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-2-添加注解" tabindex="-1"><a class="header-anchor" href="#_8-1-2-添加注解" aria-hidden="true">#</a> 8.1.2.添加注解</h3><p>在 order-service 的启动类添加注解开启 Feign 的功能：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714175102524.png" alt="image-20210714175102524"></p><h3 id="_8-1-3-编写-feign-的客户端" tabindex="-1"><a class="header-anchor" href="#_8-1-3-编写-feign-的客户端" aria-hidden="true">#</a> 8.1.3.编写 Feign 的客户端</h3><p>在 order-service 中新建一个接口，内容如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>order<span class="token punctuation">.</span>client</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>order<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">&quot;userservice&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserClient</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个客户端主要是基于 SpringMVC 的注解来声明远程调用的信息，比如：</p><ul><li>服务名称：userservice</li><li>请求方式：GET</li><li>请求路径：/user/{id}</li><li>请求参数：Long id</li><li>返回值类型：User</li></ul><p>这样，Feign 就可以帮助我们发送 http 请求，无需自己使用 RestTemplate 来发送了。</p><h3 id="_8-1-4-测试" tabindex="-1"><a class="header-anchor" href="#_8-1-4-测试" aria-hidden="true">#</a> 8.1.4.测试</h3><p>修改 order-service 中的 OrderService 类中的 queryOrderById 方法，使用 Feign 客户端代替 RestTemplate：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714175415087.png" alt="image-20210714175415087"></p><p>是不是看起来优雅多了。</p><h3 id="_8-1-5-总结" tabindex="-1"><a class="header-anchor" href="#_8-1-5-总结" aria-hidden="true">#</a> 8.1.5.总结</h3><p>使用 Feign 的步骤：</p><p>① 引入依赖</p><p>② 添加@EnableFeignClients 注解</p><p>③ 编写 FeignClient 接口</p><p>④ 使用 FeignClient 中定义的方法代替 RestTemplate</p><h2 id="_8-2-自定义配置" tabindex="-1"><a class="header-anchor" href="#_8-2-自定义配置" aria-hidden="true">#</a> 8.2.自定义配置</h2><p>Feign 可以支持很多的自定义配置，如下表所示：</p><table><thead><tr><th>类型</th><th>作用</th><th>说明</th></tr></thead><tbody><tr><td><strong>feign.Logger.Level</strong></td><td>修改日志级别</td><td>包含四种不同的级别：NONE、BASIC、HEADERS、FULL</td></tr><tr><td>feign.codec.Decoder</td><td>响应结果的解析器</td><td>http 远程调用的结果做解析，例如解析 json 字符串为 java 对象</td></tr><tr><td>feign.codec.Encoder</td><td>请求参数编码</td><td>将请求参数编码，便于通过 http 请求发送</td></tr><tr><td>feign.Contract</td><td>支持的注解格式</td><td>默认是 SpringMVC 的注解</td></tr><tr><td>feign.Retryer</td><td>失败重试机制</td><td>请求失败的重试机制，默认是没有，不过会使用 Ribbon 的重试</td></tr></tbody></table><p>一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean 覆盖默认 Bean 即可。</p><p>下面以日志为例来演示如何自定义配置。</p><h3 id="_8-2-1-配置文件方式" tabindex="-1"><a class="header-anchor" href="#_8-2-1-配置文件方式" aria-hidden="true">#</a> 8.2.1.配置文件方式</h3><p>基于配置文件修改 feign 的日志级别可以针对单个服务：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">userservice</span><span class="token punctuation">:</span> <span class="token comment"># 针对某个微服务的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> FULL <span class="token comment">#  日志级别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以针对所有服务：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token comment"># 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> FULL <span class="token comment">#  日志级别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而日志的级别分为四种：</p><ul><li>NONE：不记录任何日志信息，这是默认值。</li><li>BASIC：仅记录请求的方法，URL 以及响应状态码和执行时间</li><li>HEADERS：在 BASIC 的基础上，额外记录了请求和响应的头信息</li><li>FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据。</li></ul><h3 id="_8-2-2-java-代码方式" tabindex="-1"><a class="header-anchor" href="#_8-2-2-java-代码方式" aria-hidden="true">#</a> 8.2.2.Java 代码方式</h3><p>也可以基于 Java 代码来修改日志级别，先声明一个类，然后声明一个 Logger.Level 的对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultFeignConfiguration</span>  <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">feignLogLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">BASIC</span><span class="token punctuation">;</span> <span class="token comment">// 日志级别为BASIC</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要<strong>全局生效</strong>，将其放到启动类的@EnableFeignClients 这个注解中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>defaultConfiguration <span class="token operator">=</span> <span class="token class-name">DefaultFeignConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是<strong>局部生效</strong>，则把它放到对应的@FeignClient 这个注解中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;userservice&quot;</span><span class="token punctuation">,</span> configuration <span class="token operator">=</span> <span class="token class-name">DefaultFeignConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-3-feign-使用优化" tabindex="-1"><a class="header-anchor" href="#_8-3-feign-使用优化" aria-hidden="true">#</a> 8.3.Feign 使用优化</h2><p>Feign 底层发起 http 请求，依赖于其它的框架。其底层客户端实现包括：</p><p>•URLConnection：默认实现，不支持连接池</p><p>•Apache HttpClient ：支持连接池</p><p>•OKHttp：支持连接池</p><p>因此提高 Feign 的性能主要手段就是使用<strong>连接池</strong>代替默认的 URLConnection。</p><p>这里我们用 Apache 的 HttpClient 来演示。</p><p>1）引入依赖</p><p>在 order-service 的 pom 文件中引入 Apache 的 HttpClient 依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--httpClient的依赖 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>feign-httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）配置连接池</p><p>在 order-service 的 application.yml 中添加配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token comment"># default全局的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> BASIC <span class="token comment"># 日志级别，BASIC就是基本的请求和响应信息</span>
  <span class="token key atrule">httpclient</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启feign对HttpClient的支持</span>
    <span class="token key atrule">max-connections</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># 最大的连接数</span>
    <span class="token key atrule">max-connections-per-route</span><span class="token punctuation">:</span> <span class="token number">50</span> <span class="token comment"># 每个路径的最大连接数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，在 FeignClientFactoryBean 中的 loadBalance 方法中打断点：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714185925910.png" alt="image-20210714185925910"></p><p>Debug 方式启动 order-service 服务，可以看到这里的 client，底层就是 Apache HttpClient：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714190041542.png" alt="image-20210714190041542"></p><p>总结，Feign 的优化：</p><p>1.日志级别尽量用 basic</p><p>2.使用 HttpClient 或 OKHttp 代替 URLConnection</p><p>① 引入 feign-httpClient 依赖</p><p>② 配置文件开启 httpClient 功能，设置连接池参数</p><h2 id="_8-4-最佳实践" tabindex="-1"><a class="header-anchor" href="#_8-4-最佳实践" aria-hidden="true">#</a> 8.4.最佳实践</h2><p>所谓最近实践，就是使用过程中总结的经验，最好的一种使用方式。</p><p>仔细观察可以发现，Feign 的客户端与服务提供者的 controller 代码非常相似：</p><p>feign 客户端：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714190542730.png" alt="image-20210714190542730"></p><p>UserController：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714190528450.png" alt="image-20210714190528450"></p><p>有没有一种办法简化这种重复的代码编写呢？</p><h3 id="_8-4-1-继承方式" tabindex="-1"><a class="header-anchor" href="#_8-4-1-继承方式" aria-hidden="true">#</a> 8.4.1.继承方式</h3><p>一样的代码可以通过继承来共享：</p><p>1）定义一个 API 接口，利用定义方法，并基于 SpringMVC 注解做声明。</p><p>2）Feign 客户端和 Controller 都集成改接口</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714190640857.png" alt="image-20210714190640857"></p><p>优点：</p><ul><li>简单</li><li>实现了代码共享</li></ul><p>缺点：</p><ul><li><p>服务提供方、服务消费方紧耦合</p></li><li><p>参数列表中的注解映射并不会继承，因此 Controller 中必须再次声明方法、参数列表、注解</p></li></ul><h3 id="_8-4-2-抽取方式" tabindex="-1"><a class="header-anchor" href="#_8-4-2-抽取方式" aria-hidden="true">#</a> 8.4.2.抽取方式</h3><p>将 Feign 的 Client 抽取为独立模块，并且把接口有关的 POJO、默认的 Feign 配置都放到这个模块中，提供给所有消费者使用。</p><p>例如，将 UserClient、User、Feign 的默认配置都抽取到一个 feign-api 包中，所有微服务引用该依赖包，即可直接使用。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714214041796.png" alt="image-20210714214041796"></p><h3 id="_8-4-3-实现基于抽取的最佳实践" tabindex="-1"><a class="header-anchor" href="#_8-4-3-实现基于抽取的最佳实践" aria-hidden="true">#</a> 8.4.3.实现基于抽取的最佳实践</h3><h4 id="_1-抽取" tabindex="-1"><a class="header-anchor" href="#_1-抽取" aria-hidden="true">#</a> 1）抽取</h4><p>首先创建一个 module，命名为 feign-api：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714204557771.png" alt="image-20210714204557771"></p><p>项目结构：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714204656214.png" alt="image-20210714204656214"></p><p>在 feign-api 中然后引入 feign 的 starter 依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，order-service 中编写的 UserClient、User、DefaultFeignConfiguration 都复制到 feign-api 项目中</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714205221970.png" alt="image-20210714205221970"></p><h4 id="_2-在-order-service-中使用-feign-api" tabindex="-1"><a class="header-anchor" href="#_2-在-order-service-中使用-feign-api" aria-hidden="true">#</a> 2）在 order-service 中使用 feign-api</h4><p>首先，删除 order-service 中的 UserClient、User、DefaultFeignConfiguration 等类或接口。</p><p>在 order-service 的 pom 文件中中引入 feign-api 的依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.itcast.demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>feign-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 order-service 中的所有与上述三个组件有关的导包部分，改成导入 feign-api 中的包</p><h4 id="_3-重启测试" tabindex="-1"><a class="header-anchor" href="#_3-重启测试" aria-hidden="true">#</a> 3）重启测试</h4><p>重启后，发现服务报错了：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210714205623048.png" alt="image-20210714205623048"></p><p>这是因为 UserClient 现在在 cn.itcast.feign.clients 包下，</p><p>而 order-service 的@EnableFeignClients 注解是在 cn.itcast.order 包下，不在同一个包，无法扫描到 UserClient。</p><h4 id="_4-解决扫描包问题" tabindex="-1"><a class="header-anchor" href="#_4-解决扫描包问题" aria-hidden="true">#</a> 4）解决扫描包问题</h4><p>方式一：</p><p>指定 Feign 应该扫描的包：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;cn.itcast.feign.clients&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方式二：</p><p>指定需要加载的 Client 接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>clients <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">UserClient</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,115);function b(f,_){const s=c("ExternalLinkIcon");return t(),p("div",null,[u,r,d,g,k,m,n("p",null,[a("Feign 是一个声明式的 http 客户端，官方地址："),n("a",v,[a("https://github.com/OpenFeign/feign"),i(s)])]),h])}const C=e(o,[["render",b],["__file","8. Feign 远程调用.html.vue"]]);export{C as default};
