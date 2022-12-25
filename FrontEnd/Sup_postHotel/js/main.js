// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon');
const login = JSON.parse(localStorage.getItem("login"));
const targetHotelId = localStorage.getItem('targetHotelId');
const newHotelButton = document.querySelector('.new-hotel-btn');
const hotelUpdate = JSON.parse(sessionStorage.getItem("hotelUpdate"));
const updateRoomHotel = JSON.parse(sessionStorage.getItem("updateRoom"));
const specialCharacterRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
const addressSpecialCharacterRegex = /[`!@#$%^&*()_+\=\[\]{};':"\\|.<>?~]/
const valueInputs = document.querySelectorAll('.request-value')
const loader = document.getElementById('loading')
valueInputs.forEach(input => {
    input.onchange = (e) => {
        let hasInvalid = false
        if ((e.target.dataset.request === 'nameHotel' || e.target.dataset.request === 'phone') && specialCharacterRegex.test(e.target.value)) {
            hasInvalid = true
            if (e.target.dataset.request === 'nameHotel') {
                alert("Tên khách sạn không hợp lệ")
            }
            if (e.target.dataset.request === 'phone') {
                alert("Số điện thoại không đúng định dạng")
            }
        }
        if (e.target.dataset.request === 'address' && addressSpecialCharacterRegex.test(e.target.value)) {
            hasInvalid = true
            alert("Địa chỉ không đúng định dạng")
        }
        if (e.target.dataset.request === 'price') {
            if (parseFloat(e.target.value) < 0) {
                hasInvalid = true
                alert('Số tiền không hợp lệ')
            }
        }
        if ((e.target.dataset.request === 'adultNumber' || e.target.dataset.request === 'kidNumber') && parseInt(e.target.value) < 0) {
            hasInvalid = true
            alert('Số người không hợp lệ')
        }
        
        if (hasInvalid) {
            e.target.value = ""
        }
    }
})
let images = [];
function loadPage () {
    const targetHotelIdSpan = document.querySelector('.target-hotel-id');
    targetHotelIdSpan.innerText = targetHotelId;
}
loadPage();

newHotelButton.onclick = () => {
    localStorage.removeItem('targetHotelId');
    const targetHotelIdSpan = document.querySelector('.target-hotel-id');
    targetHotelIdSpan.innerText = "";
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
                        const html = `<div data-name="${data.data.filename}" data-url="${data.data.fileUrl}" class="image-detail">
                        <img src="${data.data.fileUrl}" alt="">
                        <i data-name="${data.data.filename}" data-fileurl="${data.data.fileUrl}" class="fa-solid fa-xmark delete_picture"></i>
                        </div>`;

                        hotelImageHtmls.push(html);

                        picture.innerHTML = hotelImageHtmls.join('');
                        hotelPictures.push({ url: data.data.fileUrl, name: data.data.filename });
                        const deleteImageButtons = document.querySelectorAll('.image-detail i');
                        hotelPictures = [...hotelPictures, ...images];
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
                                            hotelPictures = hotelPictures.filter(image => image.name !== e.target.dataset.name);
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
``;
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
                        const html = `<div data-name="${data.data.filename}" data-url="${data.data.fileUrl}" class="image-detail">
                            <img src="${data.data.fileUrl}" alt="">
                            <i data-name="${data.data.filename}" data-fileurl="${data.data.fileUrl}" class="fa-solid fa-xmark remove_image"></i>
                        </div>`;

                        roomImageHtmls.push(html);
                        image.innerHTML = roomImageHtmls.join('');

                        roomPictures.push({ url: data.data.fileUrl, name: data.data.filename });

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
                                            roomPictures = roomPictures.filter(image => image.name !== image.target.dataset.name);
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
    if (hotelPictures.length === 0) {
        alert('Hãy cho chúng tôi biết hình ảnh khách sạn của bạn')
        return false
    }
    const hotelDescription = document.querySelector('.description-input')
    if (hotelDescription.value === "") {
        alert('Nhập mô tả khách sạn của bạn')
        return false
    }
    const hotelAddress = document.querySelector('.input-address')
    if (hotelAddress.value === "") {
        alert('Nhập địa chỉ khách sạn của bạn')
        return false
    }
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
    if (hotelPictures.length === 0) {
        return false
    }
    const basicInformationHotelComponent = document.querySelector('#basic-information-hotel');
    const requestInputs = basicInformationHotelComponent.querySelectorAll('input.request-value, select.request-value, textarea.request-value');
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
    const adultNumber = document.querySelector('.request-value.adultNumber')
    const kidNumber = document.querySelector('.request-value.kidNumber')
    const roomNumber = document.querySelector('.request-value.room-input')
    const priceNumber = document.querySelector('.request-value.price')
    if (!priceNumber.value) {
        alert('Vui lòng nhập giá phòng')
        return false
    }
    if (roomPictures.length === 0) {
        alert('Hãy cho chúng tôi biết hình ảnh phòng của bạn')
        return false
    }
    if (!adultNumber.value || !kidNumber.value) {
        alert('Vui lòng nhập số người')
        return false
    }
    if (!roomNumber.value) {
        alert('Hãy nhập số phòng')
        return false
    }
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

    const hotelId = localStorage.getItem('targetHotelId');
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
    loader.style.display = 'grid'
    fetch("http://localhost:1234/api/v1/core/new_room", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = 'none'
            if (data.code === 200) {
                alert("Đăng ký phòng thành công !!!");
                window.location.href = 'http://localhost:5500/FrontEnd/Sup_myHotel/index.html'
            }
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
            <div class="convenient-item" data-idService = ${item.serviceId}>
                <input id="${item.serviceId}" value="${item.serviceId}" type="checkbox" >
                <label for="${item.serviceId}">${item.serviceName}</label>
            </div>`);
        if (index <= numberItemPerColumn) {
            convenientLeft.innerHTML = htmls.join("");
        }
        if (index === numberItemPerColumn) {
            htmls = [];
        }
        if (index > numberItemPerColumn) {
            convenientRight.innerHTML = htmls.join("");
        }
    });

}

async function getAllServices () {
    const res = await fetch('http://localhost:1234/api/v1/services/all_services');
    const data = await res.json();
    if (data.code === 200) {
        renderServices(data.data);
        updateRoomHotel && updateRoom();
    }
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
                if (updateRoomHotel) {
                    document.querySelector(".room-type").value =
                        (updateRoomHotel.roomType &&
                            updateRoomHotel.roomType.typeId) ||
                        updateRoomHotel.typeId;
                }
            }
        });

}

getAllRoomTypes();
const namepersoncontact = document.querySelector(".name-person-contact");
namepersoncontact.innerHTML = ` <p>Tên người liên hệ :  <span><b>${login.username}</b></span></p>`;


let oldImagesRequestValue = [];
function updateHotel () {
    const steps = document.querySelectorAll(".step-item")[1];
    const hotelUpdate = JSON.parse(sessionStorage.getItem("hotelUpdate"));
    steps.style.display = "none";
    const update = document.querySelector(".next-button");
    update.innerText = "Cập nhật";
    const nameInput = document.querySelector(".name-input");
    const starRating = document.querySelector(".star-rating");
    const phoneinput = document.querySelector(".phone-input");
    const textDescription = document.querySelector("#text-description");
    const inputAddress = document.querySelector(".input-address");
    nameInput.value = hotelUpdate.hotelName;
    starRating.value = hotelUpdate.starNumber;
    phoneinput.value = hotelUpdate.phone;
    textDescription.value = hotelUpdate.hotelId;
    inputAddress.value = hotelUpdate.address;
    const imagesHotels = hotelUpdate.images ? hotelUpdate.images.map((value) => {
        return `<div data-name="${value.imageName}" data-url="${value.url}" class="image-detail">
                            <img src="${value.url}" alt="">
                            <i data-name="${value.imageName}" data-fileurl="${value.url}" class="fa-solid fa-xmark remove_image"></i>
                </div>`;
    }) : [];
    hotelPictures = [...hotelPictures, ...imagesHotels];
    picture.innerHTML += hotelPictures.join("");
    const oldImagesOnUI = document.querySelectorAll('.image-detail');
    oldImagesRequestValue = [...oldImagesOnUI].map(picture => ({
        url: picture.dataset.url,
        imageName: picture.dataset.name
    }));

    update.onclick = () => {
        const imagesOnUI = document.querySelectorAll('.image-detail');
        const imagesRequestValue = [...imagesOnUI].map(picture => ({
            url: picture.dataset.url,
            imageName: picture.dataset.name
        }));
        const finalImagesRequestValue = [...oldImagesRequestValue, ...imagesRequestValue];

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
        delete basicInformationHotel.nameHotel;
        console.log({ ...basicInformationHotel, customerId: login.customerId, "hotelName": nameInput.value });
        fetch(`http://localhost:1234/api/v1/owners/update_hotel_information/${hotelUpdate.hotelId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...basicInformationHotel, customerId: login.customerId, "hotelName": nameInput.value, images: finalImagesRequestValue })
            }
        ).then(e => e.json())
            .then(data => {
                console.log(data);
                if (data.code === 200) {
                    sessionStorage.setItem("hotelUpdate", JSON.stringify(data.data));
                    updateHotel();
                    alert("Cập nhật thành công!");
                }
            });
    };
}

hotelUpdate && updateHotel();

function updateRoom () {
    const steps = document.querySelectorAll(".step-item")[0];
    const updateRoomHotel = JSON.parse(sessionStorage.getItem("updateRoom"));
    console.log(updateRoomHotel);
    const stepContent = document.querySelectorAll(".step-content");
    stepContent[0].classList.remove("active");
    stepContent[1].classList.add("active");
    steps.style.display = "none";
    const nextButton = document.querySelector(".next-button");
    nextButton.innerText = "Cập nhật";
    const roomType = document.querySelector(".room-type");
    const adultNumber = document.querySelector(".adultNumber");
    const kidNumber = document.querySelector(".kidNumber");
    const roomInput = document.querySelector(".room-input");
    const convenientItem = document.querySelectorAll(".convenient-item");
    const expireTime = document.querySelector(".expireTime");
    const condition = document.querySelector(".condition");
    const price = document.querySelector(".price");
    console.log(updateRoomHotel.roomType && updateRoomHotel.roomType.typeId);
    roomType.value = updateRoomHotel && updateRoomHotel.typeId;
    adultNumber.value = updateRoomHotel.adultNumber;
    kidNumber.value = updateRoomHotel.kidNumber;
    roomInput.value = updateRoomHotel.roomNumber;
    price.value = updateRoomHotel.price;
    expireTime.value =
        updateRoomHotel.Policy && updateRoomHotel.Policy.expireTime || "0";
    condition.value = updateRoomHotel.Policy && updateRoomHotel.Policy.condition || "0";
    convenientItem.forEach(value => {
        updateRoomHotel.services && updateRoomHotel.services.length > 0 && updateRoomHotel.services.forEach((e) => {
            if (value.dataset.idservice === e.serviceId) {
                value.querySelector("input").checked = true;
            }
        });
    });
    const imagesRoom = updateRoomHotel.Images ? updateRoomHotel.Images.map((value) => {
        return `<div data-name="${value.imageName}" data-url="${value.url}" class="image-detail">
                            <img src="${value.url}" alt="">
                            <i data-name="${value.imageName}" data-fileurl="${value.url}" class="fa-solid fa-xmark remove_image"></i>
                </div>`;
    }) : [];
    roomPictures = [...roomPictures, ...imagesRoom];
    console.log(roomPictures)
    image.innerHTML += roomPictures.join("");
    const oldImagesOnUI = document.querySelectorAll('.image-detail');
    oldImagesRequestValue = [...oldImagesOnUI].map(picture => ({
        url: picture.dataset.url,
        imageName: picture.dataset.name
    }));
    nextButton.onclick = () => {
        const imagesOnUI = document.querySelectorAll('.image-detail');
        const imagesRequestValue = [...imagesOnUI].map(picture => ({
            url: picture.dataset.url,
            imageName: picture.dataset.name
        }));
        const finalImagesRequestValue = [...oldImagesRequestValue, ...imagesRequestValue];

        const basicInformationRoomComponent = document.querySelector(
            "#basic-information-room"
        );
        const requestInputs = basicInformationRoomComponent.querySelectorAll(
            "input.request-value, select.request-value"
        );
        basicInformationRoom = [...requestInputs].reduce((prev, next) => {
            let value = next.value;

            if (next.dataset.request.includes("Number")) {
                value = Number(next.value);
            }

            if (next.dataset.request === "policy") {
                return {
                    ...prev,
                    [next.dataset.request]: {
                        ...prev[next.dataset.request],
                        [next.dataset.secondSubRequest]: value,
                    },
                };
            }
            return {
                ...prev,
                [next.dataset.request]: value,
            };
        }, {});

        const services = document.querySelectorAll(
            ".convenient-item input[type=checkbox]"
        );
        services.forEach((service) => {
            if (service.checked) {
                basicInformationRoom.services = [
                    ...(basicInformationRoom.services || []),
                    service.value,
                ];
            }
        });

        const roomupt = { ...basicInformationRoom, typeId: roomType.value, images: finalImagesRequestValue };

        console.log(roomupt);
        fetch(
            `http://localhost:1234/api/v1/owners/update_room_information/${updateRoomHotel.roomId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...roomupt,
                    customerId: login.customerId,
                }),
            }
        )
            .then((e) => e.json())
            .then((data) => {
                console.log(data);
                if (data.code === 200) {
                    sessionStorage.setItem("updateRoom", JSON.stringify(data.data));
                    updateRoom();
                    alert("Cập nhật thành công!");
                }
            });

    };

}
handlePicture();
updateRoomHotel && updateRoom();

// ---------
var headerLogoIMG = document.querySelector('.header-logo img')
headerLogoIMG.onclick = function () {
  location.href = 'http://localhost:5500/FrontEnd/home/index.html#'
}
