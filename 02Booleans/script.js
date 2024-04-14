document.addEventListener("DOMContentLoaded",function(){
    function isEven(number) {
        return number % 2 === 0;
    }
    
    function isOdd(number){
        return !isEven(number);
    }
    document.getElementById("Even").innerHTML += "Is 4 even?: " + isEven(4);
    document.getElementById("Even").innerHTML += "<br>Is 7 even?: " + isEven(7);

    document.getElementById("Odd").innerHTML += "Is 4 odd?: " + isOdd(4);
    document.getElementById("Odd").innerHTML += "<br>Is 7 odd?: " + isOdd(7);
});