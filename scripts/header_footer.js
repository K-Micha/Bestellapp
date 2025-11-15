fetch("html/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header_content").innerHTML = data;

    fetch("html/footer.html")
      .then((response) => response.text())
     .then((data) => {
         document.getElementById("footer_content").innerHTML = data;
         });
  });
