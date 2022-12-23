// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon');
var login = JSON.parse(localStorage.getItem('login'));
const loader = document.getElementById('loading')
const notificationModal = document.getElementById('notification-modal');
const notificationModalMessage = notificationModal.querySelector('.form-confirm .form-confirm-top p span');
const notificationModalYesButton = notificationModal.querySelector('.yes');
const notificationModalNoButton = notificationModal.querySelector('.no');

notificationModalNoButton.onclick = () => {
    notificationModal.style.display = 'none';
};

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

// ----------------searchResidence-----------
const searchResidence = () => {
    const searchInput = document.getElementById('search').value.toUpperCase();
    const table = document.querySelector('.container-nav');
    const listResidence = document.querySelectorAll('.list-residence');
    const nameResidence = table.querySelectorAll('.list-status h4');

    for (var i = 0; i < nameResidence.length; i++) {
        let match = listResidence[i].querySelectorAll('.list-status h4')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if (textValue.toUpperCase().indexOf(searchInput) > -1) {
                listResidence[i].style.display = "";
            }
            else {
                listResidence[i].style.display = "none";
            }
        }
    }
};

function fetchBookingsOfHotel () {
    fetch('http://localhost:1234/api/v1/owners/' + login.customerId + '/bookings_of_hotels')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                console.log(data);
                const bookingResponse = data.data;
                const bookingContainer = document.querySelector('.container-nav');

                bookingResponse.forEach((booking, index) => {
                    bookingContainer.innerHTML += renderBooking(booking, index);
                });

                const changeIsPaidBookingButtons = document.querySelectorAll('.list-content.list-cancel i.check');
                changeIsPaidBookingButtons.forEach(button => {
                    button.onclick = (e) => {
                        fetch('http://localhost:1234/api/v1/owners/change_is_paid_booking/' + e.target.dataset.value, {
                            method: 'put',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ customerId: login.customerId, isPaid: !Boolean(e.target.parentElement.dataset.paid) })
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data)
                                if (data.code === 200) {
                                    window.location.reload()
                                    return false;
                                } else {
                                    alert(data.message)
                                }
                            })
                    }
                })

                const cancleBookingButtons = document.querySelectorAll('.list-content.list-cancel i.delete');
                cancleBookingButtons.forEach(button => {
                    button.onclick = (e) => {
                        notificationModal.style.display = 'block'
                        notificationModalMessage.innerText = 'hủy'
                        notificationModalYesButton.onclick = () => {
                            loader.style.display = 'grid'
                            fetch('http://localhost:1234/api/v1/owners/cancle_booking/' + e.target.dataset.value, {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ customerId: login.customerId })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.code === 200) {
                                        window.location.reload();
                                        return false;
                                    }
                                });
                        }
                    };
                });
            }
        });
}
fetchBookingsOfHotel();

function renderBooking (data, index) {
    const dateFrom = new Date(data.dateFrom);
    const dateTo = new Date(data.dateTo);

    return `<tr ${index % 2 === 0 && 'style="background-color: #F1F5F9"'} data-value="${data.bookingId}" class="list-residence">
                    <td class="list-content list-status">
                        <span>${data.hotelName}</span> <br>
                        <span>${data.roomNumber}</span> <br>
                        <span>${data.typeName}</span>
                    </td>
                    <td class="list-content list-status">
                        <h4>${data.username}</h4>
                        <span>${data.email}</span> <br>
                        <span>${data.phone || ''}</span> <br>
                        <span>${data.address || ''}</span>
                    </td>
                    <td class="list-content list-info"> 
                        <span>${dateFrom.getDate()}/${dateFrom.getMonth() + 1}/${dateFrom.getFullYear()}</span>
                    </td>
                    <td class="list-content list-id">
                        <span>${dateTo.getDate()}/${dateTo.getMonth() + 1}/${dateTo.getFullYear()}</span>
                    </td>
                    <td class="list-content list-price">
                        <span>${data.totalPrice || 0} VNĐ</span>
                    </td>
                    <td class="list-content list-ispaid">
                        <span style="color: ${data.isPaid ? 'green' : 'red'}">${data.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}</span> 
                    </td>
                    <td data-paid="${data.isPaid ? '1' : ''}" class="list-content list-cancel">
                        ${!data.isPaid ? `<i data-value="${data.bookingId}" class="fa-solid fa-trash-can delete"></i><i data-value="${data.bookingId}" class="fa-solid fa-check check"></i>` : ''}
                    </td>
                </tr>`;
}

// ---------
var headerLogoIMG = document.querySelector('.header-logo img')
headerLogoIMG.onclick = function () {
  location.href = 'http://localhost:5500/FrontEnd/home/index.html#'
}

// --------function search-------
