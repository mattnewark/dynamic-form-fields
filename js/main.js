var myInputs = new Array();
var counter = 0;

function showDiv() {
  document.getElementById('AddField').style.display = 'block';
  myInputs[counter] = [];
};

function showType(type) {
  var t = type.value;
  if (t == 'text') {
    document.getElementById('text').style.display = 'block';
    myInputs[counter]['type']	=	'text';
  }
  else if (t == 'password') {
    document.getElementById('password').style.display = 'block';
    myInputs[counter]['type']	=	'password';
  }
  else if (t == 'textarea') {
    document.getElementById('textarea').style.display = 'block';
    myInputs[counter]['type']	=	'textarea';
  }
};

function addInput(divName) {
  switch(myInputs[counter]['type']){
		case 'text':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	document.getElementById('fieldTextLabel').value
			myInputs[counter]['atts']['maxlen']	=	document.getElementById('fieldTextMaxLength').value
		break;
    case 'password':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	document.getElementById('fieldPasswordLabel').value
		break;
    case 'textarea':
			myInputs[counter]['atts']	=	[];
			myInputs[counter]['atts']['label']	=	document.getElementById('fieldTextAreaLabel').value
			myInputs[counter]['atts']['maxlen']	=	document.getElementById('fieldTextAreaMaxLength').value
			myInputs[counter]['atts']['cols']	=	document.getElementById('fieldTextAreaCols').value
			myInputs[counter]['atts']['rows']	=	document.getElementById('fieldTextAreaRows').value
		break;
  }
    var newdiv = document.createElement('div');
    switch(myInputs[counter]['type']){
      case 'text':
      newdiv.innerHTML =
        "Entry " + (counter) +
        " Type: " + myInputs[counter]['type'] +
        " Label: " + myInputs[counter]['atts']['label'] +
        " Name: " + myInputs[counter]['atts']['label'] +
        " Length: " + myInputs[counter]['atts']['maxlen'] +
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
    document.getElementById(divName).appendChild(newdiv);
};

// Send the field data via POST to do something with...
$('#saveForm').click(function () {
	  var rv = {};
	  for (var i = 0; i < myInputs.length; ++i)
		rv[i] = myInputs[i];
	console.log(rv);
	//$.post('save.php', rv);
})
