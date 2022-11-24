//DOM
        //Document Object Model, it is your javascript window into your webpage
        //the HTLM is called document. the HTML file is a document file
        //what we interaract with in HTML is called elements.
        //this is how to select the element(s) with tag name p.
        //the textP is an array of all the p elements in the document

        const text = document.getElementsByTagName('p')
        //How to select an element with a ClassName
        const contain = document.getElementsByClassName('container')
        //how to select element with an Id

        const otext= document.getElementById('text')
        otext.style.width = '45%'
        otext.style.backgroundColor = 'aqua'
        otext.style.color = ''




        //we can select a


        const nav = document.querySelector('.nav')

        //how to select a tag element using querryselector. Because it is a tag, we use the tag name only.

        const img = document.querySelector('img')
        img.style.float = 'right'
        img.style.width = '45%'
        img.style.height = '35%'
        img.style.padding = '10px'

        console.log(img)

        //how to select a tag element using a querryselector. Because it is an Id, WE use the # tag
