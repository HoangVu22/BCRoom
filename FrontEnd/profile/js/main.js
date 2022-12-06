// ---------header------------
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
const accountinfo = document.querySelector(".account-info");
const formProfile = document.querySelector(".form-profile");

const login = JSON.parse(localStorage.getItem("login"));

fetch('http://localhost:1234/api/v1/images/avatar_of_customer/' + login.customerId)
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const avatarImg = document.querySelector('img.avatar-img')
            avatarImg.src = data.data ? data.data.url : 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-avt-n%E1%BB%AF-t%C3%B3c-ng%E1%BA%AFn-%C4%91%E1%BA%B9p.jpg'
        }
    })

headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") headerForm.style.display = "block";
    else {
        headerForm.style.display = "none";
    }

    handleIconLight();
};
const headerNavIcon = document.querySelector(".header-nav-icon")
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
            fetchBookingsHistory()
        }
    };
});

function renderBooking(data) {
    const dateFrom = new Date(data.dateFrom)
    const dateTo = new Date(data.dateTo)

    return `<tr data-booking="${data.bookingId}" class="list-residence">
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
                                ${
                                    data.isPaid ? `<td></td>` : `<td class="list-content list-cancel">
                                    <i data-booking="${data.bookingId}" class="fa-solid fa-trash-can"></i>
                                </td>`
                                }
                            </tr>`
}

function fetchBookingsHistory() {
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
                const bookingsHistoryContainer = document.querySelector('table.container-nav')
                const bookingsResponse = data.data
                const bookingElements = []
                
                bookingsResponse.forEach(booking => {
                    bookingElements.push(renderBooking(booking))
                })
                bookingsHistoryContainer.innerHTML = bookingElements.join("")

                const cancelBookingButtons = document.querySelectorAll('.list-content.list-cancel i')
                cancelBookingButtons.forEach(button => {
                    button.onclick = (e) => {
                        fetch('http://localhost:1234/api/v1/customers/cancel_booking_from_client/' + e.target.dataset.booking, {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ customerId: login.customerId })
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.code === 200) {
                                    alert(data.message)
                                    window.location.reload()
                                    return false
                                } else {
                                    alert(data.message)
                                }
                            })
                    }
                })
            }
        })
}

function autoLoad() {
    const login = JSON.parse(localStorage.getItem('login'))
    var changeAvatar = document.querySelector(".change-avatar");
    var avatarImg = document.querySelector(".avatar-img");
    function handleChangeAvatar () {
        changeAvatar.click();
        changeAvatar.onchange = (e) => {
            const formData = new FormData()
            formData.append('avatar', e.target.files[0])
            formData.append('directory', 'avatars')
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
                                    const avatarImg = document.querySelector('img.avatar-img')
                                    avatarImg.src = data.data.url
                                    const objAvatar = {
                                        ...login,
                                        avatarUrl: data.data.url,
                                        avatarName: data.data.imageName
                                    }
                                    localStorage.setItem("login", JSON.stringify(objAvatar))
                                    userName(objAvatar)
                                }
                            })
                    }
                })
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
function userName(obj) {
    const user = JSON.parse(localStorage.getItem("login"));
    const headerName = document.querySelector(".avatar-login");
    headerName.innerHTML = `  <div class="header-form-avatar">
    <!-- <i class="fa-solid fa-circle-user"></i> -->
    <img src="${(obj && obj.avatarUrl) || user.avatarUrl}" alt="">
    <div class="header-name">
        <span>${(obj&& obj.userName) || user.username}</span>
        <p>Xem hồ sơ</p>
    </div>
</div>`;
}

formprofileedit.innerHTML = profileUpdatefn();
autoLoad();

const profileUpdate = document.querySelector(".profile_update");
profileSaveBtn.onclick = () => {
    const inputChange = formprofileedit.querySelectorAll("input");
    const objProfile = {
        "phone": inputChange[0].value,
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