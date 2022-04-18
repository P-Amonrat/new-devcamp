debugger;
function draw (n){
    let value = "";
    let num = 1 ;
    let sum = n + (n-1);
        for (let i=1; i<=n; i++){
            for (let j=1; j<=sum; j++){
                if (1 <= i-j || n+n+1 <= j+i ){
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