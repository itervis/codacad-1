<?php
if(isset($_POST['submit'])){
    $file = $_FILES['file'];
    
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    $fileExt =explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('jpg', 'jpeg', 'png');

    if (in_array($fileActualExt, $allowed)){
        if($fileError === 0){
            if($fileSize < 1000000) {
                $fileNameNew = uniqid('', true).".".$fileActualExt;

                $fileDestination = 'images/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: index.php?uploadsuccess");

            } else {
            echo "Your file is too big";
            }

        } else {
            echo "there was an erro uploading your file";
        }

    } else {
        echo "You can't uplode these files";
    }
}

// $target_dir = "images/";
// $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
// $uploadOk = 1;
// $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// // Check if image file is a actual image or fake image
// if(isset($_POST["submit"])) {
//   $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//   if($check !== false) {
//     echo "File is an image - " . $check["mime"] . ".";
//     $uploadOk = 1;
//   } else {
//     echo "File is not an image.";
//     $uploadOk = 0;
//   }
// }
?>