/////// For and While
////// Atspausdinkite skaičių stulpelį nuo 1 iki 100.


// for(i=1; i<=100; i++){
//     console.log(i)
// };

// let x=1;
// while(x<=100){
//     console.log(x);
//     x++
// };

/////// Atspausdinkite skaičių stulpelį nuo 11 iki 33.

// for(i=11; i<=33; i++){
//     console.log(i)
// };

// let x=11;
// while(x<=33){
//     console.log(x);
//     x++
// };

//////// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.

// for(i=0; i<=100; i++){
    
//     if(i>0 && i%2 == 0){
//         console.log(i)
//     }
// };

// let x=0;
// while(x<100){
//      x+=2
//      console.log(x);
// };

//////// Naudodami ciklą parodykite sumą nuo 1 iki 100.

// x = 1;
// sum = 0;
// while(x <=100){
//     sum=sum+x;
//     x=x+1;
//     console.log(sum)
// }


let x=0;
let arr = new Array(100);
for(i=0; i<=100; i++){
    x += i;
    arr[i]=x;
}
arr.shift();
console.log(arr)
console.log(arr[99])

///////// For ir masyvai
///////// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.

// arr1 = [1, 2, 3, 4, 5]
// for(i=0; i<=arr1.length-1; i++){
//     console.log(arr1[i])
// }

/////////// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.

// arr2 = [1, 2, 3, 4, 5]
// y=0;
// for(i=0; i<=arr2.length-1; i++){
        
//         y += arr2[i];
//         console.log(y)
//     }
    