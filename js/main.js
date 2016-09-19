//Created by Matthew Morris

var f = document.createElement('form');
f.setAttribute('method', "post");
f.setAttribute('id', "myForm");
document.getElementById('dynamicInput').appendChild(f);
var myInputs = new Array();
var counter = 0;

//show the select box
function showDiv() {
  document.getElementById('form').style.display = 'block';
  //initite the myInputs array
  myInputs[counter] = [];
};

//Display the form selection from the select box
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
  else if (t == 'radio') {
    document.getElementById('radio').style.display = 'block';
    myInputs[counter]['type']	=	'radio';
  }
  else if (t == 'selectbox') {
    document.getElementById('selectbox').style.display = 'block';
    myInputs[counter]['type']	=	'selectbox';
  }
};

function addInput(divName) {
  //assign values to the myInputs Array
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
      myInputs[counter]['atts']['four']	=	document.getElementById('fieldDropDownfour').value
      myInputs[counter]['atts']['five']	=	document.getElementById('fieldDropDownfive').value
      myInputs[counter]['atts']['six']	=	document.getElementById('fieldDropDownsix').value
      break;
      case 'radio':
      myInputs[counter]['atts'] = [];
      myInputs[counter]['atts']['label']	=	document.getElementById('fieldRadioLabel').value
      myInputs[counter]['atts']['one']	=	document.getElementById('fieldRadioone').value
      break;
      case 'selectbox':
      break;
  }

    var input = document.createElement('input');
    var ta  = document.createElement('textarea');
    var dd = document.createElement('select');
    //var label = myInputs[counter]['atts']['label'];
    switch(myInputs[counter]['type']){
      //add attributes to the text field
      case 'text':
      var label = document.createElement('label');
      label.textContent = myInputs[counter]['atts']['label'];
      label.setAttribute('for', myInputs[counter]['atts']['label']);
      f.appendChild(label);
      input.setAttribute('id',myInputs[counter]['atts']['label'])
      input.setAttribute('type', myInputs[counter]['type']);
      input.setAttribute('name', myInputs[counter]['atts']['label']);
      input.setAttribute('maxlength', myInputs[counter]['atts']['maxlen']);
      input.setAttribute('placeholder', myInputs[counter]['atts']['label']);
      counter++;
      f.appendChild(input);
      //input.appendChild(linebreak);
        break;
        //add attributes to the password field
      case 'password':
      var label = document.createElement('label');
      label.textContent = myInputs[counter]['atts']['label'];
      label.setAttribute('for', myInputs[counter]['atts']['label']);
      f.appendChild(label);
			input.setAttribute('type', myInputs[counter]['type']);
			input.setAttribute('name', myInputs[counter]['atts']['label']);
			input.setAttribute('placeholder', myInputs[counter]['atts']['label']);
			counter++;
      f.appendChild(input);
			   break;
         //add the attributes to the textarea field
  		case 'textarea':
  		ta.setAttribute('type', myInputs[counter]['type']);
      ta.setAttribute('maxlength', myInputs[counter]['atts']['maxlen']);
      ta.setAttribute('cols', myInputs[counter]['atts']['cols']);
      ta.setAttribute('rows', myInputs[counter]['atts']['rows']);
			counter++;
      f.appendChild(ta);
  			break;
        //add attributes to the dropdown field
      case 'dropdown':
      dd.setAttribute('name', myInputs[counter]['atts']['label'])
      //default option
      var option = document.createElement('option');
      option.text = 'Please Select';
      option.value = '';
      dd.add(option, dd.options[null]);
      //option 1
      var option1 = document.createElement('option');
        option1.text = myInputs[counter]['atts']['one'];
        option1.value = myInputs[counter]['atts']['one'];
        dd.add(option1, dd.options[null]);
      //option two
      var option2 = document.createElement('option');
      if (document.getElementById('fieldDropDowntwo').value.length == 0) {
        option2.value = '';
        option2.text = '';
      } else {
        option2.text = myInputs[counter]['atts']['two'];
        option2.value = myInputs[counter]['atts']['two'];
        dd.add(option2, dd.options[null]);
      }
      //option three
      var option3 = document.createElement('option');
      if (document.getElementById('fieldDropDownthree').value.length == 0) {
        option3.value = '';
      } else {
        option3.text = myInputs[counter]['atts']['three'];
        option3.value = myInputs[counter]['atts']['three'];
        dd.add(option3, dd.options[null]);
      }
      //option four
      var option4 = document.createElement('option');
      if (document.getElementById('fieldDropDownfour').value.length == 0) {
        option4.value = '';
      } else {
        option4.text = myInputs[counter]['atts']['four'];
        option4.value = myInputs[counter]['atts']['four'];
        dd.add(option4, dd.options[null]);
      }
      //option five
      var option5 = document.createElement('option');
      if (document.getElementById('fieldDropDownfive').value.length == 0) {
        option5.value = '';
      } else {
        option5.text = myInputs[counter]['atts']['five'];
        option5.value = myInputs[counter]['atts']['five'];
        dd.add(option5, dd.options[null]);
      }

      //option six
      var option6 = document.createElement('option');
      if (document.getElementById('fieldDropDownsix').value.length == 0) {
        option6.value = '';
      } else {
        option6.text = myInputs[counter]['atts']['six'];
        option6.value = myInputs[counter]['atts']['six'];
        dd.add(option6, dd.options[null]);
      }
      counter++;
      f.appendChild(dd);
        break;
        //add attributes to the radio field
        case 'radio':
        var label = document.createElement('label');
        label.textContent = myInputs[counter]['atts']['label'];
        label.setAttribute('for', myInputs[counter]['atts']['label']);
        f.appendChild(label);
        input.setAttribute('type', myInputs[counter]['type']);
        input.setAttribute('name', myInputs[counter]['atts']['label'])
        input.setAttribute('value', myInputs[counter]['atts']['one'])
        counter++;
        f.appendChild(input);
        break;
        //add attributes to the selectbox field
        case 'selectbox':
        counter++;
        break;
    }
};

//reset form select dropdown
function frmreset() {
  var div = document.getElementById('form');
  div.style.display = 'none';
  document.getElementById('type').value = '';
	document.getElementById('text').style.display = 'none';
	document.getElementById('password').style.display = 'none';
	document.getElementById('textarea').style.display = 'none';
  document.getElementById('dropdown').style.display = 'none';
  document.getElementById('radio').style.display = 'none';
  document.getElementById('selectbox').style.display = 'none';
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
  document.getElementById('fieldDropDownfour').value='';
  document.getElementById('fieldDropDownfive').value='';
  document.getElementById('fieldDropDownsix').value='';
  document.getElementById('fieldRadioLabel').value='';
  document.getElementById('fieldRadioone').value='';
};
