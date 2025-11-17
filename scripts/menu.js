// Menu Jason
const data = {

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
  ],
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
  ],
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

// Warenkorb
let cart = [];
let deliveryCost = 3.50;


function getDish(id) {
  return (
    data.mainDishes.find(d => d.id === id) ||
    data.slideDishes.find(d => d.id === id) ||
    data.drinks.find(d => d.id === id)
  );
}


function renderCategory(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  list.forEach(dish => {
    const card = document.createElement("article");
    card.classList.add("dishes_container");

    card.innerHTML = `
      <button onclick="addItem('${dish.id}')" class="dishes_btn icon_btn">+</button>
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <p class="price">${dish.price.toFixed(2)} €</p>
    `;

    container.appendChild(card);
  });
}


renderCategory(data.mainDishes, "main_dishes");
renderCategory(data.slideDishes, "slide_dishes");
renderCategory(data.drinks, "drinks");

// item hinzufügen
function addItem(id) {
  const dish = getDish(id);
  if (!dish) return;

  let item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ id: dish.id, name: dish.name, price: dish.price, qty: 1 });
  }
  renderCart();
}


function removeItem(id) {
  let item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty--;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}


function deleteItem(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}


function renderCart() {
  const itemsBox = document.querySelector(".cart-items");
  itemsBox.innerHTML = "";

  cart.forEach(item => {
    const line = document.createElement("article");
    line.classList.add("cart-line");

    line.innerHTML = `
      <p class="item_name">${item.name}</p>
      <div class="cart-controls">
        <button onclick="removeItem('${item.id}')" class="minus orange">−</button>
        <span>${item.qty}</span>
        <button onclick="addItem('${item.id}')" class="plus orange">+</button>
        <p class="item-sum">${(item.qty * item.price).toFixed(2)} €</p>
        <button onclick="deleteItem('${item.id}')" class="remove orange">🗑️</button>
      </div>
      <div class="line"></div>
    `;

    itemsBox.appendChild(line);
  });

  renderSummary();
}

// lieferung
function setDelivery(isDelivery) {
  deliveryCost = isDelivery ? 3.50 : 0;

  const btnLieferung = document.getElementById("btn-lieferung");
  const btnAbholung = document.getElementById("btn-abholung");

  if (!btnLieferung || !btnAbholung) return;

  btnLieferung.classList.toggle("active", isDelivery);
  btnAbholung.classList.toggle("active", !isDelivery);

  renderSummary();
}


function renderSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  document.getElementById("subtotal_summe").textContent = `${subtotal.toFixed(2)} €`;
  document.getElementById("delivery_summe").textContent = `${deliveryCost.toFixed(2)} €`;
  document.getElementById("total_summe").textContent = `${(subtotal + deliveryCost).toFixed(2)} €`;
}

// order
function finalizeOrder() {
  const message = document.getElementById("order_message");
  if (!message) return;

  message.style.display = "block";

  if (cart.length === 0) {
    message.textContent = "Der Warenkorb ist leer.";
    message.style.color = "#c0392b";
  } else {
    message.textContent = "Bestellung erfolgreich!";
    message.style.color = "#27ae60";
    resetCart();
  }

  setTimeout(() => {
    message.textContent = "";
    message.style.display = "none";
  }, 2000);
}


function resetCart() {
  cart = [];
  renderCart();
}