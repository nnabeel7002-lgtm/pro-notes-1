

function ToggleNav() {
    
    const nav = document.getElementById("myNav");
    
    nav.classList.toggle("open");
    
}


function checkLogin() {
    let roll = document.getElementById("roll").value.trim();

    let prefix = "BAIF25M";

    if (roll.startsWith(prefix)) {
        let num = parseInt(roll.substring(7)); // get 001–063

        if (num >= 1 && num <= 63) {
            window.location.href="html_files/home.html";
        } else {
            alert("Invalid Roll Number");
        }
    } else {
        alert("Invalid Roll Number Format");
    }
}


