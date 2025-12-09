const aura = document.querySelectorAll('.aizen-text');
aura.forEach((el)=>{
el.style.opacity = 0;
setTimeout(()=>{
el.style.transition = '1.5s';
el.style.opacity = 1;
}, 400);
});


const reiatsu = document.querySelectorAll('.reiatsu');
reiatsu.forEach((r)=>{
r.addEventListener('mouseenter', ()=>{
r.style.filter = 'drop-shadow(0 0 12px #6aa2ff)';
});
r.addEventListener('mouseleave', ()=>{
r.style.filter = 'none';
});
});
