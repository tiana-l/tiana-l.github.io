<!DOCTYPE html>
<html>
    <head>
        <title>Calculator Result</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="styles.css">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    </head>
    <body>
        <?php
            $n1=$_GET['n1'];
            $n2=$_GET['n2'];
            $op=$_GET['op'];
            switch($op){
                case "+":$result=floatval($n1)+floatval($n2);break;
                case "-":$result=floatval($n1)-floatval($n2);break;
                case "*":$result=floatval($n1)*floatval($n2);break;
                case "/":$result=floatval($n1)/floatval($n2);break;
                default: echo("<p>Error. Try again.</p>"); break;
            }
            echo("<p>$n1 $op $n2 = $result</p>");
        ?>
    </body>
</html>
<script type='text/javascript' src='https://code.jquery.com/jquery-3.4.1.min.js'>
$().ready(function(){
    $('body').hide().delay(200).fadeIn("fast");
});
</script>