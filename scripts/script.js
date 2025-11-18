// Abholung oder Lieferung
function setOrderMode(btn) {
    document.querySelectorAll('.order-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    console.log("Aktiver Modus:", btn.textContent);
}

// Scrollen zu Gerichten
function scrollToTarget(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
}

// Burger Menü
function openMenu() {
    document.getElementById("side_menu").classList.add("show");
    document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
    document.getElementById("side_menu").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");

}
document.querySelectorAll("#side_menu .menu_nav a")
    .forEach(link => link.addEventListener("click", closeMenu));


// Mobiler Warenkorb
function toggleCart() {
    const basket = document.querySelector(".basket");
    basket.classList.toggle("show");
}
const mobileBtn = document.getElementById("mobile_cart_btn");
const basket = document.querySelector(".basket");
const closeBtn = document.getElementById("close_cart");

mobileBtn.onclick = function () {
    basket.classList.add("show");
};
closeBtn.onclick = function () {
    basket.classList.remove("show");
};
document.onclick = function (e) {

    if (basket.contains(e.target)) {
        return;
    }

    if (e.target === mobileBtn) {
        return;
    }

    if (
        e.target.classList.contains("plus") ||
        e.target.classList.contains("minus") ||
        e.target.classList.contains("remove")
    ) {
        return;
    }

    basket.classList.remove("show");
};

