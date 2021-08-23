$(document).ready(function () {

  var ctx = $("#bar-chartcanvas");

  var data = {
    labels : ["", "", "", "", "",],
    datasets : [
      {
        label : "Interest",
        data : [2500, 3000, 1500, 2500, 1500, 3500],
        backgroundColor : [
          "#2E0002", "#2E0002", "#2E0002", "#2E0002", "#2E0002"
        ],
        borderColor : [
          "#111", "#111", "#111", "#111", "#111"
        ],
        borderWidth : 1
      },
      {
        label : "Referals",
        data : [1500, 1000, 2000, 1500, 2000, 3500],
        backgroundColor : [
          "#C6B080", "#C6B080", "#C6B080", "#C6B080", "#C6B080"
        ],
        borderColor : [
          "#111", "#111", "#111", "#111", "#111"
        ],
        borderWidth : 1
      }
    ]
  };

  var options = {
    title : {
      display : true,
      position : "top",
      text : "",
      fontSize : 18,
      fontColor : "#111"
    },
    legend : {
      display : false
    },
    scales : {
      yAxes : [{
        ticks : {
          min : 500
        }
      }]
    }
  };

  var chart = new Chart( ctx, {
    type : "bar",
    data : data,
    options : options
  });

});

