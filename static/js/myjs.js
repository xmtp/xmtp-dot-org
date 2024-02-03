window.onload = function () {
  const navItems = document.querySelectorAll(".menu__link");

  // Get the title of the current page
  const pageTitle = document.title;

  if (
    pageTitle === "Quickstart" ||
    pageTitle === "Local-first cache" ||
    pageTitle === "Content Types" ||
    pageTitle === "Marketing" ||
    pageTitle === "Interactive tutorial"
  ) {
    // Convert the page title to a suitable CSS class name
    const pageTitleClass = pageTitle.toLowerCase().replace(/ /g, "-");

    // Add the class to the body
    console.log("special-page", pageTitleClass);
    document.body.classList.add("special-page");
    document.body.classList.add(pageTitleClass);
  }
  // Add class to nav items based on their text
  navItems.forEach((item) => {
    if (
      item.innerText === "User consent" ||
      item.innerText === "Groups" ||
      item.innerText === "Spam"
    ) {
      item.classList.add("new");
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const sdkParam = urlParams.get("sdk");
  const tabsLists = document.querySelectorAll(".tabs");
  tabsLists.forEach((tabsList) => {
    console.log(tabsList);
    // Remove active class from all tabs within the tabs list
    tabsList.querySelectorAll(".tabs__item").forEach((tab) => {
      tab.classList.remove("tabs__item--active");
      if (tab && tab.classList.contains(sdkParam + "_tab")) {
        tab.classList.add("tabs__item--active");
        // Dispatch a click event on the JavaScript tab to ensure any associated event handlers are triggered
        tab?.click();
      }
    });
  });
};
