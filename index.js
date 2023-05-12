let slides = document.querySelectorAll('.slide-container');
let index = 0;
let nextbtn = document.getElementById("next")
let prevbtn = document.getElementById("prev")


//function to move the images forward when clicked on the button next

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active'); 
}
// event listener for the next button
nextbtn.addEventListener("click", next);


//function to move the images backward when the previous buttons is clicked
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active'); 

}  
// event listener for the next button 
prevbtn.addEventListener("click", prev);


// automatic play function 
setInterval(next, 4000);