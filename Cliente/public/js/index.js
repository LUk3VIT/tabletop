// Banco de dados dos heróis com os nomes dos seus arquivos
const heroesData = {
    'm': [
        { name: "Guerreiro", img: "../img/personagens/masc/Guerreiro.png" },
        { name: "Mago", img: "../img/personagens/masc/Mago.png" },
        { name: "Ladino", img: "../img/personagens/masc/Ladino.png" }
    ],
    'f': [
        { name: "Guerreira", img: "../img/personagens/femin/Guerreira.png" },
        { name: "Maga", img: "../img/personagens/femin/Maga.png" },
        { name: "Ladina", img: "../img/personagens/femin/Ladina.png" }
    ]
};

let currentGender = 'm';
let currentIndex = 0;

const track = document.getElementById('carousel-track');

function renderCarousel() {
    const list = heroesData[currentGender];
    
    // Cria o HTML das imagens dentro do carrossel
    track.innerHTML = list.map(hero => `
        <div class="hero-card">
            <img src="${hero.img}" alt="${hero.name}">
            <span>${hero.name}</span>
        </div>
    `).join('');
    
    resetPosition();
}

function changeGender(gender) {
    if (currentGender === gender) return;
    
    currentGender = gender;
    currentIndex = 0; // Volta para o primeiro herói da lista
    
    // Atualiza visual dos botões
    document.getElementById('btn-m').classList.toggle('active', gender === 'm');
    document.getElementById('btn-f').classList.toggle('active', gender === 'f');
    
    renderCarousel();
}

function nextSlide() {
    const total = heroesData[currentGender].length;
    currentIndex = (currentIndex + 1) % total;
    updateSlide();
}

function prevSlide() {
    const total = heroesData[currentGender].length;
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlide();
}

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function resetPosition() {
    track.style.transform = `translateX(0)`;
}

// Inicializa o carrossel ao carregar a página
renderCarousel();