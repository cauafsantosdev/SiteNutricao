const alimentos =[
    {
        "Alimento": "Arroz branco",
        "Carboidratos (mg)": 0.282,
        "Proteínas (mg)": 0.027000000000000003,
        "Gorduras (mg)": 3.0,
        "Fibras (mg)": 4.0,
        "Açúcares (mg)": 1.0,
        "Sódio (mg)": 0.01,
        "Potássio (mg)": 0.35,
        "Cálcio (mg)": 0.1,
        "Vitaminas Principais": "-",
        "Calorias": 1.3,
        "Imagem": "Arroz.jpg",
        "ID": "arroz"
    },
    {
        "Alimento": "Feijão",
        "Carboidratos (mg)": 0.2,
        "Proteínas (mg)": 0.09,
        "Gorduras (mg)": 5.0,
        "Fibras (mg)": 0.013000000000000001,
        "Açúcares (mg)": 0.01,
        "Sódio (mg)": 0.02,
        "Potássio (mg)": 0.015,
        "Cálcio (mg)": 0.5,
        "Vitaminas Principais": "B9",
        "Calorias": 1.32,
        "Imagem": "Feijão.jpg",
        "ID": "feijao"
    },
    {
        "Alimento": "Pão francês",
        "Carboidratos (mg)": 0.5,
        "Proteínas (mg)": 0.09,
        "Gorduras (mg)": 0.025,
        "Fibras (mg)": 0.025,
        "Açúcares (mg)": 0.025,
        "Sódio (mg)": 4.7,
        "Potássio (mg)": 1.2,
        "Cálcio (mg)": 0.2,
        "Vitaminas Principais": "-",
        "Calorias": 2.7,
        "Imagem": "Pão.jpg",
        "ID": "pao"
    },
    {
        "Alimento": "Laranja",
        "Carboidratos (mg)": 0.1175,
        "Proteínas (mg)": 9.4,
        "Gorduras (mg)": 1.2,
        "Fibras (mg)": 0.018000000000000002,
        "Açúcares (mg)": 0.0935,
        "Sódio (mg)": 0.01,
        "Potássio (mg)": 1.8,
        "Cálcio (mg)": 0.4,
        "Vitaminas Principais": "C, A",
        "Calorias": 0.47,
        "Imagem": "Laranja.jpg",
        "ID": "laranja"
    },
    {
        "Alimento": "Carne bovina",
        "Carboidratos (mg)": 0.0,
        "Proteínas (mg)": 0.26,
        "Gorduras (mg)": 0.2,
        "Fibras (mg)": 0.0,
        "Açúcares (mg)": 0.0,
        "Sódio (mg)": 0.65,
        "Potássio (mg)": 3.5,
        "Cálcio (mg)": 0.15,
        "Vitaminas Principais": "-",
        "Calorias": 2.5,
        "Imagem": "Carne.jpg",
        "ID": "carne"
    },
    {
        "Alimento": "Carne de frango",
        "Carboidratos (mg)": 0.0,
        "Proteínas (mg)": 0.31,
        "Gorduras (mg)": 0.036000000000000004,
        "Fibras (mg)": 0.0,
        "Açúcares (mg)": 0.0,
        "Sódio (mg)": 0.7,
        "Potássio (mg)": 3.0,
        "Cálcio (mg)": 0.12,
        "Vitaminas Principais": "-",
        "Calorias": 2.39,
        "Imagem": "Frango.jpg",
        "ID": "frango"
    },
    {
        "Alimento": "Ovo",
        "Carboidratos (mg)": 7.2,
        "Proteínas (mg)": 0.13,
        "Gorduras (mg)": 0.1,
        "Fibras (mg)": 0.0,
        "Açúcares (mg)": 0.0,
        "Sódio (mg)": 1.2,
        "Potássio (mg)": 1.26,
        "Cálcio (mg)": 0.56,
        "Vitaminas Principais": "B12, D",
        "Calorias": 1.55,
        "Imagem": "Ovo.jpg",
        "ID": "ovo"
    },
    {
        "Alimento": "Café (sem açúcar)",
        "Carboidratos (mg)": 0.0,
        "Proteínas (mg)": 0.0,
        "Gorduras (mg)": 0.0,
        "Fibras (mg)": 0.0,
        "Açúcares (mg)": 0.0,
        "Sódio (mg)": 0.05,
        "Potássio (mg)": 0.9,
        "Cálcio (mg)": 0.0,
        "Vitaminas Principais": "-",
        "Calorias": 0.0,
        "Imagem": "Cafe.jpg",
        "ID": "cafe"
    },
    {
        "Alimento": "Banana",
        "Carboidratos (mg)": 0.2284,
        "Proteínas (mg)": 0.0109,
        "Gorduras (mg)": 3.3,
        "Fibras (mg)": 0.026000000000000002,
        "Açúcares (mg)": 0.1223,
        "Sódio (mg)": 0.01,
        "Potássio (mg)": 3.6,
        "Cálcio (mg)": 0.05,
        "Vitaminas Principais": "B6, C",
        "Calorias": 0.89,
        "Imagem": "Banana.jpg",
        "ID": "banana"
    },
    {
        "Alimento": "Batata branca",
        "Carboidratos (mg)": 0.17579999999999998,
        "Proteínas (mg)": 0.0202,
        "Gorduras (mg)": 1.0,
        "Fibras (mg)": 0.022000000000000002,
        "Açúcares (mg)": 0.0125,
        "Sódio (mg)": 0.06,
        "Potássio (mg)": 4.25,
        "Cálcio (mg)": 0.1,
        "Vitaminas Principais": "C",
        "Calorias": 0.79,
        "Imagem": "Batata.jpg",
        "ID": "batata"
    }
]

function mudarAba(event, tabId) {
    // Remover a classe "active" de todos os botões
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Adicionar a classe "active" ao botão clicado
    event.currentTarget.classList.add('active');

    // Remover a classe "active" de todo o conteúdo
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Mostrar o conteúdo associado à aba clicada
    document.getElementById(tabId).classList.add('active');
}