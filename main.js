let h1 = document.getElementsByTagName('h1')[0];

console.log(h1.innerText);

//2

let li = document.getElementsByTagName('li')[3];
console.log(li);

let last = li.lastChild;

console.log(last);


let p = document.getElementsByTagName('p')[0].innerHTML.toUpperCase();

console.log(p);

let boucle = Array.from(document.getElementsByTagName('li'));
console.log(boucle);
boucle.forEach(element => {
    console.log(element.innerText.toUpperCase());
});