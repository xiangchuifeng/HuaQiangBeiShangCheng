<?php
    header('content-type:text/html;charset=utf-8');   
    mysql_connect('127.0.0.1','root','');
    mysql_select_db('huaqianguser');
    mysql_query('SET NAMES UtF8');   
    if(isset($_POST['shoujihao'])){
    	$shouji=$_POST['shoujihao'];
    	$mima=$_POST['mima'];
    }else{
    	exit('非法操作');
    }
    
    $result=mysql_query("select * from yonghu where shoujihao='$shouji' and mima='$mima'");
    if(mysql_fetch_array($result)){
    	echo true;    	
    }else{
    	echo false;
    }

?>