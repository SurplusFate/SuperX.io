import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.1ea724f6.js";const t={},p=e(`<h1 id="_10-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_10-\u6CE8\u89E3" aria-hidden="true">#</a> 10. \u6CE8\u89E3</h1><p>\u672C\u8D28:\u53CD\u5C04\u673A\u5236\u5B9E\u73B0</p><p>\u5E95\u5C42:\u52A8\u6001\u4EE3\u7406</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271712417.png" alt="\u6CE8\u89E3"></p><h2 id="mybatis-\u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#mybatis-\u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> Mybatis \u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B</h2><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271712051.png" alt="\u6CE8\u89E32"></p><h2 id="\u6CE8\u89E3-crud" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u89E3-crud" aria-hidden="true">#</a> \u6CE8\u89E3 CRUD</h2><p>\u5728\u5DE5\u5177\u7C7B\u521B\u5EFA\u7684\u65F6\u5019\u5B9E\u73B0\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</p><ol><li><p>\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SqlSession</span> <span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7F16\u5199\u63A5\u53E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
  * \u6CE8\u89E3\u5F62\u5F0F
  *
  * <span class="token keyword">@return</span> \u5168\u90E8\u7528\u6237\u4FE1\u606F
  */</span>
<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
  * \u6CE8\u89E3\u5F62\u5F0F\u6761\u4EF6\u67E5\u8BE2
  *
  * <span class="token keyword">@param</span> <span class="token parameter">id</span> id
  * <span class="token keyword">@param</span> <span class="token parameter">name</span> name
  * <span class="token keyword">@return</span> user
  */</span>
<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user where id = #{id} and name = #{name}&quot;</span><span class="token punctuation">)</span>
<span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetUserById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> session <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> admin <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>admin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>\u5173\u4E8E@param()\u6CE8\u89E3:</strong></p><ul><li>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C String \u7C7B\u578B\u9700\u8981\u52A0\u4E0A</li><li>\u5F15\u7528\u6570\u636E\u7C7B\u578B\u4E0D\u7528\u52A0</li><li>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B, \u53EF\u4EE5\u5FFD\u7565,\u5EFA\u8BAE\u52A0\u4E0A</li><li>\u6211\u4EEC\u5728 SQL \u4E2D\u5F15\u7528\u7684\u5C31\u662F@param(&quot;id&quot;)\u4E2D\u8BBE\u5B9A\u7684\u5C5E\u6027\u540D, \u53EF\u4EE5\u4F7F\u7528\u8BE5\u6CE8\u89E3\u4E3A\u5B57\u6BB5\u53D6\u522B\u540D</li></ul>`,11),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","10. \u6CE8\u89E3.html.vue"]]);export{d as default};
