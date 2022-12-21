// ---------header------------
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
const accountinfo = document.querySelector(".account-info");
const formProfile = document.querySelector(".form-profile");
const loader = document.getElementById('loading')
const specialCharacterRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

const login = JSON.parse(localStorage.getItem("login"));

fetch('http://localhost:1234/api/v1/images/avatar_of_customer/' + login.customerId)
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const avatarImg = document.querySelector('img.avatar-img');
            avatarImg.src = data.data ? data.data.url : 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-avt-n%E1%BB%AF-t%C3%B3c-ng%E1%BA%AFn-%C4%91%E1%BA%B9p.jpg';
        }
    });

headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") headerForm.style.display = "block";
    else {
        headerForm.style.display = "none";
    }

    handleIconLight();
};
const headerNavIcon = document.querySelector(".header-nav-icon");
function handleIconLight () {
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

function edit () {
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

        if (value.classList.contains('booking-sidebar')) {
            fetchBookingsHistory();
        }
    };
});

function renderBooking (data, index) {
    const dateFrom = new Date(data.dateFrom);
    const dateTo = new Date(data.dateTo);

    return `<tr ${index % 2 === 0 && 'style="background-color: #F1F5F9"'} data-booking="${data.bookingId}" class="list-residence">
                                <td class="list-content list-status">
                                    <span>${data.hotelName}</span> <br>
                                    <span>${data.roomNumber}</span> <br>
                                    <span>${data.roomType}</span>
                                </td>
                                <td class="list-content list-info"> 
                                    <span>${dateFrom.getDate()}-${dateFrom.getMonth() + 1}-${dateFrom.getFullYear()}</span>
                                </td>
                                <td class="list-content list-id">
                                    <span>${dateTo.getDate()}-${dateTo.getMonth() + 1}-${dateTo.getFullYear()}</span>
                                </td>
                                <td class="list-content list-price">
                                    <span>${data.totalPrice} VNĐ</span>
                                </td>
                                <td class="list-content list-wait">
                                    <span style="color: ${data.isPaid ? 'green' : 'red'}">${data.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</span>
                                </td>
                                ${data.isPaid ? `<td></td>` : `<td class="list-content list-cancel">
                                    <i data-booking="${data.bookingId}" class="fa-solid fa-trash-can"></i>
                                </td>`
        }
                            </tr>`;
}

function fetchBookingsHistory () {
    fetch('http://localhost:1234/api/v1/customers/booking_history', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId: login.customerId })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const bookingsHistoryContainer = document.querySelector('table.container-nav');
                const bookingsResponse = data.data;
                const bookingElements = [];

                bookingsResponse.forEach((booking, index) => {
                    bookingElements.push(renderBooking(booking, index));
                });
                bookingsHistoryContainer.innerHTML = `<tr>
                <th>KHÁCH SẠN</th>
                <th>NGÀY ĐẶT</th>
                <th>NGÀY TRẢ</th>
                <th>TỔNG TIỀN</th>
                <th>TRẠNG THÁI</th>
                <th>TÙY CHỌN</th>
                </tr>` + bookingElements.join("");

                const cancelBookingButtons = document.querySelectorAll('.list-content.list-cancel i');
                cancelBookingButtons.forEach(button => {
                    button.onclick = (e) => {
                        const formReasonCancelPortal = document.querySelector('.form-reason-cancel-portal');
                        formReasonCancelPortal.style.display = 'block';
                        const cancelYesButton = document.querySelector('.cancel-yes');
                        const cancelNoButton = document.querySelector('.cancel-no');
                        cancelNoButton.onclick = () => {
                            const formReasonCancelPortal = document.querySelector('.form-reason-cancel-portal');
                            formReasonCancelPortal.style.display = 'none';
                        };
                        cancelYesButton.onclick = () => {
                            const reason = document.querySelector('.reason-cancel .reasons input:checked');
                            const otherReason = document.querySelector('.reason-cancel .reasons textarea');
                            let reasonValues = [];
                            if (!reason && !otherReason.value) {
                                alert('Vui lòng chọn lý do');
                                return false;
                            } else {
                                if (reason?.value) {
                                    reasonValues.push(reason.value);
                                }
                                if (otherReason.value) {
                                    reasonValues.push(otherReason.value);
                                }
                            }
                            fetch('http://localhost:1234/api/v1/customers/cancel_booking_from_client/' + e.target.dataset.booking, {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ customerId: login.customerId, reasons: reasonValues })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.code === 200) {
                                        alert(data.message);
                                        window.location.reload();
                                        return false;
                                    } else {
                                        alert(data.message);
                                    }
                                });
                        };
                    };
                });
            }
        });
}


function autoLoad () {
    const login = JSON.parse(localStorage.getItem('login'));
    var changeAvatar = document.querySelector(".change-avatar");
    var avatarImg = document.querySelector(".avatar-img");
    function handleChangeAvatar () {
        changeAvatar.click();
        changeAvatar.onchange = (e) => {
            const formData = new FormData();
            formData.append('avatar', e.target.files[0]);
            formData.append('directory', 'avatars');
            fetch('http://localhost:1234/api/v1/upload/upload_avatar', {
                method: 'post',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.code === 200) {
                        fetch('http://localhost:1234/api/v1/customers/update_avatar', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ customerId: login.customerId, url: data.data.fileUrl, name: data.data.filename })
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.code === 200) {
                                    const avatarImg = document.querySelector('img.avatar-img');
                                    avatarImg.src = data.data.url;
                                    const objAvatar = {
                                        ...login,
                                        avatarUrl: data.data.url,
                                        avatarName: data.data.imageName
                                    };
                                    localStorage.setItem("login", JSON.stringify(objAvatar));
                                    userName(objAvatar);
                                }
                            });
                    }
                });
        };
    }
    var avatarRef = document.querySelector(".fa-solid.fa-camera");
    avatarRef.onclick = handleChangeAvatar;
}

function accountInfomation (obj) {
    return `<div class="account-info-img">
  <img  class="avatar-img" src="" alt="">
  <input class="change-avatar" style="display: none" type="file">
  <i class="fa-solid fa-camera"></i>
</div>
<p>${obj && obj.username || login.username}</p>`;
}
accountinfo.innerHTML = accountInfomation();

function formProfilefn (obj) {
    return `<div class="form-profile-info">
  <label for="">Số điện thoại</label>
  <div class="form-profile-name">${obj && obj.phone || login.phone || ""
        }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Họ và tên</label>
  <div class="form-profile-name">${obj && obj.username || login.username || ""
        }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Email</label>
  <div class="form-profile-name">${obj && obj.email || login.email || ""
        }</div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Địa chỉ</label>
  <div class="form-profile-name">${obj && obj.address || login.address || ""
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
formProfile.innerHTML = formProfilefn();

const formprofileedit = document.querySelector(".form-profile-edit");
function profileUpdatefn (obj) {
    return `<div class="form-profile-info">
  <label for="">Số điện thoại</label>
  <div class="form-profile-input">
      <input class="form-profile-text update-request phone-verification"  type="number" placeholder="Nhập số điện thoại của bạn" value="${obj && obj.phone || login.phone}">
      <button class="form-profile-submit">Gửi</button>
  </div>
</div>
<div style="display: none;" class="form-profile-codeOTP">
      <input class="form-profile-text form-profile-otp" type="text" placeholder="Nhập mã OTP">
      <button class="form-profile-confirm">Xác nhận</button>
  </div>
<div class="form-line"></div>

<div class="form-profile-info">
  <label for="">Họ và tên</label>
  <div class="form-profile-input">
      <input class="form-profile-text update-request"  value="${obj && obj.username || login.username}"  type="text" placeholder="Nhập họ tên của bạn">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Email</label>
  <div class="form-profile-input">
      <input class="form-profile-text update-request" disabled value=${obj && obj.email || login.email} type="text" placeholder="Nhập email của bạn">
  </div>
</div>
<div class="form-line"></div>
<div class="form-profile-info">
  <label for="">Địa chỉ</label>
  <div class="form-profile-input">
      <input class="form-profile-text update-request" type="text" placeholder="Nhập địa chỉ của bạn" value="${obj && obj.address || login.address}">
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
function userName (obj) {
    const user = JSON.parse(localStorage.getItem("login"));
    const headerName = document.querySelector(".avatar-login");
    headerName.innerHTML = `  <div class="header-form-avatar">
    <!-- <i class="fa-solid fa-circle-user"></i> -->
    <img src="${(obj && obj.avatarUrl) || user.avatarUrl}" alt="">
    <div class="header-name">
        <span>${(obj && obj.userName) || user.username}</span>
        <p>Xem hồ sơ</p>
    </div>
</div>`;
}

formprofileedit.innerHTML = profileUpdatefn();
autoLoad();

const profileUpdate = document.querySelector(".profile_update");
profileSaveBtn.onclick = () => {
    const inputChange = formprofileedit.querySelectorAll("input.update-request");
    const objProfile = {
        // "phone": inputChange[0].value,
        "username": inputChange[1].value,
        "email": inputChange[2].value,
        "address": inputChange[3].value,
        "customerId": login.customerId
    };
    fetch("http://localhost:1234/api/v1/customers/update_profile", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(objProfile)
    })
        .then(res => res.json())
        .then(data => {
            if (data.code === 200) {
                localStorage.setItem('login', JSON.stringify(data.data));
                const profile = data.data;
                formprofileedit.innerHTML = profileUpdatefn(profile);
                formProfile.innerHTML = formProfilefn(profile);
                accountinfo.innerHTML = accountInfomation(profile);
                userName(profile);
                edit();
                window.location.reload();
                return false;
            }
        });
};

// -------------ẩn hiện điều kiện của Coupon-----------
var conditionBtn = document.querySelector('.condition .condition-btn');
var conditionContent = document.querySelector('.condition-content');
conditionBtn.onclick = function () {
    conditionContent.style.display = "block";
    conditionContent.innerHTML = handleRenderVoucher();
    var roomClose = document.querySelector('.room-close i');
    roomClose.onclick = function () {
        conditionContent.innerHTML = '';
        conditionContent.style.display = "none";
    };
};

function handleRenderVoucher () {
    return `<div class="my-coupon">
  <div class="coupon-img">
      <img src="../image/places/HoaVang.jpg" alt="">
  </div>
  <div class="coupon-content">
      <div class="coupon-content-top">
          <p>GIẢM 50% - TỐI ĐA 50K</p>
      </div>
      <div class="coupon-content-bottom">
          <div class="closing-date">
              <span>Giảm 50%</span>
              <p>Hết hạn 1/1/2023</p>
          </div>
      </div>
  </div>
</div>
<div class="coupon-description">
  <ul>
      <li>Chúc mừng bạn đã nhận được <b>Coupon 50%</b> (tối đa 50.000đ), <b>hạn sử dụng trong 7 ngày kể từ ngày nhận coupon.</b></li>
      <li>Áp dụng tại các <b>khách sạn trong danh sách.</b></li>
      <li>Coupon không được áp dụng cùng với chương trình Giảm giá đặc biệt.</li>
      <li>Thời gian đặt phòng: <b>Từ Thứ Hai đến Chủ Nhật.</b></li>
      <li>Coupon không được quy đổi thành tiền mặt, không được phép chuyển nhượng dưới bất kỳ hình thức nào.</li>
      <li>BCRoom có quyền từ chối trả phí khuyến mãi nếu phát hiện gian lận hoặc vi phạm các điều khoản của chương trình khuyến mãi này.</li>
  </ul>
</div>
<div class="room-close">
  <i class="fa-solid fa-xmark"></i>
</div>`;
}

// ----------------- update new password -------------
const oldPasswordInput = document.querySelector('#old-password');
const newPasswordInput = document.querySelector('#new-password');
const verifyNewPasswordInput = document.querySelector('#verify-new-password');
const submitUpdatePasswordInput = document.querySelector('#submit-update-password-button');

new Array(oldPasswordInput, newPasswordInput, verifyNewPasswordInput).forEach(input => {
    console.log(input);
    input.onkeypress = (e) => {
        console.log(e.target.value);
        input.classList.remove('error');
        input.style.border = '1px solid #d6d5d5';
    };
});

submitUpdatePasswordInput.onclick = () => {
    const customerId = login.customerId;

    let requestDenied = false;

    if (!oldPasswordInput.value) {
        oldPasswordInput.style.border = '1px solid red';
        oldPasswordInput.placeholder = "Chưa nhập mật khẩu cũ";
        oldPasswordInput.classList.add('error');
        requestDenied = true;
    }

    if (!newPasswordInput.value) {
        newPasswordInput.style.border = '1px solid red';
        newPasswordInput.placeholder = "Chưa nhập mật khẩu mới";
        newPasswordInput.classList.add('error');
        requestDenied = true;
    }

    if (verifyNewPasswordInput.value !== newPasswordInput.value || !verifyNewPasswordInput.value) {
        verifyNewPasswordInput.value = "";
        verifyNewPasswordInput.style.border = '1px solid red';
        verifyNewPasswordInput.placeholder = "Mật khẩu không hợp lệ";
        verifyNewPasswordInput.classList.add('error');
        requestDenied = true;
    }

    if (!requestDenied) {
        fetch('http://localhost:1234/api/v1/customers/change_password', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ customerId, password: newPasswordInput.value, oldPassword: oldPasswordInput.value })
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            });
    }
};

// ---------OTP----------
const formProfileSubmit = document.querySelector('.form-profile-submit');
const formProfileCodeOTP = document.querySelector('.form-profile-codeOTP');

formProfileSubmit.onclick = function (e) {
    e.preventDefault();
    const customerId = login.customerId;
    const phone = document.querySelector('.phone-verification');
    if (specialCharacterRegex.test(phone.value)) {
        alert('Vui lòng nhập số điện thoại')
        phone.value = login.phone 
        return false
    }
    loader.style.display = 'grid'
    fetch('http://localhost:1234/api/v1/customers/phone_verification', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId, phone: phone.value })
    })
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none'
            if (data.code === 200) {
                formProfileCodeOTP.style.display = 'block';
                formProfileSubmit.style.display = 'none';
                const formProfileConfirm = document.querySelector('.form-profile-confirm')
                formProfileConfirm.onclick = () => {
                    const otpInput = document.querySelector('.form-profile-otp')
                    loader.style.display = 'grid'
                    fetch('http://localhost:1234/api/v1/core/confirm_phone_verification', {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            customerId,
                            phone: phone.value,
                            otp: otpInput.value
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            loader.style.display = 'none'
                            localStorage.setItem('login', JSON.stringify({ ...login, phone: phone.value }))
                            alert(data.message)
                        })
                }
            }
        });
};

// ---------
var headerLogoIMG = document.querySelector('.header-logo img');
headerLogoIMG.onclick = function () {
    location.href = 'http://localhost:5500/FrontEnd/home/index.html#';
};