// start navbar
$(document).ready(function () {
  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });
});
// end navbar

// start student counter section
$(document).ready(function () {
  let getcountervalues = document.querySelectorAll(".countervalues");

  getcountervalues.forEach(function (getcountervalue) {
    getcountervalue.textContent = 0;

    const updateCounter = function () {
      const getctcontent = Number(getcountervalue.textContent); // 0
      const getcttarget = Number(getcountervalue.getAttribute("data-target")); // 95000
      const getincnumber = getcttarget / 100; // 950

      if (getctcontent < getcttarget) {
        getcountervalue.textContent = getctcontent + getincnumber;
        setTimeout(updateCounter, 10);
        // setInterval(updateCounter, 100);
      }
    };

    updateCounter();
  });
});
// end student counter section

// start graduate section
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Qty"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Singapore", 4],
    ["Indonesia", 2],
    ["Srilanka", 8],
  ]);

  var options = {
    title: "Internationl Students",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
// end graduate section

// start footer section
$(document).ready(function () {
  const getyear = document.getElementById("getyear");
  const getfullyear = new Date().getFullYear();
  getyear.textContent = getfullyear;
});
// end footer section

// start login
$(document).ready(function () {
  $("#openform").click(function () {
    $("#popupform").show("300");
  });

  $("#closeform").click(function () {
    $("#popupform").hide("300");
  });
});
// end login
