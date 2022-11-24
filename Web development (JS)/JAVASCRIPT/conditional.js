// let password= prompt('password:')
//Logical AND, logical NOT and Logical OR
//AND => !, NOT =>, OR => ||

//Logical NOT
//!= (not equalto this does not check the type but the value only)
//!==(strictly not equal to it checks for type and value)
//!<=, !>=
//! can laso be called a negation (it flips a truthy value to a falsy value and vise versa)
// let username = prompt('Enter name')

// if(!username){
//     alert(`welcome ${username}`)
// }
// using the AND to check for username and password

//username must be greater than 6
//username must be greater than 8

// let username = prompt('Enter username') //5
// let password = prompt('Enter password') //3

// if((username.length>6 && password.length>8)){
//     alert(`Hello ${username}`)
// }else{
//     alert('username or password is incorreect')
// }

// //OR Logic
// //logic that can take in those that have paid completly or greater than 60 years
// let age = Number(prompt('Age:'))
// let ispaid = prompt('have you paid completely')

// if(age>60|| ispaid === 'true'){
//     let confirmData = confirm('are you sure you would like to enter')
//     if(confirmData==true){
//         alert('congratulations Enter and win')
//     }
// }
let age= Number(prompt('Age:'))
let studyCourse = prompt('Enter course of study').toUpperCase()

if(age <28 || age==28 && studyCourse.includes('ENGINEERING')|| studyCourse.includes (' COMPUTER SCIENCE')){
    
     alert('congratulations! you have been employed, you will be sent to the developers unit')
    }
    
else if(age<28 || age==28 && studyCourse=='Accounting'){
    let confirmData = studyCourse.includes('Accounting')
    if(confirmData==true){
        alert('congratulations! You will be sent to the Management Unit') 
    }
    
}
else{
    alert('please, we will get back to you')
}


//empty  arrays