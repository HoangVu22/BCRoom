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

function fetchHotels() {
    fetch('http://localhost:1234/api/v1/owners/' + login.customerId + '/hotels')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const hotelsResponse = data.data
                const hotelsContainer = document.querySelector('.container-nav')
                const numberOfRoomsTitle = document.querySelector('.container-header h1')
                numberOfRoomsTitle.innerText = `${hotelsResponse.length} khách sạn`
                hotelsResponse.forEach(hotel => {
                    hotelsContainer.innerHTML += renderHotel(hotel)
                })

                const residences = document.querySelectorAll('tr.list-residence')
                residences.forEach(residence => {
                    const hotelInfoTarget = residence.querySelector('.list-content.list-info div h4')
                    hotelInfoTarget.onclick = (e) => {
                        localStorage.setItem('targetHotelId', e.target.dataset.value)
                        window.location.href = 'http://localhost:5500/FrontEnd/Sup_myRoom/index.html'
                    }
                })
            }
        })
}
fetchHotels()

function renderHotel(data) {
    return `<tr data-value="${data.hotelId}" class="list-residence">
                    <td class="list-content list-status">
                        <span>BẢN TẠM</span>
                    </td>
                    <td class="list-content list-info"> 
                        <div href="../Sup_myRoom/index.html">
                            <h4 data-value="${data.hotelId}">${data.hotelName}</h4>
                            <span>${data.address}</span>
                        </div>
                    </td>
                    <td class="list-content list-id">
                        <p>${data.hotelId}</p>
                    </td>
                    <td class="list-content list-view">
                        <i class="fa-regular fa-eye"></i>
                        <span>${data.roomCount}</span>
                    </td>
                    <td style="display: flex" class="list-content list-action">
                        <div>
                            <i data-value="${data.hotelId}" class="fa-solid fa-pencil modify"></i>
                        </div>
                        <div>
                            <i data-value="${data.hotelId}" class="fa-solid fa-trash-can remove"></i>
                        </div>
                    </td>
                </tr>`
}