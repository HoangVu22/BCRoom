// ---------header------------
var header = document.querySelector('header');
var header_logo = document.querySelector('.header-logo h1');
var headerNavIcon = document.querySelector('.header-nav-icon');
window.onscroll = function () {
    myFunction();
};

var navs = document.querySelectorAll('.list_city > li > a');
function myFunction () {
    var header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header_logo.style.color = '#f44336';
        header.style.backgroundColor = '#fff';
        navs.forEach((item, index) => {
            if (index < navs.length) {
                item.style.color = 'black';
                headerNavIcon.style.color = 'black';
                if (headerNavIcon.style.borderColor !== 'rgb(244, 67, 54)') {
                    headerNavIcon.style.borderColor = 'black';
                }
                hoverEvent(item.style.color);
            }
        });
    }
    else {
        header_logo.style.color = '#fff';
        header.style.backgroundColor = 'transparent';
        navs.forEach((item, index) => {
            if (index < navs.length) {
                item.style.color = 'white';
                headerNavIcon.style.color = 'white';
                if (headerNavIcon.style.borderColor !== 'rgb(244, 67, 54)') {
                    headerNavIcon.style.borderColor = 'white';
                }
                hoverEvent(item.style.color);
            }
        });
    }
}
function hoverEvent (color) {
    navs.forEach((item, index) => {
        if (index < navs.length - 1) {
            item.onmouseover = function () {
                this.style.color = "#f44336";
            };
            item.onmouseleave = function () {
                this.style.color = color;
            };
        }
    });
}

// -----------------------------
var headerNavForm = document.querySelector('.header-nav-form');
var headerForm = document.querySelector('.header-form');
var headerFormLogin = headerNavForm.querySelector('.header-form-login');
var headerFormLogout = document.querySelector('.header-form-logout');
var login = window.localStorage.getItem("login");

headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") {
        headerForm.style.display = "block";
    }
    else {
        headerForm.style.display = "none";
    }

    handleIconLight();
};

function handleIconLight () {
    var iconList = headerNavIcon.querySelectorAll('i');
    iconList.forEach((item) => {
        if (headerForm.style.display !== "none") {
            item.style.color = "#f44336";
            headerNavIcon.style.borderColor = "#f44336";
        }
        else {
            item.style.color = "unset";
            headerNavIcon.style.borderColor = "unset";
        }
    });
}

// -------------Search-------------------
const inputSearch = document.querySelector('.input-search');
const searchBtn = document.querySelector('.search-btn')
const autoBox = document.querySelector('.autobox');
inputSearch.onkeyup = (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
        if(e.target.value)
            handleSearch(e.target)
        else 
            alert("Vui lòng nhập thông tin cần tìm kiếm!")
    }
    autoBox.style.paddingTop = "4px";
    let checkData = e.target.value;
    let dataArray = [];
    if (checkData) {
        dataArray = recomentList.filter((data) => {
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
        });
        dataArray = dataArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        autoBox.classList.add('active');
        showAdress(dataArray);
        let liItem = autoBox.querySelectorAll('li');
        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener('click', function () {
                inputSearch.value = liItem[i].innerHTML;
                autoBox.classList.remove('active');
            });
        }
    }
    else {
        autoBox.classList.remove('active');
        autoBox.style.paddingTop = "0px";
    }
};
searchBtn.onclick = () => {
    if(inputSearch.value)
        handleSearch(inputSearch)
    else
        alert("Vui lòng nhập thông tin cần tìm kiếm!")
}

function handleSearch(element) {
    const place = element.value;
        localStorage.setItem("place", JSON.stringify(place));
        fetch(`http://localhost:1234/api/v1/core/search_hotel_by_address_or_name/?q=${place}`)
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    localStorage.setItem("hotels", JSON.stringify([...data.data]));
                    window.location.href = "http://localhost:5500/FrontEnd/search/index.html";
                }
            });
}






function showAdress (list) {
    let listData;
    if (!list.length) {
        listData = '<li>' + inputSearch.value + '</li>';
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
const inputNumber = document.querySelector('.number-people');
const numberBox = document.querySelector('.number-box');
const numberClose = document.querySelector('.number-close');

inputNumber.addEventListener('click', function () {
    numberBox.classList.add('active');
});
numberClose.addEventListener('click', function () {
    numberBox.classList.remove('active');
});

const adultPlus = document.querySelector('.adultPlus');
const adultMinus = document.querySelector('.adultMinus');
let adultValue = document.querySelector('.adult span');
let i = 0;
adultPlus.addEventListener('click', function () {
    i = i + 1;
    adultValue.innerHTML = i;
    totalNumber();
});
adultMinus.addEventListener('click', function () {
    if (i <= 0) {
        i = 0;
    }
    else {
        i = i - 1;
        adultValue.innerHTML = i;
        totalNumber();
    }
});

const childPlus = document.querySelector('.childPlus');
const childMinus = document.querySelector('.childMinus');
let childValue = document.querySelector('.child span');
let j = 0;
childPlus.addEventListener('click', function () {
    j = j + 1;
    childValue.innerHTML = j;
    totalNumber();
});
childMinus.addEventListener('click', function () {
    if (j <= 0) {
        j = 0;
    }
    else {
        j = j - 1;
        childValue.innerHTML = j;
        totalNumber();
    }
});

const roomPlus = document.querySelector('.roomPlus');
const roomMinus = document.querySelector('.roomMinus');
let roomValue = document.querySelector('.room span');
let k = 0;
roomPlus.addEventListener('click', function () {
    k = k + 1;
    roomValue.innerHTML = k;
    totalNumber();
});
roomMinus.addEventListener('click', function () {
    if (k <= 0) {
        k = 0;
    }
    else {
        k = k - 1;
        roomValue.innerHTML = k;
        totalNumber();
    }
});

function totalNumber () {
    total = i + j + k;
    inputNumber.value = i + j + " Người, " + k + " phòng";
}


// ---------------tabs-district------------
// const tabItem = document.querySelectorAll('.tab-item');
// const tabContainer = document.querySelectorAll('.tabs-container');
// const itemActive = document.querySelector('.tab-item.active');
// const line = document.querySelector('.tabs-district .line');

// requestIdleCallback(function () {
//     line.style.left = itemActive.offsetLeft + "px";
//     line.style.width = itemActive.offsetWidth + "px";
// });

// tabItem.forEach((tab, index) => {
//     const room = tabContainer[index]; // mỗi lần click vào tab thì lấy ra thằng room tương ứng

//     tab.onclick = function () {
//         document.querySelector('.tab-item.active').classList.remove("active");
//         document.querySelector('.tabs-container.active').classList.remove("active");

//         line.style.left = this.offsetLeft + "px";
//         line.style.width = this.offsetWidth + "px";

//         this.classList.add("active");
//         room.classList.add("active");
//     };
// });
// --------------------

const items = document.querySelectorAll(".items > div");
[...items].forEach(value => {
    value.onclick = (e) => {
        e.preventDefault();
        const place = e.target.dataset.place;
        localStorage.setItem("place", JSON.stringify(place));
        fetch(`http://localhost:1234/api/v1/hotels/${place}`)
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    localStorage.setItem("hotels", JSON.stringify([...data.data]));
                    window.location.href = "http://localhost:5500/FrontEnd/search/index.html";
                }
            });
    };
});