debugger;
function draw (n){
let value = "";
let myArr = ([],[]);
	for (let i=0; i<n; i++){
		for (let j=0; j<n; j++){
			myArr[i] = i;
            myArr[j] = j;
			if (myArr[j] > myArr[i]){
				value+= "_";
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



