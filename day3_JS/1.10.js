debugger;
function draw(n){
    let value = "";
        for (let i=1; i<=n; i++){
            for (let j=1; j<=n; j++){
                value += (i*j)  ;
            }
            value += "\n";
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);