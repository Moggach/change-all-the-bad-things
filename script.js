function validateCheckboxes() {
  const email = document.getElementById('contactChoice1');
  const phone = document.getElementById('contactChoice2');
  if (email.checked === false && phone.checked === false) {
    alert('Please select a contact method');
    return false;
  }
}

function showInput() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = `name ${name}, email ${email}`;
  const data = document.getElementById('data');
  data.innerHTML = message;
}

function formReset() {
  document.getElementById('form').reset();
}

function onSubmit(e) {
  e.preventDefault();
  if (validateCheckboxes() == false) {
    return false;
  }
  showInput();
  formReset();
  alert('Thank you for your submission. We will be in touch shortly');
}

document.getElementById('submit').addEventListener('click', onSubmit);
