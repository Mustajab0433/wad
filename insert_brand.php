<?php

include "../server/db_connection.php";
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
if(isset($_POST['insert_brand'])){
    $title = $_POST['pro_title'];
    $input = "insert into brands (brand_title) values ('$title')"
    <meta charset="UTF-8">
    <title>Insert Product</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
    <style>

    <h1 class="text-center my-5"><i class="fas fa-plus fa-md"></i> <span class="d-none d-sm-inline"> Add New </span> Product </h1>
    <form action="insert_brand.php" method="post">
        <div class="row">
            <div style="margin-top: 3px" class="col-lg-3 col-md-4 col-sm-6 ">
                <label for="pro_title" class="d-none d-md-inline d-lg-inline d-sm-inline"> <span class="d-sm-none d-md-inline"> Product </span> Brand:</label>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-file-signature"></i></div>
                    </div>
                    <input type="text" class="form-control" id="pro_title" name="pro_title" placeholder="Enter Brand Title" >
                </div>
            </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="">
                <button type="submit" name="insert_brand" class="btn btn-primary btn-block"><i class="fas fa-plus"></i> Insert Brand </button>
            </div>
        </div>
        </div>
    </form>
</div>
</body>