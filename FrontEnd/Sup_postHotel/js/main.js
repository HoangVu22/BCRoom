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

// ---------------nav-steps------------
const stepItem = document.querySelectorAll(".step-item");
const stepContent = document.querySelectorAll(".step-content");
const itemActive = document.querySelector(".step-item.active");
const line = document.querySelector(".steps .line");

requestIdleCallback(function () {
  line.style.left = itemActive.offsetLeft + "px";
  line.style.width = itemActive.offsetWidth + "px";
});

stepItem.forEach((tab, index) => {
  const room = stepContent[index]; // mỗi lần click vào tab thì lấy ra thằng room tương ứng

  tab.onclick = function () {
    document.querySelector(".step-item.active").classList.remove("active");
    document.querySelector(".step-content.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    room.classList.add("active");
  };
});

// -------------- drag-drop-----------
let files = [];
var dragImage = document.querySelector(".drag-image");
var dragDrop = document.querySelector(".drag-drop");
var chooseFile = document.querySelector(".choose-file");
var dragDropInput = document.querySelector(".drag-drop-input");
var imageDetail = document.querySelectorAll(".image-detail img");
var image = document.querySelector(".image");

function handleImage() {
  chooseFile.addEventListener("click", function () {
    dragDropInput.click();
  });
  dragDropInput.onchange = function (e) {
    const url = URL.createObjectURL(e.target.files[0]);
    files.push(url);

    const html = files
      .map((item) => {
        return `<div class="image-detail">
        <img src="${item}" alt="">
        <i class="fa-solid fa-xmark remove_image"></i>
      </div>`;
      })
      .join("");

    image.innerHTML = html;

    let remove_image = document.querySelectorAll(".remove_image");
    function handleRemoveImage(index) {
      const filter = files.filter((item1, index1) => {
        return index1 !== index;
      });
      files.splice(index, 1)
      const newList = filter
        .map((element) => {
          return `<div class="image-detail">
          <img src="${element}" alt="">
          <i class="fa-solid fa-xmark remove_image"></i>
        </div>`;
        })
        .join("");

      image.innerHTML = newList;
      remove_image = document.querySelectorAll(".remove_image");
      remove_image.forEach((item, index) => {
        item.onclick = () => {
          handleRemoveImage(index);
        };
      });
    }
    remove_image.forEach((item, index) => {
      item.onclick = () => {
        handleRemoveImage(index);
      };
    });
    e.target.value = "";
  };
}
handleImage();
