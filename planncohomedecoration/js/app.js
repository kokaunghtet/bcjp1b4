$(document).ready(function () {
  // start back to top

  $(".btn-backtotops").hide();

  $(window).scroll(function () {
    var getScrollTop = $(this).scrollTop();
    // console.log(getScrollTop);

    if (getScrollTop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });

  // end back to top

  // start navbar

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);

    if (position >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });

  // end navbar

  // start property section

  $(".propertylists").click(function () {
    // console.log("Hey");

    // $(this).addClass("activeitems");
    // $(this).siblings().removeClass("activeitems");
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    let filterValue = $(this).data("filter");
    //  filterValue = $(this).attr("data-filter");
    // console.log(filterValue);

    if (filterValue == "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide();

      $(".filters")
        .filter("." + filterValue)
        .show("slide", 500);

      $(".filters")
        .not("." + filterValue)
        .hide("slide", 500);
    }
  });

  // end property section

  // start adv section

  $(window).scroll(function () {
    var getScrollTop = $(this).scrollTop();
    // console.log(getScrollTop);

    if (getScrollTop >= 950) {
      $(".advimgs").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    } else {
      $(".advimgs").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });

  // end adv section

  // start footer section
  const getYear = $("#getyear");
  const getFullYear = new Date().getFullYear();
  getYear.text(getFullYear);

  // end footer section
});
