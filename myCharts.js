$(document).ready(function(){
let stat2 = document.getElementById('stat2').getContext('2d');
let stat3 = document.getElementById('stat3').getContext('2d');
let stat5 = document.getElementById('stat5').getContext('2d');

let agedDistress = new Chart(stat2, {
    type: 'bar',
    data:{
        labels:['15-24 ans', '25-44 ans', '45-64 ans', '65 ans et +'],
        datasets:[{
            label:'Proportion',
            data:[36, 31, 26, 22],
            backgroundColor:[
                'rgba(197, 90, 17, 0.6)',
                'rgba(244, 177, 131, 0.6)',
                'rgba(255, 217, 102, 0.6)',
                'rgba(80, 165, 52, 0.6)'],
            borderWidth:1,
            borderColor:[
                '#c55a11',
                '#f4b183',
                '#ffd966',
                '#50a534']
        }]
    },
    options:{
        legend:{display:false},
        tooltips:{enabled:false},
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Proportion (%)'
                  },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let collegeAnxiety = new Chart(stat3, {
    type: 'doughnut',
    data:{
        labels:["Haut niveau d'anxiété", 'Autres'],
        datasets:[{
            label:'Proportion',
            data:[35.1, 64.9],
            backgroundColor:[
                'rgba(197, 90, 17, 0.6)',
                'rgba(80, 165, 52, 0.6)'
            ],
            borderWidth:1,
            borderColor:['#c55a11', '#50a534',]
        }]
    },
    options:{
        legend:{display:true},
        tooltips:{enabled:false}
    }
});

let distressIncrease = new Chart(stat5, {
    type: 'bar',
    data:{
        labels:['', '2011', '2017', ''],
        datasets:[{
            label:'Proportion',
            data:[0, 21, 29, 0],
            backgroundColor:[
                'rgba(0, 0, 0, 0)',
                'rgba(255, 217, 102, 0.6)',
                'rgba(197, 90, 17, 0.6)',
                'rgba(0, 0, 0, 0)'
            ],
            borderWidth:1,
            borderColor:['rgba(0, 0, 0, 0)', '#ffd966', '#c55a11', 'rgba(0, 0, 0, 0)']
        }, {
        label:'Tendance',
        type: 'line',
        data:[0, 21, 29, 50]
        }]
    },
    options:{
        legend:{display:false},
        tooltips:{enabled:false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:40
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Proportion (%)'
                  }
            }]
        }
    }
})

});