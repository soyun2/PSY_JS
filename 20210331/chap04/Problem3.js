let n = 1

let star = ''
let count = n;
for (let i = 0; i < Math.ceil(n / 2); i++) {
    star += ' *'
}
star += '\n '
for (let j = 0; j < Math.floor(n / 2); j++) {
    star += ' *'
}
while (n > 0) {
    console.log(star)
    n--;
}