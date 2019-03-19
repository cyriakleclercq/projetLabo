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

if(isset($_GET['id_story'])) {
    $id_story = $_GET['id_story'];
}

if(isset($_GET['id_event'])) {
    $id_event =  $_GET['id_event'];
}


if(!empty($id_story) && empty($id_event))
{
    $R_sql = "SELECT *
          FROM `quetes` as a , `scenarios` as b WHERE a.id_scenario = b.id_scenario 
           and a.id_scenario = $id_story";

}

else if(!empty($id_event))
{
    $R_sql = "SELECT * FROM `presentations` as a, `dialogues` as b, `images` as c WHERE a.id_presentations = $id_event and b.id_scenario = $id_story and c.id_images = $id_event";

}

else{
    $R_sql = "SELECT `nom`,`scenario` FROM `quetes` as a ,`scenarios` as b WHERE a.id_scenario = b.id_scenario ORDER BY a.id_scenario ";
}



$connexion = $con -> query($R_sql) ;


$arr = array();
$result = $con->query($R_sql);


while($data = $result->fetch_assoc())
{

    $arr[] = $data;

}

echo json_encode($arr);





