import { isAuthenticated, logout } from "../../middlewares/auth.middleware";
import { devEnvironment, environment } from '../../environments/environments.js';

const apiUrl = `${environment.ApiUrl}`;

var token = localStorage.getItem('token');

if (!isAuthenticated()) window.location.href = "/pages/auth/";

logout();

const CHART_COLORS = {
  cat1: 'rgb(5, 67, 109)',
  cat2: 'rgb(5, 91, 149)',
  cat3: 'rgb(42, 112, 160)',
  cat4: 'rgb(39, 150, 225)',
  cat5: 'rgb(9, 184, 242)',
  cat6: 'rgb(130, 196, 241)',
  cat7: 'rgb(194, 227, 249)'
};

const bar01 = document.getElementById('graph01');

var options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: 'Bearer ' + token,
  },
};

document.addEventListener('DOMContentLoaded', function () {
  fetch(`${apiUrl}/History`, options)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText());
      return response.json();
    })
    .then((data) => {
      const monthSumPrices = {};

      data.data.forEach((item) => {
        const creationDate = new Date(item.dateSale);
        console.log(creationDate)
        const month = creationDate.getMonth();
        console.log(month)
        const totalPrice = item.amountSale;
        console.log(totalPrice)


        if (monthSumPrices[month]) {
          monthSumPrices[month] += totalPrice;
        } else {
          monthSumPrices[month] = totalPrice;
        }
      });

      const monthLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      
      const months = Object.keys(monthSumPrices).map(Number);
      console.log(months)
      const totalPrices = Object.values(monthSumPrices);
      console.log(totalPrices)

      const labels = months.map((month) => monthLabels[month]);
      console.log(labels)

      new Chart(bar01, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Faturamento',
              data: totalPrices,
              backgroundColor: 'rgba(21, 94, 147, 0.8 )',
            },
            {
              label: 'Meta',
              data: [500, 1000],
              backgroundColor: 'rgba(91, 213, 88, 0.8 )',
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
      
  })

});

const bar02 = document.getElementById('graph02');

new Chart(bar02, {
  type: 'bar',
  data: {
    labels: ['Mes1', 'Mes2', 'Mes3', 'Mes4'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: 'rgba(201, 160, 62, 0.8)',
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
    labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],

    datasets: [{
      label: '# of Votes',
      data: [10, 10, 10, 10,],
      borderWidth: 1,
      backgroundColor: Object.values(CHART_COLORS),
    }],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'white'
          }
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
  { quantidade: 32 }
];

var progressBarsContainer = document.getElementById("box-progress-bar");

produtos.forEach(function (produto) {
  updateProgressBar(progressBarsContainer, produto.quantidade);
});

