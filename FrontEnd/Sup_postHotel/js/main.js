// ---------header------------\
var headerNavForm = document.querySelector('.header-nav-form')
var headerForm = document.querySelector('.header-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
var login = window.localStorage.getItem("login")

headerNavForm.onclick = function() {
    if (headerForm.style.display === "none")
        headerForm.style.display = "block"
    else {
        headerForm.style.display = "none"
    }

    handleIconLight()
}

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


// ---------------nav-steps------------
const stepItem = document.querySelectorAll('.step-item');
const stepContent = document.querySelectorAll('.step-content');
const itemActive = document.querySelector('.step-item.active');
const line = document.querySelector('.steps .line');

requestIdleCallback(function () {
  line.style.left = itemActive.offsetLeft + "px";
  line.style.width = itemActive.offsetWidth + "px";
});

stepItem.forEach((tab, index) => {
  const room = stepContent[index]; // mỗi lần click vào tab thì lấy ra thằng room tương ứng

  tab.onclick = function () {
    document.querySelector('.step-item.active').classList.remove("active");
    document.querySelector('.step-content.active').classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    room.classList.add("active");
  };
});