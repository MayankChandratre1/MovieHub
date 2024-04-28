var isLoggedIn = false

window.onload = ()=>{
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    if(currentUser){
        isLoggedIn = true
        loadUser(currentUser)
    }else{
        isLoggedIn = false
        loadUser(null)
    }


    if(isLoggedIn){
        document.querySelector(".user-button").disabled = false;
        document.querySelector(".rating .submit").disabled = false;
        document.querySelector(".rating .submit").innerHTML = "Rate";
    }
}


function closeAll(event) {
    let modals = [
        document.querySelector(".nav-menu"),
        document.querySelector(".logout-box"),
        document.querySelector(".login-box"),
        document.querySelector(".rate-box")
    ];

    // Check if the clicked element is not inside any modal
    let isInsideModal = modals.some(modal => modal.contains(event.target));
    
    // Close modals if clicked outside and not inside a modal
    if (!isInsideModal) {
        modals.forEach(modal => {
            if (modal.style.display !== 'none') {
                modal.style.display = 'none';
            }
        });
    }
}

// Add event listener to document
document.addEventListener('click', closeAll);


function loadUser(currentUser){
    if(currentUser){
        document.querySelector(".user-button").innerHTML = currentUser.username.toUpperCase().charAt(0)
        
    }else{
        document.querySelector(".user-button").innerHTML = "U"
    }
}