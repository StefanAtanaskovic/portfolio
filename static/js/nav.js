let curNav = "aboutNav";

function setSelected(clickedId) {
    if (curNav === clickedId) {
        return
    }
    document.getElementById(curNav).classList.remove("selected");
    document.getElementById(clickedId).classList.add("selected");
    curNav = clickedId;
}
