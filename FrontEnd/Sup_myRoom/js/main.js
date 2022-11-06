// ---------header------------\
var headerNavForm = document.querySelector(".header-nav-form");
var headerForm = document.querySelector(".header-form");
var headerFormLogin = headerNavForm.querySelector(".header-form-login");
var headerFormLogout = document.querySelector(".header-form-logout");
var headerNavIcon = document.querySelector('.header-nav-icon')
var login = window.localStorage.getItem("login");

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



// ----------------- pagination---------
// function getPageList(totalPages, page, maxLength) {
//   function range(start, end) {
//     return Array.from(Array(end - start + 1), (_, i) => i + start);
//   }

//   var sideWidth = maxLength < 9 ? 1 : 2;
//   var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//   var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

//   if(totalPages <= maxLength - sideWidth - 1 - rightWidth) {
//     return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages))
//   }

//   if(page >= totalPages - sideWidth - 1 - rightWidth) {
//     return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 -rightWidth - leftWidth, totalPages));
//   }

//   return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
// }

// $(function() {
//   var numberOfItems = $(".container-residence").length;
//   var limitPerPage = 4;
//   var totalPages = Math.ceil(numberOfItems / limitPerPage);
//   var paginationSize = 7;
//   var currentPage;

//   function showPage(whichPage) {
//     if(whichPage < 1 || whichPage > totalPages) return false;
//     currentPage = whichPage;

//     $(".container-residence").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
//     $(".pagination li").slice(1, -1).remove();
//     getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//       $("<li>").addClass("page-item").addClass(item ? "current-page").tonggleClass("active", item === currentPage.append($("<a>").addClass()))
//     });
//   }
// });