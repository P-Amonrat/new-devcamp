debugger;
function draw (n){
    let value = "";
    let raw = n + (n-1);
    let col = n + (n-1);
    let add = 0;
    let plus = 0;
    let myArr = [raw,col]
        for (let i=1; i<=raw; i++){
            if (i <= n){
                add++;
                num = (plus-n) + add;
            }
            else {
                add--;
                num == num;
            }
            for (let j=1; j<=col; j++){
                myArr[i] = i;
                myArr[j] = j;
                if (num < myArr[i]-myArr[j] || n+add <= myArr[j] ){
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