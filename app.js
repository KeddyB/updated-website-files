const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransition(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentButton = document.querySelectorAll('.active-btn')
            currentButton[0].className = currentButton[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }
    //sections active class
    allSections.addEventListener('click', pageT)
}
function pageT(e){
     const id = e.target.dataset.id;
     if(id){
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active');
    }
}
//toggle theme
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', ()=>{
    let element = document.body
    element.classList.toggle('light-mode')
})
pageTransition()

const cookieBox = document.querySelector(".cookies-box")

window.onload = () =>{
    document.querySelector('.cookies-box').classList.add('cactive')
    document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
}
document.querySelector('.accept').onclick = () =>{
    document.querySelector('.cookies-box').classList.remove('cactive')
    document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
}
document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;