<?php 
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
//$connection = mysqli_connect('localhost', 'root', '','reactphp');

$inputJSON = file_get_contents('php://input'); //read a file into a string & php://input to read raw data
$input = json_decode( $inputJSON, TRUE ); //convert JSON into array
$email = $input['email'];
$password = $input['password'];

$server= 'localhost';
$user='root';
$password='';
$db='reactphp';

$dbcon =new PDO("mysql:host=$server; dbname=$db", $user, $password);


$query = $dbcon->prepare("SELECT * FROM credentials where email='{$email}'");
$row= $query->fetch(PDO::FETCH_ASSOC);
if($email==$row["email"] && $password==$row["password"]){
    echo "Access Granted";
}

$query->execute();
$data = $query->fetchAll(PDO::FETCH_ASSOC);
$display= json_encode($data[0]);

$assoc = json_decode($display, true);
foreach ($assoc as $key => $value) {
    echo " '$key' is '$value'", PHP_EOL;
}




?>