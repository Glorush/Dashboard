$(document).ready(function () {

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'k',
            data: [1, 3, 2, 4, 5],
            backgroundColor: [
                'transparent',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }},

        legend: {
           display: false //This will do the task
        }
        
    }
});

 

 

});

