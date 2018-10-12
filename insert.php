


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Message</title>
        <link rel="stylesheet" href="css/mse.css" />
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
    <div id="s" class="e">
    <p class="p1">You have successfully subscribed to the newsletter. You'll receive our news. Please Check your email every time.</p>
    <button id="mesg" class="me20 button" style="vertical-align:middle"><span>GO to Main Page</span></button>
    </div>
    </body>
    
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/mes.js"></script>
</html>
 
      
        
<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$des = $_POST['name'];
}
$servername = "db4free.net";
$username = "devloper";
$password = "e95e5961";
$dbname = "devloper";

// إنشاء الإتصال
$conn = mysqli_connect($servername, $username, $password, $dbname);
// إختبار الإتصال
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO sub (s2)  VALUES ('$des')";


if (mysqli_query($conn, $sql)) {

} else {
echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
  
