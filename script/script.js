var header = document.getElementById("header");
var nav = document.getElementsByClassName("nav");
var scroller = window;
var lastScrollTop = 0;

scroller.onscroll = () =>{
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
if (st > lastScrollTop){
    header.style.background = "rgb(90, 90, 90, 0.75)";
} else {
    header.style.background = "rgb(90, 90, 90)";
}
}

