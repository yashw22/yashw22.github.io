
var header = document.getElementById("header"),
    headerHeight = header.clientHeight,
    intro = document.getElementById('intro'),
    introHeight = window.innerHeight - header.clientHeight,
    headerOffsetTop = introHeight;

intro.style.height = introHeight + "px";

window.onscroll = () => {
    if (window.pageYOffset > introHeight) {
        header.classList.add("sticky");
        intro.style.height = introHeight + headerHeight + "px";
    } else{
        header.classList.remove("sticky");
        intro.style.height = introHeight + "px";
    }
}