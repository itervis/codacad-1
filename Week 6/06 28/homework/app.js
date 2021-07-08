// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let obj = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna'
};
console.log(Object.keys(obj));
console.log(Object.values(obj))

// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
let obj1 = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
};
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
for( let val in obj1){
    console.log(`${val} - ${obj1[val]} EU atlyginimas`) 
}
// Sukurkite objektą su savaitės dienomis. 
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios 
// (1 -> pirmadienis ir t.t.). 
// Parodykite dabartinę savaitės dieną.
// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris. 
// Atspausdinkite savaitės dieną naudojant sita kintamajį.

let weekDays = {
    1: 'pirmadienis',
    2: 'antradienis',
    3: 'treciadienis',
    4: 'ketvirtadienis',
    5: 'penktadienis',
    6: 'sestadienis',
    7: 'sekmadienis'
}

let d = new Date();
let day = d.getDay();
console.log(day)
console.log(weekDays[day])

// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}. 
// Parodykite žodį jQuery.
let obj2 = {
    js: ['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}
console.log(obj2.js[0])

// Sukurkite objektą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai atitinkamai. 
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamsios lang ir day (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną

let langDays = {
    lt:['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis'],
    en:['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
}
console.log(langDays.lt[0], langDays.en[2])


let lang = document.getElementById('selectLang');
let day2 = document.getElementById('selectDay')

lang.addEventListener('change', function(){
    let selectedLang = langDays[this.value];
    while(day2.options.length > 0){
        day2.options.remove(0);
    }

    
    Array.from(selectedLang).forEach(function (el){
        let newOption = new Option(el, el);
        day2.appendChild(newOption);        
          
    })
    
    day2.addEventListener('change', function(){
        console.log(this.value)
    })
})

// console.log(document.querySelectorAll("#selectDay > option:nth-child(5)"))
// console.log(document.querySelector("#selectDay > option:nth-child(5)"))
