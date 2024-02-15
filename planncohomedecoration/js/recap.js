// start header section
$(document).ready(function () {
  // start navbar

  $(window).scroll(function () {
    var getScrollTop = $(this).scrollTop();

    if (getScrollTop >= 250) {
      $(".mynavs").addClass("mysmallnavs");
    } else {
      $(".mynavs").removeClass("mysmallnavs");
    }
  });

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });

  // end navbar
});
// end header section

// start properties section
$(document).ready(function () {
  $(".propertylists").click(function () {
    $(this).addClass("activeitems");
    $(this).siblings().removeClass("activeitems");

    let filterValues = $(this).data("filter");

    if (filterValues === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide();

      $(".filters").not(`.${filterValues}`).hide("slide", 500);
      $(".filters").filter(`.${filterValues}`).show("slide", 500);
    }
  });
});
// end properties section

// start adv section
$(document).ready(function () {
  $(window).scroll(function () {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 830) {
      $(".advimgs").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    } else {
      $(".advimgs").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });
});
// end adv section

// start footer section
$(document).ready(function () {
  getyear = $("#getyear");
  getfullyear = new Date().getFullYear();

  getyear.text(getfullyear);
});
// end footer section

// start backtotop section
$(document).ready(function () {
  $(".btn-backtotops").hide();

  $(window).scroll(function () {
    let getscrolltops = $(document).scrollTop();

    if (getscrolltops >= 360) {
      $(".btn-backtotops").fadeIn(500);
    } else {
      $(".btn-backtotops").fadeOut(500);
    }
  });

  $(".btn-backtotops").click(function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
});
// end backtotop section
