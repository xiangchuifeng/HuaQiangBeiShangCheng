<?php
     
      header('content-type:text/html;charset=utf-8');
      $sid=$_POST['sid'];
      
       mysql_connect('127.0.0.1','root','');    
          
     
      mysql_select_db('huaqianguser');
      
   
      mysql_query('SET NAMES UTF8');  
      
    
      $query1="select * from huaqiangshangpin where sid='$sid'";  
      
     
       $result=mysql_query($query1);     
       
       $result2=mysql_fetch_array($result,MYSQL_ASSOC);
       
       
       echo json_encode($result2);

?>