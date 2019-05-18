<?php
    include "connect.php";
    if(isset($_POST['user'])){
        $username=$_POST['user'];
        $password=$_POST['pass'];
    }else{
        exit('非法操作');
    }
    $query="select * from zhe800user where usertel='$username' and password='$password'";
    $result=mysql_query($query);
    if(mysql_fetch_array($result)){
        echo true;
    }else{
        echo false;
    }
?>