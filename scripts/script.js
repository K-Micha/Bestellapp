// abholung o. lieferung
const buttons = document.querySelectorAll('.order-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
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

// Nav Modal
