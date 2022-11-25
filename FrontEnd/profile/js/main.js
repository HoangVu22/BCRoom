// ---------header------------
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
const accountinfo = document.querySelector(".account-info");
const formProfile = document.querySelector(".form-profile");

const login = JSON.parse(localStorage.getItem("login"));
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

// -------------profile--------------
var profile = document.querySelector(".profile");
var profileRight = document.querySelector(".profile-right");
var profileRightEdit = document.querySelector(".profile-right-edit");
var profileRightTopBtn = document.querySelector(".profile-right-top button");
var profileSaveBtn = document.querySelector(".profile-save button");
var profileSaveP = document.querySelector(".profile-save p");

profileRightTopBtn.onclick = function () {
  if (profileRightEdit) {
    if (profileRightEdit.style.display === "block") {
      profileRightEdit.style.display = "none";
      profileRight.style.display = "block";
    } else {
      profileRightEdit.style.display = "block";
      profileRight.style.display = "none";
    }
  }
};

function edit() {
  profileRightEdit.style.display = "none";
  profileRight.style.display = "block";
}

// profileSaveBtn.onclick = edit;
profileSaveP.onclick = edit;

// ----------------------
const accountsidebarlink = document.querySelectorAll(".account-sidebar-link");
const profilegenaral = document.querySelectorAll(".profile-genaral");
accountsidebarlink.forEach((value, index) => {
  value.onclick = (e) => {
    if (!value.classList.contains("active")) {
      accountsidebarlink.forEach((e) => {
        e.classList.remove("active");
      });
      value.classList.add("active");
      profilegenaral.forEach((e) => {
        e.style.display = "none";
      });
      profilegenaral[index].style.display = "block";
    }
  };
});

function autoLoad() {
    var changeAvatar = document.querySelector(".change-avatar");
    var avatarImg = document.querySelector(".avatar-img")
  function handleChangeAvatar() {
      changeAvatar.click();
    changeAvatar.onchange = (e) => {
          const url = URL.createObjectURL(e.target.files[0])
          avatarImg.src = url
      }
  }
  var avatarRef = document.querySelector(".fa-solid.fa-camera");
  avatarRef.onclick = handleChangeAvatar;
}

function accountInfomation(obj) {
  return `<div class="account-info-img">
  <img  class="avatar-img" src="../image/avatars/avatar_1.jpg" alt="">
  <input class="change-avatar" style="display: none" type="file">
  <i class="fa-solid fa-camera"></i>
</div>
<p>${obj && obj.username || login.username}</p>`;
}
accountinfo.innerHTML = accountInfomation()

function formProfilefn(obj) {
  return `<div class="form-profile-info">
  <label for="">Số điện thoại</label>
  <div class="form-profile-name">${
    obj && obj.phone || login.phone || ""
  }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Họ và tên</label>
  <div class="form-profile-name">${
    obj && obj.username || login.username || ""
  }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Email</label>
  <div class="form-profile-name">${
    obj && obj.email ||login.email || ""
  }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Địa chỉ</label>
  <div class="form-profile-name">${
    obj && obj.address ||login.address || ""
  }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Tài khoản liên kết</label>
  <div class="form-profile-name">
      <div class="form-profile-connect">
          <div class="form-profile-icon">
              <img src="https://go2joy.vn/images/icons/facebook.svg" alt="">
              <p>Facebook</p>
          </div>
          <div class="form-profile-link">
              <a href="">Liên kết</a>
          </div>
      </div>
      <div class="form-profile-connect">
          <div class="form-profile-icon">
              <img src="https://go2joy.vn/images/icons/google.svg" alt="">
              <p>Google</p>
          </div>
          <div class="form-profile-link">
              <a href="">Hủy liên kết</a>
          </div>
          </div>
          </div>
          </div>`;
}
formProfile.innerHTML = formProfilefn()

const formprofileedit = document.querySelector(".form-profile-edit");
function profileUpdatefn(obj) {
  return `<div class="form-profile-info">
  <label for="">Số điện thoại</label>
  <div class="form-profile-input">
      <input class="form-profile-text"  type="number" placeholder="Nhập số điện thoại của bạn" value="${obj && obj.phone || login.phone}">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Họ và tên</label>
  <div class="form-profile-input">
      <input class="form-profile-text"  value="${obj && obj.username || login.username}"  type="text" placeholder="Nhập họ tên của bạn">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Email</label>
  <div class="form-profile-input">
      <input class="form-profile-text" disabled value=${obj && obj.email || login.email} type="text" placeholder="Nhập email của bạn">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Địa chỉ</label>
  <div class="form-profile-input">
      <input class="form-profile-text" type="text" placeholder="Nhập địa chỉ của bạn" value="${obj && obj.address || login.address}">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Tài khoản liên kết</label>
  <div class="form-profile-name">
      <div class="form-profile-connect">
          <div class="form-profile-icon">
              <img src="https://go2joy.vn/images/icons/facebook.svg" alt="">
              <p>Facebook</p>
          </div>
          <div class="form-profile-link">
              <a href="">Liên kết</a>
          </div>
      </div>
      <div class="form-profile-connect">
          <div class="form-profile-icon">
              <img src="https://go2joy.vn/images/icons/google.svg" alt="">
              <p>Google</p>
          </div>
          <div class="form-profile-link">
              <a href="">Hủy liên kết</a>
          </div>
      </div>
  </div>
</div>`;
}
function userName(obj){
  const user = JSON.parse(localStorage.getItem("login"));
  const headerName = document.querySelector(".header-name");
  headerName.innerHTML = ` <span>${obj && obj.username || user.username}</span> <p>Xem hồ sơ</p>`;
}
formprofileedit.innerHTML = profileUpdatefn()
autoLoad();

const profileUpdate = document.querySelector(".profile_update")
profileSaveBtn.onclick = () => {
  const inputChange = formprofileedit.querySelectorAll("input")
  const objProfile = {
    "phone":inputChange[0].value,
    "username": inputChange[1].value,
    "email": inputChange[2].value,
    "address": inputChange[3].value,
    "customerId": login.customerId
  }
  fetch("http://localhost:1234/api/v1/customers/update_profile", {
    method:"POST",
    headers: {
      'Content-Type':"application/json"
    },
    body: JSON.stringify(objProfile)
  })
    .then(res => res.json())
    .then(data => {
      if (data.code === 200) {
        localStorage.setItem('login',JSON.stringify(data.data))
        const profile = data.data
        formprofileedit.innerHTML = profileUpdatefn(profile)
        formProfile.innerHTML = formProfilefn(profile)
        accountinfo.innerHTML = accountInfomation(profile)
        userName(profile); 
        edit()
    }
  })
}

// -------------ẩn hiện điều kiện của Coupon-----------
var conditionBtn = document.querySelector('.condition button')
var conditionContent = document.querySelector('.condition-content')
var roomClose = document.querySelector('.room-close i')

conditionBtn.onclick = function () {
  if (conditionContent.style.display === "block")
    conditionContent.style.display = "none";
  else {
    conditionContent.style.display = "block";
  }
}

roomClose.onclick = function () {
  conditionContent.style.display = 'none'
}

// ---------------------------------------------------
