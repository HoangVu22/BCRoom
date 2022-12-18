// ---------header------------
var header = document.querySelector("header");
// var header_logo = document.querySelector(".header-logo h1");
var headerNavIcon = document.querySelector(".header-nav-icon");

const specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

window.onscroll = function () {
    myFunction();
};

var navs = document.querySelectorAll(".list_city > li > a");
function myFunction () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        // header_logo.style.color = "#f44336";
        header.style.backgroundColor = "#fff";
        navs.forEach((item, index) => {
            if (index < navs.length) {
                item.style.color = "black";
                headerNavIcon.style.color = "black";
                if (headerNavIcon.style.borderColor !== "rgb(244, 67, 54)") {
                    headerNavIcon.style.borderColor = "black";
                }
                hoverEvent(item.style.color);
            }
        });
    } else {
        // header_logo.style.color = "#fff";
        header.style.backgroundColor = "transparent";
        navs.forEach((item, index) => {
            if (index < navs.length) {
                item.style.color = "white";
                headerNavIcon.style.color = "white";
                if (headerNavIcon.style.borderColor !== "rgb(244, 67, 54)") {
                    headerNavIcon.style.borderColor = "white";
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

var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var login = window.localStorage.getItem("login");

headerNavForm.onclick = function () {
    if (headerForm.style.display === "none") headerForm.style.display = "block";
    else {
        headerForm.style.display = "none";
    }

    handleIconLight();
};

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

// -------------Search-------------------
const inputSearch = document.querySelector('.input-search');
const searchBtn = document.querySelector('.search-btn');
const autoBox = document.querySelector('.autobox');
inputSearch.onkeyup = (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
        if (e.target.value)
            handleSearch(e.target);
        else
            alert("Vui lòng nhập thông tin cần tìm kiếm!");
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
    if (inputSearch.value)
        handleSearch(inputSearch);
    else
        alert("Vui lòng nhập thông tin cần tìm kiếm!");
};

function handleSearch (element) {
    const value = element.value;
    if (specialCharacterRegex.test(element.value)) {
        alert('Địa điểm không hợp lệ')
        element.value = ""
        return false
    }
    localStorage.setItem("searchValue", JSON.stringify(value));
    fetch(`http://localhost:1234/api/v1/core/search_hotel_by_address_or_name/?q=${value}`)
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
        listData = "<li>" + inputSearch.value + "</li>";
    } else {
        listData = list.join("");
    }
    autoBox.innerHTML = listData;
}
let recomentList = [
    "Sơn Trà",
    "Ngũ Hành Sơn",
    "Hải Châu",
    "Thanh Khê",
    "Liên Chiểu",
    "Cẩm Lệ",
    "Hòa Vang",
    "Hoàng Sa",
];

// -------------Number of peolpe-------------
const inputNumber = document.querySelector(".number-people");
const numberBox = document.querySelector(".number-box");
const numberClose = document.querySelector(".number-close");

inputNumber.addEventListener("click", function () {
    numberBox.classList.add("active");
});
numberClose.addEventListener("click", function () {
    numberBox.classList.remove("active");
});

const adultPlus = document.querySelector(".adultPlus");
const adultMinus = document.querySelector(".adultMinus");
let adultValue = document.querySelector(".adult span");
let i = 0;
adultPlus.addEventListener("click", function () {
    i = i + 1;
    adultValue.innerHTML = i;
    totalNumber();
});
adultMinus.addEventListener("click", function () {
    if (i <= 0) {
        i = 0;
    } else {
        i = i - 1;
        adultValue.innerHTML = i;
        totalNumber();
    }
});

const childPlus = document.querySelector(".childPlus");
const childMinus = document.querySelector(".childMinus");
let childValue = document.querySelector(".child span");
let j = 0;
childPlus.addEventListener("click", function () {
    j = j + 1;
    childValue.innerHTML = j;
    totalNumber();
});
childMinus.addEventListener("click", function () {
    if (j <= 0) {
        j = 0;
    } else {
        j = j - 1;
        childValue.innerHTML = j;
        totalNumber();
    }
});

const roomPlus = document.querySelector(".roomPlus");
const roomMinus = document.querySelector(".roomMinus");
let roomValue = document.querySelector(".room span");
let k = 0;
roomPlus.addEventListener("click", function () {
    k = k + 1;
    roomValue.innerHTML = k;
    totalNumber();
});
roomMinus.addEventListener("click", function () {
    if (k <= 0) {
        k = 0;
    } else {
        k = k - 1;
        roomValue.innerHTML = k;
        totalNumber();
    }
});

function totalNumber () {
    total = i + j + k;
    inputNumber.value = i + j + " Người, " + k + " phòng";
}

// ----------rate-----------
var rateTitleI = document.querySelectorAll(".rate-title i");
var testStar = document.querySelectorAll(".test-star");
var rateStar = document.querySelectorAll(".rate-star");
let bien = true;
function star (index) {
    if (bien === true) {
        testStar[index].style.display = "flex";
        bien = false;
    } else if (bien === false) {
        testStar[index].style.display = "none";
        bien = true;
    }
}
[...rateTitleI].forEach((item, index) => {
    item.onclick = () => {
        star(index);
    };
});

// ------------------function booked-----------
function checkLogin () {
    var roomEleA = document.querySelector(".room-cart-booked a");
    if (!localStorage.getItem("login")) {
        roomEleA.onclick = () => {
            roomEleA.href = "http://127.0.0.1:5500/FrontEnd/signin/index.html";
        };
    }
}
checkLogin();

// --------------------
function renderHotel () {
    const listhotels = document.querySelector(".list_hotels");
    let hotels = JSON.parse(localStorage.getItem("hotels"));
    console.log(hotels);
    const place = JSON.parse(localStorage.getItem("place"));
    const result = document.querySelector(".result.wraper2");
    const hotelsRender = hotels.map((value, index) => {
        return `<div class="list-room" data-hotel=${value.hotelId} >
                    <div class="room-cart">
                        <div class="room-cart-img">
                            <img src="${(value.Images &&
                value.Images.length > 0 &&
                value.Images[0].url) ||
            "../image/slider-1.jpg"
            }" alt="">
                        </div>
                    </div>
                    <div class="room-cart-content">
                        <h3>${value.hotelName}</h3>
                        <div class="room-cart-contentareacity">
                            <div class="rooms-cart-star">
                            ${(value.starNumber === 1 &&
                `<p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
            (value.starNumber === 2 &&
                `<p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
            (value.starNumber === 3 &&
                ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
            (value.starNumber === 4 &&
                ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
            (value.starNumber === 5 &&
                ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`)
            }
                            </div>
                            <div class="room-cart-address">
                                <i class="fa-solid fa-location-dot room-cart-icon"></i>     
                                <span>${value.address}</span>
                            </div>
                        </div>
                    </div>
                    <div class="room-cart-money">
                        <div>Số phòng còn trống: ${value.totalNoBookingRoom} / ${value.totalRoom}</div>
                    </div>
                </div>`;
    });
    listhotels.innerHTML = hotelsRender.join("");
    result.innerHTML = `<h3>Kết quả tìm kiếm của bạn: "${place.replaceAll(
        "_",
        " "
    )}"</h3>`;
    const listRoom = document.querySelectorAll(".list-room");
    [...listRoom].forEach((value) => {
        value.onclick = (e) => {
            console.log(e.target.dataset.hotel);
            const login = JSON.parse(localStorage.getItem("login"));
            fetch(
                `http://localhost:1234/api/v1/rooms/by_hotel_id/${e.target.dataset.hotel}`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ customerId: login.customerId }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.code === 200) {
                        localStorage.setItem(
                            "targetHotelId",
                            JSON.stringify(e.target.dataset.hotel)
                        );
                        localStorage.setItem("rooms", JSON.stringify(data.data));
                        localStorage.setItem(
                            "hotelRoom",
                            JSON.stringify(e.target.dataset.hotel)
                        );
                        console.log(2);
                        window.location.href =
                            "http://localhost:5500/FrontEnd/roomDetails/index.html";
                    }
                });
        };
    });
}

renderHotel();

// ---------
var headerLogoIMG = document.querySelector('.header-logo img');
headerLogoIMG.onclick = function () {
    location.href = 'http://localhost:5500/FrontEnd/home/index.html#';
};

function renderHotelWithStarFilter (data) {
    return `<div class="list-room" data-hotel=${data.hotelId} >
                    <div class="room-cart">
                        <div class="room-cart-img">
                            <img src="${(data.Images &&
            data.Images.length > 0 &&
            data.Images[0].url) ||
        "../image/slider-1.jpg"
        }" alt="">
                        </div>
                    </div>
                    <div class="room-cart-content">
                        <h3>${data.hotelName}</h3>
                        <div class="room-cart-contentareacity">
                            <div class="rooms-cart-star">
                            ${(data.starNumber === 1 &&
            `<p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
        (data.starNumber === 2 &&
            `<p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
        (data.starNumber === 3 &&
            ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
        (data.starNumber === 4 &&
            ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`) ||
        (data.starNumber === 5 &&
            ` <p>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                  <i class="room-cart-star fa-solid fa-star"></i>
                                </p>`)
        }
                            </div>
                            <div class="room-cart-address">
                                <i class="fa-solid fa-location-dot room-cart-icon"></i>     
                                <span>${data.address}</span>
                            </div>
                        </div>
                    </div>
                    <div class="room-cart-money">
                        <div>Số phòng còn trống: ${data.totalNoBookingRoom} / ${data.totalRoom}</div>
                    </div>
                </div>`;
}

const starRankings = document.querySelectorAll('.nav-rate-star input');
let targetStarRanking = 0;
starRankings.forEach(radio => {
    radio.onclick = (e) => {
        if (targetStarRanking === e.target.value) {
            return false;
        }

        if (e.target.checked) {
            targetStarRanking = e.target.value;
            const place = JSON.parse(localStorage.getItem('place'));
            fetch('http://localhost:1234/api/v1/hotels?star=' + e.target.value + '&address=' + place.replaceAll(' ', '_'))
                .then(response => response.json())
                .then(data => {
                    if (data.code === 200) {
                        const listHotels = document.querySelector('.list_hotels');
                        const hotelElements = [];
                        data.data.map(hotel => hotelElements.push(renderHotelWithStarFilter(hotel)));
                        listHotels.innerHTML = hotelElements.join('');
                        const listRoom = document.querySelectorAll(".list-room");
                        [...listRoom].forEach((value) => {
                            value.onclick = (e) => {
                                console.log(e.target.dataset.hotel);
                                const login = JSON.parse(localStorage.getItem("login"));
                                fetch(
                                    `http://localhost:1234/api/v1/rooms/by_hotel_id/${e.target.dataset.hotel}`,
                                    {
                                        method: "post",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ customerId: login.customerId }),
                                    }
                                )
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data.code === 200) {
                                            localStorage.setItem(
                                                "targetHotelId",
                                                JSON.stringify(e.target.dataset.hotel)
                                            );
                                            localStorage.setItem("rooms", JSON.stringify(data.data));
                                            localStorage.setItem(
                                                "hotelRoom",
                                                JSON.stringify(e.target.dataset.hotel)
                                            );
                                            console.log(2);
                                            window.location.href =
                                                "http://localhost:5500/FrontEnd/roomDetails/index.html";
                                        }
                                    });
                            };
                        });
                    }
                });
        }
    };
});