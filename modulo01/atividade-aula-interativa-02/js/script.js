
console.log("Questão 07");
function p4() {
    let interval = null;
    let i = 0;
    let array07 = [];

    interval = setInterval(() =>{
        array07.push(i++);

        if (i === 5) {
            clearInterval(interval);
            console.log(array07);
        }
    }, 1000);
}

console.log(p4());