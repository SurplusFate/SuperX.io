const e=JSON.parse('{"key":"v-5912ef86","path":"/SSM/Spring/9.%20Spring%20AOP.html","title":"9. Spring AOP","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-09-06T00:00:00.000Z","order":9,"category":["Spring"],"summary":"9. Spring AOP _\u539F\u6587_ 1. \u57FA\u672C\u6982\u5FF5 AOP (Aspect-Oriented Programming)\uFF0C\u5373 \u9762\u5411\u5207\u9762\u7F16\u7A0B, \u5B83\u4E0E OOP (Object-Oriented Programming, \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B) \u76F8\u8F85\u76F8\u6210, \u63D0\u4F9B\u4E86\u4E0E OOP \u4E0D\u540C\u7684\u62BD\u8C61\u8F6F\u4EF6\u7ED3\u6784\u7684\u89C6\u89D2. \u5728 OOP \u4E2D, \u6211\u4EEC\u4EE5\u7C7B(class)\u4F5C\u4E3A\u6211\u4EEC\u7684\u57FA\u672C\u5355\u5143, \u800C AO","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/SSM/Spring/9.%20Spring%20AOP.html"}],["meta",{"property":"og:site_name","content":"\u7A7A~"}],["meta",{"property":"og:title","content":"9. Spring AOP"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-20T10:56:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-20T10:56:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u57FA\u672C\u6982\u5FF5","slug":"_1-\u57FA\u672C\u6982\u5FF5","link":"#_1-\u57FA\u672C\u6982\u5FF5","children":[]},{"level":2,"title":"2. \u9762\u5411\u5207\u9762\u7F16\u7A0B","slug":"_2-\u9762\u5411\u5207\u9762\u7F16\u7A0B","link":"#_2-\u9762\u5411\u5207\u9762\u7F16\u7A0B","children":[]},{"level":2,"title":"3. AOP \u7684\u76EE\u7684","slug":"_3-aop-\u7684\u76EE\u7684","link":"#_3-aop-\u7684\u76EE\u7684","children":[]},{"level":2,"title":"4. \u672F\u8BED","slug":"_4-\u672F\u8BED","link":"#_4-\u672F\u8BED","children":[]},{"level":2,"title":"5. \u6D41\u7A0B","slug":"_5-\u6D41\u7A0B","link":"#_5-\u6D41\u7A0B","children":[{"level":3,"title":"1. \u4E94\u5927\u901A\u77E5\u6267\u884C\u987A\u5E8F","slug":"_1-\u4E94\u5927\u901A\u77E5\u6267\u884C\u987A\u5E8F","link":"#_1-\u4E94\u5927\u901A\u77E5\u6267\u884C\u987A\u5E8F","children":[]},{"level":3,"title":"2. \u56FE\u4F8B","slug":"_2-\u56FE\u4F8B","link":"#_2-\u56FE\u4F8B","children":[]}]},{"level":2,"title":"6. AOP \u5B9E\u73B0\u65B9\u5F0F\u4E00(SpringAPI \u63A5\u53E3)","slug":"_6-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E00-springapi-\u63A5\u53E3","link":"#_6-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E00-springapi-\u63A5\u53E3","children":[]},{"level":2,"title":"7. AOP \u5B9E\u73B0\u65B9\u5F0F\u4E8C(\u914D\u7F6E\u6587\u4EF6)","slug":"_7-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E8C-\u914D\u7F6E\u6587\u4EF6","link":"#_7-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E8C-\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"8. AOP \u5B9E\u73B0\u65B9\u5F0F\u4E09(\u6CE8\u89E3)","slug":"_8-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E09-\u6CE8\u89E3","link":"#_8-aop-\u5B9E\u73B0\u65B9\u5F0F\u4E09-\u6CE8\u89E3","children":[{"level":3,"title":"1. \u524D\u7F6E\u901A\u77E5\u548C\u540E\u7F6E\u901A\u77E5","slug":"_1-\u524D\u7F6E\u901A\u77E5\u548C\u540E\u7F6E\u901A\u77E5","link":"#_1-\u524D\u7F6E\u901A\u77E5\u548C\u540E\u7F6E\u901A\u77E5","children":[]},{"level":3,"title":"2. \u73AF\u7ED5\u901A\u77E5\uFF08Around\uFF09","slug":"_2-\u73AF\u7ED5\u901A\u77E5-around","link":"#_2-\u73AF\u7ED5\u901A\u77E5-around","children":[]},{"level":3,"title":"3. \u5F02\u5E38\u901A\u77E5 AfterThrowing","slug":"_3-\u5F02\u5E38\u901A\u77E5-afterthrowing","link":"#_3-\u5F02\u5E38\u901A\u77E5-afterthrowing","children":[]},{"level":3,"title":"4. \u6700\u7EC8\u901A\u77E5 After","slug":"_4-\u6700\u7EC8\u901A\u77E5-after","link":"#_4-\u6700\u7EC8\u901A\u77E5-after","children":[]},{"level":3,"title":"5. \u5B9A\u4E49\u548C\u7BA1\u7406\u5207\u5165\u70B9(Pointcut)","slug":"_5-\u5B9A\u4E49\u548C\u7BA1\u7406\u5207\u5165\u70B9-pointcut","link":"#_5-\u5B9A\u4E49\u548C\u7BA1\u7406\u5207\u5165\u70B9-pointcut","children":[]},{"level":3,"title":"6. \u603B\u7ED3","slug":"_6-\u603B\u7ED3","link":"#_6-\u603B\u7ED3","children":[]}]}],"git":{"createdTime":1663640396000,"updatedTime":1663671406000,"contributors":[{"name":"\u7A7A~","email":"1543403469@qq.com","commits":2}]},"readingTime":{"minutes":12.64,"words":3791},"filePathRelative":"SSM/Spring/9. Spring AOP.md","localizedDate":"2022\u5E749\u67086\u65E5"}');export{e as data};
