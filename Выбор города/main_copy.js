let listElem = document.querySelectorAll("ul > li");
let list = document.querySelectorAll("div.city-list__wrapper > ul")
let button = document.querySelector("#button");
let search = document.querySelector("#search");

search.addEventListener("input", function () {
  let searchValue = search.value.toUpperCase();
  let a;
  for (let i = 0; i < listElem.length; i++) {
    if (listElem[i].textContent[0] == searchValue[0]) {
      a = true
      listElem[i].classList.remove("hidden");
    }
    else {
      listElem[i].classList.add("hidden");
    }
    if (searchValue == '') {
      for (let elem of listElem) {
        elem.classList.remove("hidden");
      }
    }
    if (a != true) {
      error.classList.remove("hidden-error");
    }
    else {
      error.classList.add("hidden-error");
    }
  }
  for (i = 0; i < list.length; i++) {
    let listCities = list[i].querySelectorAll("li");
    let countHiddenCities = 0;
    for (j = 0; j < listCities.length; j++) {
      if (listCities[j].classList.contains("hidden")) {
        countHiddenCities++;
      }
    }
    if (countHiddenCities == listCities.length) {
      list[i].classList.add("hidden");
    }
    else {
      list[i].classList.remove("hidden");
    }
    countHiddenCities = 0;
  }

})
