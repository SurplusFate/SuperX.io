import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.1ea724f6.js";const t={},p=e(`<h1 id="_9-\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_9-\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> 9. \u5F02\u5E38\u5904\u7406</h1><p><strong>@ExceptionHandler \u6CE8\u89E3:</strong></p><p>\u4F7F\u7528\u6CE8\u89E3@ExceptionHandler \u53EF\u4EE5\u5C06\u4E00\u4E2A\u65B9\u6CD5\u6307\u5B9A\u4E3A\u5F02\u5E38\u5904\u7406\u65B9\u6CD5\u3002</p><p>\u8BE5\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A\u53EF\u9009\u5C5E\u6027 value\uFF0C\u4E3A\u4E00\u4E2A Class&lt;?&gt;\u6570\u7EC4\uFF0C\u7528\u4E8E\u6307\u5B9A\u8BE5\u6CE8\u89E3\u7684\u65B9\u6CD5\u6240\u8981\u5904\u7406\u7684\u5F02\u5E38\u7C7B\uFF0C\u5373\u6240\u8981\u5339\u914D\u7684\u5F02\u5E38\u3002</p><p>\u800C\u88AB\u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u5176\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F ModelAndView\u3001String\uFF0C\u6216 void\uFF0C\u65B9\u6CD5\u540D\u968F\u610F\uFF0C\u65B9\u6CD5\u53C2\u6570\u53EF\u4EE5\u662F Exception \u53CA\u5176\u5B50\u7C7B\u5BF9\u8C61\u3001HttpServletRequest\u3001HttpServletResponse \u7B49\u3002\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u4E9B\u65B9\u6CD5\u53C2\u6570\u8D4B\u503C\u3002</p><p>\u5BF9\u4E8E\u5F02\u5E38\u5904\u7406\u6CE8\u89E3\u7684\u7528\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06\u5F02\u5E38\u5904\u7406\u65B9\u6CD5\u6CE8\u89E3\u4E8E Controller \u4E4B\u4E2D\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u5F02\u5E38\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5F02\u5E38\u7C7B" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5F02\u5E38\u7C7B</h2><p>\u5B9A\u4E49\u4E09\u4E2A\u5F02\u5E38\u7C7B\uFF1ANameException\u3001AgeException\u3001MyUserException\u3002\u5176\u4E2D MyUserException \u662F\u53E6\u5916\u4E24\u4E2A\u5F02\u5E38\u7684\u7236\u7C7B\u3002</p><ul><li>MyUserException</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyUserException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyUserException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyUserException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NameException</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u8868\u793A\u5F53\u7528\u6237\u7684\u59D3\u540D\u6709\u5F02\u5E38\uFF0C\u629B\u51FANameException</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NameException</span> <span class="token keyword">extends</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AgeException</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u5F53\u5E74\u9F84\u6709\u95EE\u9898\u65F6\uFF0C\u629B\u51FA\u7684\u5F02\u5E38</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AgeException</span> <span class="token keyword">extends</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u666E\u901A\u7C7B-\u4F5C\u7528\u5168\u5C40\u5F02\u5E38\u5904\u7406\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u666E\u901A\u7C7B-\u4F5C\u7528\u5168\u5C40\u5F02\u5E38\u5904\u7406\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u666E\u901A\u7C7B, \u4F5C\u7528\u5168\u5C40\u5F02\u5E38\u5904\u7406\u7C7B</h2><p><strong>@ControllerAdvice:</strong></p><p>\u63A7\u5236\u5668\u589E\u5F3A\uFF08\u4E5F\u5C31\u662F\u8BF4\u7ED9\u63A7\u5236\u5668\u7C7B\u589E\u52A0\u529F\u80FD--\u5F02\u5E38\u5904\u7406\u529F\u80FD\uFF09</p><blockquote><p>\u4F4D\u7F6E\uFF1A\u5728\u7C7B\u7684\u4E0A\u9762\u3002</p><p>\u7279\u70B9\uFF1A\u5FC5\u987B\u8BA9\u6846\u67B6\u77E5\u9053\u8FD9\u4E2A\u6CE8\u89E3\u6240\u5728\u7684\u5305\u540D\uFF0C\u9700\u8981\u5728 springmvc \u914D\u7F6E\u6587\u4EF6\u58F0\u660E\u7EC4\u4EF6\u626B\u63CF\u5668\u3002\u6307\u5B9A**@ControllerAdvice**\u6240\u5728\u7684\u5305\u540D</p></blockquote><p>\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u5904\u7406\u53D1\u751F\u7684\u5F02\u5E38</p><p>\u5904\u7406\u5F02\u5E38\u7684\u65B9\u6CD5\u548C\u63A7\u5236\u5668\u65B9\u6CD5\u7684\u5B9A\u4E49\u4E00\u6837, \u53EF\u4EE5\u6709\u591A\u4E2A\u53C2\u6570, \u53EF\u4EE5\u6709 ModelAndView, String, void \u548C\u5BF9\u8C61\u7C7B\u578B\u7684\u8FD4\u56DE\u503C</p><blockquote><p>\u5F62\u53C2: Exception, \u8868\u793A Controller \u4E2D\u629B\u51FA\u7684\u5F02\u5E38\u5BF9\u8C61\u3002\u901A\u8FC7\u5F62\u53C2\u53EF\u4EE5\u83B7\u53D6\u53D1\u751F\u7684\u5F02\u5E38\u4FE1\u606F\u3002</p></blockquote><p><strong>@ExceptionHandler</strong>(\u5F02\u5E38\u7684 class)</p><p>\u8868\u793A\u5F02\u5E38\u7684\u7C7B\u578B, \u5F53\u53D1\u751F\u6B64\u7C7B\u578B\u5F02\u5E38\u65F6, \u7531\u8BE5\u65B9\u6CD5\u5904\u7406</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">NameException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doNameException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u5904\u7406NameException\u7684\u5F02\u5E38\u3002</span>
        <span class="token comment">/*
           \u5F02\u5E38\u53D1\u751F\u5904\u7406\u903B\u8F91\uFF1A
           1.\u9700\u8981\u628A\u5F02\u5E38\u8BB0\u5F55\u4E0B\u6765\uFF0C \u8BB0\u5F55\u5230\u6570\u636E\u5E93\uFF0C\u65E5\u5FD7\u6587\u4EF6\u3002
             \u8BB0\u5F55\u65E5\u5FD7\u53D1\u751F\u7684\u65F6\u95F4\uFF0C\u54EA\u4E2A\u65B9\u6CD5\u53D1\u751F\u7684\uFF0C\u5F02\u5E38\u9519\u8BEF\u5185\u5BB9\u3002
           2.\u53D1\u9001\u901A\u77E5\uFF0C\u628A\u5F02\u5E38\u7684\u4FE1\u606F\u901A\u8FC7\u90AE\u4EF6\uFF0C\u77ED\u4FE1\uFF0C\u5FAE\u4FE1\u53D1\u9001\u7ED9\u76F8\u5173\u4EBA\u5458\u3002
           3.\u7ED9\u7528\u6237\u53CB\u597D\u7684\u63D0\u793A\u3002
         */</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u59D3\u540D\u5FC5\u987B\u662Fzs\uFF0C\u5176\u5B83\u7528\u6237\u4E0D\u80FD\u8BBF\u95EE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;nameError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//\u5904\u7406AgeException</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">AgeException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doAgeException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u5904\u7406AgeException\u7684\u5F02\u5E38\u3002</span>
        <span class="token comment">/*
           \u5F02\u5E38\u53D1\u751F\u5904\u7406\u903B\u8F91\uFF1A
           1.\u9700\u8981\u628A\u5F02\u5E38\u8BB0\u5F55\u4E0B\u6765\uFF0C \u8BB0\u5F55\u5230\u6570\u636E\u5E93\uFF0C\u65E5\u5FD7\u6587\u4EF6\u3002
             \u8BB0\u5F55\u65E5\u5FD7\u53D1\u751F\u7684\u65F6\u95F4\uFF0C\u54EA\u4E2A\u65B9\u6CD5\u53D1\u751F\u7684\uFF0C\u5F02\u5E38\u9519\u8BEF\u5185\u5BB9\u3002
           2.\u53D1\u9001\u901A\u77E5\uFF0C\u628A\u5F02\u5E38\u7684\u4FE1\u606F\u901A\u8FC7\u90AE\u4EF6\uFF0C\u77ED\u4FE1\uFF0C\u5FAE\u4FE1\u53D1\u9001\u7ED9\u76F8\u5173\u4EBA\u5458\u3002
           3.\u7ED9\u7528\u6237\u53CB\u597D\u7684\u63D0\u793A\u3002
         */</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4F60\u7684\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;ageError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5904\u7406\u5176\u5B83\u5F02\u5E38\uFF0C NameException, AgeException\u4EE5\u5916\uFF0C\u4E0D\u77E5\u7C7B\u578B\u7684\u5F02\u5E38</span>
    <span class="token annotation punctuation">@ExceptionHandler</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doOtherException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u5904\u7406\u5176\u5B83\u5F02\u5E38</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4F60\u7684\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;defaultError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 springmvc \u914D\u7F6E\u6587\u4EF6\u58F0\u660E\u7EC4\u4EF6\u626B\u63CF\u5668\u3002\u6307\u5B9A <strong>@ControllerAdvice</strong> \u6240\u5728\u7684\u5305\u540D</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u58F0\u660E\u7EC4\u4EF6\u626B\u63CF\u5668\u6307\u5B9Acontroller(@Controller\u6240\u5728\u7684\u5305\u540D)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.bjpowernode.controller<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--\u58F0\u660E\u7EC4\u4EF6\u626B\u63CF\u5668\u6307\u5B9Ahandler(@ControllerAdvice\u6240\u5728\u7684\u5305\u540D)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.bjpowernode.handler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--\u6CE8\u89E3\u9A71\u52A8--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539-controller-\u629B\u51FA\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-controller-\u629B\u51FA\u5F02\u5E38" aria-hidden="true">#</a> \u4FEE\u6539 Controller \u629B\u51FA\u5F02\u5E38</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/some.do&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token class-name">ModelAndView</span> mv  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token string">&quot;\u59D3\u540D\u4E0D\u6B63\u786E\uFF01\uFF01\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> age <span class="token operator">&gt;</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\u6BD4\u8F83\u5927\uFF01\uFF01\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;myname&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;myage&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u5F02\u5E38\u54CD\u5E94\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5F02\u5E38\u54CD\u5E94\u9875\u9762" aria-hidden="true">#</a> \u5B9A\u4E49\u5F02\u5E38\u54CD\u5E94\u9875\u9762</h2><ul><li>ageError.jsp</li></ul><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      ageError.jsp &lt;br/&gt;
      \u63D0\u793A\u4FE1\u606F\uFF1A\${msg} &lt;br/&gt;
      \u7CFB\u7EDF\u5F02\u5E38\u6D88\u606F\uFF1A\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>nameError.jsp</li></ul><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      nameError.jsp &lt;br/&gt;
      \u63D0\u793A\u4FE1\u606F\uFF1A\${msg} &lt;br/&gt;
      \u7CFB\u7EDF\u5F02\u5E38\u6D88\u606F\uFF1A\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>defaultError.jsp</li></ul><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      defaultError.jsp &lt;br/&gt;
      \u63D0\u793A\u4FE1\u606F\uFF1A\${msg} &lt;br/&gt;
      \u7CFB\u7EDF\u5F02\u5E38\u6D88\u606F\uFF1A\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","9. \u5F02\u5E38\u5904\u7406.html.vue"]]);export{r as default};
