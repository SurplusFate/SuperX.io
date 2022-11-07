import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as s,b as n,d as e,e as i,r as o}from"./app.1407a880.js";const l={},d=s("h1",{id:"_10-安装-docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_10-安装-docker","aria-hidden":"true"},"#"),n(" 10. 安装 Docker")],-1),p=s("p",null,"Docker 分为 CE 和 EE 两大版本。CE 即社区版（免费，支持周期 7 个月），EE 即企业版，强调安全，付费使用，支持周期 24 个月。",-1),u=s("p",null,[n("Docker CE 分为 "),s("code",null,"stable"),n(),s("code",null,"test"),n(" 和 "),s("code",null,"nightly"),n(" 三个更新频道。")],-1),m={href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="_10-1-centos-安装-docker" tabindex="-1"><a class="header-anchor" href="#_10-1-centos-安装-docker" aria-hidden="true">#</a> 10.1.CentOS 安装 Docker</h2><p>Docker CE 支持 64 位版本 CentOS 7，并且要求内核版本不低于 3.10， CentOS 7 满足最低内核的要求，所以我们在 CentOS 7 安装 Docker。</p><h3 id="_10-1-1-卸载-可选" tabindex="-1"><a class="header-anchor" href="#_10-1-1-卸载-可选" aria-hidden="true">#</a> 10.1.1.卸载（可选）</h3><p>如果之前安装过旧版本的 Docker，可以使用下面命令卸载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine <span class="token punctuation">\\</span>
                  docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-1-2-安装-docker" tabindex="-1"><a class="header-anchor" href="#_10-1-2-安装-docker" aria-hidden="true">#</a> 10.1.2.安装 docker</h3><p>首先需要大家虚拟机联网，安装 yum 工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
           device-mapper-persistent-data <span class="token punctuation">\\</span>
           lvm2 --skip-broken
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后更新本地镜像源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置docker镜像源</span>
yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo

yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker-ce 为社区免费版本。稍等片刻，docker 即可安装成功。</p><h3 id="_10-1-3-启动-docker" tabindex="-1"><a class="header-anchor" href="#_10-1-3-启动-docker" aria-hidden="true">#</a> 10.1.3.启动 docker</h3><p>Docker 应用需要用到各种端口，逐一去修改防火墙设置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭</span>
systemctl stop firewalld
<span class="token comment"># 禁止开机启动防火墙</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令启动 docker：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>  <span class="token comment"># 启动docker服务</span>

systemctl stop <span class="token function">docker</span>  <span class="token comment"># 停止docker服务</span>

systemctl restart <span class="token function">docker</span>  <span class="token comment"># 重启docker服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后输入命令，可以查看 docker 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如图：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210418154704436.png" alt="image-20210418154704436"></p><h3 id="_10-1-4-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_10-1-4-配置镜像加速" aria-hidden="true">#</a> 10.1.4.配置镜像加速</h3><p>docker 官方镜像仓库网速较差，我们需要设置国内镜像服务：</p>`,24),k={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_10-2-centos7-安装-dockercompose" tabindex="-1"><a class="header-anchor" href="#_10-2-centos7-安装-dockercompose" aria-hidden="true">#</a> 10.2.CentOS7 安装 DockerCompose</h2><h3 id="_10-2-1-下载" tabindex="-1"><a class="header-anchor" href="#_10-2-1-下载" aria-hidden="true">#</a> 10.2.1.下载</h3><p>Linux 下需要通过命令下载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.23.1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-2-修改文件权限" tabindex="-1"><a class="header-anchor" href="#_10-2-2-修改文件权限" aria-hidden="true">#</a> 10.2.2.修改文件权限</h3><p>修改文件权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改权限</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-3-base-自动补全命令" tabindex="-1"><a class="header-anchor" href="#_10-2-3-base-自动补全命令" aria-hidden="true">#</a> 10.2.3.Base 自动补全命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 补全命令</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这里出现错误，需要修改自己的 hosts 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;199.232.68.133 raw.githubusercontent.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-3-docker-镜像仓库" tabindex="-1"><a class="header-anchor" href="#_10-3-docker-镜像仓库" aria-hidden="true">#</a> 10.3.Docker 镜像仓库</h2><p>搭建镜像仓库可以基于 Docker 官方提供的 DockerRegistry 来实现。</p>`,13),b={href:"https://hub.docker.com/_/registry",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="_10-3-1-简化版镜像仓库" tabindex="-1"><a class="header-anchor" href="#_10-3-1-简化版镜像仓库" aria-hidden="true">#</a> 10.3.1.简化版镜像仓库</h3><p>Docker 官方的 Docker Registry 是一个基础版本的 Docker 镜像仓库，具备仓库管理的完整功能，但是没有图形化界面。</p><p>搭建方式比较简单，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> registry <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> registry-data:/var/lib/registry <span class="token punctuation">\\</span>
    registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令中挂载了一个数据卷 registry-data 到容器内的/var/lib/registry 目录，这是私有镜像库存放数据的目录。</p>`,5),_={href:"http://YourIp:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},y=i(`<h3 id="_10-3-2-带有图形化界面版本" tabindex="-1"><a class="header-anchor" href="#_10-3-2-带有图形化界面版本" aria-hidden="true">#</a> 10.3.2.带有图形化界面版本</h3><p>使用 DockerCompose 部署带有图象界面的 DockerRegistry，命令如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./registry<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/registry
  <span class="token key atrule">ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> joxit/docker<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>ui<span class="token punctuation">:</span>static
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> REGISTRY_TITLE=传智教育私有仓库
      <span class="token punctuation">-</span> REGISTRY_URL=http<span class="token punctuation">:</span>//registry<span class="token punctuation">:</span><span class="token number">5000</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-3-配置-docker-信任地址" tabindex="-1"><a class="header-anchor" href="#_10-3-3-配置-docker-信任地址" aria-hidden="true">#</a> 10.3.3.配置 Docker 信任地址</h3><p>我们的私服采用的是 http 协议，默认不被 Docker 信任，所以需要做一个配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开要修改的文件</span>
<span class="token function">vi</span> /etc/docker/daemon.json
<span class="token comment"># 添加内容：</span>
<span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;http://192.168.150.101:8080&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 重加载</span>
systemctl daemon-reload
<span class="token comment"># 重启docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(x,D){const a=o("ExternalLinkIcon");return t(),r("div",null,[d,p,u,s("p",null,[n("官方网站上有各种环境下的 "),s("a",m,[n("安装指南"),e(a)]),n("，这里主要介绍 Docker CE 在 CentOS 上的安装。")]),v,s("p",null,[n("参考阿里云的镜像加速文档："),s("a",k,[n("https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors"),e(a)])]),h,s("p",null,[n("官网地址："),s("a",b,[n("https://hub.docker.com/_/registry"),e(a)])]),g,s("p",null,[n("访问 "),s("a",_,[n("http://YourIp:5000/v2/_catalog"),e(a)]),n(" 可以查看当前私有镜像服务中包含的镜像")]),y])}const S=c(l,[["render",f],["__file","10. Centos 7 安装 Docker.html.vue"]]);export{S as default};
