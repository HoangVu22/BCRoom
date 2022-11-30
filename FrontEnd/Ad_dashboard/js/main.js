
// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = window.localStorage.getItem("login");

headerNavForm.onclick = function () {
  if (headerForm.style.display === "none") headerForm.style.display = "block";
  else {
    headerForm.style.display = "none";
  }

  handleIconLight();
};

function handleIconLight() {
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

const managerUser = document.getElementById('manageruser').getContext('2d');
const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12],
  datasets: [{
    label: 'Account',
    data: [65, 59, 80, 81, 56, 55, 40,1,2,3,4,5],
    fill: false,
    borderColor: '#f44336',
    backgroundColor: '#333',
    tension: 0.1
  }]
};
 new Chart(managerUser, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
 });
// count booking
const bookingElement = document.getElementById('countBooking').getContext('2d');
 const booking = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: [{
      label: 'Booking',
      data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(54, 244, 127, 0.2)',
        'rgba(77, 148, 142, 0.2)',
        'rgba(244, 241, 154, 0.4)',
        'rgba(244, 54, 241, 0.2)',
        'rgba(17, 18, 17, 0.2)',
        
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgb(54, 244, 127)',
        'rgb(77, 148, 142)',
        'yellow',
        'rgb(244, 54, 141)',
        'rgb(17, 18, 17)',
        
        
        
      ],
      borderWidth: 1
    }]
};
new Chart(bookingElement, {
    type: 'bar',
    data: booking,
    options: {
        responsive: true,
        scales: {
            y: {
                stacked: true
            }
        }
    }
});

// --------------btn----------
var accountBtn = document.querySelector('.accountBtn')
var bookingBtn = document.querySelector('.bookingBtn')
var accountDashboard = document.querySelector('.accountDashboard')
var bookingDashboard = document.querySelector('.bookingDashboard')

accountBtn.onclick = function () {
    accountDashboard.style.display = 'flex'
    bookingDashboard.style.display = 'none'
}

bookingBtn.onclick = function () {
    bookingDashboard.style.display = 'flex'
    accountDashboard.style.display = 'none'
}


 
