$(document).ready(() => {
  const isScrolledTo = (target, classes) => {
    const $el = $(target);
    if ($el.length === 0) return;

    const hT = $el.offset().top;
    const hH = $el.outerHeight();
    const wH = $(window).height();
    const wS = $(window).scrollTop(); // fixed: should use window, not “this”

    // Check if element is in viewport
    if (wS + wH > hT + hH * 0.2) {
      // Add if not already animated
      if (!$el.hasClass("opacity-100")) {
        $el.addClass(`${classes} opacity-100`);
      }
    }
  };

  const scrollFunctions = () => {
    isScrolledTo("#mainFocuses", "animate__animated animate__slideInLeft");
    isScrolledTo("#whatWeHave", "animate__animated animate__slideInRight");
    isScrolledTo("#nextStep", "animate__animated animate__slideInLeft");
  };

  // Debounce scroll events for better performance
  let timeout;
  $(window).on("scroll", function () {
    clearTimeout(timeout);
    timeout = setTimeout(scrollFunctions, 50);
  });

  // Run immediately on load (for reload scenarios)
  scrollFunctions();
  
  const setContent = (content) => {

  }

  const setLang = (lang) => {
    fetch('./data/data.json') // Replace 'data.json' with your file path
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON from the response
      })
      .then(data => {
        const changeLang = (lang) => {
          if (lang === "en") {
            $("#enLang").addClass("fw-bold")
            $("#idLang").removeClass("fw-bold")
            $("#krLang").removeClass("fw-bold")
          } else if (lang === "id") {
            $("#enLang").removeClass("fw-bold")
            $("#idLang").addClass("fw-bold")
            $("#krLang").removeClass("fw-bold")
          } else if (lang === "kr") {
            $("#enLang").removeClass("fw-bold")
            $("#idLang").removeClass("fw-bold")
            $("#krLang").addClass("fw-bold")
          }

          const crtData = (
            lang === "en" ? data.en : 
            lang === "id" ? data.id : 
            lang === "kr" ? data.kr : 
            data.en
          )

          $("#heroMessage h3").html(crtData.hero.highlight)
          $("#heroMessage p").html(crtData.hero.sub)
          $("#mainFocuses h3 strong").html(crtData.hero.pointer)

          $("#whoWeAre h3").html(crtData.about.title)
          $("#whoWeAre p").html(crtData.about.desc)

          $("#whatWeHave h3 strong").html(crtData.products.pointer)
          $("#productsTitle").html(crtData.products.title)

          $("#productsTitle").html(crtData.products.title)

          $("#workraft h5").html(crtData.products.products[0].name)
          $("#workraft p").html(crtData.products.products[0].desc)
          $("#ilums h5").html(crtData.products.products[1].name)
          $("#ilums p").html(crtData.products.products[1].desc)
          $("#sailoc h5").html(crtData.products.products[2].name)
          $("#sailoc p").html(crtData.products.products[2].desc)
          $("#apissac h5").html(crtData.products.products[3].name)
          $("#apissac p").html(crtData.products.products[3].desc)
          $("#ildebya h5").html(crtData.products.products[4].name)
          $("#ildebya p").html(crtData.products.products[4].desc)
          $("#aifo h5").html(crtData.products.products[5].name)
          $("#aifo p").html(crtData.products.products[5].desc)
          
          $("#nextStep h3 strong").html(crtData.solutions.pointer)
          $("#solutionsTitle").html(crtData.solutions.title)
          $("#opTitle1").html(crtData.solutions.options[0].title)
          $("#opDesc1").html(crtData.solutions.options[0].desc)
          $("#opTitle2").html(crtData.solutions.options[1].title)
          $("#opDesc2").html(crtData.solutions.options[1].desc)
          $("#opTitle3").html(crtData.solutions.options[2].title)
          $("#opDesc3").html(crtData.solutions.options[2].desc)
        }

        if ($("html").attr("lang") === "en") {
          // console.log(data.en)
          changeLang("en")
        } else if ($("html").attr("lang") === "id") {
          // console.log(data.id)
          changeLang("id")
        } else if ($("html").attr("lang") === "kr") {
          // console.log(data.kr)
          changeLang("kr")
        } else {
          // console.log(data.en)
          changeLang("en")
        }
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
        document.getElementById('json-output').textContent = 'Error loading JSON data.';
      });
  }

  $("#enLang").on("click", () => {
    $("html").attr("lang", "en")
    setLang("en")
  })
  $("#idLang").on("click", () => {
    $("html").attr("lang", "id")
    setLang("id")
  })
  $("#krLang").on("click", () => {
    $("html").attr("lang", "kr")
    setLang("kr")
  })

})