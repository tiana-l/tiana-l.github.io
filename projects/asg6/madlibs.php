<!DOCTYPE html>
<html>
    <head>
        <title>Mad Libs Result</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="styles.css">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    </head>
    <body>
        <?php
            //show_source("madlibs.php");
            $n1=$_GET['noun1'];
            $n2=$_GET['noun2'];
            $n3=$_GET['noun3'];
            $adj1=$_GET['adj1'];
            $adj2=$_GET['adj2'];
            $v1=$_GET['verb1'];
            $v2=$_GET['verb2'];
            $num=$_GET["num"];
            echo("<p> The $adj1 $n1 $v1 the $adj2 house. <br/> There she saw a $n2 $v2 with $num $n3. </p>")
        ?>
    </body>
</html>
<script type='text/javascript' src='https://code.jquery.com/jquery-3.4.1.min.js'>
$().ready(function(){
    $('body').hide().delay(200).fadeIn("fast");
});
</script>