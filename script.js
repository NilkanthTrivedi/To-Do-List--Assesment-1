var btnToAdd = document.getElementById("btnToAdd");
var listContainer = document.getElementById("listContainer");

// function addList() {
//     var doItem = document.getElementById("doItem").value;
//     var item = document.createElement("h5");
//     item.innerText = doItem;
//     listContainer.appendChild(item);
// }

btnToAdd.addEventListener("click", function () {
    var doItem = document.getElementById("doItem").value;
    var item = document.createElement("h5");
    item.innerText = doItem;
    listContainer.appendChild(item);
});
