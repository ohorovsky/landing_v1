/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//************************************
//**********Navbar Fixed**************
//************************************

var navbar = document.querySelector('nav');
var topHeader = document.querySelector('.top-header');

window.addEventListener('scroll', function () {

  if (window.scrollY > topHeader.offsetHeight / 2) {
    navbar.classList.add('fixed');
  }
  if (window.scrollY < topHeader.offsetHeight / 2) {
    navbar.classList.remove('fixed');
  }

  if (window.scrollY > topHeader.offsetHeight) {
    navbar.classList.add('fixed-show');
  }
  if (window.scrollY < topHeader.offsetHeight) {
    navbar.classList.remove('fixed-show');
  }
});

//************************************
//**********Navbar Mobile*************
//************************************

var navButton = document.querySelector('.navbar-toggle');
var mobileNav = document.querySelector('.mobile-menu');

navButton.addEventListener('click', function () {
  mobileNav.classList.toggle('mobile-menu-show');
  document.body.classList.toggle('no-scroll');
});

//************************************
//**********Follow dropdown***********
//************************************

var triggers = document.querySelectorAll('.dropdown');
var background = document.querySelector('.dropdownBackground');
var nav = document.querySelector('.navbar-collapse');

function handleEnter() {
  var _this = this;

  if (!nav.classList.contains('in')) {
    //this class 'in' is added only when there is collapsed menu in small devices
    this.classList.add('trigger-enter');
    setTimeout(function () {
      _this.classList.add('trigger-enter-active');
    }, 150);
    background.classList.add('open');

    var dropdownCoords = this.querySelector('.dropdown-menu').getBoundingClientRect();
    var navCoords = nav.getBoundingClientRect();
    var scrollTop = window.scrollY;
    var scrollSide = window.scrollX;

    background.style.width = dropdownCoords.width + 'px';
    background.style.height = dropdownCoords.height + 'px';
    background.style.transform = 'translate(' + (dropdownCoords.left - navCoords.left + scrollSide) + 'px, ' + (dropdownCoords.top - navCoords.top) + 'px)';
  }
}

function handleLeave() {
  if (!nav.classList.contains('in')) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }
}

triggers.forEach(function (trigger) {
  return trigger.addEventListener("mouseenter", handleEnter);
});
triggers.forEach(function (trigger) {
  return trigger.addEventListener("mouseleave", handleLeave);
});

//************************************
//**********Follow Text***************
//************************************

var backgroundHeader = document.querySelector('.background-header');
var triggersText = document.querySelectorAll('.text');

function handleEnterText() {
  backgroundHeader.classList.add('background-header-active');
  var triggerCoords = this.getBoundingClientRect();
  var parentRect = document.querySelector('.hover-zoom .col-md-push-6').getBoundingClientRect();

  backgroundHeader.style.width = triggerCoords.width + 20 + 'px'; //20px extra to "fake" padding   
  backgroundHeader.style.height = triggerCoords.height + 'px';
  backgroundHeader.style.transform = 'translate(' + (triggerCoords.left - parentRect.left - 10) + 'px, ' + this.offsetParent.offsetTop + 'px)';
}

function handleLeaveText() {
  backgroundHeader.classList.remove('background-header-active');
}

triggersText.forEach(function (trigger) {
  return trigger.addEventListener("mouseenter", handleEnterText);
});
triggersText.forEach(function (trigger) {
  return trigger.addEventListener("mouseleave", handleLeaveText);
});

//***************************************************
//**********Rotating heading*************************
//***************************************************
window.onload = function () {
  var cubeContainer = document.querySelector('.cube-container');
  var cube = document.querySelector('.cube');
  var cubeSide1 = document.querySelector('.first-side').getBoundingClientRect();
  var cubeSide2 = document.querySelector('.second-side').getBoundingClientRect();
  cubeContainer.style.width = cubeSide2.width + "px";
  setInterval(function () {
    cube.classList.toggle("rotate");
    if (cube.classList.contains("rotate")) {
      cubeContainer.style.width = cubeSide1.width + "px";
    } else {
      cubeContainer.style.width = cubeSide2.width + "px";
    }
  }, 2500);
};

//***************************************************
//**********Slick - Icon slider**********************
//***************************************************

$('.autoplay').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,

  responsive: [{
    breakpoint: 1150,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
      //variableWidth: true,


    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
      //variableWidth: true,
    }
  }]
});

//***************************************************
//**********Appearing icons under carousel***********
//***************************************************

var listItems = document.querySelectorAll(".under-carousel-list li");
var underSlider = document.querySelector('.under-slider');
var paths = document.querySelectorAll(".under-carousel img");

function slideIn() {
  var slideInAt = window.scrollY + window.innerHeight;
  var trigger = window.innerWidth > 990 ? underSlider.offsetTop + underSlider.clientHeight / 2 : underSlider.offsetTop + 40;
  if (trigger < slideInAt) {
    listItems.forEach(function (listItem, i) {
      setTimeout(function () {

        listItem.classList.add('activeIcon');
      }, 100 * i);
    });
    paths.forEach(function (path) {
      setTimeout(function () {
        path.classList.add('activatePath');
      }, 900);
    });
  }
}

window.addEventListener('scroll', slideIn);

//***************************************************
//**********Path behaviour***************************
//***************************************************

var paragraphsTriggers = document.querySelectorAll(".anims__left [data-nb]");
var pathsBlue = document.querySelectorAll(".anims__right [data-nb]");

function makeItBlue(e) {

  var hoverTriggerData = this.dataset.nb;
  this.classList.add('active');
  pathsBlue.forEach(function (path) {
    if (hoverTriggerData === path.dataset.nb) if (hoverTriggerData != 3) {
      path.classList.remove('blue');
      path.classList.add('path');
    } else {
      path.classList.remove('blue');
      path.classList.add('pathOpposite');
    }
  });
}

function makeItGrey() {
  var hoverTriggerData = this.dataset.nb;
  this.classList.remove('active');
  pathsBlue.forEach(function (path) {
    if (hoverTriggerData === path.dataset.nb) if (hoverTriggerData != 3) {
      path.classList.remove('path');
      path.classList.add('blue');
    } else {
      path.classList.remove('pathOpposite');
      path.classList.add('blue');
    }
  });
}

paragraphsTriggers.forEach(function (trigger) {
  return trigger.addEventListener('mouseenter', makeItBlue);
});
paragraphsTriggers.forEach(function (trigger) {
  return trigger.addEventListener('mouseleave', makeItGrey);
});

//***************************************************
//**********Hover Slider*****************************
//***************************************************

var hoverText = document.querySelectorAll('.text-container');

hoverText.forEach(function (text) {
  return text.addEventListener("mouseenter", function () {
    document.querySelector('.full-img [data-img=\'' + this.dataset.img + '\']').classList.add('show');
  });
});
hoverText.forEach(function (text) {
  return text.addEventListener("mouseleave", function () {
    document.querySelector('.full-img [data-img=\'' + this.dataset.img + '\']').classList.remove('show');
  });
});

//***************************************************
//**********Media-Query-Width < 992px****************
//***************************************************

var footerLists = document.querySelectorAll('.footerLists');
var footerButtons = document.querySelectorAll('.listTrigger');
var footerButtonsText = document.querySelectorAll('.listTrigger h3');
var carousel = document.querySelector('#myCarousel');
//const pathAnimation = document.querySelector(('.make-own .anims__right'));

if (window.innerWidth < 992) {
  footerButtons.forEach(function (button) {
    return button.setAttribute('data-toggle', "collapse");
  });
  footerButtonsText.forEach(function (text) {
    return text.innerHTML += "<span class='caret'></span>";
  });
  footerLists.forEach(function (list) {
    return list.classList.add('collapse');
  });
  carousel.classList.remove('carousel-fade');
  //pathAnimation.style.display = 'none';
}

/***/ })
/******/ ]);