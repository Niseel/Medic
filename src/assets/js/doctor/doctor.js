// document.getElementById("myDIV").style.opacity = "0.5";

// document
//   .querySelectorAll(".doctor__item-dot-icon")
//   .addEventListener("click", () => {
//     console.log(this);
//   });

document.addEventListener("DOMContentLoaded", function (event) {
  let dotBtn = document.querySelectorAll(
    ".doctor__item .doctor__item-dot-icon i"
  );
  // console.log(dotBtn);
  // let feature = document.querySelectorAll(".doctor__item .feature-list");
  // dotBtn[0].addEventListener("click", () => {
  //   feature[0].style.opacity = "1";
  // });

  dotBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      let _id = item.parentNode.getAttribute("data-id");
      let feature = document.querySelector(`.feature-list[data-id="${_id}"]`);

      // console.log(feature.classList.contains("show"));
      if (feature.classList.contains("show") === false) {
        feature.classList.add("show");
      } else {
        feature.classList.remove("show");
      }
    });
  });
});
