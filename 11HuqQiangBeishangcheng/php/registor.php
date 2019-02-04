<?php
    header('content-type:text/html;charset=utf-8');   
    mysql_connect('127.0.0.1','root','');
    mysql_select_db('huaqianguser');
    mysql_query('SET NAMES UtF8');   
    if(isset($_POST['shoujihao'])||isset($_POST['Liji'])){
    	$shouji=$_POST['shoujihao'];
    }else{
    	exit('非法操作');
    }
    
    $result=mysql_query("select *  from yonghu where shoujihao='$shouji'");
    if(mysql_fetch_array($result)){
    	echo true;    	
    }else{
    	echo false;
    }
    
   // mysql_query($query2);
    
    if(isset($_POST['Liji'])){
    	$shoujihao=$_POST['tel'];
    	echo $shoujihao;
    	
    	$mima=$_POST['pass'];
    	echo $mima;
    	
    	$query1="INSERT INTO yonghu VALUES(default,'$shoujihao','$mima',NOW())";
    	mysql_query($query1);
    	echo "注册成功";
    	header('location:../src/zhucechenggong.html');
    	
    }
?>