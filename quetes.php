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


if(isset($_GET['id_batiment'])) {
    $id_batiment = $_GET['id_batiment'];
}

if(isset($id_batiment))
{
    $R_sql = "SELECT *
          FROM `liste_quetes` as a , `titres_quetes` as b WHERE a.id_titre = b.id_titre 
           and a.id_titre = $id_batiment";
}
else{
    $R_sql = "SELECT nom,titre FROM `liste_quetes` as a ,`titres_quetes` as b WHERE a.id_titre = b.id_titre ORDER BY a.id_titre ";
}






$connexion = $con -> query($R_sql) ;


$arr = array();
$result = $con->query($R_sql);


while($data = $result->fetch_assoc())
{

    $arr[] = $data;

}

echo json_encode($arr);





