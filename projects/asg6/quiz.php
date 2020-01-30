<!DOCTYPE html>
<html>
    <head>
        <title>Quiz Results</title>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="quizStyles.css">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    </head>
    <body>
        <div id="receipt">
        <?php
            $correctAnswers=array();
            $score=0;
            $fname=$_POST['fname'];
            $lname=$_POST['lname'];
            $q1Input=$_POST['q1'];
            $q2Input=$_POST['q2'];
            $q3Input=$_POST['q3'];
            if($q1Input=="multiple"){
                $q1correct="Correct!";
                $correctAnswers += ['q1'=>true];
            }
            else{
                $q1correct="Incorrect!";
                $correctAnswers += ['q1'=>false];

            }
            if($q2Input=="debatable"){
                $q2correct="Correct!";
                $correctAnswers += ['q2'=>true];
            }
            else{
                $q2correct="Incorrect!";
                $correctAnswers += ['q2'=>false];
            }
            if($q3Input=="liszt"){
                $q3correct="Correct!";
                $correctAnswers += ['q3'=>true];
            }
            else{
                $q3correct="Incorrect!";
                $correctAnswers['q3']=false;
            }
            foreach($correctAnswers as $key => $value){
                if($value==true){
                    $score+=1/3*100;
                }
                else{
                    $score+=0;
                }
            }
            echo("<h1> $fname $lname total score: $score%</h1>");
            echo("<p>Score breakdown: </p>");
            echo("<h3>Q1. $q1correct Your answer: $q1Input</h3>");
            echo("<p>    Correct answer: d. multiple answers. </p>");
            echo("<p>    Firstly, you can commonly find brown chocolate. Though I do not believe white chocolate is chocolate, it is labeled chocolate, and it is white.</p>");
            echo("<h3>Q2. $q2correct Your answer: $q2Input</h3>");
            echo("<p>    Correct answer: c. debatable. </p>");
            echo("<p>    One argument is that wetness is a human concept. We gave water the quality of being wet. Therefore, it is not inherently wet.
            Another argument can be that water is what makes things wet. And water molecules are never found alone in nature. As a water molecule will always be surrounded by other water molecules, it is wet.
            I believe this argument is flawed, as the concept of wetness also applies to liquids beyond water. Come up with other arguments to test.
            </p>");
            echo("<h3>Q3. $q3correct Your answer: $q3Input</h3>");
            echo("<p>    Correct answer: d. Franz Liszt </p>");
            
        ?>
        </div>
    </body>
</html>
<script type='text/javascript' src='https://code.jquery.com/jquery-3.4.1.min.js'>
    $().ready(function(){
        $('#receipt').hide().delay(200).fadeIn("fast");
    });
</script>