let cache={error:{}};const init=async()=>{let e=document.querySelectorAll("div.VPNavBarTranslations.translations div.items > div.VPMenuLink > a"),t=new URLSearchParams(window.location.search);if(t.get("e")&&"5"===t.get("e")){if(cache?.error?.alert)return;let n=document.querySelector("main.main > div > div"),a=document.createElement("div");a.classList.add("warning","custom-block");let i=document.createElement("p");i.classList.add("custom-block-title"),i.innerHTML="This page is not available in your language";let l=document.createElement("p");l.innerHTML="You can read it in English, while we try to translate it.",a.appendChild(i),a.appendChild(l),n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),cache.error.alert=!0}if(e&&e.length>0)for(let r of e)r.href=`/${r.href.split("/")[3]}${window.location.pathname.slice().slice(window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1))}`;if((document.querySelector("div.NotFound > p.code")||{}).innerHTML?.trim().includes("404")&&!window.location.pathname.endsWith("/en/")){let c=window.location.pathname.endsWith("/")?window.location.pathname:`${window.location.pathname}/`;window.location.href=`/en${c.slice(c.indexOf("/",c.indexOf("/")+1))}?e=5`}document.querySelectorAll("div.language-md").forEach(e=>{e.querySelectorAll("span").forEach(e=>{(e.innerHTML.includes("https://")||e.innerHTML.includes("http://"))&&(e.addEventListener("click",()=>{let t=e.innerHTML.match(/https?:\/\/\S+/)[0];window.open(t,"_blank")}),e.style.cursor="pointer")})})},createInterval=(e,t)=>new Promise((n,a)=>{try{let i=setInterval(e,t);n(i)}catch(l){a(l)}});createInterval(init,500).then(e=>{console.log(`Interval created with ID: ${e}`)}).catch(e=>{console.error(`Failed to create interval: ${e}`)});