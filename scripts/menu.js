// Menu Jason
const data = {
    //Hauptgericht
  mainDishes: [
    {
      id: "hs1",
      name: "Chicken Lemon Tajine",
       description: "Zitronen, Oliven, Kurkuma – klassisch marokkanisch.",
      price: 13.50
    },
    {
      id: "hs2",
      name: "Beef & Prunes Tajine",
       description: "Süß-herzhaft, Zwiebeln, Sesam, weiches Rindfleisch.",
      price: 14.90
    },
     {
      id: "hs3",
      name: "Vegetable Tajine",
       description: "Langsam geschmortes Gemüse mit Safran und milden Gewürzen.",
      price: 11.50
    }
  ], //beilagen
  slideDishes: [
    {
      id: "b1",
      name: "Harira Soup",
       description: "Tomaten-Linsen-Suppe, warm und würzig.",
      price: 4.90
    },
    {
      id: "b2",
      name: "Moroccan Bread (Khobz)",
       description: "Frisch gebacken.",
      price: 2.50
    }
  ], //getränke
  drinks: [
    {
      id: "g1",
      name: "Nana Mint Tea",
       description: "Frische Nana-Minze, Zucker nach Wahl.",
      price: 2.90
    },
    {
      id: "g2",
      name: "Lemon Mint",
       description: "Zitrone, Minze, eiskalt.",
      price: 3.50
    },
    {
      id: "g3",
      name: "Pomegranate Juice",
       description: "Süß-sauer, frisch gepresst.",
      price: 3.90
    }
  ]
};


function renderCategory(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    list.forEach(dish => {
        const card = document.createElement("div");
        card.classList.add("dishes_container");
// Karte einfügen
        card.innerHTML = `
            <button class="dishes_btn icon_btn" data-id="${dish.id}">+</button>
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <p class="price">${dish.price.toFixed(2)} €</p>
        `;

        container.appendChild(card);
    });
}

// Rendern alle Kategorien
renderCategory(data.mainDishes, "main_dishes");
renderCategory(data.slideDishes, "slide_dishes");
renderCategory(data.drinks, "drinks");