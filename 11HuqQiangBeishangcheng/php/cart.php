<?php
   header('content-type:text/html;charset=utf-8');
   mysql_connect('127.0.0.1','root','');
   mysql_select_db('huaqianguser');
   mysql_query('SET NAMES UTF8');
   $query1="select * from huaqiangshangpin";
   $result=mysql_query($query1);
   $arr=array();
   for($i=0;$i<mysql_num_rows($result);$i++){
   	   $arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
   }
   echo json_encode($arr);
   
?>