const login = JSON.parse(localStorage.getItem('login'))
const targetBookingIdForPayment = localStorage.getItem('targetBookingIdForPayment')

if (targetBookingIdForPayment && login.customerId) {
    fetch('http://localhost:1234/api/v1/payment/vnpay_ipn' + window.location.search + `&bookingId=${targetBookingIdForPayment}&customerId=${login.customerId}`)
        .then(response => response.json())
        .then(data => {
            localStorage.removeItem('targetBookingIdForPayment')
            alert(data.Message)
        })
} else {
    window.location.href = 'http://localhost:5500/FrontEnd/home/index.html'
}

const backToHomeButton = document.querySelector('.back-to-home')
backToHomeButton.onclick = () => {
    localStorage.removeItem('targetBookingIdForPayment')
    window.location.href = 'http://localhost:5500/FrontEnd/home/index.html'
}