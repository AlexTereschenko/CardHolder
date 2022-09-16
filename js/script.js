const slides=document.querySelectorAll('.slide')

function slidesPlugin(activeSlide = 0) {
    
    slides[activeSlide].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click', ()=> {
            clearActiveClases()
    
            slide.classList.add('active')
        })
    }
    
    function clearActiveClases() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)