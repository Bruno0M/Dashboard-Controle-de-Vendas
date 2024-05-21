import { devEnvironment, environment } from '../environments/environments.js';

const apiUrl = `${devEnvironment.ApiUrl}/Product`;

var token = localStorage.getItem('token');

const CHART_COLORS = {
  cat1: 'rgb(5, 67, 109)',
  cat2: 'rgb(5, 91, 149)',
  cat3: 'rgb(42, 112, 160)',
  cat4: 'rgb(39, 150, 225)',
  cat5: 'rgb(9, 184, 242)',
  cat6: 'rgb(130, 196, 241)',
  cat7: 'rgb(194, 227, 249)',
};

const line01 = document.getElementById('graph01');

const donut01 = document.getElementById('graph02');

var options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: 'Bearer ' + token,
  },
};

document.addEventListener('DOMContentLoaded', function () {
  fetch(`${apiUrl}`, options)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText());
      return response.json();
    })
    .then((data) => {
      const categoriasQuantidades = {};

      data.data.forEach((item) => {
        if (categoriasQuantidades[item.category]) {
          categoriasQuantidades[item.category] += item.quantity;
        } else {
          categoriasQuantidades[item.category] = item.quantity;
        }
      });

      const categorias = Object.keys(categoriasQuantidades);
      const quantidades = Object.values(categoriasQuantidades);

      new Chart(donut01, {
        type: 'doughnut',
        data: {
          labels: categorias,

          datasets: [
            {
              label: 'Total',
              data: quantidades,
              borderWidth: 1,
              backgroundColor: Object.values(CHART_COLORS),
            },
          ],
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
              },
            },
          },
        },
      });

      // Gráfico total dos itens

      const monthSumPrices = {};

      data.data.forEach((item) => {

        const creationDate = new Date(item.creationDate);
        const month = creationDate.getMonth();
        const totalPrice = item.price * item.quantity;
        console.log(month)


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
      console.log(monthLabels)

      const months = Object.keys(monthSumPrices).map(Number);
      console.log(months)
      const totalPrices = Object.values(monthSumPrices);

      const labels = months.map((month) => monthLabels[month]);
      console.log(labels)

      new Chart(line01, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Total',
              data: totalPrices,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          plugins: {
            filler: {
              propagate: false,
            },
            title: {
              display: true,
            },
          },
          interaction: {
            intersect: false,
          },
        },
      });
    });
});
