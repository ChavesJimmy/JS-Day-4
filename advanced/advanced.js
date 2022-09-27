function hover (){
    let parent = document.getElementById("text");
    parent.innerHTML = "you are in a circle"
     /*  setTimeout(() => {
        document.getElementById("text").innerHTML = "";
      }, 2000); */
    
}
document.getElementById("dot").addEventListener("mouseover",hover);

function out (){
    let parent = document.getElementById("text");
    parent.innerHTML = "you are out of the circle"
     /*  setTimeout(() => {
        document.getElementById("text").innerHTML = "";
      }, 2000); */
}

document.getElementById("dot").addEventListener("mouseout", out);

function simpleClick (){
    document.body.style.backgroundColor = "gray";
    
}

document.getElementById("dot").addEventListener("click", simpleClick);

function doubleClick (){
    document.body.style.backgroundColor = "blue";
    
}

document.getElementById("dot").addEventListener("dblclick", doubleClick);



