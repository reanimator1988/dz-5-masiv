
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
 
let maxNumber = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        index = i;
    }
}

let count = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { 
        count++;                  
        sum += arr[i];
        }
}

let int = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        int++;
    }
}

let num = 0;
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        num++;
        sum1 += arr[i];
   }
}

let nplus  = 0;
let nsum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        nplus++;
        nsum += arr[i];
   }
}

let result = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {                   
        result *= arr[i];
        }
}

alert(`1) Кількість позитивних елементів - ${count}
2) Cума позитивних елементів - ${sum}
3) Mаксимальний елемент масиву - ${maxNumber} 
4) Кількість негативних елементів - ${int}
5) Кількість парних позитивних елементів - ${num}
6) Cума парних позитивних елементів - ${sum1}
7) Кількість непарних позитивних елементів - ${nplus}
8) Cума непарних позитивних елементів - ${nsum}
9) Добуток позитивних елементів - ${result}`);