function draw (n){
    let value = "";
    let num = 1;
        for (let i=0; i<n; i++){
            for (let j=1; j<=n; j++){
                if (j < num ){
                    value += "_";
                }
                else {
                    value += "*";
                }
            }
            value += "\n";
            num++;
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4)