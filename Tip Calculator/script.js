// the function called when calculate button is clicked.

window.onload = () =>
{
 
 /* calling a function calculate tip
 which will calculate the tip for the bill*/

 document.querySelector('#calculate').onclick = calculateTip;

}

function calculateTip() {

 /* assigns values of ID:amount,person and servic to
 variables for further calculations*/

 let amount = document.querySelector('#amount').value;
 let persons = document.querySelector('#persons').value;
 let service = document.querySelector('#services').value;

 console.log(service);

 /* if statement will work when user presses 
   calculate without entering values */
 // so will display an alert box and return

 if(amount === '' && service === 'Select') {
  alert("Please enter valid values");
  return;
 }

 // now we are checking number of persons

 if(persons === '1')
 //if there is only one person then wee need not to display each
 document.querySelector('#each').getElementsByClassName.display = 'none';
 else 
 //if there are more than one person we will display each
 document.querySelector('#each').getElementsByClassName.display = 'block';

 /* calculating the tip by multiplying total-bill and type of services; then dividing it by number of persons */

 //fixing the total amount upto 2 digits of decimal 

 let total = (amount * service) / persons;
 total = total.toFixed(2);

 // finally dispalying the tip value

 document.querySelector('.tip').style.display = 'block';
 document.querySelector('#total').innerHTML = total;
}