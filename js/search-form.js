var btnclick = document.querySelector(".btn-hotels-search");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var datein =popup.querySelector("[name=checkin]")
var dateout =popup.querySelector("[name=checkout]")
var adults =popup.querySelector("[name=adult]")
var kids =  popup.querySelector("[name=kids]")

btnclick.addEventListener("click", function(pushbtn){
pushbtn.preventDefault();
popup.classList.toggle("search-form-show");
});

form.addEventListener ("submit", function(formsub){
  if(!adults.value || !kids.value || !checkin.value || !checkout.value){}
formsub.preventDefault();
popup.classList.toggle("form-error");
});
window.addEventListener("keydown", function(keyclose) {
  if(keyclose.keyCode === 27) {
   if(popup.classList.contains ("search-form-show")){
     popup.classList.remove("search-form-show");
   }
 }
});
