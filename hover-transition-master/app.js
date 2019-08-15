new hoverEffect({
    parent: document.querySelector(".distortion"), // Local onde será aplicado o efeito
    intensity: 0.2, // Intensidade do efeito
    image1: "img/black-and-white.jpg", // Primeira imagem
    image2: "img/black-and-white2.jpg", // Segunda imagem
    angle: Math.PI / 8, // Direção do efeito
    displacementImage: "img/diss.png" // Imagem de destorção do efeito
});