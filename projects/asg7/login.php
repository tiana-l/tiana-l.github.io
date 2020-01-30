<!DOCTYPE html>
<html>
    <head><title>Sign up</title></head>
    <body>
        <?php
            $user=$_POST['user'];
            //print $user;
            $pwd=$_POST['pwd'];
            //print $pwd;
            $filer=fopen("users.txt","r");
            $loggedIn=false;
            if(isset($_POST["login"])){
                while(!feof($filer)){
                    $line=fgets($filer);
                    $line=trim($line);
                    $items=explode(":",$line);
                    if($items[0]==$user&&$items[1]==$pwd){
                        $loggedIn=true;
                        break;
                    }
                }
            }
            fclose($filer);
            if(isset($_POST['login'])){
                if($loggedIn){
                    print "Thank you for signing in, $user";
                }
                else{
                    print "Invalid login. Enter username and password again.";
                }
            }
            
        ?>
    </body>
</html>