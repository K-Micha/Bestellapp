// abholung o. lieferung
const buttons = document.querySelectorAll('.order-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
    console.log("Aktiver Modus:", btn.textContent);
    
  });
});

// scrollen 
document.querySelectorAll(".dishes_link").forEach(link => {

    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.dataset.target;
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });

});

// Nav Aside
const sideMenu = document.getElementById("side_menu");


document.addEventListener("click", (e) => {
    const burger    = e.target.closest(".ham_menu");
    const closeMenu = e.target.closest(".close_menu");
    const clickOverlay = e.target === overlay;
    const menuLink = e.target.closest(".close");

    // öffnen
    if (burger) {
        sideMenu.classList.add("show");
        overlay.classList.add("show");
    }

    // schließen
    if (closeMenu || clickOverlay ||menuLink) {
        sideMenu.classList.remove("show");
        overlay.classList.remove("show");
    }
});