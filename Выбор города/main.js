let elements = document.querySelectorAll("ul > li");
let div1 = document.querySelectorAll("div.wrapper > div")
let button = document.querySelector("#button");
let search = document.querySelector("#search");

search.addEventListener("input", function () {
  let searchValue = search.value.toUpperCase();
  let a;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent[0] == searchValue[0]) {
      a = true
      elements[i].classList.remove("hidden")
    }
    else {
      elements[i].classList.add("hidden")
    }
    if (searchValue == '') {
      for (let elem of elements) {
        elem.classList.remove("hidden")
      }
    }
    if (a != true) {
      error.classList.remove("hidden-error")
    }
    else {
      error.classList.add("hidden-error")
    }
  }
  for (i = 0; i < div1.length; i++) {
    let divCities = div1[i].querySelectorAll("li");
    let countHiddenCities = 0;
    for (j = 0; j < divCities.length; j++) {
      if (divCities[j].classList.contains("hidden")) {
        countHiddenCities++;
      }
    }
    if (countHiddenCities == divCities.length) {
      div1[i].classList.add("hidden");
    }
    else {
      div1[i].classList.remove("hidden");
    }
    countHiddenCities = 0;
  }

})
