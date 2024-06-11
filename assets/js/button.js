let currentIndex = 0;


// Function to move slides
function moveSlide(direction) {
    const items = document.querySelectorAll(".carousel-item");
    
    items[currentIndex].classList.remove("active");
    
    // Update currentIndex by adding direction, using modulo to wrap around
    currentIndex = (currentIndex + direction + items.length) % items.length;
    
    // Add the active class to the new current item
    items[currentIndex].classList.add("active");

}
