let diamond = ''

let h = 7
let count = 1

for (let i = 1; i < h + 1; i++) {
    if (i < 5) {
        for (let j = 5 - i; j > 0; j--) {
            diamond += " "
        }
        for (let j = 1; j < count * 2; j++) {
            diamond += "*"
        }
        count++
        diamond += '\n'
    }
    else{
        for (let j = count-3; j > 0; j--) {
            diamond += " "
        }
        for (let j = 1; j < 16-2*count; j++) {
            diamond += "*"
        }
        count++
        diamond += '\n'
    }
}
console.log(diamond)