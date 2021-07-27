<!-- Prisiminkime 1-os pamokos užduotį, kuomet darėme funkciją, kuri konvertuoja lapsnius iš farenheito į celsijų. Papildykime užduotį:  Sukurkime naują php failą, kuris turės laukelį temperatūrai įvesti bei mygtuką, kurį paspaudus gauname konvertuotą temperatūrą. -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

	<form action="" method="GET">
		<p>Įveskite temperatura °F:
			<input type="text" name="enterFah">
			<button>Konvertuoti</button>
		</p>
	</form>

	<?php
		if (isset($_GET['enterFah']) && is_numeric($_GET['enterFah'])){
			function fah2Cel($fah){
				return ($fah - 32) / 1.8;
		} 
			echo "Resultatas: ", round(fah2Cel($_GET['enterFah'])), "°C"; 
	} 	else {
			echo 'Įveskite temperaturą skaičiais';}
	?>
	
</body>
</html>