const records = [];

function calcArea(width, breadth) {
    let area = width * breadth;
    const recordObject = {
        width : width + "ft",
        breadth: breadth + "ft",
        area : area + "sqft"
    }
    records[records.length] = recordObject;
    return area + "sqft"; 
}

console.log(calcArea(12,70));
console.log(calcArea(20,60));

console.table(records);