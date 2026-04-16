let divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.onclick= () => {
        div.classList.add("red");
    }});