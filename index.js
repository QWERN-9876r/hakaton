const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});
 
const cities = []
const lastLines = [];
let firstLine;
let n = 0;

rl.on('line', (line) => {
    if(firstLine){
        if(n < firstLine) cities.push(line.split(' ').map(Number));
        else lastLines.push(line);
        n++
    }else {
        firstLine = Number(line);
    }
}).on('close', () => {
    const [maxLength, path] = lastLines;

    const needCity = Number(path.split(' ')[1])-1
    const root = new Node(cities[Number(path.split(' ')[0]) - 1])

    for(let i = 0; i < cities.length - 1; i++) {
        const length = getLength(cities[i], root.value);
        if(length <= maxLength && length != 0) {
            root.connected[root.connected.length] = new Node(cities[i]);
        }
    }

    root.connected.forEach(node => {
        for(let i = 0; i < cities.length; i++) {
            const length = getLineLength(cities[i], node.value);
            if(length <= maxLength && length != 0) {
                node.connected[node.connected.length] = new Node(cities[i]);
            }
        }
    });

    console.log(root)
    process.stdout.write();
    
    function getMinPath(root, i) {
        const result = [];
        const flag = false;
        root.connected.forEach(node => {
            if(node !== cities[needCity]) {
                result.push(getMinPath(node, i + 1));
            }
            else {
                flag = true
            }
        })
    }
});

class Node {
    constructor(value) {
            this.value = value;
            this.connected = [];
    }
}

function getLineLength(a, b){
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}