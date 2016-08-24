// Initiate Variables
var myInputs = new Array();
var counter = 1;

// Create new input array
$('#addFieldBtn').click(function () {
	$('select').material_select();
	myInputs[counter] = [];
});


// Add input details to array
$('#addInput').click(function () {
	// Add field Attributes to array...
	switch(myInputs[counter]['type']){
		case 'text':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	$('#fieldTextLabel').val();
			myInputs[counter]['atts']['maxlen']	=	$('#fieldTextMaxLength').val();
		break;

		case 'password':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	$('#fieldPasswordLabel').val();
		break;

		case 'textarea':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	$('#fieldTextAreaLabel').val();
			myInputs[counter]['atts']['maxlen']	=	$('#fieldTextMaxLength').val();
			myInputs[counter]['atts']['cols']	=	$('#fieldTextAreaCols').val();
			myInputs[counter]['atts']['rows']	=	$('#fieldTextAreaRows').val();
		break;
	}

	var newdiv = document.createElement('div');
	switch (myInputs[counter]['type']) {
		case 'text':
		newdiv.innerHTML =
			"Entry " + (counter) +
			"<br>Type: " + myInputs[counter]['type'] +
			"<br>Label: " + myInputs[counter]['atts']['label'] +
			"<br>Name: " + myInputs[counter]['atts']['label'] +
			"<br>Length: " + myInputs[counter]['atts']['maxlen'] +
			counter++;
			break;
			case 'password':
			newdiv.innerHTML =
				"Entry " + (counter) +
				"<br>Type: " + myInputs[counter]['type'] +
				"<br>Label: " + myInputs[counter]['atts']['label'] +
				"<br>Name: " + myInputs[counter]['atts']['label'] +
				counter++;
				break;
		case 'textarea':
		newdiv.innerHTML =
			"Entry " + (counter) +
			"<br>Type: " + myInputs[counter]['type'] +
			"<br>Label: " + myInputs[counter]['atts']['label'] +
			"<br>Rols: " + myInputs[counter]['atts']['cols'] +
			"<br>Rows: " + myInputs[counter]['atts']['rows'] +
			counter++;
			break;
			}
			document.getElementById('dynamicInput').appendChild(newdiv)
});

// Input type 'Select' change

$('select').change(function () {
  $('.optional').css('display','none');
  $("select option:selected").each(function () {
      if($(this).val() == 'text') {
          $('.text').css('display','block');
		  // Add field type to array
		  myInputs[counter]['type']	=	'text';
			}
			else if($(this).val() == 'password') {
          $('.password').css('display','block');
		  // Add field type to array
		  myInputs[counter]['type']	=	'password';
      }
			else if($(this).val() == 'textarea') {
          $('.textarea').css('display','block');
		  // Add field type to array
		  myInputs[counter]['type']	=	'textarea';
      }
  });
});

// Send the field data via POST to do something with...
$('#saveForm').click(function () {
	  var rv = {};
	  for (var i = 0; i < myInputs.length; ++i)
		rv[i] = myInputs[i];
	console.log(rv);
	//$.post('save.php', rv);
})
$('.modal-trigger').leanModal();
