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


//create new connexion :

$con = new mysqli($servername, $username, $password) ;

if($con -> connect_error) {

    die("Connection failed: " . $con->connect_error);


} else {

    $con -> select_db($dbname) ;

}



if(isset($_GET['id_story'])) {
    $id_story = $_GET['id_story'];
    $id_story = filter_var($id_story,FILTER_SANITIZE_NUMBER_INT);


}



if(isset($_GET['id_event'])) {
    $id_event =  $_GET['id_event'];
    $id_event = filter_var($id_event,FILTER_SANITIZE_NUMBER_INT);

}


// execute request for display resume of scenario/quest next to the map on map.php
if(!empty($id_story) && empty($id_event))
{
    $R_sql = "SELECT *
          FROM `quetes` as a , `scenarios` as b WHERE a.id_scenario = b.id_scenario 
           and a.id_scenario = $id_story";

}


//execute request for display avatar/dialogues/background/description on map.php
else if(!empty($id_event))
{
    $R_sql = "SELECT * FROM `presentations` as a, `dialogues` as b, `images` as c, `pieces_labo` as d,`scenarios` as e WHERE a.id_presentations = $id_event and b.id_scenario = $id_story and c.id_images = $id_event and d.id_piece_labo = b.id_select and  e.id_scenario = b.id_scenario";

}


//execute request for display scenario on index.php
else{
    $R_sql = "SELECT `scenario` FROM `scenarios` as a  ORDER BY a.id_scenario ";
}



$connexion = $con -> query($R_sql) ;


$arr = array();
$result = $con->query($R_sql);


while($data = $result->fetch_assoc())
{

    $arr[] = $data;

}

echo json_encode($arr);





