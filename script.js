document.addEventListener("DOMContentLoaded", function() {
    fetch('html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('html/main.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        });
    fetch('html/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
});
