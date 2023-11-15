
var prevScrollPos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos){
        document.querySelector("#navbar").classList.remove("hidden");
    }
        else {
            document.querySelector("#navbar").classList.add("hidden");
        }
        prevScrollPos = currentScrollPos;
    }

