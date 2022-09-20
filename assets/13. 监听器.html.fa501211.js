import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.1ea724f6.js";const e={},p=t(`<h1 id="_13-\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#_13-\u76D1\u542C\u5668" aria-hidden="true">#</a> 13. \u76D1\u542C\u5668</h1><p>\u5B9E\u73B0\u4E00\u4E2A\u76D1\u542C\u5668\u7684\u63A5\u53E3\uFF1B\uFF08\u6709 N \u79CD\uFF09</p><ol><li><p>\u7F16\u5199\u4E00\u4E2A\u76D1\u542C\u5668</p><p>\u5B9E\u73B0\u76D1\u542C\u5668\u7684\u63A5\u53E3\u2026</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u7EDF\u8BA1\u7F51\u7AD9\u5728\u7EBF\u4EBA\u6570 \uFF1A \u7EDF\u8BA1session</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OnlineCountListener</span> <span class="token keyword">implements</span> <span class="token class-name">HttpSessionListener</span> <span class="token punctuation">{</span>

    <span class="token comment">//\u521B\u5EFAsession\u76D1\u542C\uFF1A \u770B\u4F60\u7684\u4E00\u4E3E\u4E00\u52A8</span>
    <span class="token comment">//\u4E00\u65E6\u521B\u5EFASession\u5C31\u4F1A\u89E6\u53D1\u4E00\u6B21\u8FD9\u4E2A\u4E8B\u4EF6\uFF01</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sessionCreated</span><span class="token punctuation">(</span><span class="token class-name">HttpSessionEvent</span> se<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletContext</span> ctx <span class="token operator">=</span> se<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>se<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> onlineCount <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;OnlineCount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>onlineCount<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> onlineCount<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        ctx<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;OnlineCount&quot;</span><span class="token punctuation">,</span>onlineCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//\u9500\u6BC1session\u76D1\u542C</span>
    <span class="token comment">//\u4E00\u65E6\u9500\u6BC1Session\u5C31\u4F1A\u89E6\u53D1\u4E00\u6B21\u8FD9\u4E2A\u4E8B\u4EF6\uFF01</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sessionDestroyed</span><span class="token punctuation">(</span><span class="token class-name">HttpSessionEvent</span> se<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletContext</span> ctx <span class="token operator">=</span> se<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Integer</span> onlineCount <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;OnlineCount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>onlineCount<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> onlineCount<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>count<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        ctx<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;OnlineCount&quot;</span><span class="token punctuation">,</span>onlineCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token comment">/*
    Session\u9500\u6BC1\uFF1A
    1. \u624B\u52A8\u9500\u6BC1  getSession().invalidate();
    2. \u81EA\u52A8\u9500\u6BC1
     */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>web.xml \u4E2D\u6CE8\u518C\u76D1\u542C\u5668</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u6CE8\u518C\u76D1\u542C\u5668--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener-class</span><span class="token punctuation">&gt;</span></span>com.kuang.listener.OnlineCountListener<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener-class</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u770B\u60C5\u51B5\u662F\u5426\u4F7F\u7528\uFF01</p></li></ol>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","13. \u76D1\u542C\u5668.html.vue"]]);export{r as default};
