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
$dbname = "labo";


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


$arr = array();
$result = $con->query($R_sql);


while($data = $result->fetch_assoc())
{

    $arr[] = $data;

}

echo json_encode($arr);





