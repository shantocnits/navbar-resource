// Sidebar and submenu click event
$(".menu > ul > li").click(function (e) {
  // Store the active parent link in localStorage
  const activeLink = $(this).find("> a").attr("href");
  localStorage.setItem("activeSidebarLink", activeLink);

  // Update active classes and toggle submenu
  $(this).siblings().removeClass("active");
  $(this).siblings().find("ul").slideUp(); // Close other submenus
  $(this).toggleClass("active");
  $(this).find("ul").slideToggle();
});

$(".menu > ul > li > a").click(function (e) {
  // Clear submenu state when clicking a main menu link
  localStorage.removeItem("activeSubmenuLink");
});

$(".menu > ul > li ul li a").click(function (e) {
  // Store the clicked submenu link in localStorage
  const activeChildLink = $(this).attr("href");
  localStorage.setItem("activeSubmenuLink", activeChildLink);
});

// Highlight the active link and keep submenu open on page load
$(document).ready(function () {
  const activeLink = localStorage.getItem("activeSidebarLink");
  const activeSubmenuLink = localStorage.getItem("activeSubmenuLink");

  if (activeSubmenuLink) {
    // Highlight the active submenu link
    const activeSubElement = $(`.menu ul li a[href="${activeSubmenuLink}"]`).parent();
    activeSubElement.addClass("active");

    // Open the parent menu of the active submenu
    const parentMenu = activeSubElement.closest("ul").closest("li");
    parentMenu.addClass("active");
    parentMenu.find("> ul").slideDown();
  } else if (activeLink) {
    // Highlight the parent menu link if no submenu is active
    const activeElement = $(`.menu > ul > li > a[href="${activeLink}"]`).parent();
    activeElement.addClass("active");
    activeElement.find("> ul").slideDown();
  } else {
    // Close all submenus if no active link is stored
    $(".menu > ul > li > ul").slideUp();
    $(".menu > ul > li").removeClass("active");
  }
});

// Sidebar toggle button
$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});



// $(".menu > ul > li").click(function (e) {
//   // Store the active parent link in localStorage
//   const activeLink = $(this).find("> a").attr("href");
//   localStorage.setItem("activeSidebarLink", activeLink);

//   // Update active classes and toggle submenu
//   $(this).siblings().removeClass("active");
//   $(this).siblings().find("ul").slideUp(); // Close other submenus
//   $(this).toggleClass("active");
//   $(this).find("ul").slideToggle();
// });

// $(".menu > ul > li > a").click(function (e) {
//   // Remove submenu active state when clicking a parent menu link
//   localStorage.removeItem("activeSubmenuLink");
// });

// $(".menu > ul > li ul li a").click(function (e) {
//   // Store the clicked submenu child link in localStorage
//   const activeChildLink = $(this).attr("href");
//   localStorage.setItem("activeSubmenuLink", activeChildLink);

//   // Store parent link for submenu
//   const parentLink = $(this)
//     .closest("ul")
//     .closest("li")
//     .find("> a")
//     .attr("href");
//   localStorage.setItem("activeSidebarLink", parentLink);
// });

// // Highlight the active link and keep submenu open on page load
// $(document).ready(function () {
//   const activeLink = localStorage.getItem("activeSidebarLink");
//   const activeSubmenuLink = localStorage.getItem("activeSubmenuLink");

//   if (activeSubmenuLink) {
//     // Highlight the active submenu child link
//     const activeSubElement = $(
//       `.menu ul li a[href="${activeSubmenuLink}"]`
//     ).parent();
//     activeSubElement.addClass("active");

//     // Open the parent menu of the active submenu
//     const parentMenu = activeSubElement.closest("ul").closest("li");
//     parentMenu.addClass("active");
//     parentMenu.find("> ul").slideDown();
//   } else if (activeLink) {
//     // Highlight the parent menu link even if no submenu is active
//     const activeElement = $(
//       `.menu > ul > li > a[href="${activeLink}"]`
//     ).parent();
//     activeElement.addClass("active");
//     activeElement.find("> ul").slideDown(); // Open submenu if it's a parent
//   } else {
//     // Ensure all menus are closed by default
//     $(".menu > ul > li > ul").slideUp();
//     $(".menu > ul > li").removeClass("active");
//   }
// });

// // Close active submenu when clicking outside the menu
// $(document).on("click", function (e) {
//   if (!$(e.target).closest(".menu").length) {
//     // Close all submenus and remove active state
//     $(".menu > ul > li").removeClass("active");
//     $(".menu > ul > li > ul").slideUp();
//     localStorage.removeItem("activeSidebarLink");
//     localStorage.removeItem("activeSubmenuLink");
//   }
// });
