var $form = document.forms[0];

function submitForm(event) {
  event.preventDefault();
  var formObj = {};
  var username = $form.elements.name.value;
  var useremail = $form.elements.email.value;
  var message = $form.elements.message.value;
  formObj.username = username;
  formObj.email = useremail;
  formObj.message = message;
  console.log(formObj);
  $form.reset();
}

$form.addEventListener('submit', submitForm);
