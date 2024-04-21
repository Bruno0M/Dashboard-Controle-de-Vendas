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

  if (edit) {
    categoria.value = itens[index].categoria
    produto.value = itens[index].produto
    valor.value = itens[index].valor
    quantidade.value = itens[index].quantidade
    id = index
  } else {
    categoria.value = ''
    produto.value = ''
    valor.value = ''
    quantidade.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.categoria}</td>
    <td>${item.produto}</td>
    <td>R$ ${item.valor}</td>
    <td>${item.quantidade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (categoria.value == '' || produto.value == '' || valor.value == '' || quantidade.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].categoria = categoria.value
    itens[id].produto = produto.value
    itens[id].valor = valor.value
    itens[id].quantidade = quantidade.value
  } else {
    itens.push({'categoria': categoria.value, 'produto': produto.value, 'valor': valor.value, 'quantidade': quantidade.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
  }

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
