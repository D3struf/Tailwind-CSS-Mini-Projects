
function deactivateAccount () {
    const modal = document.getElementById("deactivate-pop-up");
    
    modal.classList.add("hidden");
    setInterval(() => {
        modal.classList.remove("hidden");
    }, 800);
}