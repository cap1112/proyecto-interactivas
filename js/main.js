const navSlide = () => {
    let bottom = document.querySelector('.bottom');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    bottom.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      //bottom animation
      bottom.classList.toggle('toggle');
    });
  }
navSlide();