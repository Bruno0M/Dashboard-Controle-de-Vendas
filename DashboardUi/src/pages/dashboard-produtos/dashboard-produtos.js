const CHART_COLORS = {
  cat1: 'rgb(5, 67, 109)',
  cat2: 'rgb(5, 91, 149)',
  cat3: 'rgb(42, 112, 160)',
  cat4: 'rgb(39, 150, 225)',
  cat5: 'rgb(9, 184, 242)',
  cat6: 'rgb(130, 196, 241)',
  cat7: 'rgb(194, 227, 249)'
};

const line01 = document.getElementById('graph01');

new Chart(line01, {
    type: 'line',
    data: {
        labels: ['Mes1', 'Mes2', 'Mes3', 'Mes4'],
        datasets: [
          {
            label: 'Dataset',
            data: [1500, 1000, 1800, 300],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true
          }
        ],
    },
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
        }
      },
      interaction: {
        intersect: false,
        },
    },
});

const donut01 = document.getElementById('graph02');

new Chart(donut01, {
    type: 'doughnut',
    data: {
      labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],

      datasets: [{
        label: '# of Votes',
        data: [30, 19, 3, 5, ],
        borderWidth: 1,
        backgroundColor: Object.values(CHART_COLORS),
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

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const categoria = document.querySelector('#m-categoria')
const produto = document.querySelector('#m-produto')
const valor = document.querySelector('#m-valor')
const quantidade = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
}