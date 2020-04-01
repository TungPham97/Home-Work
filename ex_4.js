let userBirthMonth = prompt('Please enter your birth month:');
let userName = prompt('Please enter your name: ');

switch (userBirthMonth) {
    case '1':
    case '2':
    case '3':
        console.log(`${userName} sinh vào mùa xuân`);
        break;
    case '4':
    case '5':
    case '6':
        console.log(`${userName} sinh vào mùa hạ`);
        break;
    case '7':
    case '8':
    case '9':
        console.log(`${userName} sinh vào mùa thu`);
        break;
    case '10':
    case '11':
    case '12':
        console.log(`${userName} sinh vào mùa đông`);
        break;
    default:
        console.log('input không hợp lệ');
        break;
}
