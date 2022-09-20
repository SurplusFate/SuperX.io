import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,e as o}from"./app.1ea724f6.js";const s={},i=o(`<h1 id="_1-\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93" aria-hidden="true">#</a> 1. \u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93</h1><p>\u6570\u636E\u5E93\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u4E2A\u5B58\u50A8\u6570\u636E\u5BF9\u8C61\u7684\u5BB9\u5668\u3002\u8FD9\u4E9B\u6570\u636E\u5BF9\u8C61\u5305\u62EC\u8868\u3001\u89C6\u56FE\u3001\u89E6\u53D1\u5668\u3001\u5B58\u50A8\u8FC7\u7A0B\u7B49\u3002\u5176\u4E2D\u6570\u636E\u8868\u662F\u6700\u57FA\u672C\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B58\u653E\u6570\u636E\u3002</p><p>\u547D\u4EE4\u884C\u767B\u5F55\u6570\u636E\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -u<span class="token punctuation">{</span>username<span class="token punctuation">}</span> -p<span class="token punctuation">{</span>password<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show databases<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BED\u53E5\u6765\u67E5\u770B\u5F53\u524D\u6240\u6709\u5B58\u5728\u7684\u6570\u636E\u5E93\u3002</p><h2 id="\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93</h2><p>\u5728 MySQL \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>CREATE DATABASE</code> \u8BED\u53E5\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><blockquote><p>CREATE DATABASE [IF NOT EXISTS] &lt;\u6570\u636E\u5E93\u540D&gt;</p><p>[[DEFAULT] CHARACTER SET &lt;\u5B57\u7B26\u96C6\u540D&gt;]</p><p>[[DEFAULT] COLLATE &lt;\u6821\u5BF9\u89C4\u5219\u540D&gt;];</p></blockquote><p><code>[]</code>\u4E2D\u7684\u5185\u5BB9\u662F\u53EF\u9009\u7684\u3002\u8BED\u6CD5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><code>&lt;\u6570\u636E\u5E93\u540D&gt;</code>\uFF1A\u521B\u5EFA\u6570\u636E\u5E93\u7684\u540D\u79F0\u3002MySQL \u7684\u6570\u636E\u5B58\u50A8\u533A\u5C06\u4EE5\u76EE\u5F55\u65B9\u5F0F\u8868\u793A MySQL \u6570\u636E\u5E93\uFF0C\u56E0\u6B64\u6570\u636E\u5E93\u540D\u79F0\u5FC5\u987B\u7B26\u5408\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6587\u4EF6\u5939\u547D\u540D\u89C4\u5219\uFF0C\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\uFF0C\u5C3D\u91CF\u8981\u6709\u5B9E\u9645\u610F\u4E49\u3002<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728 MySQL \u4E2D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002</p></div></li><li><code>IF NOT EXISTS</code>\uFF1A\u5728\u521B\u5EFA\u6570\u636E\u5E93\u4E4B\u524D\u8FDB\u884C\u5224\u65AD\uFF0C\u53EA\u6709\u8BE5\u6570\u636E\u5E93\u76EE\u524D\u5C1A\u4E0D\u5B58\u5728\u65F6\u624D\u80FD\u6267\u884C\u64CD\u4F5C\u3002\u6B64\u9009\u9879\u53EF\u4EE5\u7528\u6765\u907F\u514D\u6570\u636E\u5E93\u5DF2\u7ECF\u5B58\u5728\u800C\u91CD\u590D\u521B\u5EFA\u7684\u9519\u8BEF\u3002</li><li><code>[DEFAULT] CHARACTER SET</code>\uFF1A\u6307\u5B9A\u6570\u636E\u5E93\u7684\u5B57\u7B26\u96C6\u3002\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u907F\u514D\u5728\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u51FA\u73B0\u4E71\u7801\u7684\u60C5\u51B5\u3002\u5982\u679C\u5728\u521B\u5EFA\u6570\u636E\u5E93\u65F6\u4E0D\u6307\u5B9A\u5B57\u7B26\u96C6\uFF0C\u90A3\u4E48\u5C31\u4F7F\u7528\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u5B57\u7B26\u96C6\u3002</li><li><code>[DEFAULT] COLLATE</code>\uFF1A\u6307\u5B9A\u5B57\u7B26\u96C6\u7684\u9ED8\u8BA4\u6821\u5BF9\u89C4\u5219\u3002</li></ul><p>MySQL \u7684\u5B57\u7B26\u96C6\uFF08CHARACTER\uFF09\u548C\u6821\u5BF9\u89C4\u5219\uFF08COLLATION\uFF09\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u6982\u5FF5\u3002\u5B57\u7B26\u96C6\u662F\u7528\u6765\u5B9A\u4E49 MySQL \u5B58\u50A8\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\uFF0C\u6821\u5BF9\u89C4\u5219\u5B9A\u4E49\u4E86\u6BD4\u8F83\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u3002</p><p><strong>\u6700\u7B80\u5355\u7684\u521B\u5EFA MySQL \u6570\u636E\u5E93\u7684\u8BED\u53E5\u3002</strong></p><p>\u5728 MySQL \u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>test_db</code> \u7684\u6570\u636E\u5E93\u3002\u5728 MySQL \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\u8F93\u5165 SQL \u8BED\u53E5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE test_db;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u8F93\u5165\u7684 SQL \u8BED\u53E5\u4E0E\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208222016304.png" alt="202208222016304"></p><p><code>Query OK, 1 row affected (0.12 sec);</code>\u63D0\u793A\u4E2D\uFF0C<code>Query OK</code>\u8868\u793A\u4E0A\u9762\u7684\u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C<code>1 row affected</code>\u8868\u793A\u64CD\u4F5C\u53EA\u5F71\u54CD\u4E86\u6570\u636E\u5E93\u4E2D\u4E00\u884C\u7684\u8BB0\u5F55\uFF0C<code>0.01 sec</code>\u5219\u8BB0\u5F55\u4E86\u64CD\u4F5C\u6267\u884C\u7684\u65F6\u95F4\u3002</p><p>\u82E5\u518D\u6B21\u8F93\u5165\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE test_db;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BED\u53E5\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u7ED9\u51FA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208222016632.png" alt="202208222016632"></p><p>\u63D0\u793A\u4E0D\u80FD\u521B\u5EFA<code>test_db</code>\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u5DF2\u5B58\u5728\u3002MySQL \u4E0D\u5141\u8BB8\u5728\u540C\u4E00\u7CFB\u7EDF\u4E0B\u521B\u5EFA\u4E24\u4E2A\u76F8\u540C\u540D\u79F0\u7684\u6570\u636E\u5E93\u3002</p><p>\u53EF\u4EE5\u52A0\u4E0A<code>IF NOT EXISTS</code>\u4ECE\u53E5\uFF0C\u5C31\u53EF\u4EE5\u907F\u514D\u7C7B\u4F3C\u9519\u8BEF\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208222017897.png" alt="202208222017897"></p><p><strong>\u521B\u5EFA MySQL \u6570\u636E\u5E93\u65F6\u6307\u5B9A\u5B57\u7B26\u96C6\u548C\u6821\u5BF9\u89C4\u5219\u3002</strong></p><p>\u67E5\u770B\u6570\u636E\u5E93\u652F\u6301\u7684\u6240\u6709\u6821\u5BF9\u89C4\u5219\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW COLLATION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528 MySQL \u547D\u4EE4\u884C\u5DE5\u5177\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u6570\u636E\u5E93\uFF0C\u547D\u540D\u4E3A <code>test_db_char</code>\uFF0C\u6307\u5B9A\u5176\u9ED8\u8BA4\u5B57\u7B26\u96C6\u4E3A utf8\uFF0C\u9ED8\u8BA4\u6821\u5BF9\u89C4\u5219\u4E3A utf8_unicode_ci\uFF08\u7B80\u4F53\u4E2D\u6587\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\uFF0C\u8F93\u5165\u7684 SQL \u8BED\u53E5\u4E0E\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208222017937.png" alt="202208222017937"></p><p>\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW CREATE DATABASE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B <code>test_db_char</code> \u6570\u636E\u5E93\u7684\u5B9A\u4E49\u58F0\u660E\u3002</p><h2 id="\u7BA1\u7406\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u6570\u636E\u5E93" aria-hidden="true">#</a> \u7BA1\u7406\u6570\u636E\u5E93</h2><h3 id="\u9009\u62E9\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6570\u636E\u5E93" aria-hidden="true">#</a> \u9009\u62E9\u6570\u636E\u5E93</h3><p>\u5728 MySQL \u4E2D\u5C31\u6709\u5F88\u591A\u7CFB\u7EDF\u81EA\u5E26\u7684\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u5728\u64CD\u4F5C\u6570\u636E\u5E93\u4E4B\u524D\u5C31\u5FC5\u987B\u8981\u786E\u5B9A\u662F\u54EA\u4E00\u4E2A\u6570\u636E\u5E93\u3002</p><p>\u5728 MySQL \u4E2D\uFF0C<code>USE</code> \u8BED\u53E5\u7528\u6765\u5B8C\u6210\u4E00\u4E2A\u6570\u636E\u5E93\u5230\u53E6\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u8DF3\u8F6C\u3002</p><p>\u5F53\u7528 <code>CREATE DATABASE</code> \u8BED\u53E5\u521B\u5EFA\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u8BE5\u6570\u636E\u5E93\u4E0D\u4F1A\u81EA\u52A8\u6210\u4E3A\u5F53\u524D\u6570\u636E\u5E93\uFF0C\u9700\u8981\u7528 <code>USE</code> \u6765\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u3002\u5176\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p><blockquote><p>USE &lt;\u6570\u636E\u5E93\u540D&gt;</p></blockquote><p>\u8BE5\u8BED\u53E5\u53EF\u4EE5\u901A\u77E5 MySQL \u628A<code>&lt;\u6570\u636E\u5E93\u540D&gt;</code>\u6240\u6307\u793A\u7684\u6570\u636E\u5E93\u4F5C\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u3002\u8BE5\u6570\u636E\u5E93\u4FDD\u6301\u4E3A\u9ED8\u8BA4\u6570\u636E\u5E93\uFF0C\u76F4\u5230\u8BED\u6BB5\u7684\u7ED3\u5C3E\uFF0C\u6216\u8005\u76F4\u5230\u9047\u89C1\u4E00\u4E2A\u4E0D\u540C\u7684 <code>USE</code> \u8BED\u53E5\u3002</p><p>\u53EA\u6709\u4F7F\u7528 <code>USE</code> \u8BED\u53E5\u6765\u6307\u5B9A\u67D0\u4E2A\u6570\u636E\u5E93\u4F5C\u4E3A\u5F53\u524D\u6570\u636E\u5E93\u4E4B\u540E\uFF0C\u624D\u80FD\u5BF9\u8BE5\u6570\u636E\u5E93\u53CA\u5176\u5B58\u50A8\u7684\u6570\u636E\u5BF9\u8C61\u6267\u884C\u64CD\u4F5C\u3002</p><ul><li><p>\u4FEE\u6539\u6570\u636E\u5E93</p><p>\u5728 MySQL \u6570\u636E\u5E93\u4E2D\u53EA\u80FD\u5BF9\u6570\u636E\u5E93\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u548C\u6821\u5BF9\u89C4\u5219\u8FDB\u884C\u4FEE\u6539\uFF0C\u6570\u636E\u5E93\u7684\u8FD9\u4E9B\u7279\u6027\u90FD\u50A8\u5B58\u5728 <code>db.opt</code> \u6587\u4EF6\u4E2D\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u4ECB\u7ECD\u4E00\u4E0B\u4FEE\u6539\u6570\u636E\u5E93\u7684\u57FA\u672C\u64CD\u4F5C\u3002</p><p>\u5728 MySQL \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1A<code>ALTER DATABASE</code>\u6765\u4FEE\u6539\u5DF2\u7ECF\u88AB\u521B\u5EFA\u6216\u8005\u5B58\u5728\u7684\u6570\u636E\u5E93\u7684\u76F8\u5173\u53C2\u6570\u3002\u4FEE\u6539\u6570\u636E\u5E93\u7684\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p></li></ul><blockquote><p>ALTER DATABASE [\u6570\u636E\u5E93\u540D] {</p><p>[ DEFAULT ] CHARACTER SET &lt;\u5B57\u7B26\u96C6\u540D&gt; |</p><p>[ DEFAULT ] COLLATE &lt;\u6821\u5BF9\u89C4\u5219\u540D&gt;</p><p>}</p></blockquote><p>\u8BED\u6CD5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><code>ALTER DATABASE</code> \u7528\u4E8E\u66F4\u6539\u6570\u636E\u5E93\u7684\u5168\u5C40\u7279\u6027\u3002</li><li>\u4F7F\u7528 <code>ALTER DATABASE</code> \u9700\u8981\u83B7\u5F97\u6570\u636E\u5E93 <code>ALTER</code> \u6743\u9650\u3002</li><li>\u6570\u636E\u5E93\u540D\u79F0\u53EF\u4EE5\u5FFD\u7565\uFF0C\u6B64\u65F6\u8BED\u53E5\u5BF9\u5E94\u4E8E\u9ED8\u8BA4\u6570\u636E\u5E93\u3002</li><li><code>CHARACTER SET</code> \u5B50\u53E5\u7528\u4E8E\u66F4\u6539\u9ED8\u8BA4\u7684\u6570\u636E\u5E93\u5B57\u7B26\u96C6\u3002</li></ul><h3 id="\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E\u5E93</h3><p>\u5F53\u6570\u636E\u5E93\u4E0D\u518D\u4F7F\u7528\u65F6\u5E94\u8BE5\u5C06\u5176\u5220\u9664\uFF0C\u4EE5\u786E\u4FDD\u6570\u636E\u5E93\u5B58\u50A8\u7A7A\u95F4\u4E2D\u5B58\u653E\u7684\u662F\u6709\u6548\u6570\u636E\u3002\u5220\u9664\u6570\u636E\u5E93\u662F\u5C06\u5DF2\u7ECF\u5B58\u5728\u7684\u6570\u636E\u5E93\u4ECE\u78C1\u76D8\u7A7A\u95F4\u4E0A\u6E05\u9664\uFF0C\u6E05\u9664\u4E4B\u540E\uFF0C\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u6570\u636E\u4E5F\u5C06\u4E00\u540C\u88AB\u5220\u9664\u3002</p><p>\u5728 MySQL \u4E2D\uFF0C\u5F53\u9700\u8981\u5220\u9664\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>DROP DATABASE</code> \u8BED\u53E5\u3002\u5176\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p><blockquote><p>DROP DATABASE [ IF EXISTS ] &lt;\u6570\u636E\u5E93\u540D&gt;</p></blockquote><p>\u8BED\u6CD5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><code>&lt;\u6570\u636E\u5E93\u540D&gt;</code>\uFF1A\u6307\u5B9A\u8981\u5220\u9664\u7684\u6570\u636E\u5E93\u540D\u3002</li><li><code>IF EXISTS</code>\uFF1A\u7528\u4E8E\u9632\u6B62\u5F53\u6570\u636E\u5E93\u4E0D\u5B58\u5728\u65F6\u53D1\u751F\u9519\u8BEF\u3002</li><li><code>DROP DATABASE</code>\uFF1A\u5220\u9664\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868\u683C\u5E76\u540C\u65F6\u5220\u9664\u6570\u636E\u5E93\u3002\u4F7F\u7528\u6B64\u8BED\u53E5\u65F6\u8981\u975E\u5E38\u5C0F\u5FC3\uFF0C\u4EE5\u514D\u9519\u8BEF\u5220\u9664\u3002\u5982\u679C\u8981\u4F7F\u7528 <code>DROP DATABASE</code>\uFF0C\u9700\u8981\u83B7\u5F97\u6570\u636E\u5E93 <code>DROP</code> \u6743\u9650\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>MySQL \u5B89\u88C5\u540E\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u540D\u4E3A <code>information_schema</code> \u548C <code>mysql</code> \u7684\u4E24\u4E2A\u7CFB\u7EDF\u6570\u636E\u5E93\uFF0C\u7CFB\u7EDF\u6570\u636E\u5E93\u5B58\u653E\u4E00\u4E9B\u548C\u6570\u636E\u5E93\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u5982\u679C\u5220\u9664\u4E86\u8FD9\u4E24\u4E2A\u6570\u636E\u5E93\uFF0CMySQL \u5C06\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002</p></div><ol><li><p>\u67E5\u770B\u6570\u636E\u5E93</p><p>\u5728 MySQL \u4E2D\uFF0C\u53EF\u4F7F\u7528 <code>SHOW DATABASES</code> \u8BED\u53E5\u6765\u67E5\u770B\u6216\u663E\u793A\u5F53\u524D\u7528\u6237\u6743\u9650\u8303\u56F4\u4EE5\u5185\u7684\u6570\u636E\u5E93\u3002\u67E5\u770B\u6570\u636E\u5E93\u7684\u8BED\u6CD5\u683C\u5F0F\u4E3A\uFF1A</p></li></ol><blockquote><p>SHOW DATABASES [LIKE &#39;\u6570\u636E\u5E93\u540D&#39;];</p></blockquote><p>\u8BED\u6CD5\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li><code>LIKE</code> \u4ECE\u53E5\u662F\u53EF\u9009\u9879\uFF0C\u7528\u4E8E\u5339\u914D\u6307\u5B9A\u7684\u6570\u636E\u5E93\u540D\u79F0\u3002<code>LIKE</code> \u4ECE\u53E5\u53EF\u4EE5\u90E8\u5206\u5339\u914D\uFF0C\u4E5F\u53EF\u4EE5\u5B8C\u5168\u5339\u914D\u3002</li><li>\u6570\u636E\u5E93\u540D\u7531\u5355\u5F15\u53F7<code>&#39; &#39;</code>\u5305\u56F4\u3002</li></ul>`,57),l=[i];function a(p,t){return d(),c("div",null,l)}const u=e(s,[["render",a],["__file","1. \u521B\u5EFA\u4E0E\u7BA1\u7406\u6570\u636E\u5E93.html.vue"]]);export{u as default};
