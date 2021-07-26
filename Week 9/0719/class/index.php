<?php

// function arraySqrt($arr1){
   
// $frstElmnt = (float) array_shift($arr1);
// $lstElmnt = (float) array_pop($arr1);
// return sqrt($frstElmnt + $lstElmnt);
// } 

// var_dump(arraySqrt( $arr1 = [4, 5, 8, 20]));

// Parašykite funckciją, kuri priimtų 1 argumentą - masyvą iš 5 skaičių ir grąžintu visų masyvo elementų aritmetinį vidurkį.

// function arrayAvrg($arr2){
   
//     return (float) array_sum($arr2)/count($arr2);
// } 
    
//     var_dump(arrayAvrg( $arr2 = [10, 5, 15, 8, 12]));

// Parašykite funkciją, kurį priimtų 1 argumentą - string`ų masyvą bei parinktų antrą bei priešpaskutinį elementą.

// function arrayStr($arr3){
   
//     $secondElement = array_slice($arr3, 1, 1);
//     $penultimate = array_slice($arr3, -2, 1);

//     return array_merge($secondElement, $penultimate);
// } 

// $arr3 = ['x', 'y', 'z', 'fd', 'a'];

//     var_dump(arrayStr($arr3));

// Parašykite funkciją, kuri priimtų 1 argumentą - masyvą ir jame sukeistu vietomis pirmą ir paskutinį masyvo elementus.

// function arrayStr($arr3){
   
//     $firstElement = array_slice($arr3, 0, 1);
//     $LastElement = array_slice($arr3, -1, 1);
//     $removeFirst =  array_shift($arr3);
//     $removeLast = array_pop($arr3);

//     return array_merge($LastElement, $arr3, $firstElement);
// } 

// $arr3 = ['x', 'y', 'z', 'fd', 'a'];

//     var_dump(arrayStr($arr3));

// Parašykite funkciją, kuri priimtų argumentą - masyvą ir sumaišytu jo elementus atsitiktine tvarka, bet pirmą ir paskutinį paliktu vietoje. 

// function arrayStr($arr3){
   
//     $firstElement = array_slice($arr3, 0, 1);
//     $LastElement = array_slice($arr3, -1, 1);
//     $removeFirst =  array_shift($arr3);
//     $removeLast = array_pop($arr3);
//     shuffle($arr3);
//     return array_merge($firstElement, $arr3, $LastElement);
// } 

//     $arr3 = ['x', 'y', 'z', 'jh', 'pp', 'fd', 'a'];

//     var_dump(arrayStr($arr3));



//     Sukurti skirtingų skaičių masyvą. Sekančias užduotis atlikti su naujomis masyvo kopijomis.   
		
// $arr4 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 20];
			
//         Padauginti esamo masyvo narius iš 2

// $arr5 = $arr4;
// foreach ($arr5 as $somethingNew){
//     $somethingNew = $somethingNew * 2;
//     var_dump($somethingNew);
// }
// for ($i=0; $i < count($arr5); $i++){
//     $arr5[$i] *= 2;
//     // same as  $arr5[$i] = $arr5[$i] * 2;
// }
// var_dump($arr5);

			
//         Pakelti masyvo narius kvadratu

// $arr6 =$arr4;

// for ($i=0; $i < count($arr6); $i++){
//     $arr6[$i] *= $arr6[$i];
//     // same as  $arr5[$i] = $arr5[$i] * 2;

// }
// var_dump($arr6);
			
//         Padauginti masyvo narius iš jų index'o
// $arr7 =$arr4;
// foreach ($arr7 as $key => $value){
//     $arr7[$key] *= $key;

//     }
//     print_r($arr7);
//         Atrinkti tiktai teigimų elementų masyvą
// $arr8 = [1, 3, -5, 7, -9, 11, 13, -15, 17, -20];
// $positive = array_filter($arr8, function($num) {
//     return $num>0;
// });
// var_dump($positive);

//         Atrinkti tiktai neigiamų elementų masyvą
// $negative = array_filter($arr8, function($num) {
//     return $num<0;
// });
// var_dump($negative);

//         Atrinkti tiktai lyginių skaičių masyvą
// function even($var){
//     return!($var & 1);
// }		
// var_dump(array_filter($arr8, 'even'));

//         Atrinkti tiktai nelyginių skaičių masyvą   
// function odd($var){
//     return $var & 1;
// }
// var_dump(array_filter($arr8, 'odd'));		

// Asociatyvūs masyvai
	


//     Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre
$book = [
    'title'  => 'This as Thieves',
    'author' => 'Sandra Brown',
    'year'   => 2021,
    'genre'  => 'thrillers'
];
//     Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas
        $books =[$book,
        [
            'title'  => 'My Dark Vanessa',
            'author' => 'Kate Elizabeth',
            'year'   => 2021,
            'genre'  => 'thrillers'
        ],
         $book];
       

        $books[] = [
            'title'  => 'The First Days',
            'author' => 'Rhiannon Frater',
            'year'   => 2021,
            'genre'  => 'thrillers'
        ];

        array_push($books, [
            'title'  => 'Star Eater',
            'author' => 'Karstin Hall',
            'year'   => 2019,
            'genre'  => 'thrillers'
        ]);

        
        
		
        //     Išvesti visus knygų masyvo elementus su var_dump;
        var_dump($books);
		
//     Išvesti visus knygų masyvo elementus HTML lentele;
		
//     Išvesti visų visų knygų metų vidurkį;    
	
	
	
// Funkcijos
	

		
//    Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.
		
//     Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.
		
//     Sukurti funkciją, kuri ima masyvą ir išrikiuja jo elementus nuo mažiausio iki didžiausio ir grąžina tą masyvą.