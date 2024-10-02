import{a as L,S as w,i as u}from"./assets/vendor-u8rapaCG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function p(e,r=1){try{return(await L.get("https://pixabay.com/api/",{params:{key:"46020847-b0dc78394505c5145868b7f5c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(a){return console.error("Error fetching data:",a),a}}const C=new w(".gallery a"),y=e=>{const r=document.querySelector(".gallery");if(e.length===0){u.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",imageWidth:30});return}const a=e.map(({webformatURL:l,largeImageURL:t,tags:o,likes:i,views:b,comments:S,downloads:q})=>`<li class="gallery-list-item">
                    <a class="gallery-link" href="${t}">
                        <img class="img" src="${l}" 
                        alt="${o}" 
                        title="${o}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${b}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${S}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${q}</p>
                        </li>
                    </ul> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",a),C.refresh()},E=()=>{document.querySelector(".gallery").innerHTML=""},g=()=>{const e=document.querySelector(".loader");e&&(e.style.display="block")},h=()=>{const e=document.querySelector(".loader");e&&(e.style.display="none")},x=()=>{const e=document.querySelector(".loader-more");e.style.display="block"},d=()=>{const e=document.querySelector(".loader-more");e.style.display="none"},f=()=>{u.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(37, 150, 190)",position:"topRight",timeout:5e3})},H=document.querySelector(".formFetchEl"),n=document.createElement("button");n.classList.add("loader-more");n.textContent="Load more";n.style.display="none";document.body.appendChild(n);let c="",s=1,m=0;H.addEventListener("submit",async e=>{if(e.preventDefault(),c=document.querySelector('input[name="search"]').value.trim(),s=1,!c){iziToast.error({title:"Error",message:"Search query cannot be empty."});return}E(),d();try{g();const r=await p(c,s);m=r.totalHits,r.hits.length>0&&(y(r.hits),x()),(r.hits.length<15||s*15>=m)&&(d(),f())}catch{iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{h()}});n.addEventListener("click",async()=>{s++;try{g();const e=await p(c,s);y(e.hits),s*15>=m&&(d(),f());const r=document.querySelector(".gallery"),{height:a}=r.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}catch{iziToast.error({title:"Error",message:"Sorry, there are no images matching <br> your search query. Please try again!"})}finally{h()}});
//# sourceMappingURL=index.js.map
