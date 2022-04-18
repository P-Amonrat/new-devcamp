debugger;
function draw (n){
    let value = "";
    let sum = n + (n-1);
    let add = 0;
    let plus = 0;
        for (let i=1; i<=sum; i++){
            if (i <= n){
                add++;
                num = (plus-n) + add;
            }
            else {
                add--;
                num == num;
            }
            for (let j=1; j<=sum; j++){
                if (num < i-j || n+add <= j ){
                    value += "_";
                }
                else {
                    value += "*";
                }
            }
            value += "\n";
            plus++;	
        }
        console.log(value);
    }
    
    draw(2);
    draw(3);
    draw(4);