var myInputs = new Array();
var counter = 0;

function showDiv() {
  document.getElementById('form').style.display = 'block';
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
    //var form = document.createElement('form');
    //form.setAttribute('id', 'myForm');
    //document.body.appendChild(form);
    var input = document.createElement('input');
    var ta  = document.createElement('textarea');
    switch(myInputs[counter]['type']){
      case 'text':
      input.setAttribute('type', myInputs[counter]['type']);
      input.setAttribute('name', myInputs[counter]['atts']['label']);
      input.setAttribute('maxlength', myInputs[counter]['atts']['maxlength']);
      input.setAttribute('placeholder', myInputs[counter]['atts']['label']);
      counter++;
      document.getElementById(divName).appendChild(input);
        break;
      case 'password':
			input.setAttribute('type', myInputs[counter]['type']);
			input.setAttribute('name', myInputs[counter]['atts']['label']);
			input.setAttribute('placeholder', myInputs[counter]['atts']['label']);
			counter++;
      document.getElementById(divName).appendChild(input);
			   break;
  		case 'textarea':
  		ta.setAttribute('type', myInputs[counter]['type']);
      ta.setAttribute('cols', myInputs[counter]['atts']['cols']);
      ta.setAttribute('rows', myInputs[counter]['atts']['rows']);
			counter++;
      document.getElementById(divName).appendChild(ta);
  			break;
    }
};

function frmreset() {
  var div = document.getElementById('form');
  div.style.display = 'none';
  document.getElementById('type').value = '';
	document.getElementById('text').style.display = 'none';
	document.getElementById('password').style.display = 'none';
	document.getElementById('textarea').style.display = 'none';
	document.getElementById('fieldTextLabel').value = '';
	document.getElementById('fieldTextMaxLength').value = '';
	document.getElementById('fieldPasswordLabel').value = '';
	document.getElementById('fieldTextAreaLabel').value = '';
	document.getElementById('fieldTextAreaMaxLength').value = '';
	document.getElementById('fieldTextAreaCols').value = '';
	document.getElementById('fieldTextAreaRows').value = '';
}

// Send the field data via POST to do something with...
//$('#saveForm').click(function () {
//	  var rv = {};
//	  for (var i = 0; i < myInputs.length; ++i)
//		rv[i] = myInputs[i];
//	console.log(rv);
	//$.post('save.php', rv);
//})
