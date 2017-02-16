
window.onscroll = function(){
  // console.log(window.pageYOffset);
  console.log(window.pageYOffset);
  var nav = document.getElementById('nav');
  if(window.pageYOffset >450){
    nav.classList.remove("nav-up");
    nav.classList.add("nav-down");
      }
      else if(window.pageYOffset <450){
        nav.classList.remove("nav-down");
        nav.classList.add("nav-up");
      }
    }
