//---------start mobile menu-------//
var icon = document.querySelector('.menu')
var bars = icon.querySelector('.fa-bars');
var listmenu = document.querySelector('#listmenu');

icon.onclick = function(){
    if(listmenu.style.maxHeight =="200px"){
listmenu.style.maxHeight ="0px";
bars.classList.contains('fa-bars');
bars.classList.replace('fa-times', 'fa-bars');
    }
    else{
        listmenu.style.maxHeight="200px";
        bars.classList.replace('fa-bars', 'fa-times');
  
    }
}



        const header = document.querySelector('header');
        window.addEventListener('scroll', () =>{
        if(window.pageYOffset > 200){
        header.classList.add('header-bg')
        }
        else{
          header.classList.remove('header-bg')
        }
        })
//top to scrollbar 
var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('to-top-active');
    }
    else{
        toTop.classList.remove('to-top-active');
    }
})
var privacy = document.querySelector('.privacy');
function openPopup(){
    privacy.classList.add('privacy-active');
}
function closePopup(){
    privacy.classList.remove('privacy-active');
}




