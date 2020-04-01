let loop = 'yes';

while (loop === 'yes') {
    let userString = prompt('Please enter a string: ');
    let revertString = userString.split('').reverse().join('');
    console.log(revertString);
    loop = prompt('Bạn có muốn tiếp tục nữa không.');
}
