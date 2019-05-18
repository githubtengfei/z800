<?php
header('content-type:text/html;charset=utf-8');
$conn=@mysql_connect('','root','');
if(!$conn){
    die('数据库连接错误:'.mysql_error());
}
mysql_select_db('zhe800product');
mysql_query('SET NAMES UTF8');
// echo $conn
?>