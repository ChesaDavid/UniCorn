// EmailJS Initialization
(function() {
    emailjs.init('CMevXQW5LnhTaXrOx'); // Initialize EmailJS
})();

// DOM Elements
const form = document.getElementById('contactForm'); // Ensure your form has an id "contactForm"
const responseMessage = document.getElementById('responseMessage');

// Form Reset Event Listener
window.addEventListener('reset', (e) => {
    form.reset();
    responseMessage.innerHTML = '';
    e.preventDefault();
});

// Form Submit Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Form Data
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    // Validate the Form Fields
    if (name === '' || email === '' || message === '') {
        responseMessage.innerHTML = 'Every field needs to be completed';
        responseMessage.style.display = 'block';
        return;
    }

    // EmailJS Send Email
    let formData = {
        from_name: name,
        reply_to: email,
        to_name: 'David',
        message: message
    };

    emailjs.send('service_iuzw96o', 'template_ptgh57t', formData)
        .then(() => {
            responseMessage.innerHTML = 'Message successfully sent!';
            responseMessage.style.display = 'block';
            form.reset();
        }, (error) => {
            responseMessage.innerHTML = 'Failed to send message: ' + error.text;
            responseMessage.style.display = 'block';
        });

    // You can handle other form actions here, e.g., sending to a database.
});

// Optional: Additional Email Function (if needed)
function sendToEmail() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const subject = document.getElementById('subject').value; // Ensure a subject field exists if using this

    let perm = {
        email: email,
        name: name,
        message: message,
        subject: subject
    };

    emailjs.send('service_iuzw96o', 'template_c5h8248', perm)
        .then(() => alert('Email sent successfully!'))
        .catch((error) => alert('Error sending email: ' + error.text));
}
