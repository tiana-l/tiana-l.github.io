<!DOCTYPE html>
<html>
    <head>
        <title>Online Store Receipt</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="receiptStyles.css">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    </head>
    <body>
        <div id="receipt">
        <?php
            $fname=$_POST['fname'];
            $lname=$_POST['lname'];
            $email=$_POST['email'];
            $product=$_POST['product'];
            $qty=$_POST['qty'];
            $dPrice=2.50;
            $cPrice=2.99;
            $userPrice;
            if($product=="donut"){
                $userPrice=floatval($dPrice);
            }
            else{
                $userPrice=floatval($cPrice);
            }
            $total=floatval($qty)*$userPrice;
            // echo("price: $userPrice");
            // echo("qty: $qty");
            // echo("total: $total");
            echo("<h3>Receipt for $fname $lname, email: $email.</h3>");
            echo("<h3>Thank you for shopping with us!</h3>");
            echo("<p>$qty $product for $total.</p>");
            echo("<p>Your total is $total.</p>");
        ?>
        </div>
    </body>
</html>
<script type='text/javascript' src='https://code.jquery.com/jquery-3.4.1.min.js'>
    $().ready(function(){
        $('#receipt').hide().delay(200).fadeIn("fast");
    });
</script>