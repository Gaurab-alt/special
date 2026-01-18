let noBtn = document.querySelector('#no-btn');
let yesBtn = document.querySelector('#yes-btn');
let click = 0;
noBtn.addEventListener('click', (event) =>{
click++;
    style = window.getComputedStyle(noBtn, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
yesBtn.style.fontSize = `${currentSize*1.5*click}px` ;
if(click === 1)
{
    noBtn.textContent = 'Are you Sure??'
}
else if(click === 2)
{
    noBtn.textContent = 'Really Sure??'
}
else if(click === 3)
{
    noBtn.textContent = 'Are you Positive?'
}
else if(click === 4)
{
    noBtn.textContent = 'Pookie please....'
}
else if(click === 5)
{
    noBtn.textContent = 'Just think about it'
}
else if(click === 6)
{
    noBtn.textContent = 'If you say no,I will be really sad..'
}
else if(click === 7 )
{
    noBtn.textContent = 'I will be really sad...'
}
else if(click === 8)
{
    noBtn.textContent = 'I will be very very sad...😔😔'
}
else if(click === 9){
  yesBtn.style.position = 'fixed';
yesBtn.style.top = '0';
yesBtn.style.left = '0';
yesBtn.style.width = '100vw';
yesBtn.style.height = '100vh';
yesBtn.style.width = '100%';


}
console.log(`${click}`);
})


yesBtn.addEventListener('click', ()=>{
    window.location.href= 'final.html'
})