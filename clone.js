var bgmenu = document.querySelector(".bgmenu")
var navlinks= document.querySelector(".navlinks")
var a = document.querySelectorAll (".a")




function menu() {
    if (navlinks.classList.contains("menu")){

        bgmenu.src = "/images/cross.png"
        

    }

    else {
        bgmenu.src = "/images/menu.png"
        
    }
}






bgmenu.addEventListener("click" , ()=>{
    navlinks.classList.toggle("menu")

            

            menu()
    
})


a.forEach ( a =>{

    a.addEventListener("click" , ()=> {


        navlinks.classList.remove("menu")

        menu()

    })
})