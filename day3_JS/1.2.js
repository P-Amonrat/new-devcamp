function draw(n){
    value = "";
    for (let j=0; j<n; j++){
        for (let i=0; i<n; i++){
            value += "*";
        }
        value += "\n";
    }
    console.log(value);
}
draw(2);
draw(3);
draw(4);
