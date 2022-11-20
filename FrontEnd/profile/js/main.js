// ---------header------------
var headerNavForm = document.querySelector('.header-nav-form')
var headerForm = document.querySelector('.header-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
const accountinfo = document.querySelector(".account-info");
const formProfile = document.querySelector(".form-profile");

const login = JSON.parse(localStorage.getItem("login"));
headerNavForm.onclick = function() {
    if (headerForm.style.display === "none")
        headerForm.style.display = "block"
    else {
        headerForm.style.display = "none"
    }

    handleIconLight()
}

function handleIconLight() {
    var iconList = headerNavIcon.querySelectorAll('i')
    iconList.forEach((item) => {
        if(headerFormLogout && headerFormLogout.style.display !== "none" || headerFormLogin && headerFormLogin.style.display !=="none") {
            item.style.color = "#f44336"
            headerNavIcon.style.borderColor = "#f44336"
        }
        else {
            item.style.color = "unset"
            headerNavIcon.style.borderColor = "unset"
        }
    })
}

// -------------profile--------------
var profile = document.querySelector('.profile')
var profileRight = document.querySelector('.profile-right')
var profileRightEdit = document.querySelector('.profile-right-edit')
var profileRightTopBtn = document.querySelector('.profile-right-top button')
var profileSaveBtn = document.querySelector('.profile-save button')
var profileSaveP = document.querySelector('.profile-save p')

profileRightTopBtn.onclick = function() {
    if(profileRightEdit) {
        if (profileRightEdit.style.display === "block") {
            profileRightEdit.style.display = "none"
            profileRight.style.display = "block"
        }
        else {
            profileRightEdit.style.display = "block"
            profileRight.style.display = "none"
        }
    }
}

function edit() {
    profileRightEdit.style.display = "none"
    profileRight.style.display = "block"
}

profileSaveBtn.onclick = edit
profileSaveP.onclick = edit

// ---------------------- 
const accountsidebarlink = document.querySelectorAll(".account-sidebar-link")
const profilegenaral = document.querySelectorAll(".profile-genaral")
accountsidebarlink.forEach((value,index)=>{
    value.onclick = (e)=>{
        if(!value.classList.contains("active")){
            accountsidebarlink.forEach(e=>{
                e.classList.remove("active")
            })
            value.classList.add("active")
            profilegenaral.forEach(e=>{
                e.style.display="none"
            })
            profilegenaral[index].style.display = "block"
        }
    }
})


accountinfo.innerHTML = `<div class="account-info-img">
                            <img src="../image/avatars/avatar_1.jpg" alt="">
                            <i class="fa-solid fa-camera"></i>
                        </div>
                        <p>${login.username}</p>`;

formProfile.innerHTML = `<div class="form-profile-info">
                                <label for="">Số điện thoại</label>
                                <div class="form-profile-name">${login.phone || "Vui lòng nhập số điện thoại"}</div>
                            </div>
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Họ và tên</label>
                                <div class="form-profile-name">${login.username || ""}</div>
                            </div>
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Email</label>
                                <div class="form-profile-name">${login.email || ""}</div>
                            </div>
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Địa chỉ</label>
                                <div class="form-profile-name">${login.address || "Vui lòng nhập địa chỉ"}</div>
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

const formprofileedit = document.querySelector(".form-profile-edit");
formprofileedit.innerHTML = `<div class="form-profile-info">
                                <label for="">Số điện thoại</label>
                                <div class="form-profile-input">
                                    <input class="form-profile-text"  type="number" placeholder="Nhập số điện thoại của bạn">
                                </div>
                            </div>
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Họ và tên</label>
                                <div class="form-profile-input">
                                    <input class="form-profile-text"  value=${login.username}  type="text" placeholder="Nhập họ tên của bạn">
                                </div>
                            </div>
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Email</label>
                                <div class="form-profile-input">
                                    <input class="form-profile-text" value=${login.email} type="text" placeholder="Nhập email của bạn">
                                </div>
                            </div>
                            <!-- <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Ngày Sinh</label>
                                <div class="form-profile-input">
                                    <input class="form-profile-lable" type="text" placeholder="Nhập ngày">
                                    <input class="form-profile-lable" type="text" placeholder="Nhập tháng">
                                    <input class="form-profile-lable" type="text" placeholder="Nhập năm">
                                </div>
                            </div> -->
                            <div class="form-line"></div>
                            <div class="form-profile-info">
                                <label for="">Địa chỉ</label>
                                <div class="form-profile-input">
                                    <input class="form-profile-text" type="text" placeholder="Nhập địa chỉ của bạn">
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

