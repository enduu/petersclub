<?php
$count=1;
if($count==1){
    /*$_SESSION['Username'] = $myusername;*/
	header( 'Location: main.php' ) ;
	exit();
}
else {
	echo "Wrong Username or Password";
	//echo "bwah";
}

?>