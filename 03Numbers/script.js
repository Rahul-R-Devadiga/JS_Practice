document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add").addEventListener("click", function () {
        calculate("add");
    });

    document.getElementById("sub").addEventListener("click", function () {
        calculate("sub");
    })
    document.getElementById("multiply").addEventListener("click", function () {
        calculate("multiply");
    })
    document.getElementById("divide").addEventListener("click", function () {
        calculate("divide");
    })
    document.getElementById("modulus").addEventListener("click", function () {
        calculate("modulus");
    })

    function calculate(operations) {

        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        if (isNaN(num1)) {
            document.getElementById("result").innerHTML = "Enter First Number";
        } else if (isNaN(num2)) {
            document.getElementById("result").innerHTML = "Enter Second Number";
        } else {
        switch (operations) {
            case "add":
                document.getElementById("result").innerHTML = num1 + num2;
                break;
            case "sub":
                document.getElementById("result").innerHTML = num1 - num2;
                break;

            case "multiply":
                document.getElementById("result").innerHTML = num1 * num2;
                break;

            case "divide":
                if(num2 === 0){
                    document.getElementById("result").innerHTML = "Can't be divided by 0"
                }else{
                    document.getElementById("result").innerHTML = num1/num2;
                }
                break;

            case "modulus":
                if(num2 === 0){
                    document.getElementById("result").innerHTML = "Can't be divided by 0"
                }else{
                    document.getElementById("result").innerHTML = num1 % num2;
                }
                break;

            default:
                document.getElementById("result").innerHTML = "Invalid Choice";
                break;
        }
        }
    }
});
