document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addItem").addEventListener("click", function () {
        var item = document.getElementById("item").value;
        if (item.trim() !== "") {
            addItemToList(item.trim());
            document.getElementById("item").value = "";
        } else {
            alert("Please enter the valid item.");
        }
    });
});

function addItemToList(item){
    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}