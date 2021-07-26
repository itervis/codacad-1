<?php 
$url="http://$_SERVER[HTTP_HOST]/Week%209/0722/homework/get.php";
$urlPost="http://$_SERVER[HTTP_HOST]/Week%209/0722/homework/registration.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php Get Post</title>
</head>
<body>
    <p>Enter numbers</p>
    <form action="<?php echo $url; ?>" method="GET">
        <input type="text" name="firstNumber" placeholder="Enter the first number">
        <input type="text" name="secondNumber" placeholder="Enter the second number">
        <input type="submit" name="submit">
    </form>

    <form action="<?php echo $urlPost; ?>" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required>
        <input type="text" name="surname" placeholder="Enter your surname" required>
        <input type="password" name="password" placeholder="Enter password" required>
        <input type="password" name="confirmPassword" placeholder="Confirm password" required>
        <input type="submit" name="submit">

    </form>
</body>
</html>