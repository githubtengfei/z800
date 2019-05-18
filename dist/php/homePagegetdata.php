<?php
include 'connect.php';
$getdata=mysql_query('select * from productinformation');
$getdataarr=array();
for($i=0;$i<mysql_num_rows($getdata);$i++){
    $getdataarr[$i]=mysql_fetch_array($getdata,MYSQL_ASSOC);
}
echo json_encode($getdataarr);
?>