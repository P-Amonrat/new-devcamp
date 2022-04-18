function draw(n){
    let value = "";
    let num = 0;
        for (let i=0; i<n; i++){
            value += num ;
            num += 2;	
            value += "\n";
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);