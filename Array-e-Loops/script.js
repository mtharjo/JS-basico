const links = document.querySelectorAll("nav a");

function ativarLink(link) {
    if(link.href === document.location.href){
        link.style.background = "black";
        link.style.color = "white";
    }
}

links.forEach(ativarLink);