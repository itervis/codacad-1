<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action='app.php' method='post'>
        <input type='text' name="numOne">
        <select name='chooseAction'>
            <option value='+' name='plus'>+</option>
            <option value='-' name='minus'>-</option>
            <option value='/' name='divide'>/</option>
            <option value='*' name='multiply'>*</option>
            <option value='^2' name='square' id='^2'>^2</option>
        </select>
        <input type='text' name='numTwo' id='numTwo'>
        <button>Skaičiuoti</button>
    </form>
    <script>
        if(document.querySelector("#\\^2").selected = true){
            document.querySelector("#numTwo").disabled = true;
        }
    </script>
</body>
</html>

<?php

if (isset($_SESSION['result']) && !empty($_SESSION['result'])){
print_r($_SESSION['result']);
}

?>