import React from 'react';
import {
	MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBIcon
} from 'mdb-react-ui-kit';
import Fade from '../components/Fade';

function StatusMessage({status}) {
    let message = 'Something went wrong. Please try again later.';
    const style = { color: 'red', fontWeight: 500 };

     // possible values are 'SENT' or 'ERROR or '9000'
    if (status === 'INCOMPLETE') {
        message = 'All Fields Are Required.'
    } else if (status === 'SENDING') {
        message = 'Sending Message.'
        style.color = 'yellow';
    } else if (status === 'SENT') {
        message = 'Message Sent!'
        style.color = 'green';
    } else if (status === '9000') {
        message = 'Message Limit Exceeded!'
    }
    
    return <div style={style}>{message}</div>
}

export default function Contact() {

    const [ status, setStatus ] = React.useState(null);
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        yum: '',
    });
    
  const changeValue = (e) => setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value}))

  const handleSubmit = async (e) => {

    try {
        e.preventDefault();
        const { name, email, subject, message, yum } = formValue;
        if (yum) return; // honey
        if (!name || !email || !subject || !message) return setStatus('INCOMPLETE');
        
        const details = {
            name,
            email,
            subject,
            message,
            yum
        };

        setStatus("SENDING");
        const response = await fetch("https://jasonywang0-contact.herokuapp.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        const result = await response.json();
        if (result.status === 'SENT') setFormValue({name: '', email: '', subject: '', message: ''});
        setStatus(result.status);
    } catch(error) {
        setStatus('ERROR');
    }
  };


  return (
    
        <MDBContainer id='contact' fluid className='text-white py-5' style={{backgroundColor: '#191919'}}>

            <Fade>
                <MDBRow className='justify-content-center pt-4'>
                    <MDBCol md={6} className='gx-5 pb-2 text-center'>
                        <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom tracking-in-expand' style={{fontFamily: "'Cinzel', serif", letterSpacing: '0.5rem'}}>
                            CONTACT
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </Fade>

            <Fade>
                <MDBRow className='p-0 m-0 justify-content-center align-items-center text-center'>
                        <div className="d-flex text-center justify-content-center align-items-center">
                            <div className='d-flex text-center justify-content-center align-items-center' style={{backgroundColor: '#bc9864', borderRadius: '50%', height: '4rem', width: '4rem'}}>
                                <MDBIcon icon='envelope' far size='2x' color='black'/>
                            </div>
                        </div>
                        <div className="text-center py-1">
                            <h5>jasonywang0@gmail.com</h5>
                        </div>

                </MDBRow>        

                <MDBRow className='justify-content-center'>
                    
                    <div className="col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        
                        <div className="row p-0 m-0">
                            <div className='col-md-12'>
                                {status && <StatusMessage status={status}/>}
                            </div>
                        </div>
                        
                        <form id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
                            <div className="row p-0 m-0">
                            
                                <div className="col-md-12 my-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name*" value={formValue.name} onChange={changeValue}/>
                                    </div>
                                </div>

                                <div className="col-md-12 my-2">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" value={formValue.email} onChange={changeValue} placeholder="Email*"/>
                                    </div>
                                </div>

                                <div className="col-md-12 my-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" value={formValue.subject} onChange={changeValue} placeholder="Subject*"/>
                                    </div>
                                </div>

                                <div className="col-md-12 my-2">
                                    <div className="form-group">
                                        <textarea 
                                            name="message" 
                                            className="form-control error" 
                                            id="message"
                                            value={formValue.message} 
                                            cols="25" 
                                            rows="8" 
                                            placeholder="Message*" 
                                            aria-invalid="true" 
                                            onChange={changeValue}
                                        ></textarea>
                                        {/* <label id="message-error" className="error" for="message">Please enter a message</label> */}
                                    </div>
                                </div>

                                <input className="yum" autoComplete="off" type="text" name="yum" value={formValue.subject} onChange={changeValue} placeholder="Are you really human?"></input>
                        
                                <div className="col-md-12 my-2">
                                    <div className="form-group">
                                        <input id="submit-message" type="submit" value="Send Message" disabled={status === '9000'} className="btn btn-primary"/>
                                        <div className="submitting"></div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </MDBRow>

            </Fade>

        </MDBContainer>
  );
}
