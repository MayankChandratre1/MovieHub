function toggle(element, display, event){
    if(element.style.display == 'none')
        element.style.display = display
    else
        element.style.display = 'none'
    event.stopPropagation()
}
function toggleUserButton(element, display, event){
    if(element.style.display == 'none')
        element.style.display = display
    else
        element.style.display = 'none'
    // event.stopPropagation()
}
