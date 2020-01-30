<!DOCTYPE html>
<html>
    <head><title>store</title></head>
    <body>
        <?php
            $filea=fopen("store.txt","a");
            print "<p>Thank you for shopping with us!</p>"; 
            print "<p>Your order information: </p>"; 
            $total=$_POST['catSubTotal']+$_POST['dogSubTotal']+$_POST['rockSubTotal'];
            foreach($_POST as $key=>$value){
                if($key!="cardType" && $key!="creditNum" && $key!="expiration" && $key!="checkout" && $key!="reset"){
                    fwrite($filea, $key.":".$value."\n");
                    print("<li>".$key.": ".$value."</li>");
                }
            }
            print "total: $total";
            fclose($filea);
        ?>
    </body>
</html>