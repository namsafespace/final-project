// Place this script just before the closing </body> tag or in a separate JS file
document.addEventListener('DOMContentLoaded',function(){
    const form =document.querySelector('.contact-form form');
    const submitButton=form.querySelector('button[type="submit"]');

    form.addEventListener('submit',function*(e) {
        e.preventDefault();
        Feedback.textContent='';
        Feedback.style.color='#e53935';

        //get form values
        const name =form.name.value.trim();
        const email =form.email.value.trim();
        const message =form.message.value.trim();

        //Basic validation
        if(!name || !email || !message){
            Feedback.textContent = 'Please fill in all fields.';
            return;
        }

        //Email format validation
        if (!emailpattern.test(email)) {
            feedbck.textcontent = 'Please enter a valid email address.';
            return;
        }

        //Simulate successful submission
        feedback.style.color= '#388e3c';
        feedback.textContent='Thank you! Your message has been sent.';

        //Optionally, clear the form
        form.reset();
    });
    });