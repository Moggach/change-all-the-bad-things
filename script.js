/*checking that the user has selected at least one contact method*/
function validateCheckboxes() {
  const email = document.getElementById('contactChoice1');
  const phone = document.getElementById('contactChoice2');

  if (email.checked === false && phone.checked === false) {
    alert('Please select a contact method');
    return false;
  }
}

/*checking that the user has entered a valid email address*/
function validateEmailAdress() {
  const emailAddress = document.getElementById('email').value;

  if (!emailAddress.includes('@')) {
    alert('Please enter a valid email');
    return false;
  }
}

/*checking that the user has entered at least 11 digits*/
function validatePhoneNumber() {
  const phoneNumber = document.getElementById('phone').value;

  let onlyNumbers = phoneNumber.replace(/[^0-9]/g, '');
  if (onlyNumbers.length != 11) {
    alert('Please enter a valid phone number');
    return false;
  }
}

/*checking that the user has entered a value for date of birth*/
function validateDateofBirth() {
  const dateOfBirth = document.getElementById('dateofbirth').value;
  if (dateOfBirth == '') {
    alert('Please enter a date of birth');
    return false;
  }
}

/*checking which contact method user selected*/
function checkContactMethod() {
  const contact = document.getElementById('contactChoice1').checked;
  if (contact == true) {
    return 'Email';
  }
  return 'Phone';
}

/*generate user card using input data on submission of the form*/
function showInput() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const dob = document.getElementById('dateofbirth').value;
  const preference = checkContactMethod();

  const input = `
  <div class="contact-card">
  <img style="width:3.5rem"
  src="1F4CC.svg"
  alt=""
/>
  <p>Name: ${name}<p>
  <p>Date of birth: ${dob}</p>
  <p>Email: ${email}</p>
  <p>Phone number: ${phone}</p>
  <p>Preferred contact method: ${preference}</p>
  <p>Message: ${message}</p>
  </div>`;

  const card = document.getElementById('card');
  card.innerHTML = input;
}

/*function to clear out form fields - called within onSubmit function*/
function formReset() {
  document.getElementById('form').reset();
}

/*function run on submit that runs the above functions and prevents the page refreshing*/
function onSubmit(e) {
  e.preventDefault();

  if (
    validateCheckboxes() == false ||
    validateEmailAdress() == false ||
    validateDateofBirth() == false ||
    validatePhoneNumber() == false
  ) {
    return false;
  }
  showInput();
  formReset();
  alert('Thank you for your submission. We will be in touch shortly');
}

/*adding event listener to submit button*/
document.getElementById('submit').addEventListener('click', onSubmit);
