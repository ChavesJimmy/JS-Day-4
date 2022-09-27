//ex1


function print(){

    let myName = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    
    let classElement = "";
    let count = myName.trim().length;
    console.log(myName.trim().length);

    if ( count <= 5 ) {
            classElement = "red" }
    else {
            classElement = "green"
        };


document.getElementById("result").innerHTML = (`Name: ${myName} <br> Surname: ${surname} <br>Age:${age} `);

document.getElementById("result").setAttribute("class", classElement);
}

let result = document.getElementById("submit");
result.onclick = print;