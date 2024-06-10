const formSendEmail = document.getElementById('formSendEmail')
const submitFormContactForm = document.getElementById('submitFormContactForm')
submitFormContactForm.addEventListener('click',((e)=>{
    e.preventDefault()
    const formData = new FormData(formSendEmail);
    const formProps = Object.fromEntries(formData);
    var params = {
        from_name: formProps.name,
        object: formProps.subject,
        from_email: formProps.email,
        message: formProps.message
    }
    var serviceID = "service_whjk14x"
    var templateID = "template_0w4v1da"
    emailjs.send(serviceID,templateID,params)
    .then(res => {
        alert('Message Send Successfully')
        formSendEmail.submit()
    })
    .catch(err=>{
        alert('Message Not Send Successfully')
    })
}))