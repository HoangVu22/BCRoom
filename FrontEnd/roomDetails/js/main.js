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
var headerForm = document.querySelector('.header-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
var login = window.localStorage.getItem("login")

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

// -------------Search-------------------
const inputSearch = document.querySelector('.input-search');
const autoBox = document.querySelector('.autobox');
inputSearch.onkeyup = (e) => {
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

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        numberBox.classList.remove('active');
    }
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

// --------------------------------------
const inputNumber2 = document.querySelector('.number-people2')
const numberBox2 = document.querySelector('.number-box2')
const numberClose2 = document.querySelector('.number-close2')

inputNumber2.addEventListener('click', function() {
    numberBox2.classList.add('active')
})

numberClose2.addEventListener('click', function() {
    numberBox2.classList.remove('active')
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        numberBox2.classList.remove('active');
    }
})

const adultPlus2 = document.querySelector('.adultPlus2')
const adultMinus2 = document.querySelector('.adultMinus2')
let adultValue2 = document.querySelector('.adult2 span')
let a = 0;
adultPlus2.addEventListener('click', function() {
    a = a+1;
    adultValue2.innerHTML = a;
    totalNumber2()
})
adultMinus2.addEventListener('click', function() {
    if (a <= 0) {
        a = 0;
    }
    else {
        a = a-1;
        adultValue2.innerHTML = a;
        totalNumber2()
    }
})

const childPlus2 = document.querySelector('.childPlus2')
const childMinus2 = document.querySelector('.childMinus2')
let childValue2 = document.querySelector('.child2 span')
let b = 0;
childPlus2.addEventListener('click', function() {
    b = b+1;
    childValue2.innerHTML = b;
    totalNumber2()
})
childMinus2.addEventListener('click', function() {
    if (b <= 0) {
        b = 0;
    }
    else {
        b = b-1;
        childValue2.innerHTML = b;
        totalNumber2()
    }
})

function totalNumber2() {
    total = a + b;
    inputNumber2.value = a + " Người lớn, " + b + " Trẻ em";
}

// ---------------detail room------------
var images = document.querySelectorAll('.detail-room-img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery-inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    if(currentIndex == 0) {
        prev.classList.add('hide');
    }
    else {
        prev.classList.remove('hide');
    }

    if(currentIndex == images.length - 1) {
        next.classList.add('hide');
    }
    else {
        next.classList.remove('hide');
    }

    // display
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
    header.style.display = 'none';
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    })
})

close.onclick = function() {
    gallery.classList.remove('show');
    header.style.display = 'block';
}
// close.addEventListener('click', function() {
//     gallery.classList.remove('show');
//     // console.log(close, gallery);
// })

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function() {
    if(currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})

// -----------function booked------
var comments = document.querySelector('.comments')
var formSubmitA = document.querySelector('.form-submit a');
if(!localStorage.getItem('login')) {
    formSubmitA.onclick = () => {
        formSubmitA.href = "http://127.0.0.1:5501/FrontEnd/signin/index.html"
    }
    comments.style.display = "none"
}
else {
    comments.style.display = "block"
}

// ------------ loại phòng -----------
var nameRoom = document.querySelector('.name-room')
var showDetailRoom = document.querySelector('.show-detail-room')
var roomClose = document.querySelector('.room-close i')

nameRoom.onclick = function() {
    if (showDetailRoom.style.display === "none")
        showDetailRoom.style.display = "block"
    else {
        nameRoom.style.display = "none"
    }
}

// ---------------- slide room---------
var imgFeature = document.querySelector('.img-feature')
var listImage = document.querySelectorAll('.list-image img')
var prevControl = document.querySelector('.prev-control')
var nextControl = document.querySelector('.next-control')

var indexCurrent = 0;
function updateImageByindex(index) {
    // remove active class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    indexCurrent = index
    imgFeature.src = listImage[index].getAttribute('src')
    listImage[index].parentElement.classList.add('active')
}

listImage.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByindex(index)
    })
})

prevControl.addEventListener('click', e => {
    if(indexCurrent == 0) {
        indexCurrent = listImage.length - 1
    }
    else {
        indexCurrent--
    }
    updateImageByindex(indexCurrent)
})

nextControl.addEventListener('click', e => {
    if(indexCurrent == listImage.length - 1) {
        indexCurrent = 0
    }
    else {
        indexCurrent++
    }
    updateImageByindex(indexCurrent)
})

updateImageByindex(0)