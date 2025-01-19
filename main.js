var carboidratos = 0;
var proteinas = 0;
var gorduras = 0;
var fibras = 0;
var acucares = 0;
var sodio = 0;
var potassio = 0;
var calcio = 0;

var refeicao = [];

var consumoDiario = {
  Carboidratos: 0,
  Proteínas: 0,
  Gorduras: 0,
  Fibras: 0,
  Açúcares: 0,
  Sódio: 0,
  Potássio: 0,
  Cálcio: 0,
};

var consumoSemanal = {
  Carboidratos: [],
  Proteínas: [],
  Gorduras: [],
  Fibras: [],
  Açúcares: [],
  Sódio: [],
  Potássio: [],
  Cálcio: [],
};

var consumidos = new Object();
var metas = [];
var pct = [];

let barChart = null;
let pieChart = null;
let lineChart = null;

const gradients = [
  "#663399",
  "#4f0fb6",
  "#900DFC",
  "#4B0082",
  "#5E0B99",
  "#8A2BE2",
  "#2E0249",
  "#7510ff",
];

const idsTable = [
  ["1-c", "1-p", "1-g", "1-f", "1-a", "1-s", "1-po", "1-ca"],
  ["2-c", "2-p", "2-g", "2-f", "2-a", "2-s", "2-po", "2-ca"],
  ["3-c", "3-p", "3-g", "3-f", "3-a", "3-s", "3-po", "3-ca"],
  ["4-c", "4-p", "4-g", "4-f", "4-a", "4-s", "4-po", "4-ca"],
];

const idsTableSemana = [
  ["seg-c", "seg-p", "seg-g", "seg-f", "seg-a", "seg-s", "seg-po", "seg-ca"],
  ["ter-c", "ter-p", "ter-g", "ter-f", "ter-a", "ter-s", "ter-po", "ter-ca"],
  ["qua-c", "qua-p", "qua-g", "qua-f", "qua-a", "qua-s", "qua-po", "qua-ca"],
  ["qui-c", "qui-p", "qui-g", "qui-f", "qui-a", "qui-s", "qui-po", "qui-ca"],
  ["sex-c", "sex-p", "sex-g", "sex-f", "sex-a", "sex-g", "sex-po", "sex-ca"],
  ["sab-c", "sab-p", "sab-g", "sab-f", "sab-a", "sab-s", "sab-po", "sab-ca"],
  ["dom-c", "dom-p", "dom-g", "dom-f", "dom-a", "dom-s", "dom-po", "dom-ca"],
];

const idsMetas = [
  "meta-c",
  "meta-p",
  "meta-g",
  "meta-f",
  "meta-a",
  "meta-s",
  "meta-po",
  "meta-ca",
];

var dia = 0;
var i = 0;

const alimentos = [
  {
    nome: "Arroz branco",
    carboidratos: 282,
    proteinas: 27,
    gorduras: 3,
    fibras: 4,
    acucares: 1,
    sodio: 0.01,
    potassio: 0.35,
    calcio: 0.1,
    id: "input-arroz",
  },
  {
    nome: "Feijão",
    carboidratos: 200,
    proteinas: 90,
    gorduras: 5,
    fibras: 13,
    acucares: 10,
    sodio: 0.02,
    potassio: 15,
    calcio: 0.5,
    id: "input-feijao",
  },
  {
    nome: "Pão francês",
    carboidratos: 500,
    proteinas: 90,
    gorduras: 25,
    fibras: 25,
    acucares: 25,
    sodio: 4.7,
    potassio: 1.2,
    calcio: 0.2,
    id: "input-pao",
  },
  {
    nome: "Laranja",
    carboidratos: 117.5,
    proteinas: 9.4,
    gorduras: 1.2,
    fibras: 18,
    acucares: 93.5,
    sodio: 0.01,
    potassio: 1.8,
    calcio: 0.4,
    id: "input-laranja",
  },
  {
    nome: "Carne bovina",
    carboidratos: 0,
    proteinas: 260,
    gorduras: 200,
    fibras: 0,
    acucares: 0,
    sodio: 0.65,
    potassio: 3.5,
    calcio: 0.15,
    id: "input-carne",
  },
  {
    nome: "Carne de frango",
    carboidratos: 0,
    proteinas: 310,
    gorduras: 36,
    fibras: 0,
    acucares: 0,
    sodio: 0.7,
    potassio: 3,
    calcio: 0.12,
    id: "input-frango",
  },
  {
    nome: "Ovo",
    carboidratos: 7.2,
    proteinas: 130,
    gorduras: 100,
    fibras: 0,
    acucares: 0,
    sodio: 1.2,
    potassio: 1.26,
    calcio: 0.56,
    id: "input-ovo",
  },
  {
    nome: "Café (sem açúcar)",
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0,
    fibras: 0,
    acucares: 0,
    sodio: 0.05,
    potassio: 0.9,
    calcio: 0,
    id: "input-cafe",
  },
  {
    nome: "Banana",
    carboidratos: 228.4,
    proteinas: 10.9,
    gorduras: 3.3,
    fibras: 26,
    acucares: 122.3,
    sodio: 0.01,
    potassio: 3.6,
    calcio: 0.05,
    id: "input-banana",
  },
  {
    nome: "Batata",
    carboidratos: 175.8,
    proteinas: 20.2,
    gorduras: 1,
    fibras: 22,
    acucares: 12.5,
    sodio: 0.06,
    potassio: 4.25,
    calcio: 0.1,
    id: "input-batata",
  },
  {
    nome: "Cenoura",
    carboidratos: 100,
    proteinas: 9,
    gorduras: 2,
    fibras: 28,
    acucares: 47,
    sodio: 0.69,
    potassio: 3.2,
    calcio: 0.33,
    id: "input-cenoura",
  },
  {
    nome: "Queijo",
    carboidratos: 38.3,
    proteinas: 259.6,
    gorduras: 200,
    fibras: 0,
    acucares: 6,
    sodio: 5.28,
    potassio: 0.95,
    calcio: 7.31,
    id: "input-queijo",
  },
];

// Mudar entre as 3 principais abas
function mudarAba(event, tabId) {
  // Remove a classe "active" de todos os botões
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  // Adiciona a classe "active" no botão clicado
  event.currentTarget.classList.add("active");

  // Remove a classe "active" de todo o conteúdo
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  // Mostra o conteúdo da aba selecionada
  document.getElementById(tabId).classList.add("active");
}

// Avançar depois de selecionar os alimentos
function avancar(tabId) {
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById("link-graficos").classList.add("active");

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  document.getElementById("botoes-grafico").classList.add("active");
}

// Trocar entre os tipos de gráficos na aba de gráficos(semanal, refeição)
function mudarGrafico(chartId) {
  const graficoTabContents = document.querySelectorAll(".grafico-tab-content");
  graficoTabContents.forEach((content) => {
    content.classList.remove("active");
  });

  document.getElementById(chartId).classList.add("active");
}

//	Voltar para a seleção de alimentos caso o usuário queira mudar a refeição
function voltarAlimentos() {
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById("link-alimentos").classList.add("active");

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById("alimentos").classList.add("active");
}

// Função para adicionar os alimentos na refeição
function adicionarRefeicao() {
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById("link-refeicoes").classList.add("active");

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById("refeicoes").classList.add("active");

  mostrarRefeicao();
}

// Função para mostrar os nutrientes da refeição
function mostrarRefeicao() {
  console.log(refeicao);
  for (let j = 0; j < idsTable[0].length; j++) {
    $("#" + idsTable[i][j]).text(refeicao[j].toFixed(2) + "g");
  }
}

// Pular o dia
function pularDia(clicado) {
  let confirmacao = false;

  if (!clicado) {
    confirmacao = confirm("Tem certeza que deseja pular o dia?");
  } else {
    confirmacao = true;
  }

  if (confirmacao) {
    consumoSemanal["Carboidratos"].push(consumoDiario["Carboidratos"]);
    consumoSemanal["Proteínas"].push(consumoDiario["Proteínas"]);
    consumoSemanal["Gorduras"].push(consumoDiario["Gorduras"]);
    consumoSemanal["Fibras"].push(consumoDiario["Fibras"]);
    consumoSemanal["Açúcares"].push(consumoDiario["Açúcares"]);
    consumoSemanal["Sódio"].push(consumoDiario["Sódio"]);
    consumoSemanal["Potássio"].push(consumoDiario["Potássio"]);
    consumoSemanal["Cálcio"].push(consumoDiario["Cálcio"]);

    consumoDiario = {
      Carboidratos: 0,
      Proteínas: 0,
      Gorduras: 0,
      Fibras: 0,
      Açúcares: 0,
      Sódio: 0,
      Potássio: 0,
      Cálcio: 0,
    };

    i = 0;
    zerarTabela();
    adicionarASemana();

    $("#dia").text("Refeições do dia " + (dia + 1));
  }
}

//Ir para a página de metas
function verMetas() {
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById("link-graficos").classList.add("active");

  var contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  contents = document.querySelectorAll(".grafico-tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById("graficos").classList.add("active");
  document.getElementById("grafico-meta-semanal").classList.add("active");
  document.getElementById("semanal").checked = true;
}

// Função para salvar a refeição
function salvarRefeicao() {
  let c = 0;

  for (let j = 0; j < refeicao.length; j++) {
    if (refeicao[j] != 0) {
      c++;
    }
  }

  console.log(c);

  if (c == 0) {
    alert("Nenhum alimento foi consumido");
    return;
  } else {
    alert("Refeição salva com sucesso!");
    i++;
  }

  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById("link-alimentos").classList.add("active");

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById("alimentos").classList.add("active");

  consumoDiario["Carboidratos"] += carboidratos;
  consumoDiario["Proteínas"] += proteinas;
  consumoDiario["Gorduras"] += gorduras;
  consumoDiario["Fibras"] += fibras;
  consumoDiario["Açúcares"] += acucares;
  consumoDiario["Sódio"] += sodio;
  consumoDiario["Potássio"] += potassio;
  consumoDiario["Cálcio"] += calcio;

  if (i == 4) {
    pularDia(true);
  }
}

// Zerar a tabela de alimentos
function zerarTabela() {
  for (let j = 0; j < idsTable[0].length; j++) {
    for (let k = 0; k < idsTable.length; k++) {
      $("#" + idsTable[k][j]).text("");
    }
  }
}

function adicionarASemana() {
  let consumo = Object.values(consumoSemanal);

  for (let j = 0; j < idsTableSemana[0].length; j++) {
    $("#" + idsTableSemana[dia][j]).text(consumo[j][dia].toFixed(2) + "g");
  }
  dia++;
}

// Captar os inputs dos cards de alimentos somar e mandar para os gráfios
function atualizaRefeicao() {
  carboidratos = 0;
  proteinas = 0;
  gorduras = 0;
  fibras = 0;
  acucares = 0;
  sodio = 0;
  potassio = 0;
  calcio = 0;

  alimentos.forEach((alimento) => {
    let quantidade = $("#" + alimento.id).val();
    if (quantidade != "" && quantidade > 0 && !(alimento.nome in consumidos)) {
      consumidos[alimento.nome] = quantidade;
    }
    carboidratos += (alimento.carboidratos * quantidade) / 1000;
    proteinas += (alimento.proteinas * quantidade) / 1000;
    gorduras += (alimento.gorduras * quantidade) / 1000;
    fibras += (alimento.fibras * quantidade) / 1000;
    acucares += (alimento.acucares * quantidade) / 1000;
    sodio += (alimento.sodio * quantidade) / 1000;
    potassio += (alimento.potassio * quantidade) / 1000;
    calcio += (alimento.calcio * quantidade) / 1000;
  });

  updateChart();
  avancar("graficos");

  refeicao = [
    carboidratos,
    proteinas,
    gorduras,
    fibras,
    acucares,
    sodio,
    potassio,
    calcio,
  ];
}

function salvarMetas() {
  for (let c = 0; c < idsMetas.length; c++) {
    let meta = $("#" + idsMetas[c]).val();
    if (meta == "") {
      alert("Preencha todas as metas");
      return;
    }
    metas.push(meta);
  }
  calculaPct();
  graficoMetas();
}

function calculaPct() {
  let consumo = Object.values(consumoSemanal);

  for (let c = 0; c < metas.length; c++) {
    let meta = metas[c];
    let pctNutriente = [];
    for (let d = 0; d < consumo.length; d++) {
      let pct = (consumo[c][d] / meta) * 100;
      pctNutriente.push(pct);
    }
    pct.push(pctNutriente);
  }
  console.log(pct);
}

// Graficos

// Gráfico de porcentagem de nutrientes e quantidade de alimentos

function updateChart() {
  const consumidos_nomes = Object.keys(consumidos);
  const consumidos_valores = Object.values(consumidos);

  consumidos = new Object();

  if (barChart) {
    barChart.destroy();
  }
  if (pieChart) {
    pieChart.destroy();
  }

  requestAnimationFrame(() => {
    const bar_ctx = document
      .getElementById("grafico-qtd-alimentos")
      .getContext("2d");

    barChart = new Chart(bar_ctx, {
      type: "bar",
      data: {
        labels: consumidos_nomes,
        datasets: [
          {
            label: "Quantidade em g",
            data: consumidos_valores,
            borderWidth: 1,
            backgroundColor: "rgba(98, 0, 255, 0.4)",
            borderColor: "rgb(97, 0, 252)",
            borderWidth: "1px",
            hoverBackgroundColor: "rgba(61, 3, 155, 0.7)",
            hoverBorderColor: "rgb(98, 1, 255)",
            hoverBorderWidth: "3px",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
              lineWidth: 1,
              drawOnChartArea: true,
            },
            ticks: {
              color: "white",
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
              lineWidth: 1,
              drawOnChartArea: true,
            },
            ticks: {
              color: "white",
            },
          },
        },
      },
    });

    const pie_ctx = document
      .getElementById("grafico-qtd-nutrientes")
      .getContext("2d");

    pieChart = new Chart(pie_ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Carboidratos",
          "Proteínas",
          "Gorduras",
          "Fibras",
          "Açúcares",
          "Sódio",
          "Potássio",
          "Cálcio",
        ],
        datasets: [
          {
            label: "Quantidades em g",
            data: [
              carboidratos,
              proteinas,
              gorduras,
              fibras,
              acucares,
              sodio,
              potassio,
              calcio,
            ],
            backgroundColor: gradients,
            borderColor: "#000000",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "rgb(255, 255, 255)",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
          },
        },
      },
    });
    document.getElementById("grafico-refeicao").classList.add("active");
  });
}

function graficoMetas() {
  let labels = [
    "Carboidratos",
    "Proteínas",
    "Gorduras",
    "Fibras",
    "Açúcares",
    "Sódio",
    "Potássio",
    "Cálcio",
  ];

  if (lineChart) {
    lineChart.destroy();
  }

  console.log(pct);

  requestAnimationFrame(() => {
    const line_ctx = document.getElementById("grafico-metas").getContext("2d");

    lineChart = new Chart(line_ctx, {
      type: "line",
      data: {
        labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"],
        datasets: [
          {
            label: labels[0],
            data: pct[0],
            borderColor: gradients[0],
            backgroundColor: gradients[0],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[0],
            pointBorderColor: gradients[0],
          },
          {
            label: labels[1],
            data: pct[1],
            borderColor: gradients[1],
            backgroundColor: gradients[1],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[1],
            pointBorderColor: gradients[1],
          },
          {
            label: labels[2],
            data: pct[2],
            borderColor: gradients[2],
            backgroundColor: gradients[2],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[2],
            pointBorderColor: gradients[2],
          },
          {
            label: labels[3],
            data: pct[3],
            borderColor: gradients[3],
            backgroundColor: gradients[3],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[3],
            pointBorderColor: gradients[3],
          },
          {
            label: labels[4],
            data: pct[4],
            borderColor: gradients[4],
            backgroundColor: gradients[4],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[4],
            pointBorderColor: gradients[4],
          },
          {
            label: labels[5],
            data: pct[5],
            borderColor: gradients[5],
            backgroundColor: gradients[5],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[5],
            pointBorderColor: gradients[5],
          },
          {
            label: labels[6],
            data: pct[6],
            borderColor: gradients[6],
            backgroundColor: gradients[6],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[6],
            pointBorderColor: gradients[6],
          },
          {
            label: labels[7],
            data: pct[7],
            borderColor: gradients[7],
            backgroundColor: gradients[7],
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: gradients[7],
            pointBorderColor: gradients[7],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
              lineWidth: 1,
              drawOnChartArea: true,
            },
            ticks: {
              color: "white",
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.2)",
              lineWidth: 1,
              drawOnChartArea: true,
            },
            ticks: {
              color: "white",
            },
          },
        },
      },
    });
  });
}

document.getElementById("refeicao").checked = true;

$(document).ready(function () {
  $("input[type='text']").blur(function () {
    console.log("funcionou");
    const regex = /^\s*\d*\s*$/;

    if (!regex.test($(this).val())) {
      $(this).val("");
      alert("Apenas numeros positivos são permitidos");
    }
  });
});
