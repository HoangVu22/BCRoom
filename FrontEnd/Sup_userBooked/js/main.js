// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = window.localStorage.getItem("login");

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") headerForm.style.display = "block";
  else {
    headerForm.style.display = "none";
  }

  handleIconLight();
};

function handleIconLight() {
  var iconList = headerNavIcon.querySelectorAll("i");
  iconList.forEach((item) => {
    if (
      (headerFormLogout && headerFormLogout.style.display !== "none") ||
      (headerFormLogin && headerFormLogin.style.display !== "none")
    ) {
      item.style.color = "#f44336";
      headerNavIcon.style.borderColor = "#f44336";
    } else {
      item.style.color = "unset";
      headerNavIcon.style.borderColor = "unset";
    }
  });
}

// ----------------searchResidence-----------
const searchResidence = () => {
  const searchInput = document.getElementById('search').value.toUpperCase()
  const table = document.querySelector('.container-nav')
  const listResidence = document.querySelectorAll('.list-residence')
  const nameResidence = table.querySelectorAll('.list-info h4')

  for(var i=0; i<nameResidence.length; i++) {
    let match = listResidence[i].querySelectorAll('.list-info h4')[0]

    if(match) {
      let textValue = match.textContent || match.innerHTML
      if(textValue.toUpperCase().indexOf(searchInput) > -1) {
        listResidence[i].style.display = ""
      }
      else {
        listResidence[i].style.display = "none"
      }
    }
  }
}