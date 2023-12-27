// start student counter section
var getcountervalues = document.querySelectorAll(".countervalue");
// console.log(getcountervalues);

getcountervalues.forEach(function (getcountervalue) {
  // console.log(getcountervalue);
  getcountervalue.textContent = 0;

  const updatecounter = function () {
    const getcttarget = +getcountervalue.getAttribute("data-target");
    // console.log(getcttarget);
    // console.log(typeof getcttarget);

    const getctcontent = +getcountervalue.innerText;
    // console.log(getctcontent);
    // console.log(typeof getctcontent);

    const incnumber = getcttarget / 100;
    // console.log(incnumber);

    if (getctcontent < getcttarget) {
      getcountervalue.textContent = getctcontent + incnumber;
      setTimeout(updatecounter, 30);
    }
  };

  updatecounter();
});
// end student counter section

// start graduate section
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Singapore", 4],
    ["Indonesia", 2],
    ["Srilanka", 8],
  ]);

  var options = {
    title: "Internation Students",
    width: 350,
    height: 250,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
// end graduate section

// start footer section

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();

getyear.textContent = getfullyear;

// end footer section

// start login & sticknote section

// start login
$(document).ready(function () {
  $("#openform").click(function () {
    document.getElementById("myform").style.display = "block";
  });

  $("#closeform").click(function () {
    document.getElementById("myform").style.display = "none";
  });
});

// end login
// end login & sticknote section

// 13FN
