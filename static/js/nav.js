let navigationElements = document.getElementById("nav").getElementsByTagName("*");

function setSelected(clickedId) {
    Array.from(navigationElements).forEach((elem) => {
        elem.classList.remove("selected");
    });

    console.log("blaa", clickedId);
    document.getElementById(clickedId).classList.add("selected");
}
