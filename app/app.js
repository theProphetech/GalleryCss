"use strict";

const first__img__con = Array.from(document.querySelectorAll(".imgContainer"));
const parent__1 = document.getElementById("first__parent");
const parent__2 = document.getElementById("second__parent");
const gallery = document.querySelector(".gallery");

const dev__con = document.querySelectorAll(".profile--pic > img");

const dev__img = "/images/theprophetech.jpg";
dev__con.forEach((img) => {
  img.setAttribute("src", dev__img);
});

first__img__con.forEach((value) => {
  value.addEventListener("click", (e) => {
    let target = e.target;
    if (target.closest("img")) {
      let src = e.target.getAttribute("src");

      gallery__view(src);
    }
  });
});

function gallery__view(src) {
  let img__view__con = document.createElement("div");
  let view = document.createElement("div");

  img__view__con.classList.add("gallery__view");
  view.className = "view";
  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.className = "img__toview";
  view.append(img);
  img__view__con.append(view);
  document.body.append(img__view__con);
}

document.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.classList.contains("gallery__view")) {
    e.target.hidden = true;
    console.log(e.target);
  }
});

function loader() {
  let loader__con = document.createElement("div");
  loader__con.className = "loader__con";
  let para = document.createElement("p");
  para.className = "loader__para";
  let cir__loader = document.createElement("div");
  cir__loader.className = "cir__loader";
  para.innerHTML = "Please wait while we load data from our database...";
  loader__con.append(para);
  loader__con.insertAdjacentElement("afterbegin", cir__loader);
  document.body.append(loader__con);
}

// button fucnctioning

const btn = document.querySelector(".pry__btn");
btn.addEventListener("click", (e) => {
  let loader__id = setTimeout(() => {
    loader();
  }, 500);

  setTimeout(() => {
    // clearTimeout(loader__id);
    document.querySelector(".loader__con").style.display = "none";
  }, 5000);

  let displayed__id = setTimeout(() => {
    parent__1.hidden = true;
    parent__2.hidden = false;
  }, 5000);
});

gallery.addEventListener("click", (e) => {
  let target = e.target;
  if (target.closest("img")) {
    let src = e.target.getAttribute("src");

    gallery__view(src);
  }
});
