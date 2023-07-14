function calculatePrimeSum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Vui lòng nhập đúng giá trị a và b!";
        return;
    }

    if (num1 >= num2) {
        document.getElementById("result").innerText = "Giá trị a phải nhỏ hơn b!!!";
        return;
    }

    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    document.getElementById("result").innerText = "Tổng các số nguyên tố trong khoảng từ " + num1 + " đến " + num2 + " là " + sum + ".";
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
