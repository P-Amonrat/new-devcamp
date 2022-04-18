function draw (n){
    let value = "";
    let num = n;
        for (let i=0; i<n; i++){
            for (let j=1; j<=n; j++){
                if (j <= num ){
                    value += "*";
                }
                else {
                    value += "_";
                }
            }
            value += "\n";
            num--;
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);