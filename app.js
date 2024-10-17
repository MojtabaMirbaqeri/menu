//main array
const menuItems = [
  { title: "Home", link: "#", icon: "https://via.placeholder.com/24" },
  {
    title: "Services",
    link: "#",
    icon: "https://via.placeholder.com/24",
    submenu: [
      { title: "Design", link: "#", icon: "https://via.placeholder.com/24" },
      { title: "Development", link: "#", icon: "https://via.placeholder.com/24" },
    ],
  },
  { title: "About", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Contact", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Home", link: "#", icon: "https://via.placeholder.com/24" },
  {
    title: "Services",
    link: "#",
    icon: "https://via.placeholder.com/24",
    submenu: [
      { title: "Design", link: "#", icon: "https://via.placeholder.com/24" },
      { title: "Development", link: "#", icon: "https://via.placeholder.com/24" },
    ],
  },
  { title: "About", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Contact", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Home", link: "#", icon: "https://via.placeholder.com/24" },
  {
    title: "Services",
    link: "#",
    icon: "https://via.placeholder.com/24",
    submenu: [
      { title: "Design", link: "#", icon: "https://via.placeholder.com/24" },
      { title: "Development", link: "#", icon: "https://via.placeholder.com/24" },
    ],
  },
  { title: "About", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Contact", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Home", link: "#", icon: "https://via.placeholder.com/24" },
  {
    title: "Services",
    link: "#",
    icon: "https://via.placeholder.com/24",
    submenu: [
      { title: "Design", link: "#", icon: "https://via.placeholder.com/24" },
      { title: "Development", link: "#", icon: "https://via.placeholder.com/24" },
    ],
  },
  { title: "About", link: "#", icon: "https://via.placeholder.com/24" },
  { title: "Contact", link: "#", icon: "https://via.placeholder.com/24" },
];

function createMenu(items) {
  const menu = document.getElementById("itemsCon");
  items.forEach((item) => {
    const menuItem = document.createElement("a");
    menuItem.href = item.link;

    const textNode = document.createTextNode(item.title);
    menuItem.appendChild(textNode);
    menu.appendChild(menuItem);

    if (item.icon) {
      const icon = document.createElement("img");
      icon.src = item.icon;
      menuItem.appendChild(icon);
    }

    if (item.submenu) {
      const submenu = document.createElement("div");
      submenu.classList.add("submenu");

      item.submenu.forEach((subItem) => {
        const subMenuItem = document.createElement("a");
        subMenuItem.href = subItem.link;

        const subTextNode = document.createTextNode(subItem.title);
        subMenuItem.appendChild(subTextNode);

        const subIcon = document.createElement("img");
        subIcon.src = subItem.icon;
        subMenuItem.appendChild(subIcon);
        submenu.appendChild(subMenuItem);
      });

      menuItem.appendChild(submenu);
    }
  });
}

createMenu(menuItems);

document.getElementById("toggleMenu").addEventListener("click", () => {
  document.getElementById("verticalMenu").classList.toggle("show");
});
