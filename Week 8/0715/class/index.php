<?php

// echo 'hello world';
// echo (' hello () world')

// print 'hello world print';
// print (' hello () print world');

// var_dump('hello world');
$nmb = 3;
$str ='a';
$tmp = NULL;
var_dump($nmb, $str, $tmp);

function negative($number)
{
    // if kad ivedus raide neroditu klaidos
    return $number * -1;
}
var_dump(negative('a'));
var_dump('hello world');