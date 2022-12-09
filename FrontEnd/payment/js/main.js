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

const continuePayment = document.querySelector('.payment-btn')
continuePayment.onclick = () => {
    const amountMoney = document.getElementById('payment-money')
    const orderDescription = document.getElementById('payment-content')
    const bankCode = document.getElementById('bankcode')
    const language = document.getElementById('payment-language')

    fetch(`http://localhost:1234/api/v1/payment/create_payment_url?amount=${amountMoney.value}&orderDescription=${orderDescription.value}&bankCode=${bankCode.value}&language=${language.value}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'booking': "adfadfadsf",
            'customer': login.customerId
        },
    })
        .then(response => response.json())
        .then(data => {
            window.location.href = data.data
        })
}