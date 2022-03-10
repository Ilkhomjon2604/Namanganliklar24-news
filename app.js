let elModal = document.querySelector(".model");
let elCloseModal = document.querySelector(".js-exit");

if(elCloseModal){
  elCloseModal.addEventListener('click' , function(){
    elModal.classList.remove("modal-open")
  })
}


setTimeout(function(){
  elModal.classList.add("modal-open");
},3000);