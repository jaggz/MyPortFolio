
import { useState } from "react";
export default function ContactPage() {

  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
// input and textarea Onchange handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if(e.target.type==="textarea"){
      // Validate if the textarea is not empty
      if (!value.trim()) {
        setError('Message is required.');
      } else {
        setError('');
      }
      setTextValue(value);

    }else{
      setInputValue(value);
       // Validate if the input is not empty
      if (!value.trim()) {
        setError('User Name is required.');
      } else {
        setError('');
      }


    }

  };



// Validation logic for email format
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
// Email onchange handler
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!isEmailValid(value)) {
      setError('Invalid email format.');
    } else {
      setError('');
    }
  };
// submit handler 
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (!error && inputValue && textValue && email) {
      // Submit form
      setEmail('');
      setInputValue('');
      setTextValue('');
      alert('Form Submitted Successfully!!')
   
      
      
    }else{

      setError('One Or More Fields are required.');

    }
  };

  return (
    <div className="col col-lg-6 col-sm-12">
      <h2 className='fw-bold fs-5 text-dark'>Contact</h2>
      <form className="form-control shadow-lg bg-light" onSubmit={handleSubmit}>
        <div className="mb-6 m-5 ">
        <label for="name" class="form-label">Name:</label>
          <input className="form-control shadow-lg"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          </div>
          <div className="mb-6 m-5">
            <label for="email" class="form-label">Email address:</label>
            <input className="form-control shadow-lg"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6 m-5">
            <label for="message" class="form-label">Message:</label>
            <textarea
              type="textarea"
              className="form-control shadow-lg"
              value={textValue}
              onChange={handleInputChange}
            />
          </div>
          {error && <p className="text-danger m-5">{error}</p>}
          <div className="mb-6 m-5">
           <button className="btn btn-success shadow-lg" type="submit">Submit</button>
          </div>
      </form>
    </div>
  );

}
  