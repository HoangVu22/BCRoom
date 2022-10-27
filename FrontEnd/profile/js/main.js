// ---------header------------
var headerNavForm = document.querySelector('.header-nav-form')
var headerForm = document.querySelector('.header-form')
var headerFormLogin = headerNavForm.querySelector('.header-form-login')
var headerFormLogout = document.querySelector('.header-form-logout');
var login = window.localStorage.getItem("login")

headerNavForm.onclick = function() {
    if (headerForm.style.display === "none")
        headerForm.style.display = "block"
    else {
        headerForm.style.display = "none"
    }

    handleIconLight()
}

function handleIconLight() {
    var iconList = headerNavIcon.querySelectorAll('i')
    iconList.forEach((item) => {
        if(headerFormLogout && headerFormLogout.style.display !== "none" || headerFormLogin && headerFormLogin.style.display !=="none") {
            item.style.color = "#f44336"
            headerNavIcon.style.borderColor = "#f44336"
        }
        else {
            item.style.color = "unset"
            headerNavIcon.style.borderColor = "unset"
        }
    })
}

// -------------profile--------------
var profile = document.querySelector('.profile')
var profileRight = document.querySelector('.profile-right')
var profileRightEdit = document.querySelector('.profile-right-edit')
var profileRightTopBtn = document.querySelector('.profile-right-top button')
var profileSaveBtn = document.querySelector('.profile-save button')
var profileSaveP = document.querySelector('.profile-save p')

profileRightTopBtn.onclick = function() {
    if(profileRightEdit) {
        if (profileRightEdit.style.display === "block") {
            profileRightEdit.style.display = "none"
            profileRight.style.display = "block"
        }
        else {
            profileRightEdit.style.display = "block"
            profileRight.style.display = "none"
        }
    }
}

function edit() {
    profileRightEdit.style.display = "none"
    profileRight.style.display = "block"
}

profileSaveBtn.onclick = edit
profileSaveP.onclick = edit







