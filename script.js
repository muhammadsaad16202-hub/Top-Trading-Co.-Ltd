const cars = [
  {
    name: "Toyota Aqua Z",
    priceYen: 2005000,
    description: "Model 2021 | 20,000 km",
    images: [
      "./images/toyota-aqua-z-1.jpg",
      "./images/toyota-aqua-z-2.jpg",
    ],
  },
  {
    name: "Toyota Prius",
    priceYen: 2285000,
    description: "Model 2021 | 10,000 km",
    images: [
      "./images/toyota-prius-2021-1.jpg",
      "./images/toyota-prius-2021-2.jpg",
    ],
  },
];

const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const carsGrid = document.getElementById("cars-grid");

function yen(value) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);
}

function renderCars() {
  carsGrid.innerHTML = cars
    .map((car, index) => {
      const msg = encodeURIComponent(
        `Hello Top Trading Co. Ltd, I want details about ${car.name} priced at ${yen(car.priceYen)}.`
      );
      const gallery = car.images
        .map(
          (image, imageIndex) =>
            `<img src="${image}" alt="${car.name} image ${imageIndex + 1}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=80';" />`
        )
        .join("");

      return `
      <article class="car-card" style="animation-delay:${index * 0.12}s">
        <div class="car-gallery">${gallery}</div>
        <div class="car-info">
          <h4 class="car-title">${car.name}</h4>
          <p class="car-price">${yen(car.priceYen)}</p>
          <p class="car-desc">${car.description}</p>
          <a class="whatsapp-btn" href="https://wa.me/818098041742?text=${msg}" target="_blank" rel="noopener">
            WhatsApp Inquiry
          </a>
        </div>
      </article>`;
    })
    .join("");
}

renderCars();

setTimeout(() => {
  welcomeScreen.style.display = "none";
  mainContent.classList.remove("hidden");
}, 5000);

