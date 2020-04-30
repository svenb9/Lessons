(function tabs() {
  // section-tab_panel_btn__active  // section-tab_show_block__active
  const btn = document.querySelectorAll(".section-tab_panel_btn");

  const container = document.querySelectorAll(".section-tab_show_block");

  btn.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const id = this.getAttribute("data-tabs");
      content = document.querySelector(
        '.section-tab_show_block[data-tabs="' + id + '"]'
      );
      activeTrigger = document.querySelector(".section-tab_panel_btn__active");
      activeContent = document.querySelector(".section-tab_show_block__active");

      activeTrigger.classList.remove("section-tab_panel_btn__active");
      trigger.classList.add("section-tab_panel_btn__active");

      activeContent.classList.remove("section-tab_show_block__active");
      content.classList.add("section-tab_show_block__active");
    });
  });
})();

(function () {
  const inputName = document.querySelector("#name");
  let span = document.createElement("span");

  const inputPass = document.querySelector("#pass");

  const inputEmail = document.querySelector("#email");
  inputName.addEventListener("blur", () => {
    if (!inputName.value) inputName.classList.toggle("error");
  });
  inputName.addEventListener("focus", () => {
    inputName.classList.remove("error");
  });

  inputEmail.addEventListener("blur", () => {
    if (!inputEmail.value.includes("@")) {
      // не email
      inputEmail.classList.add("invalid");
      span.classList.add("invalid_email");
      span.innerText = "Пожалуйста, введите правильный email.";
      inputEmail.parentElement.prepend(span);
    }
  });
  inputEmail.addEventListener("focus", () => {
    inputEmail.classList.remove("invalid");
    span.remove();
  });
})();

document.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let height = window.screen.height / 1.25;
  let tops = document.querySelector(".btn_top");
  if (scroll > height) {
    tops.style.display = "block";
    topClick(tops);
  }
});

function topClick(e) {
  e.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
