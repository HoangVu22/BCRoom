// ---------header------------
var header = document.querySelector('header')
var header_logo = document.querySelector('.header-logo h1')
var headerNavIcon = document.querySelector('.header-nav-icon')
window.onscroll = function () { 
    myFunction() 
    console.log(window.pageYOffset);
};

var navs = document.querySelectorAll('.list_city > li > a')
function myFunction() {
    console.log(navs);
    var header = document.querySelector('header')
    console.log(headerNavIcon.style.borderColor);
    if (window.pageYOffset > 0) {
        header_logo.style.color = '#f44336'
        header.style.backgroundColor='#fff'
        navs.forEach((item, index) => {
            if(index < navs.length){
                item.style.color = 'black'
                headerNavIcon.style.color = 'black'
                if(headerNavIcon.style.borderColor !== 'rgb(244, 67, 54)') {
                    headerNavIcon.style.borderColor = 'black'
                }
                hoverEvent(item.style.color)
            }
        })
    }
    else {
        header_logo.style.color = '#fff'
        header.style.backgroundColor='transparent'
        navs.forEach((item, index) => {
            if(index < navs.length){
                item.style.color = 'white'
                headerNavIcon.style.color = 'white'
                if(headerNavIcon.style.borderColor !== 'rgb(244, 67, 54)') {
                    headerNavIcon.style.borderColor = 'white'
                }
                hoverEvent(item.style.color)
            }
        })
    }
}
function hoverEvent(color) {
    navs.forEach((item, index) => {
        if(index<navs.length-1)
        {
            item.onmouseover = function() 
            {
                this.style.color = "#f44336";
            }
            item.onmouseleave = function() 
            {
                this.style.color = color;
            }
        }
    })
}

var headerNavForm = document.querySelector('.header-nav-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
headerNavForm.onclick = function() {
    if(headerFormLogout) {
        if (headerFormLogout.style.display === "block")
            headerFormLogout.style.display = "none"
        else {
            headerFormLogout.style.display = "block"
        }
    }
    else if(headerFormLogin) {
        if (headerFormLogin.style.display === "block")
            headerFormLogin.style.display = "none"
        else {
            headerFormLogin.style.display = "block"
        }
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


// -------------Search-------------------
const inputSearch = document.querySelector('.input-search');
const autoBox = document.querySelector('.autobox');
inputSearch.onkeyup = (e) => {
    // console.log(e.target.value);
    autoBox.style.paddingTop = "4px"
    let checkData = e.target.value;
    let dataArray = [];
    if(checkData) {
        dataArray = recomentList.filter((data) => {
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
        })
        dataArray = dataArray.map((data) => {
            return data = '<li>'+data+'</li>'
        })
        autoBox.classList.add('active');
        showAdress(dataArray);
        let liItem = autoBox.querySelectorAll('li');
        for(let i=0; i<liItem.length; i++) {
            liItem[i].addEventListener('click', function() {
                inputSearch.value = liItem[i].innerHTML;
                autoBox.classList.remove('active');
            })
        }
    }
    else {
        autoBox.classList.remove('active');
        autoBox.style.paddingTop = "0px"
    }
}
function showAdress(list) {
    let listData;
    if(!list.length) {
        listData = '<li>'+inputSearch.value+'</li>'
    }
    else {
        listData = list.join('');
    }
    autoBox.innerHTML = listData;
}
let recomentList = [
   'Sơn Trà',
   'Ngũ Hành Sơn',
   'Hải Châu',
   'Thanh Khê',
   'Liên Chiểu',
   'Cẩm Lệ',
   'Hòa Vang',
   'Hoàng Sa',
];

// -------------Number of peolpe-------------
const inputNumber = document.querySelector('.number-people')
const numberBox = document.querySelector('.number-box')
const numberClose = document.querySelector('.number-close')

inputNumber.addEventListener('click', function() {
    numberBox.classList.add('active')
})
numberClose.addEventListener('click', function() {
    numberBox.classList.remove('active')
})

const adultPlus = document.querySelector('.adultPlus')
const adultMinus = document.querySelector('.adultMinus')
let adultValue = document.querySelector('.adult span')
let i = 0;
adultPlus.addEventListener('click', function() {
    i = i+1;
    adultValue.innerHTML = i;
    totalNumber()
})
adultMinus.addEventListener('click', function() {
    if (i <= 0) {
        i = 0;
    }
    else {
        i = i-1;
        adultValue.innerHTML = i;
        totalNumber()
    }
})

const childPlus = document.querySelector('.childPlus')
const childMinus = document.querySelector('.childMinus')
let childValue = document.querySelector('.child span')
let j = 0;
childPlus.addEventListener('click', function() {
    j = j+1;
    childValue.innerHTML = j;
    totalNumber()
})
childMinus.addEventListener('click', function() {
    if (j <= 0) {
        j = 0;
    }
    else {
        j = j-1;
        childValue.innerHTML = j;
        totalNumber()
    }
})

const roomPlus = document.querySelector('.roomPlus')
const roomMinus = document.querySelector('.roomMinus')
let roomValue = document.querySelector('.room span')
let k = 0;
roomPlus.addEventListener('click', function() {
    k = k+1;
    roomValue.innerHTML = k;
    totalNumber()
})
roomMinus.addEventListener('click', function() {
    if (k <= 0) {
        k = 0;
    }
    else {
        k = k-1;
        roomValue.innerHTML = k;
        totalNumber()
    }
})

function totalNumber() {
    total = i + j + k;
    inputNumber.value = i + j + " Người, " + k + " phòng";
}  

// ----------rate-----------
var rateTitleI = document.querySelectorAll('.rate-title i')
var testStar = document.querySelectorAll('.test-star')
var rateStar = document.querySelectorAll('.rate-star')
let bien=true
function star(index){
    if(bien===true){
        testStar[index].style.display = "flex"
        bien=false
    }
    else if(bien===false)
    {
        testStar[index].style.display = "none"
        bien=true
    }
}
[...rateTitleI].forEach((item,index)=>{
    item.onclick = ()=>{star(index)}
})

// ---------------------
var costBtn = document.querySelector('.cost-btn');
var estimateCostRoom = document.querySelector('.estimate-cost-room');
var estimateCostLable = document.querySelectorAll('.estimate-cost-lable');

costBtn.onclick = function() {
    for (var i=0; i<5; i++) {
        estimateCostRoom.innerHTML += `<div class="list-room">
            <div class="room-cart">
                <div class="room-cart-img">
                    <img src="../image/slider-1.jpg" alt="">
                </div>
            </div>
            <div class="room-cart-content">
                <a href="../roomDetails/index.html">KHÁCH SẠN BOUTIQUE L'AMORE (L'AMORE BOUTIQUE HOTEL)</a>
                <div class="room-cart-contentareacity">
                    <div class="rooms-cart-star">
                        <i class="room-cart-star fa-solid fa-star"></i>
                        <i class="room-cart-star fa-solid fa-star"></i>
                        <i class="room-cart-star fa-solid fa-star"></i>
                        <i class="room-cart-star fa-solid fa-star"></i>
                        <i class="room-cart-star fa-solid fa-star"></i>
                    </div>
                    <div class="room-cart-address">
                        <i class="fa-solid fa-location-dot room-cart-icon"></i>     
                        <span>Quận Sơn Trà, Đà Nẵng</span>
                    </div>
                </div>
            </div>
            <div class="room-cart-money">
                <div class="room-cart-wrap">
                    <span class="room-cart-cash">đ ${Math.ceil(parseInt(estimateCostLable[1].value) / parseInt(estimateCostLable[0].value)) || "200,000"}</span>
                    <span class="room-cart-space">/</span>
                    <span class="room-cart-night">đêm</span>
                </div>
                <button class="room-cart-booked"><a href="../roomDetails/index.html">Đặt phòng</a></button>
            </div>
        </div>`
    }
}

