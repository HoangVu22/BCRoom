var headerFormLogout = document.querySelector('.header-form-logout');
var headerNavForm = document.querySelector('.header-nav-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
function handleLogin() {
    if(localStorage.getItem('login')) {
        headerFormLogout.style.display = "block"
        headerFormLogin.style.display = "none"
    } else {
        headerFormLogout.style.display = "none"
        headerFormLogin.style.display = "block"
    }
}
handleLogin()

var formLogout = document.querySelector(".form-logout")
if(headerFormLogout) {
    formLogout.onclick = () => {
        localStorage.removeItem('login')
        handleLogin()
    }
}

function userName(){
    const user = JSON.parse(localStorage.getItem("login"));
    const headerName = document.querySelector(".avatar-login");
    headerName.innerHTML = ` <div class="header-form-avatar">
    <!-- <i class="fa-solid fa-circle-user"></i> -->
    <img src="${user && user.avatarUrl}" alt="">
    <div class="header-name">
        <span>${user && user.username}</span>
        <p>Xem hồ sơ</p>
    </div>
</div>`;
}

userName();
// update hotel
sessionStorage.removeItem("hotelUpdate");
sessionStorage.removeItem("updateRoom");
