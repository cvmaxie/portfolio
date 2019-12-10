function dropdown() {
    let navmenu = document.getElementById("navmenu");
    let icon = document.getElementById("icon");

    if (navmenu.className === "navigation") {
        navmenu.className += " responsive";
        icon.src = "svg/x.svg";
    } else {
        navmenu.className = "navigation";
        icon.src = "svg/bars.svg";
    }
}