let slides = document.querySelectorAll('.slide-container');
let index = 0;
let nextbtn = document.getElementById("next")
let prevbtn = document.getElementById("prev")


//next function 
function next(){
    // console.log("1");
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active'); 
}

nextbtn.addEventListener("click", next);

//previous function 
function prev(){
    // console.log("-1");
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active'); 

}   
prevbtn.addEventListener("click", prev);


//autoplay

setInterval(next, 4000);