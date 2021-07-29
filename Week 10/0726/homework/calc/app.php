<?php
session_start();

if(isset($_POST['numOne']) && is_numeric($_POST['numOne']) && $_POST['chooseAction'] === '^2') {
    $_SESSION['result'][] = $_POST['numOne']*$_POST['numOne'];
} else if (isset($_POST['numOne'], $_POST['numTwo'], $_POST['chooseAction']) 
&& is_numeric($_POST['numOne']) && is_numeric($_POST['numTwo'])
){
    if($_POST['chooseAction'] === '+'){
        $_SESSION['result'][] = $_POST['numOne']+$_POST['numTwo'];
    } else if ($_POST['chooseAction'] === '-'){
        $_SESSION['result'][] =  $_POST['numOne']-$_POST['numTwo'];
    } else if ($_POST['chooseAction'] === '/'){
        $_SESSION['result'][] = $_POST['numOne']/$_POST['numTwo'];
    } else if ($_POST['chooseAction'] === '*'){
        $_SESSION['result'][] = $_POST['numOne']*$_POST['numTwo'];
    }
    
} else {
    $_SESSION['result'][] = 'iveskite skaicius';}

header('Location: index.php');