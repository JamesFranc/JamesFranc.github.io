window.onscroll = function(){
  console.log(window.pageYOffset);
  var nav = document.getElementById('nav-bar');
  if(window.pageYOffset >200){
    nav.classList.add("navbar1");
      }
      else{
        nav.classList.remove("navbar1");
      }
    }
