window.onload = function () {
  const navItems = document.querySelectorAll(".menu__link");

  navItems.forEach((item) => {
    console.log(item.innerText);
    if (
      item.innerText === "Local DB" ||
      item.innerText === "Quickstart" ||
      item.innerText === "Attachments" ||
      item.innerText === "Developer Quickstart" ||
      item.innerText === "Content Types" ||
      item.innerText === "Query addresses" ||
      item.innerText === "Reply" ||
      item.innerText === "Reaction" ||
      item.innerText === "Read Receipts" ||
      item.innerText === "Custom (Basic)" ||
      item.innerText === "Custom (Advanced)"
    ) {
      console.log(item.innerText);
      item.classList.add("new");
    }
  });
};
