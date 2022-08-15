//Q1
let para=document.getElementById("select");
function highlit(element){
    const words=element.textContent.split(" ");
    let taille='hasna';
    for(let i=0; i<words.length;i++){
        if(words[i].length>taille.length){
            
            element.innerHTML = element.innerHTML.replace(words[i],`<mark>${words[i]}</mark>`);
        }

    }
    return;
}
highlit(para);


//Q2
const newElt=document.createElement('a');
var lien=document.createTextNode("https://forcemipsum.com/");
newElt.appendChild(lien);
newElt.href="https://forcemipsum.com/";
let elt=document.getElementById("main");
elt.appendChild(newElt);

//Q3
para.innerHTML=para.innerHTML.split('.').join('</p><p>')+'</p>';

//Q4
let mot=para.textContent.split(" ");
let count=0;
for(let i=0; i<mot.length;i++){
    count++;
}
console.log(count);
const numb=document.createElement('span');
var number=document.createTextNode(" "+count);
numb.appendChild(number);
let neww=document.getElementById("heading");
neww.appendChild(numb);

//Q5
Array.from(document.querySelector('p')).forEach(p => {
    p.innerHTML=p.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😮');
})
