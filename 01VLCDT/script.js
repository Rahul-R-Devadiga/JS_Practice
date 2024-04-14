document.addEventListener("DOMContentLoaded", function () {
    let fname = "Rahul";
    let age = 22;
    const isAdult = true;
    document.getElementById("concat").innerHTML =
        "Name: " + fname
        + "<br>Age: " + age
        + "<br>Is Adult: " + isAdult;

    let result =
        "Name: " + fname
        + "<br> Age: " + age
        + "<br> Is Adult: " + isAdult;
    document.getElementById("concat2").innerHTML = result;

    // Arithmetic operations
    let x = 10;
    let y = 5;
    let sum = x + y;
    document.getElementById("arthematic").innerHTML = "Sum: " + sum;
    document.getElementById("arthematic2").innerHTML = "Sum: " + (x + y);

    // Boolean comparisons
    let isEqual = x === y;
    document.getElementById("booleanComparison").innerHTML = isEqual;
    document.getElementById("booleanComparison2").innerHTML = x === y;
});