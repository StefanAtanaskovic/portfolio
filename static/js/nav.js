sessionStorage.setItem("currentNav", "aboutNav");

function setSelected(clickedId) {
    document.getElementById(sessionStorage.getItem("currentNav")).classList.remove("selected");
    document.getElementById(clickedId).classList.add("selected");
    sessionStorage.setItem("currentNav", clickedId);
}
