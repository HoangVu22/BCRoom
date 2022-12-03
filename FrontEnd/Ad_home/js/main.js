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

function fetchCustomers () {
    fetch('http://localhost:1234/api/v1/admin/all_customers', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId: login.customerId })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const customersContainer = document.querySelector('table.container-nav')
                const responseCustomers = data.data

                responseCustomers.forEach(customer => {
                    customersContainer.innerHTML += renderCustomer(customer.customerId, customer.status, customer.username, customer.email, customer.Role.roleName, customer.Image)
                })

                const deleteAndActiveButtons = customersContainer.querySelectorAll('.list-content.list-action > i')
                deleteAndActiveButtons.forEach(button => {
                    button.onclick = (e) => {
                        const targetCustomerId = e.target.parentElement.dataset.customer

                        if (button.classList.contains('delete')) {
                            fetch('http://localhost:1234/api/v1/admin/change_customer_status', {
                                method: 'put',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ customerId: login.customerId, targetCustomerId, status: false })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.code === 200) {
                                        window.location.reload()
                                        return false
                                    }
                                })
                        } else if (button.classList.contains('active')) {
                            fetch('http://localhost:1234/api/v1/admin/change_customer_status', {
                                method: 'put',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ customerId: login.customerId, targetCustomerId, status: true })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.code === 200) {
                                        window.location.reload()
                                        return false
                                    }
                                })
                        }
                    }
                })
            }
        })
}
fetchCustomers()

function renderCustomer (customerId, status, username, email, roleName, image) {
    return `<tr class="list-residence">
                    <td class="list-content list-status">
                        <span style="color: ${status ? 'green' : 'red'}">${status ? 'Khả dụng' : 'Vô hiệu'}</span>
                    </td>
                    <td class="list-content list-status">
                        <span>${username}</span>
                    </td>
                    <td class="list-content list-info"> 
                        <span>${email}</span>
                    </td>
                    <td class="list-content list-id">
                        <p>${roleName}</p>
                    </td>
                    <td class="list-content list-view">
                        <img src="${image || 'https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-avt-n%E1%BB%AF-t%C3%B3c-ng%E1%BA%AFn-%C4%91%E1%BA%B9p.jpg'}" alt="">
                    </td>
                    <td data-customer="${customerId}" class="list-content list-action">
                        <a href="">
                            <i class="fa-solid fa-pencil"></i>
                        </a>
                        ${status ? '<i class="delete fa-solid fa-trash-can"></i>' : '<i style="color: green"class="active fa fa-check"></i>'}
                    </td>
                </tr>`
}