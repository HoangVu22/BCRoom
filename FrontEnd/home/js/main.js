// ---------header------------
var header = document.querySelector('header')
var header_logo = document.querySelector('.header-logo h1')
    window.onscroll = function () { 
        myFunction() 
        console.log(window.pageYOffset);
    };

    var navs = document.querySelectorAll('.list_city > li > a')
    function myFunction() {
        console.log(navs);
        var header = document.querySelector('header')
        if (window.pageYOffset > 0) {
            header_logo.style.color = '#f44336'
            header.style.backgroundColor='#fff'
            navs.forEach((item, index) => {
                if(index < navs.length){
                    item.style.color = 'black'
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
        // console.log(dataArray);
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


// ---------------tabs-district------------
const tabItem = document.querySelectorAll('.tab-item');
const tabContainer = document.querySelectorAll('.tabs-container');
const itemActive = document.querySelector('.tab-item.active');
const line = document.querySelector('.tabs-district .line');

requestIdleCallback(function () {
  line.style.left = itemActive.offsetLeft + "px";
  line.style.width = itemActive.offsetWidth + "px";
});

tabItem.forEach((tab, index) => {
  const room = tabContainer[index]; // mỗi lần click vào tab thì lấy ra thằng room tương ứng

  tab.onclick = function () {
    document.querySelector('.tab-item.active').classList.remove("active");
    document.querySelector('.tabs-container.active').classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    room.classList.add("active");
  };
});



// -------------
// var tabscontent = document.querySelector('.tabs-content')
// const user = [
//     {
//         id: 1,
//         name: "tung",
//         old: 21
//     },
//     {
//         id: 2,
//         name: "vu",
//         old: 21
//     },
//     {
//         id: 3,
//         name: "khanh",
//         old: 21
//     },
//     {
//         id: 4,
//         name: "thien",
//         old: 21
//     }
// ]

// var list = user.map((item)=> {
//     return (
//         `<div class="abc">
//             <div>${item.name}</div>
//             <div>${item.old}</div>
//         </div>`
//     )
// }).join('')
// console.log(list);
// tabscontent.innerHTML = list