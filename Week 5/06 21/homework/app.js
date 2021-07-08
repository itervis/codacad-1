// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arr = ['a', 'b', 'c']
console.log(arr)

// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(arr[0], arr[1], arr[2])

// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
arr.push('d')
console.log(arr[0]+arr[1], arr[2]+arr[3])

// Sukurkite masyvą su elementais 2, 5, 3, 9.
let arr1 = [2, 5, 3, 9]

// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
console.log(arr1[0]*arr1[1], arr1[2]*arr1[3]) 

// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let resultArr1 = arr1[0]*arr1[1]+arr1[2]*arr1[3]
console.log(resultArr1)

// Daugialypiai masyvai
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let arr2 = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(arr2[1][0])

// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arr3 = [1, 2, 3]
let arr4 = [4, 5, 6]
let arr5 = arr3.concat(arr4)
console.log(arr5)

// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arr6 = arr3.reverse()
console.log(arr6)

// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let arr7 = [1, 2, 3].concat([4, 5, 6])
let arr8 =[-1, -2, -3].concat(arr7)
console.log(arr8)

// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arr9 =['html', 'css', 'js']
console.log(arr9[0])
console.log(arr9[arr9.length -1])

// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.

let arr10 = [3, 4, 1, 2, 7]
arr10.sort()
console.log(arr10)

// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let arr11 = [1, 2, 3, 4, 5]
let arr12 = arr11.slice(0, 3)
console.log(arr12)


    