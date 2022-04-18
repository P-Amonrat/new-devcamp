debugger;
function draw(n){
    let value = "";
    let num = 1;
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            value += num;
            num += 1;
        }
        value += "\n";
    }
    console.log(value);
}
draw(2);
draw(3);
draw(4);