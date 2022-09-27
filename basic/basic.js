//ex1


function print(){

    let myName = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let job = document.getElementById("job").value;

    let classElement = "";
    let count = myName.trim().length;
    console.log(myName.trim().length);

    if ( count <= 5 ) {
            classElement = "red" }
    else {
            classElement = "green"
        };

    if (job == "IT"){
            classElement = "bg-yellow"
    };

document.getElementById("result").innerHTML = (`Name: ${myName} <br> Surname: ${surname} <br>Age:${age} <br>Job:${job}`);

document.getElementById("result").setAttribute("class", classElement);
}

let result = document.getElementById("submit");
result.onclick = print;

//ex2
