const scriptURL = 'https://script.google.com/macros/s/AKfycbyB03r9jAAxqzJPzlOStMBaf7HjCpFwprnZByPZ1GNzQaHHl3wMCpbJPTlmI0btSIN9wA/exec'

const form = document.forms['my-form']
const toEmail = 'david.chesa.it@gmail.com';

form.addEventListener('submit', e => {

    // prevent the form from submitting
    const name = form.elements['name'].value
    const email = form.elements['email'].value
    const message_html = form.elements['message'].value
    const emailjs = require('emailjs-com');
    // send to toEmail the data to send

    if(name ==='' || email === '' || message_html === ''){
      document.getElementById('responseMessage').innerHTML = 'Every field need to be completed';
    }else{
      document.getElementById('responseMessage').innerHTML = '';
      function initEmailJs() {
          emailjs.init('CMevXQW5LnhTaXrOx');
      }
      function sendToEmail(event){
          event.preventDefault();

          let FormData ={
              from_name: name,
              reply_to: email,
              to_name: "David",
              message: message_html
          };

          emailjs.send('service_iuzw96o','template_eyi80oa',FormData)
          .then(() => {
              alert("Message successfully send!");
              console.log("SUCCES! ", response.status, response.text);
            },function(error){
              alert("FAILED... ", error.text);  
              console.log("ERROR! ", error.message);
            });
      }
      initEmailJs();
      sendToEmail();
      fetch(scriptURL, {
        method: 'POST',
        body: FromData
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('responseMessage').style.display = 'block';
        if (data.result === 'success') {
          document.getElementById('responseMessage').innerText = 'Form submitted successfully!';
          form.reset();
        } else {
          document.getElementById('responseMessage').innerText = 'Error: ' + data.error;
          form.reset();
        }
      })
      .catch(error => {
        document.getElementById('responseMessage').style.display = 'block';
        document.getElementById('responseMessage').innerText = 'Request failed: ' + error;
      });
    }
    
  });

  function sendToEmail() {
    let perm = {
      email: document.getElementById('email').value,
      name: document.getElementById('fname').value,
      message: document.getElementById('message').value,
      subject: document.getElementById('subject').value
    }
    emailjs.send('service_iuzw96o', 'template_c5h8248', perm).then(alert('Email sent'))
  }