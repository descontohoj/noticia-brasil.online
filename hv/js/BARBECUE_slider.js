class ImageSlider {
  constructor(data, autoplaySpeed, pauseDuration) {
    this.imagesData = data;
    this.pauseDuration = pauseDuration;
    this.isPaused = false;
    this.activeIndex = 0;
    this.autoplaySpeed = autoplaySpeed;
    this.cardImage = document.getElementById("card-image");
    this.cardTitles = document.querySelectorAll(".card-title");
    this.cardDescriptions = document.querySelectorAll(".card-description");
    this.cardCounter = document.querySelectorAll(".card-counter");
    this.nextButton = document.querySelectorAll(".next");
    this.previousButton = document.querySelectorAll(".previous");
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.threshold = 50;
    this.initSlider();
    this.attachEventListeners();
    this.startAutoplay();
  }
  initSlider() {
    this.updateCard(this.activeIndex);
  }
  updateCardContent(index) {
    const cardData = this.imagesData[index];
    this.cardCounter.forEach((counterElement) => {
      counterElement.textContent = `${index + 1} de ${this.imagesData.length}`;
    });
    this.cardImage.src = cardData.url;
    console.log(this.button);
    this.cardTitles.forEach((titleElement) => {
      titleElement.textContent = cardData.title;
    });
    this.cardDescriptions.forEach((descriptionElement) => {
      descriptionElement.textContent = cardData.description;
    });
  }
  updateCard(index) {
    this.cardImage.classList.remove("opacity-100");
    this.cardImage.classList.add("opacity-0");
    setTimeout(() => {
      this.updateCardContent(index);
      this.cardImage.classList.remove("opacity-0");
      this.cardImage.classList.add("opacity-100");
    }, 150);
  }
  attachEventListeners() {
    this.nextButton.forEach((button) => {
      button.addEventListener("click", () => {
        this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
        this.updateCard(this.activeIndex);
        this.pauseAutoplay();
      });
    });
    this.previousButton.forEach((button) => {
      button.addEventListener("click", () => {
        this.activeIndex =
          (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
        this.updateCard(this.activeIndex);
        this.pauseAutoplay();
      });
    });
    this.cardImage.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.pauseAutoplay();
    });
    this.cardImage.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipeGesture();
    });
  }
  handleSwipeGesture() {
    if (this.touchStartX - this.touchEndX > this.threshold) {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    } else if (this.touchEndX - this.touchStartX > this.threshold) {
      this.activeIndex =
        (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }
    if (!this.isPaused) {
      setTimeout(() => this.startAutoplay(), this.pauseDuration);
    }
  }
  pauseAutoplay() {
    if (!this.isPaused) {
      this.stopAutoplay();
      this.isPaused = true;
      setTimeout(() => {
        this.isPaused = false;
        this.startAutoplay();
      }, this.pauseDuration);
    }
  }
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }, this.autoplaySpeed);
  }
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
const imagesData = [
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_1.png",
    title: "AIR FRYER",
    description:
      "Tenha as receitas tradicionais das fritadeiras a ar, como a batata frita, mais crocantes, saudáveis e sem óleo.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_2.png",
    title: "ASSAR",
    description:
      "Escolha a função forno para assar frangos e carnes, revele também o lado doce da fritadeira, preparando bolos, sobremesas e muito mais.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_3.png",
    title: "FORNO",
    description:
      "Todos os petiscos preparados no forno também podem ser preparados na fritadeira.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_4.png",
    title: "DESIDRATAR",
    description:
      "Tenha versatilidade para prepara seus aperitivos! Preserve as qualidades de um alimento fresco e mantenha grande parte de seu valor nutricional desidratando.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_5.png",
    title: "COZIMENTO LENTO",
    description:
      "Cozinhe alimentos com mais sabor, usando temperaturas baixas, por um tempo maior do que os métodos tradicionais de fritura.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_6.png",
    title: "CHAPA",
    description:
      "Prepare receitas grelhadas ou assadas, sem usar óleo, mais saudáveis utilizando a chapa.  ",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_7.png",
    title: "ENSOPADO",
    description:
      "Tenha pratos como guisados, sopas e outros alimentos que geralmente são cozidos lentamente, na sua air fryer. ",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_8.png",
    title: "VAPOR",
    description:
      "Utilize a função Vapor para preparar legumes, peixes, frango, ou qualquer outro alimento que você desejar.",
  },
  {
    url: "https://lojawap.vteximg.com.br/arquivos/BARBECUE_9.png",
    title: "MANTER AQUECIDO",
    description:
      "Mantenha os alimentos quentes por mais tempo, para que estejam na temperatura ideal até a hora de servir. ",
  },
];
const autoPlaySpeed = 5000;
const pauseDuration = 5000;
const slider = new ImageSlider(imagesData, autoPlaySpeed, pauseDuration);

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões 'next' e aplica o estilo
  document.querySelectorAll(".next").forEach((button) => {
    button.style.backgroundImage = "url('https://lojawap.vteximg.com.br/arquivos/BARBECUE_right_sign.png')";
  });

  // Seleciona todos os botões 'previous' e aplica o estilo
  document.querySelectorAll(".previous").forEach((button) => {
    button.style.backgroundImage = "url('https://lojawap.vteximg.com.br/arquivos/BARBECUE_left_sign.png')";
  });
});
