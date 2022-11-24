const text = document.querySelector('.text')
text.style.color = 'green'
text.style.width = '40%'
text.style.fontSize = '22px'
console.log(text)
//to pick out the content in an element, we use any of this three methods:
//1)innerHTML
//2)textContent
//3)innerText
//innerhtml
console.log(text.innerHTML)

//TextContent
console.log(text.textContent)
//innertext
console.log(text.innerText)

//how to add styles with java script
const h1 = document.querySelector('h1')

// h1.style.backgroundColor= 'red'
// h1.style.color= 'white'
// h1.style.padding='10px'
// h1.style.textAlign = 'center'
// h1.style.borderRadius= '10px'

// const p = document.querySelector('p')
// p.style.color= 'green'
// p.style.backgroundColor= 'orange'

//ATTRIBUTE

const passInput=document.querySelector('#passInput')

const imgOne= document.querySelector('.imgOne')

console.log(imgOne.getAttribute('src'))

console.log(passInput.getAttribute('type'))

//looping in DOM

const img=document.querySelectorAll('img')

for(const images of img){
    console.log(images.getAttribute('src'))
}
//setAttribute
//this helps us to change the attribute of an element, it is the idea behind password toggle
passInput.setAttribute("type","password")

for(const images of img){
    images.setAttribute('src','https://technofaq.org/wp-content/uploads/2019/04/web-design-development.jpg')
}

//CLASSLIST
//in Classlist we have 4 methods
//classlist.add,classlist.remove,classlist.replace, classlist.toggle

//classlist.add
//this can help us add class(es)to an element, most especially CSS class
const h1=document.querySelector('h1')
h1.classList.add('lorem')