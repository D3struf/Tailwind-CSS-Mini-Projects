function dropdown() {
    const dropdownElement = document.getElementById("dropdown");
        
    if (dropdownElement.classList.contains("hidden")) {
        dropdownElement.classList.remove("hidden");
        setTimeout(() => {
            dropdownElement.classList.remove("opacity-0");
            document.getElementById("rotate").classList.add("rotate-180");
        }, 200);
    } else {
        dropdownElement.classList.add("opacity-0");
        setTimeout(() => {
            dropdownElement.classList.add("hidden");
            document.getElementById("rotate").classList.remove("rotate-180");
        }, 200);
    }
}