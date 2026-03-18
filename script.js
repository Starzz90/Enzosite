function PROJECTS() {
    window.location.href = "https://github.com/Starzz90/MINI-PROJECTS.git";
}
function WEB(){
    window.location.href = "https://starzz90.github.io/Enzo-s-Quest/";
}
function CALC(){
    window.location.href = "https://starzz90.github.io/Webcalc./";
}
function GITHUB(){
    window.location.href = 'https://github.com/Starzz90';
}
function EMAIL(){
    window.location.href = 'mailto:enzodavidsontjen@gmail.com';
}
function SPOTIFY(){
    window.location.href = 'https://open.spotify.com/user/5x18tquo4f6y6o3fi2eihkfzl';
}
function myPYTHON() {
    alert("Python is the first language that I learned when I started programming. Even though nowadays I rarely use it, I aim to practice it more in the future and use it for my upcoming projects.");
}
function myHTML() {
    alert("HTML is the language that I think is not that complicated, though it may be problematic sometimes.");
}
function myCSS(){
    alert("CSS is a language that i fell in love with due to my lkiking for design and art. This language enables me to fully embrace my liking in a coding format.")
}
function myJS(){
    alert("Javascript is a language that i find difficult to grasp likely due to how its structured. But i'm aiming to mastering it in the future due to its flexibility and wide range of use cases.")
}
document.addEventListener("DOMContentLoaded", function () {
    var pyLink = document.getElementById("python-link");
    if (pyLink) {
        pyLink.addEventListener("click", function (e) {
            e.preventDefault();
            myPYTHON();
        });
    }
    var htmlLink = document.getElementById("html-link");
    if (htmlLink) {
        htmlLink.addEventListener("click", function (e) {
            e.preventDefault();
            myHTML();
        });
    var cssLink = document.getElementById("css-link");
    if (cssLink) {
        cssLink.addEventListener("click", function (e) {
            e.preventDefault();
            myCSS();
        });
    }
    var jsLink = document.getElementById("js-link");
    if (jsLink) {
        jsLink.addEventListener("click", function (e) {
            e.preventDefault();
            myJS();
        });
    }
});