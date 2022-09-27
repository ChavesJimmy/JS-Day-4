//ex 1 santa must disappear
function removeItem () {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => {
        this.remove();
    }, 1000);
}

function removeSanta(){
    let items = document.getElementsByClassName("santa");
    
    for (let i=0; i < items.length; i++){
        items[i].addEventListener("click",removeItem);
    }console.log(items)
}
removeSanta()


//ex2 random bg-color by clicking on button
function random_bg_color() {
    let container = document.getElementById("container");
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    container.style.background = bgColor;
    
}
let change = document.getElementById("randonBG");
   
     change.onclick = random_bg_color;