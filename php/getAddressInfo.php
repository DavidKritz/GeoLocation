<?php
	$executionStartTime = microtime(true) / 1000;

	$url='https://api.opencagedata.com/geocode/v1/json?key=2f81bf913ea2439d97298a1456018e3f&q=54.3652,-1.2365&pretty=1&no_annotations=1';

	 
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	header('Content-Type: application/json; charset=UTF-8');
	echo json_encode($result['results'], JSON_UNESCAPED_UNICODE);

	//$decode = json_decode($result,true);	

	//$output['status']['code'] = "200";
	//$output['status']['name'] = "ok";
	//$output['status']['description'] = "mission saved";
	//$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	//$output['data'] = $decode['components'];
	
	//header('Content-Type: application/json; charset=UTF-8');

	//echo json_encode($output); 

?>
