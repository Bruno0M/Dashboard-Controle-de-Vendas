import { devEnvironment, environment } from "../environments/environments.js";

const apiUrl = `${environment.ApiUrl}/Product`

var token = localStorage.getItem('token');

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

var teste = "nicoboco"

var options = {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: 'Bearer ' + token
    },

}

document.addEventListener("DOMContentLoaded", function () {

    fetch(`${apiUrl}`, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText());
            return response.json()
        })
        .then(data => {

            const categoriasQuantidades = {};

            data.data.forEach(item => {
                if (categoriasQuantidades[item.categoria]) {
                    categoriasQuantidades[item.categoria] += item.quantidade;
                } else {
                    categoriasQuantidades[item.categoria] = item.quantidade;
                }
            });

            const categorias = Object.keys(categoriasQuantidades); 
            const quantidades = Object.values(categoriasQuantidades);

            console.log(quantidades)

            new Chart(donut01, {
                type: 'doughnut',
                data: {
                    labels: categorias,

                    datasets: [{
                        label: '# of Votes',
                        data: quantidades,
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

        })
});
