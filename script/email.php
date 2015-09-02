<?php 

	$to = 'tomadamwood@gmail.com';
	$from = $_POST('company-name'). '<br/><br/>' .$POST_('email');
	$subject = 'Portfolio Website Email';
	$phone = $_POST('phone');
	$message = $_POST('desc'). '<br/><br/>' . $from. '<br/><br/>' .$phone;

	mail($to,$subject,$message);

 ?>