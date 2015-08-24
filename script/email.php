<?php 

	$to = 'tomadamwood@gmail.com';
	$from = $_POST['company-name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$desc = $_POST['desc'];
	$subject = 'Portfolio Website Email';
	$subject2 = 'Copy of your email to Thomas Wood';
	$message = 'Email from ' . $from . ' | ' . $email . ' | ' . $phone . '<br/><br/>' . $desc;
	$message2 = 'Here is a copy of your message ' . '<br/><br/>' . $desc;

	$headers = 'From: ' . $from;
	$headers2 = 'From ' . $to;

	mail($to,$subject,$message,$headers);
	mail($email,$subject2,$message2,$headers2);

	header('Location: ../index.html');


 ?>