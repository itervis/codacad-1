let btn1 = document.querySelector("#alertBtn");
btn1.addEventListener('click', function(){
    alert("Hellow World")
})

let btnUpper = document.querySelector("#btnToUpperCase")
let btnLower = document.querySelector("#bthToLowerCase")
let btnFirstUpper = document.querySelector("#bthFirstUpperCase")
let btnFirstLower = document.querySelector("#bthFirstLowerCase")

btnUpper.addEventListener('click', function(){
    document.querySelector("#inputModification").style.textTransform = 'uppercase';
});

btnLower.addEventListener('click', function(){
    document.querySelector("#inputModification").style.textTransform = 'lowercase';
});

btnFirstUpper.addEventListener('click', function(){
    document.querySelector("#inputModification").style.textTransform = 'capitalize';
});

btnFirstLower.addEventListener('click', function(){
    let inputStr = document.querySelector("#inputModification").value;
    let newStr = inputStr.charAt(0).toLowerCase() + inputStr.slice(1);
    document.querySelector("#inputModification").value = newStr
});

let email = document.querySelector('#inputEmail');
let phone = document.querySelector('#inputPhone');
let spanE = document.querySelector('.emailValid');
let spanP = document.querySelector('.phoneValid');

email.onkeydown = function(){
    let emailRegex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){1,8}$/;
    let emailRegexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){1,3}\.[a-zA-Z]{1,3}$/;
    if (emailRegex.test(email.value) || emailRegexo.test(email.value)){
        spanE.innerText = 'Email is valid';
        spanE.style.color = 'green';
    } else {
        spanE.innerText = 'Email is Invalid';
        spanE.style.color = 'red';        
    }
}

phone.onkeydown = function(){
    let phoneRegex = /^[0-9]{10}$/;
    if(phoneRegex.test(phone.value)){
        spanP.innerText = 'Phone is valid';
        spanP.style.color = 'green';
    } else {
        spanP.innerText = 'Phone is Invalid';
        spanP.style.color = 'red';        
    }

}

document.querySelector("#btnBlock").addEventListener('click', function (){
    document.querySelector('#inputBlock').disabled = true;
})
document.querySelector("#bthUnBlock").addEventListener('click', function (){
    document.querySelector('#inputBlock').disabled = false;
})

document.querySelector("#changingImg").style.width = '300px';
document.querySelector("#changingImg").addEventListener('mouseover', function (){
document.querySelector("#changingImg").src="https://i.imgur.com/PLDVxza.jpg"
})
document.querySelector("#changingImg").addEventListener('mouseout', function (){
document.querySelector("#changingImg").src="https://i.imgur.com/0DElr0H.jpg"
})