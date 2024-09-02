const imageContainer = document.querySelector(".image-container")
const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")

let x = 0
timer;
prevEl.addEventListener("click",()=>{
 x = x + 45;
 clearTimeout(timer)
 updateGallery()
});
nextEl.addEventListener("click",()=>{
 x = x - 45;
 clearTimeout(timer)
 updateGallery()
});c

function updateGallery(){
    imageContainerEl.style.transform = `pespective(100px) rotateY(${x}deg)`
    timer = setTimeout(()=>{
      x = x - 45 
      updateGallery

    },3000)
};

updateGallery()