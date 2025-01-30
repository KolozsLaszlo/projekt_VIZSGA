document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".popup-trigger");

  triggers.forEach((trigger) => {
    const fillBar = document.createElement("div");
    fillBar.classList.add("fill-bar");
    trigger.appendChild(fillBar);

    let hoverTimeout;

    trigger.addEventListener("click", function () {
      const popupId = trigger.getAttribute("data-id");
      const popup = document.getElementById(popupId);
      popup.classList.add("show");
      popup.classList.remove("hide");
      clearTimeout(hoverTimeout);
      fillBar.style.animation = "none";
      fillBar.style.width = "0";
    });

    trigger.addEventListener("mouseover", function () {
      fillBar.style.animation = "fillBar 5s linear forwards";
      hoverTimeout = setTimeout(function () {
        const popupId = trigger.getAttribute("data-id");
        const popup = document.getElementById(popupId);
        popup.classList.add("show");
        popup.classList.remove("hide");
      }, 5000);
    });

    trigger.addEventListener("mouseout", function () {
      clearTimeout(hoverTimeout);
      fillBar.style.animation = "none";
      fillBar.style.width = "0";
    });
  });

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
      closePopup(event.target.id);
    }
  });
});

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.add("hide");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 500);
}
