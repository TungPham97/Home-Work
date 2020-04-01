let loop = 'yes';

while (loop === 'yes') {
    let a = parseInt(prompt('Please enter a: '));
    let b = parseInt(prompt('Please enter b: '));
    let c = parseInt(prompt('Please enter c: '));
    if (a === 0) {
        console.log('Không phải phương trình bậc 2.');
    } else {
        let delta = b * b - 4 * a * c;
        if ( delta < 0) {
            console.log('PT vô nghiệm');
        } else if (delta === 0) {
            let result = -b / (2 * a);
            console.log(`PT có nghiệm kép: x1 = x2 = ${result}`);
        } else {
            let result1 = (-b - Math.sqrt(delta)) / (2 * a);
            let result2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log(`PT có 2 nghiệm x1 = ${result1}; x2 = ${result2}`);
        }
    }
    loop = prompt('Bạn có muốn sử dụng chương trình tiếp không.');    
}

