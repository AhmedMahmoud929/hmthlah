let salah = document.getElementById("salah");
const jumpSfx = new Audio('./jump.mp3');
const fourHm = new Audio('./4hm.mp3');
//     fourHm.play();

// jumping function
function jump() {
    if (salah.classList != ("jump")) {
        salah.classList.add("jump");
        setTimeout(function() {
            salah.classList.remove("jump");
        }, 700)
    }
}
let win = true;
//losing function
setInterval(function() {
    let salahPosition = parseInt(window.getComputedStyle(salah).getPropertyValue("top"));
    let casPosition = parseInt(window.getComputedStyle(cas).getPropertyValue("left"));
    if (casPosition < 980 && casPosition > 910 && salahPosition > 190) {

        document.getElementById("losingPage").style.display = "flex";
        win = false;

        document.querySelector("#losingPage .right .score").innerHTML = document.querySelector("h2 span").innerHTML;
        cas.style.display = "none";
        if (document.querySelector("#losingPage .right .score").innerHTML == 4) {
            fourHm.play();
        }
    }


}, 100)


// winning function 
let i = 1;
setInterval(function() {
    if (win == true) {

        document.querySelector("h2 span").innerHTML++;
        if (document.querySelector("h2 span").innerHTML == i * 10) {
            jumpSfx.play();
            i++;
        }

    }


}, 1000)




document.addEventListener("keydown", function(event) {
    jump();


})