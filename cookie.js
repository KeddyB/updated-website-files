const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button")

acceptBtn.onclick = ()=>{
    //setting cookie for a month after one month it will expire
    document.cookie = "CookieBy=Keddy; max-age="+60*60*24*30;
    if(document.cookie){
        cookieBox.classList.add("hide");
    }
    else{
        alert("Cookie cannot be set");
    }
}
//check if the cookie has expired and show the cookie box
let checkCookie = document.cookie.indexOf("CookieBy=Keddy")
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide")