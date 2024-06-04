import{_ as i,c as t,o as s,a4 as a}from"./chunks/framework.ttppV29E.js";const k=JSON.parse('{"title":"Customizing Git","description":"How to customize your Git","frontmatter":{"title":"Customizing Git","description":"How to customize your Git","next":{"link":"/en/learn/development/git/common-errors","text":"Common Errors"}},"headers":[],"relativePath":"en/learn/development/git/customizing-git.md","filePath":"en/learn/development/git/customizing-git.md","lastUpdated":1717168804000}'),e={name:"en/learn/development/git/customizing-git.md"},o=a('<h1 id="customizing-git" tabindex="-1"><strong>Customizing Git</strong> <a class="header-anchor" href="#customizing-git" aria-label="Permalink to &quot;**Customizing Git**&quot;">​</a></h1><h3 id="global-configuration" tabindex="-1">Global Configuration <a class="header-anchor" href="#global-configuration" aria-label="Permalink to &quot;Global Configuration&quot;">​</a></h3><hr><p>To configure your username and email globally, use the following commands:</p><ul><li><strong>Why do we set this up?</strong> This data will be shown in the Git logs, and serves to identify the user who did it.</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><ul><li>Git will not validate the data entered.</li><li>To configure the username and email for a specific repository, navigate to the repository directory and use the commands without <code>--global</code>.</li></ul></div><p>Configuring Username</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Your Name&quot;</span></span></code></pre></div><p>Configuring Email</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;your_email@example.com&quot;</span></span></code></pre></div><p>These commands set the username and email at the global level, meaning they will apply to all Git repositories on your machine. If you want to configure this information only for a specific repository, omit the <code>--global</code> option.</p><h3 id="verification" tabindex="-1">Verification <a class="header-anchor" href="#verification" aria-label="Permalink to &quot;Verification&quot;">​</a></h3><hr><p>To verify that the configuration has been set correctly, run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span></code></pre></div><div class="tip custom-block" style="padding-top:8px;"> Press the letter <code>q</code> in <b>VIM</b> style to exit. </div><p>This will display a list of all the configuration settings, including the username and email.</p>',17),n=[o];function l(h,r,p,d,c,g){return s(),t("div",null,n)}const m=i(e,[["render",l]]);export{k as __pageData,m as default};
