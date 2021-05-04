const text = document.getElementById("print")


function fizz() {
    var x = document.getElementById("start").value;
    var y = document.getElementById("stop").value;

    
    for (x = 1; x < y; x++) {
        // console.log(x)
        if (x % 15 == 0) {
            console.log(`${x} FizzBuzz`)
            let node = document.createElement("p");
            node.appendChild(document.createTextNode(`${x} FizzBuzz`));
            text.appendChild(node).style.color = "blue";
        }
        else if (x % 3 == 0) {
            console.log(`${x} Fizz`)
            let node = document.createElement("p");
            node.appendChild(document.createTextNode(`${x} Fizz`));
            text.appendChild(node).style.color = "green";
        } 
        else if (x % 5 == 0) {
            console.log(`${x} Buzz`)
            let node = document.createElement("p");
            node.appendChild(document.createTextNode(`${x} Buzz`));
            text.appendChild(node).style.color = "orange";
        }
    }
}
