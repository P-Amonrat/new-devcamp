debugger;
let myList = [
    [0, 1, 2],
    [3, 4, 5]
];
let text = '';
for (let i=0; i<myList.length; i++) {
    for (let j=0; j<myList[i].length; j++) {
        text += myList[i][j].toString();
    }
    text += '\n';
}
console.log(text);



