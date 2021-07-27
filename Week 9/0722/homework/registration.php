<?php

var_dump($_POST["name"]);
var_dump($_POST["surname"]);


if ($_POST["password"] === $_POST["confirmPassword"]) {
    echo "success!";
 }
 else {
    echo "wrong password";
 }
