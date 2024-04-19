
const bar01 = document.getElementById('graph01');

  new Chart(bar01, {
    type: 'bar',
    data: {
      labels: ['Mes1', 'Mes2', 'Mes3', 'Mes4'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [1000, 2000, 3000, 4000],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
        {
          label: 'Dataset 2',
          data: [1200, 1300, 1400, 1500],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
      ]
    },
    options: {
      barThickness: 40,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const bar02 = document.getElementById('graph02');

  new Chart(bar02, {
    type: 'bar',
    data: {
      labels: ['Mes1', 'Mes2', 'Mes3', 'Mes4'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const donut01 = document.getElementById('graph03');

  new Chart(donut01, {
    type: 'doughnut',
    data: {
      labels: ['Categoria A', 'Categoria B', 'Categoria C'],

      datasets: [{
        label: '# of Votes',
        data: [30, 19, 3, 5, ],
        borderWidth: 1
      }],
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      }
    }
    
  });

const hor01 = document.getElementById('graph04');

  new Chart(hor01, {
  type: 'bar',
  data: {
    labels: ['a', 'b', 'c', 'd', 'e'],
    datasets: [{
      axis: 'y',
      label: 'My First Dataset',
      data: [100, 90, 80, 70, 60],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
    }]
  },

  options: {
    indexAxis: 'y',
  }

});