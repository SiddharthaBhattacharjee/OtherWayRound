let init = true;
const writer = document.getElementById("input");
const display = document.getElementById("Revtext");

function update(){
    if(!(writer.value == '' && init)){
        init = false;
        let s = writer.value;
        let rev = s.split("").reverse().join("");
        display.innerHTML = rev;
    }
}


let start = setInterval(update, 100);







