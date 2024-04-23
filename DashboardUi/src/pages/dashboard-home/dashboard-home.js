
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

  function updateProgressBar(container, quantidade) {

    var progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-bar-container";

    var progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    var largura = quantidade + "%";
    progressBar.style.width = largura;

    var progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.textContent = quantidade;

    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(progressText);

    container.appendChild(progressBarContainer);
  }

  var produtos = [
    { quantidade: 50 },
    { quantidade: 30 },
    { quantidade: 64 },
    { quantidade: 98 },
    { quantidade: 11 },
    { quantidade: 32 }
];

var progressBarsContainer = document.getElementById("box-progress-bar");

produtos.forEach(function(produto) {
  updateProgressBar(progressBarsContainer, produto.quantidade);
});