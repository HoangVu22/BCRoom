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
}