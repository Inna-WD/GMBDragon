// functions

function menuVisible() /* show menu on click in mobile version */
{
    document.getElementById("search").classList.toggle("visible");
    document.getElementById("account").classList.toggle("invisible");
    document.getElementById("mainmenu").classList.toggle("visible");
    let menuValue= document.getElementById("menu").innerHTML;
    if (menuValue == 'menu')
    {
        document.getElementById("menu").innerHTML = 'clear';
    }
    else if (menuValue=='clear')
    {
        document.getElementById("menu").innerHTML = 'menu';
    }
    
}
function searchVisible() /* make search on tablet screen size */
{
   if (window.innerWidth >= 650 && window.innerWidth <= 1200)
   {
    // document.getElementById("search").children[0].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("notVisible");
    document.getElementById("search").children[1].classList.toggle("makeVisible");  
   }
   if (window.innerWidth > 1200)
   {
   document.getElementById("search").children[0].classList.toggle("searchVisible");  
    document.getElementById("search").children[1].classList.toggle("searchVisible");
   }
}


window.addEventListener("load", ()=> { /* things to be done when page is loaded */
    let dropMenu = document.getElementById("menu");
    dropMenu.addEventListener("click", menuVisible);
    let searchMenu = document.getElementById("srchicon");
    searchMenu.addEventListener("click", searchVisible);
    
});