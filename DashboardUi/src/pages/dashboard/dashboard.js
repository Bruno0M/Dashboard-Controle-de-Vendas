document.addEventListener('DOMContentLoaded', function() {
    // Dados para o gráfico de pizza
    var dadosPizza = [50, 100]; // Quantidade de vendas de bebidas e comidas
    var rotulosPizza = ['Bebidas', 'Comidas'];

    // Gráfico de Pizza
    var ctxPizza = document.getElementById('grafico-pizza').getContext('2d');
    var myPizzaChart = new Chart(ctxPizza, {
        type: 'doughnut',
        data: {
            labels: rotulosPizza,
            datasets: [{
                label: 'Sales',
                data: dadosPizza,
                backgroundColor: [
                    '#4caf50', // Azul (bebidas)
                    '#abb429' // Verde (comidas)
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            width: 400, // Largura do gráfico de pizza
            height: 400 // Altura do gráfico de pizza
        }
    });

    // Dados para o gráfico de coluna (apenas para exemplo)
    var dadosColuna = [500, 300, 600, 400]; // Dados de receita por mês

    // Gráfico de Coluna
    var ctxColuna = document.getElementById('grafico-coluna').getContext('2d');
    var myColunaChart = new Chart(ctxColuna, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Receita Total',
                data: dadosColuna,
                backgroundColor: '#2196F3', // Azul Escuro
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            width: 800, // Largura do gráfico de coluna
            height: 400 // Altura do gráfico de coluna
        }
    });
});
