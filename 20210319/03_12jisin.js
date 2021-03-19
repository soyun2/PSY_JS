const year = 1996;
let 간;
let 띠;

switch (year % 12) {
    case 0:
        띠 = '신'
        break;
    case 1:
        띠 = '유'
        break;
    case 2:
        띠 = '술'
        break;
    case 3:
        띠 = '해'
        break;
    case 4:
        띠 = '자'
        break;
    case 5:
        띠 = '축'
        break;
    case 6:
        띠 = '인'
        break;
    case 7:
        띠 = '묘'
        break;
    case 8:
        띠 = '진'
        break;
    case 9:
        띠 = '사'
        break;
    case 10:
        띠 = '오'
        break;
    case 11:
        띠 = '미'
        break;
}
switch (year % 10) {
    case 0:
        간 = '경'
        break;
    case 1:
        간 = '신'
        break;
    case 2:
        간 = '임'
        break;
    case 3:
        간 = '계'
        break;
    case 4:
        간 = '갑'
        break;
    case 5:
        간 = '을'
        break;
    case 6:
        간 = '병'
        break;
    case 7:
        간 = '정'
        break;
    case 8:
        간 = '무'
        break;
    case 9:
        간 = '기'
        break;
}

console.log(간+띠+'년')