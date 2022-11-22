// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon');
const login = JSON.parse(localStorage.getItem("login"));

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

// ---------------nav-steps------------
const stepItem = document.querySelectorAll(".step-item");
const stepContent = document.querySelectorAll(".step-content");
const itemActive = document.querySelector(".step-item.active");
const line = document.querySelector(".steps .line");

requestIdleCallback(function () {
    line.style.left = itemActive.offsetLeft + "px";
    line.style.width = itemActive.offsetWidth + "px";
});
let count = 0;

stepItem.forEach((tab, index) => {
    const room = stepContent[index]; // mỗi lần click vào tab thì lấy ra thằng room tương ứng

    tab.onclick = function () {
        document.querySelector(".step-item.active").classList.remove("active");
        document.querySelector(".step-content.active").classList.remove("active");
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        this.classList.add("active");
        room.classList.add("active");
        count = index;
        if (count === 0) {
            preBtn.style.display = "none";
            goToNext.style.display = "block";
            finish.style.display = "none";

        } else
            if (count === 1) {
                preBtn.style.display = "block";
                goToNext.style.display = "none";
                finish.style.display = "block";
            }
    };
});

// ---------------picture hotel-----------
let filePicture = [];
var dragPicture = document.querySelector(".drag-picture");
var dragDrop1 = document.querySelector(".drag-drop1");
var chooseFiles = document.querySelector(".choose-files");
var dropInput = document.querySelector(".drop-input");
var pictureDetail = document.querySelectorAll(".picture-detail img");
var picture = document.querySelector(".picture");
let hotelPictures = [];
const hotelImageHtmls = [];

function handlePicture () {
    chooseFiles.addEventListener("click", function () {
        dropInput.click();
    });
    dropInput.onchange = function (e) {
        if (e.target.files[0].type.includes('image')) {
            const formData = new FormData();
            formData.append('thumbnail', e.target.files[0]);
            formData.append('directory', 'thumbnails');

            fetch('http://localhost:1234/api/v1/upload/upload_thumbnail', {
                method: 'post',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.code === 200) {
                        const html = `<div data-name="${data.data.filename}" class="image-detail">
                        <img src="${data.data.fileUrl}" alt="">
                        <i data-name="${data.data.filename}" data-fileurl="${data.data.fileUrl}" class="fa-solid fa-xmark delete_picture"></i>
                        </div>`;

                        hotelImageHtmls.push(html);

                        picture.innerHTML = hotelImageHtmls.join('');
                        hotelPictures.push(data.data.fileUrl);
                        const deleteImageButtons = document.querySelectorAll('.image-detail i');

                        deleteImageButtons.forEach(button => {
                            button.onclick = (e) => {
                                fetch('http://localhost:1234/api/v1/upload/remove_thumbnail', {
                                    method: 'post',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ filename: e.target.dataset.name })
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.code === 200) {
                                            const listPictureNode = document.querySelector('.picture.list-hotel-picture');
                                            listPictureNode.removeChild(e.target.parentNode);
                                            hotelPictures = hotelPictures.filter(url => url !== e.target.dataset.fileurl);
                                        }
                                    });
                            };
                        });
                    }
                });
        } else {
            alert("Vui lòng chọn ảnh!");
        }
    };
}
handlePicture();

// -------------- drag-drop room-----------
let files = [];
var dragImage = document.querySelector(".drag-image");
var dragDrop = document.querySelector(".drag-drop");
var chooseFile = document.querySelector(".choose-file");
var dragDropInput = document.querySelector(".drag-drop-input");
var imageDetail = document.querySelectorAll(".image-detail img");
var image = document.querySelector(".image");
let roomPictures = [];
const roomImageHtmls = [];

function handleImage () {
    chooseFile.addEventListener("click", function () {
        dragDropInput.click();
    });
    dragDropInput.onchange = function (e) {
        if (e.target.files[0].type.includes('image')) {
            const formData = new FormData();
            formData.append('thumbnail', e.target.files[0]);
            formData.append('directory', 'thumbnails');

            fetch('http://localhost:1234/api/v1/upload/upload_thumbnail', {
                method: 'post',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.code === 200) {
                        const html = `<div data-name="${data.data.filename}" class="image-detail">
                            <img src="${data.data.fileUrl}" alt="">
                            <i data-name="${data.data.filename}" data-fileurl="${data.data.fileUrl}" class="fa-solid fa-xmark remove_image"></i>
                        </div>`;

                        roomImageHtmls.push(html);
                        image.innerHTML = roomImageHtmls.join('');
                        roomPictures.push(data.data.fileUrl);

                        const deleteImageButtons = document.querySelectorAll('.image-detail i');

                        deleteImageButtons.forEach(button => {
                            button.onclick = (e) => {
                                fetch('http://localhost:1234/api/v1/upload/remove_thumbnail', {
                                    method: 'post',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ filename: e.target.dataset.name })
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.code === 200) {
                                            const listPictureNode = document.querySelector('.image.list-room-image');
                                            listPictureNode.removeChild(e.target.parentNode);
                                            roomPictures = roomPictures.filter(url => url !== e.target.dataset.fileurl);
                                        }
                                    });
                            };
                        });
                    }
                });
        } else {
            alert("Vui lòng chọn ảnh!");
        }
    };
}
handleImage();

// ---------------- payment -----------------
// var radioYes = document.querySelector('.radio-yes')
// var radioNo = document.querySelector('.radio-no')
// var creditcardSection = document.querySelector('.creditcard-section')
// var cashSection = document.querySelector('.cash-section')

// radioYes.onclick = function() {
//   creditcardSection.style.display = 'flex'
//   cashSection.style.display = 'none'
// }

// radioNo.onclick = function() {
//   creditcardSection.style.display = 'none'
//   cashSection.style.display = 'block'
// }

// ------------------- next and prev-------
var saveInf = document.querySelector('.save-inf');
var preBtn = document.querySelector('.pre-btn button');
var goToNext = document.querySelector('.go-to-next button');
var finish = document.querySelector('.finish button');

goToNext.onclick = function () {
    preBtn.style.display = "block";
    finish.style.display = "none";
    count = count + 1;
    stepItem.forEach((e) => {
        if (e.classList.contains("active"))
            e.classList.remove("active");
    });
    stepContent.forEach((e) => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
            line.style.left = stepItem[count].offsetLeft + "px";
            line.style.width = stepItem[count].offsetWidth + "px";
        }
    });
    stepItem[count].classList.add("active");
    stepContent[count].classList.add("active");
    if (count === 1) {
        goToNext.style.display = "none";
        finish.style.display = "block";
    }
};
preBtn.onclick = function () {
    finish.style.display = "none";
    goToNext.style.display = "block";
    count = count - 1;
    stepItem.forEach((e) => {
        if (e.classList.contains("active"))
            e.classList.remove("active");
        line.style.left = stepItem[count].offsetLeft + "px";
        line.style.width = stepItem[count].offsetWidth + "px";
    });
    stepContent.forEach((e) => {
        if (e.classList.contains("active"))
            e.classList.remove("active");
    });
    stepItem[count].classList.add("active");
    stepContent[count].classList.add("active");
    if (count === 0) {
        preBtn.style.display = "none";
    }
};

// request create new hotel and room
let basicInformationHotel = {};
let basicInformationRoom = {};

goToNext.addEventListener('click', (e) => {
    e.preventDefault();
    const basicInformationHotelComponent = document.querySelector('#basic-information-hotel');
    const requestInputs = basicInformationHotelComponent.querySelectorAll('input.request-value, select.request-value');
    basicInformationHotel = [...requestInputs].reduce((prev, next) => {
        let value = next.value;

        if (next.dataset.request.includes('Number')) {
            value = Number(next.value);
        }

        if (next.dataset.request === 'address') {
            return {
                ...prev,
                [next.dataset.request]: !prev[next.dataset.request] ? '' + value : prev[next.dataset.request] + ', ' + value
            };
        }

        return {
            ...prev,
            [next.dataset.request]: value
        };
    }, {});
});

finish.addEventListener('click', (e) => {
    e.preventDefault();
    const basicInformationRoomComponent = document.querySelector('#basic-information-room');
    const requestInputs = basicInformationRoomComponent.querySelectorAll('input.request-value, select.request-value');
    basicInformationRoom = [...requestInputs].reduce((prev, next) => {
        let value = next.value;

        if (next.dataset.request.includes('Number')) {
            value = Number(next.value);
        }

        if (next.dataset.request === 'policy') {
            return {
                ...prev,
                [next.dataset.request]: {
                    ...prev[next.dataset.request],
                    [next.dataset.secondSubRequest]: value
                }
            };
        }
        return {
            ...prev,
            [next.dataset.request]: value
        };
    }, {});

    const services = document.querySelectorAll('.convenient-item input[type=checkbox]');
    services.forEach(service => {
        if (service.checked) {
            basicInformationRoom.services = [...basicInformationRoom.services || [], service.value];
        }
    });

    const hotelId = localStorage.getItem('selectedHotelId');
    sendRequestToCreatRoomHotel({
        ...basicInformationHotel,
        ...basicInformationRoom,
        hotelId,
        images: {
            imageHotel: hotelPictures,
            imageRoom: roomPictures 
        },
        customerId: login.customerId
    });
});

function sendRequestToCreatRoomHotel (data) {
    fetch("http://localhost:1234/api/v1/core/new_room", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.code === 200) alert("Đăng ký phòng thành công !!!");
        })
        .catch((error) => {
            console.log(error);
            alert("That bai !!!");
        });
}

// render services
const convenientLeft = document.querySelector('.convenient-left');
const convenientRight = document.querySelector('.convenient-right');

function renderServices (data) {
    const numberItemPerColumn = Math.ceil(data.length / 2) - 1;
    let htmls = [];

    data.forEach((item, index) => {
        htmls.push(`
            <div class="convenient-item">
                <input id="${item.serviceId}" value="${item.serviceId}" type="checkbox">
                <label for="${item.serviceId}">${item.serviceName}</label>
            </div>`
        );
        if (index <= numberItemPerColumn) {
            convenientLeft.innerHTML = htmls.join('');
        }

        if (index === numberItemPerColumn) {
            htmls = [];
        }

        if (index > numberItemPerColumn) {
            convenientRight.innerHTML = htmls.join('');
        }
    });
}

function getAllServices () {
    fetch('http://localhost:1234/api/v1/services/all_services')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                renderServices(data.data);
            }
        });
}

getAllServices();

// render room types
const roomTypeSelect = document.querySelector('select.room-type');

function renderRoomTypes (data) {
    const htmls = data.map(item => `<option value="${item.typeId}">${item.typeName}</option>`);
    roomTypeSelect.innerHTML = htmls.join('');
}

function getAllRoomTypes () {
    fetch('http://localhost:1234/api/v1/roomtypes/all_roomtypes')
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                renderRoomTypes(data.data);
            }
        });
}

getAllRoomTypes();
const namepersoncontact = document.querySelector(".name-person-contact");
namepersoncontact.innerHTML = ` <p>Tên người liên hệ :  <span><b>${login.username}</b></span></p>`;