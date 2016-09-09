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
  else if (t == 'dropdown') {
    document.getElementById('dropdown').style.display = 'block';
    myInputs[counter]['type']	=	'dropdown';
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
    case 'dropdown':
      myInputs[counter]['atts'] = [];
      myInputs[counter]['atts']['label']	=	document.getElementById('fieldDropDownLabel').value
      myInputs[counter]['atts']['one']	=	document.getElementById('fieldDropDownone').value
      myInputs[counter]['atts']['two']	=	document.getElementById('fieldDropDowntwo').value
      myInputs[counter]['atts']['three']	=	document.getElementById('fieldDropDownthree').value
      break;
  }
    var input = document.createElement('input');
    var ta  = document.createElement('textarea');
    var dd = document.createElement('select');
    switch(myInputs[counter]['type']){
      case 'text':
      input.setAttribute('id', myInputs[counter]['atts']['label'])
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
      case 'dropdown':
      var option1 = document.createElement('option');
      option1.text = myInputs[counter]['atts']['one'];
      dd.add(option1, dd.options[null]);
      var option2 = document.createElement('option');
      option2.text = myInputs[counter]['atts']['two'];
      dd.add(option2, dd.options[null]);
      var option3 = document.createElement('option');
      option3.text = myInputs[counter]['atts']['three'];
      dd.add(option3, dd.options[null]);
      counter++;
      document.getElementById(divName).appendChild(dd);
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
  document.getElementById('dropdown').style.display = 'none';
	document.getElementById('fieldTextLabel').value = '';
	document.getElementById('fieldTextMaxLength').value = '';
	document.getElementById('fieldPasswordLabel').value = '';
	document.getElementById('fieldTextAreaLabel').value = '';
	document.getElementById('fieldTextAreaMaxLength').value = '';
	document.getElementById('fieldTextAreaCols').value = '';
	document.getElementById('fieldTextAreaRows').value = '';
  document.getElementById('fieldDropDownLabel').value = '';
  document.getElementById('fieldDropDownone').value='';
  document.getElementById('fieldDropDowntwo').value='';
  document.getElementById('fieldDropDownthree').value='';
}

// Send the field data via POST to do something with...
//$('#saveForm').click(function () {
//	  var rv = {};
//	  for (var i = 0; i < myInputs.length; ++i)
//		rv[i] = myInputs[i];
//	console.log(rv);
	//$.post('save.php', rv);
//})
