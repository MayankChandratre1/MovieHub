function User(username, password){
    this.username = username
    this.password = password
}

const users = [
    {
        username: "Aditya",
        password: "adi123"
    }
]

let currentLoggedIn = null;

function create(username, password){
    const user = { username, password };
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);
   
    localStorage.setItem('users', JSON.stringify(users));
}

function loginInit(){
    toggle(document.querySelector('.login-box'),'flex',event)
    
    document.querySelector(".login-box .login").addEventListener("click",(e)=>{
        // e.preventDefault()
        login()
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
        document.querySelector(".user-button").innerHTML = currentUser["username"].charAt(0)
    })
}


document.querySelector(".user-button").addEventListener("click",(e)=>{
    
})


document.querySelector("header .user-button").onclick = (e)=>{
    toggle(document.querySelector('.logout-box'),'grid',e)
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    if(currentUser)
        init(currentUser);
}

if(document.querySelector("#signup-button")){
    document.querySelector("#signup-button").onclick = (e)=>{
        e.preventDefault()
        let uname = document.querySelector("#username-ip").value;
        let pass = document.querySelector("#password-ip").value;
        create(uname,pass)
        console.log(users)
        document.querySelector("#signup-button").innerHTML = "You can Return to login"
    }
}


function contains(user){
    for(let obj of users){
        if(obj["username"] == user["username"])
            return true
    }
    return false
}



function init(user){
    if(document.querySelector(".logout-box")){
    document.querySelector(".logout-box .username").innerHTML = user["username"]
    }
    
}

function logout(e){
    localStorage.removeItem('currentUser');
    document.querySelector(".logout-box .username").innerHTML = "Username"
    document.querySelector(".user-button").innerHTML = "U"
    window.location.reload()
    toggle(document.querySelector('.logout-box'),'none',e)
}


function login(){
    let uname = document.querySelector("#username").value
    let pass = document.querySelector("#password").value

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === uname && u.password === pass);

    if (user) {
      
        document.querySelector(".login-box .invalid").innerHTML = ".."
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        currentUser = user
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        toggle(document.querySelector('.login-box'),'none')
    } else {
        console.log('Invalid username or password');
        document.querySelector(".login-box .invalid").innerHTML = "Invalid Username or password"
    }
   
}





