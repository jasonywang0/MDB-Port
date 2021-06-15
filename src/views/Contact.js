import React from 'react';
import {
	MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBIcon
} from 'mdb-react-ui-kit';


function StatusMessage({status}) {
    let message = '';
    const style = {
        color: 'yellow'
    };

    if (status === 'SENDING') {
        message = 'Sending Message.'
    } else if (status === 'INCOMPLETE') {
        message = 'All fields are required.'
        style.color ='red'
    } else if (status === 'SENT') {
        message = 'Message Sent!'
        style.color = 'green';
    } else if (status === 'ERROR') {
        message = 'Something went wrong. Please try again later.'
    }
    
    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default function Contact() {

    const [ status, setStatus ] = React.useState(null);
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
  const changeValue = (e) => setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value}))

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formValue;
    if (!name || !email || !subject || !message) return setStatus('INCOMPLETE');
    setStatus("SENDING");

    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json(); // possible values are 'SENT' or 'ERROR
    if (result === 'SENT') setFormValue({name: '', email: '', subject: '', message: ''});
    setStatus(result);
  };


  return (
    <MDBContainer id='contact' fluid className='text-white pb-5' style={{backgroundColor: '#191919', scrollMarginTop: '3.5rem'}}>

        <MDBRow className='justify-content-center pt-3'>
            <MDBCol md={6} className='gx-5 mb-2 text-center'>
                <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                    CONTACT
                </MDBTypography>
            </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center align-items-center text-center'>
                <div className="d-flex text-center justify-content-center align-items-center">
                    <div className='d-flex text-center justify-content-center align-items-center' style={{backgroundColor: '#bc9864', borderRadius: '50%', height: '4rem', width: '4rem'}}>
                        <MDBIcon icon='envelope' far size='2x' color='black'/>
                    </div>
                </div>
                <div class="text-center py-1">
                    <h5>jasonywang0@gmail.com</h5>
                </div>

        </MDBRow>        

        <MDBRow className='justify-content-center'>
            
            <div class="col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                
                <div class="row p-0 m-0">
                    <div class='col-md-12'>
                        <StatusMessage status={status}/>
                    </div>
                </div>
                
                <form id="contactForm" name="contactForm" class="contactForm" novalidate="novalidate" onSubmit={handleSubmit}>
                    <div class="row p-0 m-0">
                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Name*" onChange={changeValue} required/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" onChange={changeValue} placeholder="Email*"/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" onChange={changeValue} placeholder="Subject*"/>
                            </div>
                        </div>

                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <textarea 
                                    name="message" 
                                    class="form-control error" 
                                    id="message" 
                                    cols="30" 
                                    rows="8" 
                                    placeholder="Message*" 
                                    aria-invalid="true" 
                                    onChange={changeValue}
                                ></textarea>
                                {/* <label id="message-error" class="error" for="message">Please enter a message</label> */}
                            </div>
                        </div>
                
                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <input id="submit-message" type="submit" value="Send Message" class="btn btn-primary"/>
                                <div class="submitting"></div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </MDBRow>

    </MDBContainer>
  );
}
