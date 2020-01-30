<!DOCTYPE html>
<html>
    <head><title>Search</title></head>
    <body>
        <?php
            $keyword=$_GET['keyword'];
            $keyword=strtolower($keyword);
            $keyword=trim($keyword);
            $found=false;
            $filer=fopen("products.txt","r");
            while(!feof($filer)){
                $line=fgets($filer);
                $line=trim($line);
                $items=explode(":",$line);
                if($items[0]==$keyword){
                    print "name: ".$items[0]."<br/>";
                    print "description: ".$items[1]."<br/>";
                    print "stock left: ".$items[2]."<br/>";
                    print "price: ".$items[3]."<br/>";
                    //add link to main page
                    print "<a href='products.html'>MAIN PAGE</a>";
                    $found=true;
                    break;
                }
            }
            if($found==false){
                print "Product not found <br/>";
                print "<a href='products.html'>MAIN PAGE</a>";
            }
            fclose($filer);
        ?>
    </body>
</html>