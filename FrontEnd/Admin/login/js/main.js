const adminLoginForm = document.querySelector('.admin-login')

adminLoginForm.onsubmit = (e) => {
    e.preventDefault()
    const loginRequests = document.querySelectorAll('.login-request')
    const loginRequestValue = [...loginRequests].reduce((prev, next) => {
        return {
            ...prev,
            [next.dataset.request]: next.value
        }
    }, {})

    fetch('http://localhost:1234/api/v1/auth/admin_login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequestValue)
    })
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                localStorage.setItem('login', JSON.stringify(data.data))
                window.location.href = 'http://localhost:5500/FrontEnd/Ad_home/index.html'
            } else {
                alert(data.message)
            }
        })
}