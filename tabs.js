(function(){
  function activate(id){
    document.querySelectorAll(".tab").forEach(b=>{
      b.classList.toggle("active", b.dataset.target===id);
    });
    document.querySelectorAll(".tab-content").forEach(s=>{
      s.classList.toggle("active", s.id===id);
    });
  }
  document.addEventListener("click",(e)=>{
    const b=e.target.closest(".tab"); if(!b||!b.dataset.target) return;
    activate(b.dataset.target);
  });
  // activar la primera pestaña disponible
  const first=document.querySelector(".tab");
  if(first) activate(first.dataset.target);
})();
