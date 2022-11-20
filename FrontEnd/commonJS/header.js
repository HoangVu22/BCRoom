var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
var headerNavForm = document.querySelector('.header-nav-form')
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
    const user = JSON.parse(localStorage.getItem("username"));
    const headerName = document.querySelector(".header-name");
    headerName.innerHTML = ` <span>${user}</span> <p>Xem hồ sơ</p>`;
}
userName();