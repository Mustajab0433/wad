<?php
require "server/functions.php";
$s = $_REQUEST["s"];
$sel_search = "select * from products where pro_keywords like '%$s%'";
$run_search  = mysqli_query($con,$sel_email);
$count = mysqli_num_rows($run_email);
if($count>0)
    echo "Not Found";