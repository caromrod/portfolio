window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }


  const openEls = document.querySelectorAll("[data-open]");
  const closeEls = document.querySelectorAll("[data-close]");
  const esVisible= "es-visible";
  
  
  
  for (const el of openEls){
  el.addEventListener("click", function(){

      const modalId= this.dataset.open;
      document.getElementById(modalId).classList.add(esVisible);
  });
  }
  
  
  
  
  for (const el of closeEls){
  el.addEventListener("click", function(){
   
  this.parentElement.parentElement.parentElement.classList.remove(esVisible);
      });
      }