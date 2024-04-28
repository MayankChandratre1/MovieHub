let movies = [
    { name: "3 Idiots", link: "/pages/3idiots.html" },
    { name: "Apurva", link: "/pages/apurva.html" },
    { name: "Bajrangi Bhaijaan", link: "/pages/bajrangibhaijaan.html" },
    { name: "Bhool Bhulaiya 2", link: "/pages/bhoolbhulaiyaa2.html" },
    { name: "Chandigarh Kare Ashique", link: "/pages/chandigarhkareashiqui.html" },
    { name: "Chennai Express", link: "/pages/chennaiexpress.html" },
    { name: "Gadar 2", link: "/pages/gadar2.html" },
    { name: "Housefull 4", link: "/pages/housefull4.html" },
    { name: "Inside Out 2", link: "/pages/insideout2.html" },
    { name: "Jab We Met", link: "/pages/jabwemet.html" },
    { name: "Jawan", link: "/pages/jawan.html" },
    { name: "Koi Mil Gaya", link: "/pages/koimilgaya.html" },
    { name: "Sanam Teri Kasam", link: "/pages/sanamterikasam.html" },
    { name: "Shershaah", link: "/pages/shershaah.html" },
    { name: "Vikram Vedha", link: "/pages/vikramvedha.html" }
];

let searchbar = document.querySelector("#search-bar")
let searchButton = document.querySelector(".search-button")


function searchMovies(query) {
    query = query.toLowerCase(); // Convert search query to lowercase for case-insensitive comparison
    return movies.filter(movie => movie.name.toLowerCase().includes(query));
}

function addMovies(event) {
    let query = event.target.value.trim(); // Get the search query
    let results = searchMovies(query);
    let parent = document.querySelector(".movie-list")
    let child = "" // Search for movies matching the query
    if (results.length > 0) {
        console.log("Found movies:", results);
        
        results.forEach((movie)=>{
            child += `<a href="${movie.link}"><li>${movie.name}</li></a>`
        })
        if(query === ""){
            child = ""
        }
        parent.innerHTML = child
    } else {
        console.log("No movies found");
        if(query === ""){
            child = ""
        }
        parent.innerHTML = child
        // Handle case when no movies match the query
    }    
}

async function createLink(){
    let query = searchbar.value.trim(); // Get the search query
    let results = searchMovies(query);
    let parent = document.querySelector(".movie-list")
    let child = "" // Search for movies matching the query
    if (results.length > 0) {
        console.log("Found movies:", results);
        console.log(results[0].link)
        window.location.href = results[0].link;
    } else {
        console.log("No movies found");
        let modal = document.querySelector('.notfound');
        modal.style.opacity = "1"
        setTimeout(()=>{
            modal.style.opacity = "0"
            window.location.href = "";
        },2000)
    }    

}

document.getElementById("search-bar").addEventListener("input",(e)=>{
    if(e.target.value !== "")
    addMovies(e)
    else
    document.querySelector(".movie-list").innerHTML = ""
})

searchButton.addEventListener("click", ()=>{
    if(searchbar.value !== "")
      createLink()
})