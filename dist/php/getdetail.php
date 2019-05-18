<?php
include 'connect.php';
if(isset($_GET['id'])){
    $getpicid=$_GET['id'];
    $data=mysql_query("select * from productinformation where sid=$getpicid");
    echo json_encode(mysql_fetch_array($data,MYSQL_ASSOC));
}
?> 

