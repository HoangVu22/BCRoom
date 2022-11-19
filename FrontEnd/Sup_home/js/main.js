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

// ------------gg map------------
const key = 'Xx2LVdpWdk1UyVYRKzN0';
    const map = new maplibregl.Map({
        container: 'map', // container id
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`, // style URL
        center: [108.2227778, 16.0766667], // starting position [lng, lat]
        zoom: 10, 
    });
      map.addControl(new maplibregl.NavigationControl(), 'top-right');
      const marker = new maplibregl.Marker()
      .setLngLat( [108.2227778, 16.0766667])
      .addTo(map);
    map.on('error', function(err) {})
    // fetch(`https://api.maptiler.com/geolocation/ip.json?key=${key}`)
    // .then((response) => response.json())
    // .then((data) => {
    //   const userLngLat = [data.longitude, data.latitude];
    //   map.jumpTo({
    //     center: userLngLat,
    //     zoom: 10
    //   });
    //   const marker = new maplibregl.Marker()
    //     .setLngLat(userLngLat)
    //     .addTo(map);
    // });
