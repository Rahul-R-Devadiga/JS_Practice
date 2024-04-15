document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("calculate").addEventListener("click", function () {
        var length = parseFloat(document.getElementById("length").value);
        var width = parseFloat(document.getElementById("width").value);
        
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            document.getElementById("result").innerHTML = "Please enter valid length and width values. ";
        } else {
            var area = calculateArea(length, width);
            var perimeter = calculatePerimeter(length, width);

            document.getElementById("result").innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
        }
    });
});

function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}
