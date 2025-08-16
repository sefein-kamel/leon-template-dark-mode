var modeButton = document.querySelector(".mode");
var body = document.body;

if (localStorage.getItem('dark') === 'enabled') {
  document.body.classList.add('dark');
   modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

function mode() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('dark', 'enabled');
    } else {
        modeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('dark', 'disabled');
    }
}