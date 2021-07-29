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
        <select name='chooseAction' id='chooseAction'>
            <option value='+' name='plus' id='+'>+</option>
            <option value='-' name='minus' id='-'>-</option>
            <option value='/' name='divide' id='/'>/</option>
            <option value='*' name='multiply' id='*'>*</option>
            <option value='^2' name='square' id='^2'>^2</option>
        </select>
        <input type='text' name='numTwo' id='numTwo'>
        <button>Skaičiuoti</button>
    </form>
    <script>
      
        document.querySelector("#chooseAction").addEventListener('change', function(){
            if(document.querySelector("#\\^2").selected = true) {
            document.querySelector("#numTwo").disabled = true
        } else  {
            document.querySelector("#numTwo").disabled = false
        }}
        )
    </script>
</body>
</html>

<?php

if (isset($_SESSION['result']) && !empty($_SESSION['result'])){
print_r($_SESSION['result']);
}

?>