
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
      document.querySelector("header").classList.add("open");
      document.querySelector("body").classList.add("stop-scroll");
    });
  
    document.getElementById("burgerClose").addEventListener("click", function () {
      document.querySelector("header").classList.remove("open");
      document.querySelector("body").classList.remove("stop-scroll");
  
    });
  
  
  
  });