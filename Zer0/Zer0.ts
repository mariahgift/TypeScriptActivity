import assert from "assert";

function endZeros(a:number): number {
    let numStr = a.toString();
    let splitted = numStr.split("");

    let count: number = 0;
    for (let index = 0; index < splitted.length; index++) {
        if (splitted[index] == "0") {
            count += 1;
        }   
    }
    return count;
}

console.log(endZeros(1));
console.log(endZeros(0));
console.log(endZeros(10));
console.log(endZeros(100));
console.log(endZeros(1000));


//These "asserts" are used for self-checking
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(100), 2);
assert.strictEqual(endZeros(1000), 3);