// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = JSON.parse(localStorage.getItem('login'))

function fetchRooms() {
    const targetHotelId = localStorage.getItem('targetHotelId')
    fetch('http://localhost:1234/api/v1/rooms/by_hotel_id/' + targetHotelId)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const roomsResponse = data.data
                const roomsContainer = document.querySelector('table.container-nav')
                roomsResponse.forEach(room => {
                    roomsContainer.innerHTML += renderRoom(room)
                })
              // ----------------------
                const countModify = document.querySelectorAll(".modify")
                countModify.forEach(e => {
                  e.onclick = (event => {
                    const idModify = event.target.dataset.value;
                    // window.location.href = "http://localhost:5500/FrontEnd/Sup_postHotel/index.html"
                    console.log(idModify);
  
  
                    
                  })
                })  
                console.log(countModify);
                const deleteRoomButton = document.querySelectorAll('.list-content.list-action div i.delete')
                deleteRoomButton.forEach(button => {
                    button.onclick = (e) => {
                        fetch('http://localhost:1234/api/v1/rooms/change_status/' + e.target.dataset.value, {
                            method: 'post'
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.code === 200) {
                                    window.location.reload()
                                    return false
                                }
                            })
                    }
                })
            }
        })
}
fetchRooms()

function renderRoom(data) {
    return `<tr data-value="${data.roomId}" class="list-residence">
                    <td class="list-content list-status">
                        <span>BẢN TẠM</span>
                    </td>
                    <td class="list-content list-info"> 
                        <h4>${data.roomNumber}</h4>
                    </td>
                    <td class="list-content list-id">
                        <p>${data.roomType.typeName}</p>
                    </td>
                    <td class="list-content list-roomId">
                        <p>${data.roomId}</p>
                    </td>
                    <td style="display: flex; justify-content: center" class="list-content list-action">
                        <div>
                            <i data-value="${data.roomId}" class="fa-solid fa-pencil modify"></i>
                        </div>
                        <div>
                            <i data-value="${data.roomId}" class="fa-solid fa-trash-can delete"></i>
                        </div>
                    </td>
                </tr>`
}

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

// ----------- post new room --------------
const newRoomButton = document.querySelector('.btn-toolbar')

newRoomButton.onclick = () => {
    const targetHotelId = localStorage.getItem('targetHotelId')
    if (targetHotelId) {
        window.location.href = 'http://localhost:5500/FrontEnd/Sup_postHotel/index.html'
    }
}