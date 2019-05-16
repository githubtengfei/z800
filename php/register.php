<?php
    include "connect.php";
    if(isset($_POST['usertel'])){
        $usertel=$_POST['usertel'];
        $password=@$_POST['password'];
        $result=mysql_query("select * from zhe800user where usertel='$usertel'");
        if(mysql_fetch_array($result)){
            echo 'false';
        }else{
            mysql_query("insert zhe800user values(default,'$usertel','$password',NOW())");
            echo 'true';
        }
    }else{
        exit('非法操作');
    }
?>