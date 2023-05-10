let slides = document.querySelectorAll('.slide-container');
let index = 0;
let nextbtn = document.getElementById("next")
let prevbtn = document.getElementById("prev")


//function to move the images forward 

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active'); 
}

nextbtn.addEventListener("click", next);

//function to move the images backward 

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active'); 

}   
prevbtn.addEventListener("click", prev);


// automatic play function 

setInterval(next, 4000);