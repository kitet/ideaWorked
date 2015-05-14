<html>
<head>
<title>Learning Javascript</title>
</head>
<body>
<script type="text/javascript">
var farm={
	name: 'Kitet FArm',
	plots: '5',
	planted: '3',
};

farm.name='Koech Farm'; //changes the name property
// write a method

funtion checkCrop(){
	//code to check unplanted farms
	var unplanted= this.plots - this.planted;
	alert('unplanted');
};
</script>
</body>
</html>