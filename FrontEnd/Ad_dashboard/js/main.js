
// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon');
var login = JSON.parse(localStorage.getItem("login"));
const yearSelection = document.getElementById('year-selection');

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
let userChart
let bookingChart
let year = new Date().getFullYear();
yearSelection.onchange = (e) => {
    if (e.target.value === "0") {
        year = new Date().getFullYear();
    } else {
        year = parseInt(e.target.value);
    }
    
    if (userChart) {
        userChart.destroy()
    }
    if (bookingChart) {
        bookingChart.destroy()
    }

    fetch('http://localhost:1234/api/v1/admin/count_user_register_in_year_with_month', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId: login.customerId, year })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const managerUser = document.getElementById('manageruser').getContext('2d');

                const formatDataInChart = {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    datasets: [{
                        label: 'Tài khoản',
                        data: data.data,
                        fill: false,
                        borderColor: '#f44336',
                        backgroundColor: '#333',
                        tension: 0.1
                    }]
                };

                userChart = new Chart(managerUser, {
                    type: 'line',
                    data: formatDataInChart,
                    options: {
                        scales: {
                            y: {
                                stacked: true
                            }
                        }
                    }
                });
            } else {
                alert(data?.message);
            }
        });

    fetch('http://localhost:1234/api/v1/admin/count_booking_in_year_with_month', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customerId: login.customerId, year })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const bookingElement = document.getElementById('countBooking').getContext('2d');

                const formatDataInChart = {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    datasets: [{
                        label: 'Đơn đặt',
                        data: data.data,
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

                bookingChart = new Chart(bookingElement, {
                    type: 'bar',
                    data: formatDataInChart,
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                stacked: true
                            }
                        }
                    }
                });
            } else {
                alert(data?.message);
            }
        });

};

// ------------- manage user chart --------------
fetch('http://localhost:1234/api/v1/admin/count_user_register_in_year_with_month', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ customerId: login.customerId, year })
})
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const managerUser = document.getElementById('manageruser').getContext('2d');

            const formatDataInChart = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [{
                    label: 'Tài khoản',
                    data: data.data,
                    fill: false,
                    borderColor: '#f44336',
                    backgroundColor: '#333',
                    tension: 0.1
                }]
            };

            userChart = new Chart(managerUser, {
                type: 'line',
                data: formatDataInChart,
                options: {
                    scales: {
                        y: {
                            stacked: true
                        }
                    }
                }
            });
        } else {
            alert(data?.message);
        }
    });

// ---------------- manage booking chart
fetch('http://localhost:1234/api/v1/admin/count_booking_in_year_with_month', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ customerId: login.customerId, year })
})
    .then(response => response.json())
    .then(data => {
        if (data.code === 200) {
            const bookingElement = document.getElementById('countBooking').getContext('2d');

            const formatDataInChart = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [{
                    label: 'Đơn đặt',
                    data: data.data,
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

            bookingChart = new Chart(bookingElement, {
                type: 'bar',
                data: formatDataInChart,
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            stacked: true
                        }
                    }
                }
            });
        } else {
            alert(data?.message);
        }
    });

// --------------btn----------
var accountBtn = document.querySelector('.accountBtn');
var bookingBtn = document.querySelector('.bookingBtn');
var accountDashboard = document.querySelector('.accountDashboard');
var bookingDashboard = document.querySelector('.bookingDashboard');

accountBtn.onclick = function () {
    accountDashboard.style.display = 'flex';
    bookingDashboard.style.display = 'none';
};

bookingBtn.onclick = function () {
    bookingDashboard.style.display = 'flex';
    accountDashboard.style.display = 'none';
}