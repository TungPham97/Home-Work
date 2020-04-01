let username = prompt('Please enter your username: ');
let password = prompt('Please enter your password: ');
let username2 = 'tung';
let password2 = '1234';

if (username === username2 && password === password2) {
    console.log('Đăng nhập thành công.');
} else if (username === username2){
    console.log('password wrong.');
} else if (password === password2) {
    console.log('username wrong.');
}
