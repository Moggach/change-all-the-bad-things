function valCheckBoxes() {
  const email = document.getElementById('contactChoice1');
  const phone = document.getElementById('contactChoice2');
  if (email.checked === false && phone.checked === false) {
    alert('please select a contact method');
    return false;
  }
}
