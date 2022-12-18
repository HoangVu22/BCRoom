// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = JSON.parse(localStorage.getItem("login"))
const loader = document.getElementById('loading')

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

function renderTableColumnName() {
    return `<tr>
                        <th>TRẠNG THÁI</th>
                        <th>CHỖ NGHỈ</th>
                        <th>CHỦ</th>
                        <th>SỐ LƯỢNG PHÒNG</th>
                        <th>LƯỢT XEM</th>
                        <th>HÀNH ĐỘNG</th>
                    </tr>`
}

function renderHotel (data) {
    return `<tr data-hotel="${data.hotelId}" class="list-residence">
                        <td class="list-content list-status">
                            <span style="background-color: ${data.status ? 'green' : 'red'}">${data.status ? 'Khả dụng' : 'Vô hiệu'}</span>
                        </td>
                        <td class="list-content list-info"> 
                            <div data-hotel="${data.hotelId}">
                                <h4 data-hotel="${data.hotelId}">${data.hotelName}</h4>
                                <span data-hotel="${data.hotelId}">${data.address}</span>
                            </div>
                        </td>
                        <td class="list-content list-id">
                            <p>${data.hostName}</p>
                        </td>
                        <td class="list-content list-view">
                            <span>${data.roomCount}</span>
                        </td>
                        <td class="list-content">
                            <span>${data.viewNumber}</span> 
                        </td>
                        <td data-status="${data.status ? "1" : ""}" data-hotel="${data.hotelId}" class="list-content list-action">
                            <a href="../Sup_postHotel/index.html">
                                <i class="fa-solid fa-pencil"></i>
                            </a>
                            ${data.status ? '<i class="fa-solid fa-trash-can"></i>' : '<i style="color: green" class="active fa fa-check"></i>'}
                        </td>
                    </tr>`
}

fetch('http://localhost:1234/api/v1/admin/all_hotels', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ customerId: login.customerId })
})
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const hotelContainer = document.querySelector('.container-nav')
            const hotelsResponse = data.data
            let hotelElements = []
            hotelsResponse.forEach(hotel => {
                hotelElements.push(renderHotel(hotel))
            })
            hotelContainer.innerHTML = `${renderTableColumnName()}${hotelElements.join('')}`
            
            const hotelNames = document.querySelectorAll('.list-residence .list-info > div')
            hotelNames.forEach(hotel => {
                hotel.onclick = (e) => {
                    localStorage.setItem('targetHotelId', e.target.dataset.hotel)
                    window.location.href = 'http://localhost:5500/FrontEnd/Sup_myRoom/index.html'
                }
            })
            const actionButtons = document.querySelectorAll('.list-residence .list-action > i')
            actionButtons.forEach(actionButton => {
                actionButton.onclick = (e) => {
                    loader.style.display = 'grid'
                    fetch('http://localhost:1234/api/v1/admin/change_hotel_status/' + e.target.parentElement.dataset.hotel, {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ customerId: login.customerId, status: !Boolean(e.target.parentElement.dataset.status) })
                    })
                        .then(response => response.json())
                        .then(_data => {
                            loader.style.display = 'none'
                            window.location.reload()
                            return false
                        })
                }
            })
        }
    })