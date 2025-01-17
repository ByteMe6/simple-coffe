let input = document.querySelector(".searchInp");
let login = document.querySelector(".logInBtn");
let navList = document.querySelector(".navList");
let seaarchBtn = document.querySelector(".seaarchBtn");
let burgerBtn = document.querySelector(".burgerBtn");

function openSearch() {
  input.classList.toggle("displayNone");
  login.classList.toggle("displayNone");
  navList.classList.toggle("displayNone");
  input.classList.toggle("searchInpAnim");
}

login.onclick = function() {
  const modal = new bootstrap.Modal(document.querySelector('.modal'));
  modal.show();
};

seaarchBtn.onclick = openSearch;