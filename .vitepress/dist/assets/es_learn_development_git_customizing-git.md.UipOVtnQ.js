import{_ as i,c as a,o as s,a4 as e}from"./chunks/framework.CHka9bPJ.js";const k=JSON.parse('{"title":"Personalizando Git","description":"Cómo personalizar tu Git","frontmatter":{"title":"Personalizando Git","description":"Cómo personalizar tu Git","next":{"link":"/es/learn/development/git/common-errors","text":"Errores Comunes"}},"headers":[],"relativePath":"es/learn/development/git/customizing-git.md","filePath":"es/learn/development/git/customizing-git.md","lastUpdated":null}'),o={name:"es/learn/development/git/customizing-git.md"},t=e('<h1 id="personalizando-git" tabindex="-1"><strong>Personalizando Git</strong> <a class="header-anchor" href="#personalizando-git" aria-label="Permalink to &quot;**Personalizando Git**&quot;">​</a></h1><h3 id="configuracion-global" tabindex="-1">Configuración Global <a class="header-anchor" href="#configuracion-global" aria-label="Permalink to &quot;Configuración Global&quot;">​</a></h3><hr><p>Para configurar tu nombre de usuario y email de forma global, utiliza los siguientes comandos:</p><ul><li><strong>¿Por qué hago esto?</strong> Estos datos se mostrarán en los logs de Git, y sirven para identificar al usuario que lo hizo.</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">NOTA</p><p></p><ul><li>Git no validará los datos introducidos.</li><li>Para configurar el nombre de usuario y el email para un repositorio específico, navega hasta el directorio del repositorio y utiliza los comandos sin <code>--global</code>.</li></ul></div><p>Configurando Nombre de Usuario</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Tu Nombre&quot;</span></span></code></pre></div><p>Configurando Email</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;tu_email@ejemplo.com&quot;</span></span></code></pre></div><p>Estos comandos establecen el nombre de usuario y el email a nivel global, lo que significa que se aplicarán a todos los repositorios Git de tu máquina. Si quieres configurar esta información sólo para un repositorio específico, omite la opción <code>--global</code>.</p><h3 id="verificacion" tabindex="-1">Verificación <a class="header-anchor" href="#verificacion" aria-label="Permalink to &quot;Verificación&quot;">​</a></h3><hr><p>Para comprobar que la configuración se ha establecido correctamente, ejecute el siguiente comando:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span></code></pre></div><div class="tip custom-block" style="padding-top:8px;"> Pulsa la tecla <code>q</code> al estilo de <b>VIM</b> para salir. </div><p>Esto mostrará una lista de todos los ajustes de configuración, incluyendo el nombre de usuario y el correo electrónico.</p>',17),l=[t];function n(r,c,p,d,h,u){return s(),a("div",null,l)}const m=i(o,[["render",n]]);export{k as __pageData,m as default};
