const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_manu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    mobile_manu.classList.toggle("active");

});

document.addEventListener("scroll", ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEech((item) =>{
    item.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        mobile_manu.classList.toggle("active");

    })
})
















