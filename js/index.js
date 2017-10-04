//************************************
//**********Navbar Fixed**************
//************************************

const navbar = document.querySelector('nav');
const topHeader = document.querySelector('.top-header');

window.addEventListener('scroll', () => {
  console.log(navbar.offsetHeight)
  if(window.scrollY > topHeader.offsetHeight / 2){
    navbar.classList.add('fixed');
  }
  if(window.scrollY < topHeader.offsetHeight / 2){
    navbar.classList.remove('fixed');
  }
  
  if(window.scrollY > topHeader.offsetHeight){
    navbar.classList.add('fixed-show');
  }
  if(window.scrollY < topHeader.offsetHeight){
    navbar.classList.remove('fixed-show');
  }
  
})

//************************************
//**********Navbar Mobile*************
//************************************

const navButton = document.querySelector('.navbar-toggle');
const mobileNav = document.querySelector('.mobile-menu');

navButton.addEventListener('click', function(){
  mobileNav.classList.toggle('mobile-menu-show');
  document.body.classList.toggle('no-scroll');
})

//************************************
//**********Follow dropdown***********
//************************************

  const triggers = document.querySelectorAll('.dropdown');
  const background = document.querySelector('.dropdownBackground');
  const nav = document.querySelector('.navbar-collapse');
  
  console.dir(nav)
  function handleEnter(){
    if(!nav.classList.contains('in')){ //this class 'in' is added only when there is collapsed menu in small devices
      this.classList.add('trigger-enter');
      setTimeout(() => {
        this.classList.add('trigger-enter-active');
      }, 150)
      background.classList.add('open');
  
      const dropdownCoords = (this.querySelector('.dropdown-menu')).getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollSide = window.scrollX;
  
      background.style.width = `${dropdownCoords.width}px`;
      background.style.height = `${dropdownCoords.height}px`;
      background.style.transform = `translate(${dropdownCoords.left - navCoords.left + scrollSide}px, ${dropdownCoords.top - navCoords.top }px)`;
      
    }
    
  }

  function handleLeave(){
    if(!nav.classList.contains('in')){
      this.classList.remove('trigger-enter', 'trigger-enter-active');
      background.classList.remove('open');
    }
    
    
  }

  triggers.forEach( trigger => trigger.addEventListener("mouseenter", handleEnter));
  triggers.forEach( trigger => trigger.addEventListener("mouseleave", handleLeave));
  
  
//************************************
//**********Follow Text***************
//************************************
  
  const backgroundHeader = document.querySelector('.background-header');
  const triggersText = document.querySelectorAll('.text');
  
  function handleEnterText(){
    backgroundHeader.classList.add('background-header-active');
    const triggerCoords = this.getBoundingClientRect();
    const parentRect = document.querySelector('.hover-zoom .col-md-push-6').getBoundingClientRect();
    
    backgroundHeader.style.width = `${triggerCoords.width + 20}px`; //20px extra to "fake" padding   
    backgroundHeader.style.height = `${triggerCoords.height}px`;
    backgroundHeader.style.transform = `translate(${triggerCoords.left - parentRect.left - 10}px, ${this.offsetParent.offsetTop}px)`;
      
    
  }
  
  function handleLeaveText(){
    backgroundHeader.classList.remove('background-header-active');
  }
  
  triggersText.forEach( trigger => trigger.addEventListener("mouseenter", handleEnterText));
  triggersText.forEach( trigger => trigger.addEventListener("mouseleave", handleLeaveText));
  
//***************************************************
//**********Rotating heading*************************
//***************************************************
  window.onload = function(){
    const cubeContainer = document.querySelector('.cube-container');
    const cube = document.querySelector('.cube');
    const cubeSide1 = document.querySelector('.first-side').getBoundingClientRect();
    const cubeSide2 = document.querySelector('.second-side').getBoundingClientRect();
    cubeContainer.style.width = cubeSide2.width + "px";
    setInterval(() => {
      cube.classList.toggle("rotate");
      if(cube.classList.contains("rotate")){
        cubeContainer.style.width = cubeSide1.width + "px";
      }else{
        cubeContainer.style.width = cubeSide2.width + "px";
      }
    },2500);
  }
  

//***************************************************
//**********Slick - Icon slider**********************
//***************************************************

$('.autoplay').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,


  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        //variableWidth: true,


      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        //variableWidth: true,
      }
    }
  ]
});


//***************************************************
//**********Appearing icons under carousel***********
//***************************************************

const listItems = document.querySelectorAll(".under-carousel-list li");
const underSlider = document.querySelector('.under-slider');
const paths = document.querySelectorAll(".under-carousel img");
        
function slideIn(){
  const slideInAt = (window.scrollY + window.innerHeight);
  const trigger = (window.innerWidth > 990) ? (underSlider.offsetTop + (underSlider.clientHeight / 2)) : (underSlider.offsetTop + 40);
  if (trigger < slideInAt){
    listItems.forEach((listItem, i) => {
      setTimeout(function(){
        
        listItem.classList.add('activeIcon');
      },100 * i);
      
      
    });
    paths.forEach(path => {
      setTimeout(function(){
        path.classList.add('activatePath');
      },900);
    });
    
  }
}

window.addEventListener('scroll', slideIn);

//***************************************************
//**********Path behaviour***************************
//***************************************************

const paragraphsTriggers = document.querySelectorAll(".anims__left [data-nb]");
const pathsBlue = document.querySelectorAll(".anims__right [data-nb]");

function makeItBlue(e){
  
  const hoverTriggerData = this.dataset.nb;
  this.classList.add('active');
  pathsBlue.forEach(path => {
    if(hoverTriggerData === path.dataset.nb)
      if(hoverTriggerData != 3){
        path.classList.remove('blue');
        path.classList.add('path');
      }else{
        path.classList.remove('blue');
        path.classList.add('pathOpposite');
      }
      
  })
  
}

function makeItGrey(){
  const hoverTriggerData = this.dataset.nb;
  this.classList.remove('active');
  pathsBlue.forEach(path => {
    if(hoverTriggerData === path.dataset.nb)
      if(hoverTriggerData != 3){
        path.classList.remove('path');
        path.classList.add('blue');
      }else{
        path.classList.remove('pathOpposite');
        path.classList.add('blue');
      }
  })
}

paragraphsTriggers.forEach(trigger => trigger.addEventListener('mouseenter', makeItBlue))
paragraphsTriggers.forEach(trigger => trigger.addEventListener('mouseleave', makeItGrey))

//***************************************************
//**********Hover Slider*****************************
//***************************************************

const hoverText = document.querySelectorAll('.text-container');

hoverText.forEach(text => text.addEventListener("mouseenter", function(){
  document.querySelector(`.full-img [data-img='${this.dataset.img}']`).classList.add('show');

}))
hoverText.forEach(text => text.addEventListener("mouseleave", function(){
  document.querySelector(`.full-img [data-img='${this.dataset.img}']`).classList.remove('show');

}))

//***************************************************
//**********Media-Query-Width < 992px****************
//***************************************************

const footerLists = document.querySelectorAll('.footerLists');
const footerButtons = document.querySelectorAll('.listTrigger');
const footerButtonsText = document.querySelectorAll('.listTrigger h3');
const carousel = document.querySelector('#myCarousel');
//const pathAnimation = document.querySelector(('.make-own .anims__right'));

if(window.innerWidth < 992){
  footerButtons.forEach(button => button.setAttribute('data-toggle', "collapse"));
  footerButtonsText.forEach(text => text.innerHTML += "<span class='caret'></span>");
  footerLists.forEach(list => list.classList.add('collapse'));
  carousel.classList.remove('carousel-fade');
  //pathAnimation.style.display = 'none';
}

