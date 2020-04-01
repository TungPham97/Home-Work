let userName = prompt('Please enter your name: ');
let userAge = Number(prompt('Please enter your age: '));

if (userAge < 18) {
    console.log(userName + ' chưa đủ tuổi vào trang web này.');
} else {
    let answer = prompt(`${userName} có muốn đăng nhập vào trang web này không.`);
    if ( answer === 'yes') {
        console.log(`${userName} đã vào được trang web thành công.`);
    } else {
        console.log(`${userName} thoát khỏi trang web.`);
    }
}