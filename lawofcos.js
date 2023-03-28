let a;
let b;
let c;
let answer;

window.onload = function(){
    document.getElementById("submitButton").onclick = function (){
        a = document.getElementById("aInput").value;
        a = Number(a);
        
        b = document.getElementById("bInput").value;
        b = Number(b);

        c = document.getElementById("cInput").value;
        c = Number(c);

        if (a < 0 || b < 0 || c < 0 || c > 180) {
            document.getElementById("answer").innerHTML = "The information you have entereed cannot be values for a triangle.";
        } else {
            answer = Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(c * Math.PI / 180);
            answer = Math.sqrt(answer);

            document.getElementById("answer").innerHTML = "Side c: " + answer;
        }
    }
}
