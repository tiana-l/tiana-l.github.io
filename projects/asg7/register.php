<!DOCTYPE html>
<html>
    <head><title>Sign up</title></head>
    <body>
        <?php
            $user=$_POST['user'];
            $pwd=$_POST['pwd'];
            if(isset($_POST["signup"])){
                $filea=fopen("users.txt","a");
                $line=$user.":".$pwd."\n";
                fwrite($filea,$line);
                print "Thank you for registering, $user";
                fclose($filea);
            }
            include "login.php";
        ?>
    </body>
</html>