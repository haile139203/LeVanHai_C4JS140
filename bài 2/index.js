function numberOneTriangle(n) {
    let triangle = document.getElementById("triangle");
    let output = "";

    for (let i = 1; i <= n; i++) {
        output += "* ".repeat(i) + "\n";
    }

    triangle.textContent = output;
}

numberOneTriangle(10); // Nhập số 1-10
