document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll("[data-accordion-item]");

  const closeAllItems = () => {
    accordionItems.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("border-b", "border-gray-800");
      item.querySelector("[data-accordion-content]").style.maxHeight = "0px";
      item
        .querySelector("[data-accordion-header] span")
        .classList.remove("text-primary");
      item
        .querySelector("[data-accordion-header] span")
        .classList.add("text-white");
      item.querySelector("[data-arrow-icon]").classList.remove("rotate-180");
    });
  };

  accordionItems.forEach((item) => {
    const header = item.querySelector("[data-accordion-header]");
    const content = item.querySelector("[data-accordion-content]");

    header.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");

      closeAllItems();

      if (!wasActive) {
        item.classList.add("active");
        item.classList.remove("border-b", "border-gray-800");
        header.querySelector("span").classList.add("text-primary");
        header.querySelector("span").classList.remove("text-white");
        item.querySelector("[data-arrow-icon]").classList.add("rotate-180");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  closeAllItems();
});
