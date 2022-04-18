debugger;
function draw (n){
    let value = "";
    let num = 0
    let sum = n + (n-1);
        for (let i=1; i<=sum; i++){
            if (i > n){
                num--;
            }
            else {
                num++;
            }
            let loop = n - (n-num);
            for (let j=1; j<=n; j++){
                if (j <= loop){
                    value += "*";
                }
                else {
                    value += "_";
                }
            }
            value += "\n";         
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);