$(document).ready(() => {
  const isScrolledTo = (target, classes) => {
     var hT = $(target).offset().top,
         hH = $(target).outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     if (wS > (hT+hH-wH)){
         $(target)
            .addClass(`${classes} opacity-100`)
            .removeClass("opacity-0")
            .attr("transition", "opacity 2s ease-in-out")
     }
  }
  
  const scrollFunctions = () => {
    isScrolledTo("#mainFocuses", "animate__animated animate__slideInLeft")
    isScrolledTo("#whatWeHave", "animate__animated animate__slideInRight")
    isScrolledTo("#nextStep", "animate__animated animate__slideInLeft")
  }
  
  // initialize
  // scrollFunctions()
    isScrolledTo("#mainFocuses", "animate__animated animate__slideInLeft")
  
  $(window).scroll(function() {
    scrollFunctions()
  });
})