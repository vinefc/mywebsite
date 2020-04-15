const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav ul");
    const body = document.querySelector("body");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      body.classList.toggle("overflow-hidden");
    });
  };
  
  navSlide();
  