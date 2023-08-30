window.onload = function () {
  const navItems = document.querySelectorAll(".menu__link");

  navItems.forEach((item) => {
    if (
      item.innerText === "Local DB" ||
      item.innerText === "Groups" ||
      item.innerText === "Quickstart" ||
      item.innerText === "Local-first cache" ||
      item.innerText === "DAOs" ||
      item.innerText === "DeFi" ||
      item.innerText === "Marketing" ||
      item.innerText === "Interactive Tutorial" ||
      item.innerText === "Developer Quickstart" ||
      item.innerText === "Content Types" ||
      item.innerText === "Query addresses" ||
      item.innerText === "Scale" ||
      item.innerText === "Reply" ||
      item.innerText === "Reaction" ||
      item.innerText === "Read Receipt" ||
      item.innerText === "Custom (Basic)" ||
      item.innerText === "Custom (Advanced)"
    ) {
      item.classList.add("new");
      console.log(item.classList);
    }
  });
};
