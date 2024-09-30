import{a as L,S,i as f}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function w(a,o=1){try{return(await L.get("https://pixabay.com/api/",{params:{key:"46020847-b0dc78394505c5145868b7f5c",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}catch(s){return console.error("Error fetching data:",s),s}}function q(a,o){const s=a.map(({webformatURL:r,largeImageURL:e,tags:t,likes:l,views:g,comments:i,downloads:c})=>`<li class="gallery-list-item">
                    <a class="gallery-link" href="${e}">
                        <img class="img" src="${r}" 
                        alt="${t}" 
                        title="${t}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${l}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${g}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${c}</p>
                        </li>
                    </ul> 
          </li>`).join("");o.insertAdjacentHTML("beforeend",s)}const x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_168)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23fff'/%3e%3cpath%20d='M6.96888%206.969C7.03854%206.89915%207.12131%206.84374%207.21243%206.80593C7.30354%206.76812%207.40122%206.74866%207.49988%206.74866C7.59853%206.74866%207.69621%206.76812%207.78733%206.80593C7.87844%206.84374%207.96121%206.89915%208.03088%206.969L11.9999%2010.9395L15.9689%206.969C16.0386%206.89927%2016.1214%206.84395%2016.2125%206.80621C16.3036%206.76847%2016.4013%206.74905%2016.4999%206.74905C16.5985%206.74905%2016.6961%206.76847%2016.7873%206.80621C16.8784%206.84395%2016.9611%206.89927%2017.0309%206.969C17.1006%207.03873%2017.1559%207.12151%2017.1937%207.21262C17.2314%207.30373%2017.2508%207.40138%2017.2508%207.5C17.2508%207.59861%2017.2314%207.69626%2017.1937%207.78737C17.1559%207.87848%2017.1006%207.96127%2017.0309%208.031L13.0604%2012L17.0309%2015.969C17.1006%2016.0387%2017.1559%2016.1215%2017.1937%2016.2126C17.2314%2016.3037%2017.2508%2016.4014%2017.2508%2016.5C17.2508%2016.5986%2017.2314%2016.6963%2017.1937%2016.7874C17.1559%2016.8785%2017.1006%2016.9613%2017.0309%2017.031C16.9611%2017.1007%2016.8784%2017.156%2016.7873%2017.1938C16.6961%2017.2315%2016.5985%2017.2509%2016.4999%2017.2509C16.4013%2017.2509%2016.3036%2017.2315%2016.2125%2017.1938C16.1214%2017.156%2016.0386%2017.1007%2015.9689%2017.031L11.9999%2013.0605L8.03088%2017.031C7.96114%2017.1007%207.87836%2017.156%207.78725%2017.1938C7.69614%2017.2315%207.59849%2017.2509%207.49988%2017.2509C7.40126%2017.2509%207.30361%2017.2315%207.2125%2017.1938C7.12139%2017.156%207.03861%2017.1007%206.96888%2017.031C6.89914%2016.9613%206.84383%2016.8785%206.80609%2016.7874C6.76835%2016.6963%206.74893%2016.5986%206.74893%2016.5C6.74893%2016.4014%206.76835%2016.3037%206.80609%2016.2126C6.84383%2016.1215%206.89914%2016.0387%206.96888%2015.969L10.9394%2012L6.96888%208.031C6.89903%207.96133%206.84362%207.87857%206.80581%207.78745C6.768%207.69633%206.74854%207.59865%206.74854%207.5C6.74854%207.40135%206.768%207.30366%206.80581%207.21255C6.84362%207.12143%206.89903%207.03867%206.96888%206.969Z'%20fill='%23fff'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_168'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",E=document.querySelector("body"),T=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button type="submit" class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
      <span class="loader-more">Loading</span>
      <button type="button" class="btnMorePostsEl">Load more</button>
</div>`;E.insertAdjacentHTML("afterbegin",T);const d=document.querySelector(".loader"),p=document.querySelector(".loader-more"),n=document.querySelector(".btnMorePostsEl");document.querySelector(".search-input");d.style.display="none";p.style.display="none";n.style.display="none";let h=new S(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});h.refresh();const z=document.querySelector(".formFetchEl"),m=document.querySelector(".galleryEl");let u=1,y;async function b(a,o,s){const r=await w(a,o);try{if("message"in r)throw r.message;if(r.hits.length===0&&o>1){f.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",iconUrl:x,imageWidth:30});const e=document.querySelector(".iziToast");e.style.borderRadius="10px",e.style.overflow="hidden";const t=document.querySelector(".iziToast-wrapper");t.style.backgroundColor="transparent",t.style.left="10px",n.style.display="none"}else{(s==null?void 0:s.type)==="submit"?d.style.display="block":p.style.display="block",q(r.hits,m),r.hits.length<15?n.style.display="none":(s==null?void 0:s.type)==="submit"&&(n.style.display="block");const e=m.querySelectorAll("li");if(r.totalHits<=e.length&&o>1){f.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(37, 150, 190)",position:"topRight",timeout:5e3});const i=document.querySelector(".iziToast");i.style.borderRadius="10px",i.style.overflow="hidden";const c=document.querySelector(".iziToast-wrapper");c.style.position="fixed",d.style.display="none",p.style.display="none";return}const t=m.querySelectorAll("img"),g=Array.from(t).slice(-r.hits.length).map(i=>new Promise((c,C)=>{i.onload=()=>c(i),i.onerror=()=>C(new Error(`Failed to load image: ${i.src}`))}));Promise.all(g).then(()=>{d.style.display="none",p.style.display="none",h.refresh()}).catch(i=>{console.error("Error loading images:",i)})}}catch(e){if(d.style.display="none",p.style.display="none",n.style.display="none",o>1){f.show({message:`Sorry, ${e}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const t=document.querySelector(".iziToast");t.style.borderRadius="10px";const l=document.querySelector(".iziToast-wrapper");l.style.position="fixed",t.style.overflow="hidden"}}}z.addEventListener("submit",a=>{if(a.preventDefault(),m.innerHTML="",u=1,y=a.currentTarget.elements.search.value.toLowerCase().trim(),!y){n.style.display="none";return}b(y,u,a),u++});n.addEventListener("click",async a=>{if(!y)return;await b(y,u),u++;const o=document.querySelector(".gallery-list-item");if(o){const s=o.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}});
//# sourceMappingURL=index.js.map
