document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
        let startdate = new Date(document.getElementById("startdate").value);
        let enddate = new Date(document.getElementById("enddate").value);
        if (isNaN(startdate.getTime()) || isNaN(enddate.getTime())) {
            document.getElementById("result").innerHTML = "Please enter valid dates."
        } else {
            let timeDiff = Math.abs(enddate.getTime() - startdate.getTime());
            let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            document.getElementById("result").innerHTML = "Numbers of days between the dates: " + dayDiff;
        }
    });
});