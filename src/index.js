import './less/index.less'

// Your code goes here!

// // testing out my skills 
//1
const navTags = document.querySelectorAll('nav a');
// console.log(navTags);

navTags.forEach( tag => {
    tag.addEventListener('mouseover',()=>{
    alert('click me please');
})})
//2
const headImg = document.querySelector('.intro img');

headImg.addEventListener('click', () => {
    headImg.src = 'data:image/jpeg;base64,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'
    
});
//3
window.onload = function () {
    const heading = document.querySelector('h1');
    heading.textContent = 'Lets SPIN THESE WHEELS';
// 4 copy
    window.addEventListener('copy', ()=> {
        navigator.clipboard.readText()
            .then(text => {
                console.log(text);
                heading.textContent += text;
            })
    })
}

//5
document.body.addEventListener('click',(e) => {
    e.target.classList.toggle('mirror');
    console.log('he');
})

//6 dbclick
document.body.addEventListener('dblclick',(e) =>{
    e.target.outerHTML = '';
})

// 7 keydown
window.addEventListener('keydown', e=>{
    if(e.key == 6){
        document.body.innerHTML='<h1>You ran order 66</h1>';
    }
})
// 8 mousemove
document.body.addEventListener('mousemove', e =>{
    const {clientX,clientY} = e;
    // console.log(`mouse is at ${clientX}, ${clientY}`)
})
// 9 mousenter
// 10 mouseleave
const destinations = document.querySelectorAll('.destination')
console.log(destinations);
for ( let destination of destinations ){
    destination.addEventListener('mouseenter',()=>{
        destination.style.fontWeight = 'bold';
    })
    destination.addEventListener('mouseleave', () =>{
        destination.style.fontWeight = 'initial';
    } )
}
