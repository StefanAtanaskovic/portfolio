let curNav = "aboutNav";
let currentSelcetedNavElement = document.getElementById("aboutNav");

function setSelected(clickedId) {
    if (curNav === clickedId) {
        return
    }
    currentSelcetedNavElement.classList.remove("selected");
    currentSelcetedNavElement = document.getElementById(clickedId);
    currentSelcetedNavElement.classList.add("selected");
    curNav = clickedId;
}
