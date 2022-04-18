debugger;
function draw (n){
    let value = "";
    let num = 2-n ;
    let sum = n + (n-1);
        for (let i=1; i<=n; i++){
            for (let j=1; j<=sum; j++){
                if (num <= i-j || n <= j-i ){
                    value += "_";
                }
                else {
                    value += "*";
                }   
            }
            value += "\n";
            num = num + 2;        
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);