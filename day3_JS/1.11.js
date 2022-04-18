debugger;
function draw(n){
    let value = "";
        for (let i=0; i<n; i++){
            for (let j=0; j<n; j++){
                if (i==j) {
                    value += "_";
                }
                else {
                    value += "*";
                }
            }
            value += "\n";
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);