/* Deplace the menu to the top when scroll until to its height */
var sticky = document.getElementById("header").offsetHeight;
window.onscroll= function(){
        if (window.pageYOffset >= sticky) {
         document.querySelector('.navbar').classList.add('fixed');
         
        }else{
            document.querySelector('.navbar').classList.remove('fixed');
         
        }


};

  