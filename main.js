var carboidratos = 0
var proteinas = 0
var gorduras = 0
var fibras = 0
var acucares = 0
var sodio = 0
var potassio = 0
var calcio = 0

var consumidos = new Object();

let barChart = null;
let pieChart = null;

const alimentos =[
    {
        "nome": "Arroz branco",
        "carboidratos": 282,
        "proteinas": 27,
        "gorduras": 3,
        "fibras": 4,
        "acucares": 1,
        "sodio": 0.01,
        "potassio": 0.35,
        "calcio": 0.1,
        "vitaminas_principais": null,
        "calorias": 130,
        "id": "input-arroz"
    },
    {
        "nome": "Feijão",
        "carboidratos": 200,
        "proteinas": 90,
        "gorduras": 5,
        "fibras": 13,
        "acucares": 10,
        "sodio": 0.02,
        "potassio": 15,
        "calcio": 0.5,
        "vitaminas_principais": "B9",
        "calorias": 132,
        "id": "input-feijao"
    },
    {
        "nome": "Pão francês",
        "carboidratos": 500,
        "proteinas": 90,
        "gorduras": 25,
        "fibras": 25,
        "acucares": 25,
        "sodio": 4.7,
        "potassio": 1.2,
        "calcio": 0.2,
        "vitaminas_principais": null,
        "calorias": 270,
        "id": "input-pao"
    },
    {
        "nome": "Laranja",
        "carboidratos": 117.5,
        "proteinas": 9.4,
        "gorduras": 1.2,
        "fibras": 18,
        "acucares": 93.5,
        "sodio": 0.01,
        "potassio": 1.8,
        "calcio": 0.4,
        "vitaminas_principais": ["C", "A"],
        "calorias": 47,
        "id": "input-laranja"
    },
    {
        "nome": "Carne bovina",
        "carboidratos": 0,
        "proteinas": 260,
        "gorduras": 200,
        "fibras": 0,
        "acucares": 0,
        "sodio": 0.65,
        "potassio": 3.5,
        "calcio": 0.15,
        "vitaminas_principais": null,
        "calorias": 250,
        "id": "input-carne"
    },
    {
        "nome": "Carne de frango",
        "carboidratos": 0,
        "proteinas": 310,
        "gorduras": 36,
        "fibras": 0,
        "acucares": 0,
        "sodio": 0.7,
        "potassio": 3,
        "calcio": 0.12,
        "vitaminas_principais": null,
        "calorias": 239,
        "id": "input-frango"
    },
    {
        "nome": "Ovo",
        "carboidratos": 7.2,
        "proteinas": 130,
        "gorduras": 100,
        "fibras": 0,
        "acucares": 0,
        "sodio": 1.2,
        "potassio": 1.26,
        "calcio": 0.56,
        "vitaminas_principais": ["B12", "D"],
        "calorias": 155,
        "id": "input-ovo"
    },
    {
        "nome": "Café (sem açúcar)",
        "carboidratos": 0,
        "proteinas": 0,
        "gorduras": 0,
        "fibras": 0,
        "acucares": 0,
        "sodio": 0.05,
        "potassio": 0.9,
        "calcio": 0,
        "vitaminas_principais": null,
        "calorias": 0,
        "id": "input-cafe"
    },
    {
        "nome": "Banana",
        "carboidratos": 228.4,
        "proteinas": 10.9,
        "gorduras": 3.3,
        "fibras": 26,
        "acucares": 122.3,
        "sodio": 0.01,
        "potassio": 3.6,
        "calcio": 0.05,
        "vitaminas_principais": ["B6", "C"],
        "calorias": 89,
        "id": "input-banana"
    },
    {
        "nome": "Batata branca",
        "carboidratos": 175.8,
        "proteinas": 20.2,
        "gorduras": 1,
        "fibras": 22,
        "acucares": 12.5,
        "sodio": 0.06,
        "potassio": 4.25,
        "calcio": 0.1,
        "vitaminas_principais": "C",
        "calorias": 79,
        "id": "input-batata"
    },
    {
        "nome": "Cenoura",
        "carboidratos": 100,
        "proteinas": 9,
        "gorduras": 2,
        "fibras": 28,
        "acucares": 47,
        "sodio": 0.69,
        "potassio": 3.2,
        "calcio": 0.33,
        "vitaminas_principais": ["A", "C"],
        "calorias": 41,
        "id": "input-cenoura"
    },
    {
        "nome": "Queijo",
        "carboidratos": 38.3,
        "proteinas": 259.6,
        "gorduras": 200,
        "fibras": 0,
        "acucares": 6,
        "sodio": 5.28,
        "potassio": 0.95,
        "calcio": 7.31,
        "vitaminas_principais": ["B6", "D"],
        "calorias": 280,
        "id": "input-queijo"
    }
    ]

// Mudar entre as 3 principais abas 
function mudarAba(event, tabId) {
    // Remove a classe "active" de todos os botões
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Adiciona a classe "active" no botão clicado
    event.currentTarget.classList.add('active');

    // Remove a classe "active" de todo o conteúdo
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabId).classList.add('active');
}

// Avançar depois de selecionar os alimentos
function avancar(tabId) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById('link-graficos').classList.add('active');

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}

// Trocar entre os tipos de gráficos

function mudarGrafico(chartId) {
    const graficoTabContents = document.querySelectorAll('.grafico-tab-content');
    graficoTabContents.forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(chartId).classList.add('active');
}


//
function atualizaRefeicao(){
    alimentos.forEach(alimento => {
        let quantidade = $('#' + alimento.id).val()
        if (quantidade != '' && !(alimento.nome in consumidos)) {
            consumidos[alimento.nome] = quantidade
        }
        carboidratos += (alimento.carboidratos * quantidade) / 1000
        proteinas += (alimento.proteinas * quantidade) / 1000
        gorduras += (alimento.gorduras * quantidade) / 1000
        fibras += (alimento.fibras * quantidade) / 1000
        acucares += (alimento.acucares * quantidade) / 1000
        sodio += (alimento.sodio * quantidade) / 1000
        potassio += (alimento.potassio * quantidade) / 1000
        calcio += (alimento.calcio * quantidade) / 1000
    })
    console.log(consumidos)
    updateChart()
    avancar('graficos')
}


// Graficos

// Gráfico de Porcentagem de Nutrientes

function updateChart() {
    const consumidos_nomes = Object.keys(consumidos);
    const consumidos_valores = Object.values(consumidos);

    if (barChart || pieChart) {
        barChart.destroy();
        pieChart.destroy();
    }

    requestAnimationFrame(() => {
        const bar_ctx = document.getElementById('grafico-qtd-alimentos').getContext('2d');

        barChart = new Chart(bar_ctx, {
            type: 'bar',
            data: {
                labels: consumidos_nomes,
                datasets: [{
                    label: 'Quantidade de alimentos',
                    data: consumidos_valores,
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

        const pie_ctx = document.getElementById('grafico-qtd-nutrientes').getContext('2d');

        pieChart = new Chart(pie_ctx, {
            type: 'pie',
            data: {
                labels: ["Carboidratos", "Proteínas", "Gorduras", "Fibras", "Açúcares", "Sódio", "Potássio", "Cálcio"],
                datasets: [{
                    label: 'Quantidades de nutrientes (em g)',
                    data: [carboidratos, proteinas, gorduras, fibras, acucares, sodio, potassio, calcio],
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
        document.getElementById('grafico-refeicao').classList.add('active');

        carboidratos = 0
        proteinas = 0
        gorduras = 0
        fibras = 0
        acucares = 0
        sodio = 0
        potassio = 0
        calcio = 0
        consumidos = new Object();
    });
}