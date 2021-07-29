<?php
session_start();

if (isset($_POST['numOne'], $_POST['numTwo'], $_POST['chooseAction']) 
&& is_numeric($_POST['numOne']) && is_numeric($_POST['numTwo'])
){
    header('Location: index.php');
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
    echo 'iveskite skaicius';}