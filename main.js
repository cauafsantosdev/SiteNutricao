
const alimentos = [
    {
        "Alimento":"Arroz branco",
        "Carboidratos (mg)":28.2,
        "Proteínas (mg)":2.7,
        "Gorduras (mg)":300.0,
        "Fibras (mg)":400.0,
        "Açúcares (mg)":100.0,
        "Sódio (mg)":1,
        "Potássio (mg)":35.0,
        "Cálcio (mg)":10,
        "Vitaminas Principais":"-",
        " Calorias":130
    },
    {
        "Alimento":"Feijão",
        "Carboidratos (mg)":20.0,
        "Proteínas (mg)":9.0,
        "Gorduras (mg)":500.0,
        "Fibras (mg)":1.3,
        "Açúcares (mg)":1.0,
        "Sódio (mg)":2,
        "Potássio (mg)":1.5,
        "Cálcio (mg)":50,
        "Vitaminas Principais":"B9",
        " Calorias":132
    },
    {
        "Alimento":"Pão francês",
        "Carboidratos (mg)":50.0,
        "Proteínas (mg)":9.0,
        "Gorduras (mg)":2.5,
        "Fibras (mg)":2.5,
        "Açúcares (mg)":2.5,
        "Sódio (mg)":470,
        "Potássio (mg)":120.0,
        "Cálcio (mg)":20,
        "Vitaminas Principais":"-",
        " Calorias":270
    },
    {
        "Alimento":"Laranja",
        "Carboidratos (mg)":11.75,
        "Proteínas (mg)":940.0,
        "Gorduras (mg)":120.0,
        "Fibras (mg)":1.8,
        "Açúcares (mg)":9.35,
        "Sódio (mg)":1,
        "Potássio (mg)":180.0,
        "Cálcio (mg)":40,
        "Vitaminas Principais":"C, A",
        " Calorias":47
    },
    {
        "Alimento":"Carne bovina",
        "Carboidratos (mg)":0.0,
        "Proteínas (mg)":26.0,
        "Gorduras (mg)":20.0,
        "Fibras (mg)":0.0,
        "Açúcares (mg)":0.0,
        "Sódio (mg)":65,
        "Potássio (mg)":350.0,
        "Cálcio (mg)":15,
        "Vitaminas Principais":"-",
        " Calorias":250
    },
    {
        "Alimento":"Carne de frango",
        "Carboidratos (mg)":0.0,
        "Proteínas (mg)":31.0,
        "Gorduras (mg)":3.6,
        "Fibras (mg)":0.0,
        "Açúcares (mg)":0.0,
        "Sódio (mg)":70,
        "Potássio (mg)":300.0,
        "Cálcio (mg)":12,
        "Vitaminas Principais":"-",
        " Calorias":239
    },
    {
        "Alimento":"Ovo",
        "Carboidratos (mg)":720.0,
        "Proteínas (mg)":13.0,
        "Gorduras (mg)":10.0,
        "Fibras (mg)":0.0,
        "Açúcares (mg)":0.0,
        "Sódio (mg)":120,
        "Potássio (mg)":126.0,
        "Cálcio (mg)":56,
        "Vitaminas Principais":"B12, D",
        " Calorias":155
    },
    {
        "Alimento":"Café (sem açúcar)",
        "Carboidratos (mg)":0.0,
        "Proteínas (mg)":0.0,
        "Gorduras (mg)":0.0,
        "Fibras (mg)":0.0,
        "Açúcares (mg)":0.0,
        "Sódio (mg)":5,
        "Potássio (mg)":90.0,
        "Cálcio (mg)":0,
        "Vitaminas Principais":"-",
        " Calorias":0
    },
    {
        "Alimento":"Banana",
        "Carboidratos (mg)":22.84,
        "Proteínas (mg)":1.09,
        "Gorduras (mg)":330.0,
        "Fibras (mg)":2.6,
        "Açúcares (mg)":12.23,
        "Sódio (mg)":1,
        "Potássio (mg)":360.0,
        "Cálcio (mg)":5,
        "Vitaminas Principais":"B6, C",
        " Calorias":89
    },
    {
        "Alimento":"Batata branca",
        "Carboidratos (mg)":17.58,
        "Proteínas (mg)":2.02,
        "Gorduras (mg)":100.0,
        "Fibras (mg)":2.2,
        "Açúcares (mg)":1.25,
        "Sódio (mg)":6,
        "Potássio (mg)":425.0,
        "Cálcio (mg)":10,
        "Vitaminas Principais":"C",
        " Calorias":79
    }
]

$(document).ready(function() {
    alimentos.map((alimento) => {
        const html = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${alimento.Alimento}</h5>
                <p class="card-text">Carboidratos: ${alimento["Carboidratos (mg)"]}</p>
            </div>
        </div>`
        $('#alimentos').append(html);
    });
});