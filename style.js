var typed=new Typed('#element',{
    strings: ['Web Developer','Devops Engineer','Software Tester'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1,
    loop:true,
    
});

function changeTextColor(){
    const textElement=document.getElementById("randomtext");
    const randomColor=getRandomColor();
    textElement.style.color=randomColor;
}
function getRandomColor(){
    const letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
window.onload=changeTextColor;
