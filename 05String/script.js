document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("calculate").addEventListener("click", function(){
        var sentance = document.getElementById("sentance").value;
        document.getElementById("result").innerHTML = countVowel(sentance);

    });
});

function countVowel(sentance){
    let pattern = /[aeiou]/gi;
    let result = sentance.match(pattern);
    return "Count of Vowel is: " + (result ? result.length : 0);
}