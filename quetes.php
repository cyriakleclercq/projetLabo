<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Quetes</title>
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"></head>
<style>
    body {
        font-family: 'Acme', sans-serif;
    }
     tr , td , th {
        border : 3px solid black ;
        text-align: center;
        background-color:  darkgreen;
        margin : 1px ;
        height: 4em;
        width: 99em
    }

     table {
         background-color: darkgreen;
     }

    h1 {
        text-align:  center;
        border: 1px outset black;
        background-color: white;
    }


</style>
<body>
<h1>Liste des quetes</h1>
<table>

<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 01/03/2019
 * Time: 10:07
 */


$servername = 'localhost' ;
$username = "root" ;
$password = '';
$dbname = "quetes";


// créer une nouvelle connexion :

$con = new mysqli($servername, $username, $password) ;

if($con -> connect_error) {

    die("Connection failed: " . $con->connect_error);


} else {

    $con -> select_db($dbname) ;

}


$R_sql = "SELECT * 
          FROM `liste_quetes` , `titres_quetes`
          WHERE liste_quetes.id_titre = titres_quetes.id_titre 
           ";


$connexion = $con -> query($R_sql) ;


echo '<tr><th>Num:</th><th>Nom :</th><th>Descriptif :</th><th>id_titre</th><th>id_titre</th><th>titre:</th></tr>' ;

while($row = $connexion-> fetch_assoc()) {


  echo '<tr><td>' .

      $row['id'] . '</td><td>' .$row['nom'] .'</td><td>' . $row['descriptif'] . '</td><td>'. $row['id_titre'] . '</td><td>'


     . $row['id_titre'] . '</td><td>' . $row['titre'] . '</td>' ;
}

$arr = array();
$result = $con->query($R_sql);


while($data = $result->fetch_assoc())
{

    $arr[] = $data;

}

echo json_encode($arr);




?>

</table>
</body>
</html>
