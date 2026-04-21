let divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.onmouseover= () => {
        div.classList.add("red");
    };div.onmouseout=() => {
        div.classList.add("white");
    }});