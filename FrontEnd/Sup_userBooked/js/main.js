// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = JSON.parse(localStorage.getItem('login')) 

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

// ----------------searchResidence-----------
const searchResidence = () => {
  const searchInput = document.getElementById('search').value.toUpperCase()
  const table = document.querySelector('.container-nav')
  const listResidence = document.querySelectorAll('.list-residence')
  const nameResidence = table.querySelectorAll('.list-info h4')

  for(var i=0; i<nameResidence.length; i++) {
    let match = listResidence[i].querySelectorAll('.list-info h4')[0]

    if(match) {
      let textValue = match.textContent || match.innerHTML
      if(textValue.toUpperCase().indexOf(searchInput) > -1) {
        listResidence[i].style.display = ""
      }
      else {
        listResidence[i].style.display = "none"
      }
    }
  }
}

function fetchBookingsOfHotel() {
    fetch('http://localhost:1234/api/v1/owners/' + login.customerId + '/bookings_of_hotels')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                console.log(data)
                const bookingResponse = data.data
                const bookingContainer = document.querySelector('.container-nav')

                bookingResponse.forEach(booking => {
                    bookingContainer.innerHTML += renderBooking(booking)
                })
            }
        })
}
fetchBookingsOfHotel()

function renderBooking(data) {
    const dateFrom = new Date(data.dateFrom)
    const dateTo = new Date(data.dateTo)

    return `<tr data-value="${data.bookingId}" class="list-residence">
                    <td class="list-content list-status">
                        <span>${data.hotelName}</span> <br>
                        <span>${data.roomNumber}</span> <br>
                        <span>${data.typeName}</span>
                    </td>
                    <td class="list-content list-status">
                        <span>${data.username}</span> <br>
                        <span>${data.email}</span> <br>
                        <span>${data.phone}</span> <br>
                        <span>${data.address}</span>
                    </td>
                    <td class="list-content list-info"> 
                        <span>${dateFrom.getDate() + '/' + dateFrom.getMonth() + 1 + '/' + dateFrom.getFullYear()}</span>
                    </td>
                    <td class="list-content list-id">
                        <span>${dateTo.getDate() + '/' + dateTo.getMonth() + 1 + '/' + dateTo.getFullYear()}</span>
                    </td>
                    <td class="list-content list-price">
                        <span>${data.totalPrice} VNĐ</span>
                    </td>
                    <td class="list-content list-wait">
                        <span>${data.status ? 'Đã xác nhận' : 'Đang chờ'}</span>
                    </td>
                    <td class="list-content list-cancel">
                        <span>Xác nhận</span>
                        <i class="fa-solid fa-trash-can"></i>
                    </td>
                </tr>`
}