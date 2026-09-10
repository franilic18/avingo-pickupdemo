const uxBaseDraw=draw;
const UXBACK={pre:'home',qr:'pre',staff:'qr',active:'staff',return:'active',damage:'return',photos:'return',fuel:'photos',km:'fuel',things:'km',compare:'things',complete:'home'};
draw=function(){uxBaseDraw();if(us==='home')return;const top=document.querySelector('.u-top');if(!top)return;const b=document.createElement('button');b.className='u-back';b.textContent='←';b.setAttribute('aria-label','Back');b.onclick=()=>{us=UXBACK[us]||'home';draw()};top.prepend(b)};
document.head.insertAdjacentHTML('beforeend',`<style>.u-app{animation:uIn .22s ease-out}.u-back{width:36px;height:36px;border:1px solid #dbe4ea;background:white;border-radius:10px;font-size:21px;margin-right:auto}.u-top select{margin-left:10px}@keyframes uIn{from{opacity:.35;transform:translateY(5px)}to{opacity:1;transform:none}}</style>`);
draw();
