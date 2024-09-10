function addListItem() {
    const newListItem = document.createElement("listItem");
}
document.getElementsById("keyInput").addEventListener("keydown", function(e) {
    var keyCode = e.keyCode || e.which;
    if(keyCode === 13) {
        addListItem();
    }
}, false);